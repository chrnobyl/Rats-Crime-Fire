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
    @complaints = Complaint.where("complaint_type ILIKE ?", params[:complaint_type]).order(:time_of_complaint)[0...params[:results].to_i]
    render json: @complaints
  end
end
