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
end
