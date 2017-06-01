require 'json'
class Api::V1::ComplaintsController < ApplicationController
  def index
    @complaints = Complaint.order(:time_of_complaint)[0...100]
    render json: @complaints
  end

  def create
  end

  def show
    @complaint = Complaint.find_by(id: params[:id])
    render json: @complaint
  end

  def search
    if !params[:results]
      params[:results] = 100
    end
    @complaints = select_complaints_from_params.order(
      :time_of_complaint
    )[0...params[:results].to_i]
    render json: @complaints
  end

  def grouped
    @group_complaints = Complaint.group(:complaint_type).order('count_id desc').count('id')
     ans = @group_complaints.map do |complaint|
       str = {label: complaint[0], value: complaint[1]}
    end
    render json: ans.to_json
  end

  private

  def complaint_params
    params.permit(
        :complaint_type,
        :description,
        :zip_code
    )
  end

  def select_complaints_from_params
    complaints = Complaint.all
    # kludge, look into has_scope
    complaint_params.each do |param|
      if param == "zip_code"
        complaints = complaints.where(zip_code_id: ZipCode.find_by(number: params[:zip_code]).id)
      else
        complaints = complaints.where("#{param.to_s} ILIKE ?", params[param])
      end
    end
    complaints
  end
end
