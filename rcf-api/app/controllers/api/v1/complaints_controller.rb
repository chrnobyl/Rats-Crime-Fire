class Api::V1::ComplaintsController < ApplicationController
  def index
    complaints = Complaint.order(:time_of_complaint)
    render json: complaints.to_json
  end

  def create
  end

end
