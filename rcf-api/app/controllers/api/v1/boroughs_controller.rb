class Api::V1::BoroughsController < ApplicationController
  def index
    @boroughs = Borough.order(:name)
    render json: @boroughs
  end

  def show
    @borough = Borough.find_by("name ILIKE ?", "%#{params[:name]}%")
    render json: @borough, serializer: BoroughShowSerializer
  end

end
