class Api::V1::BoroughsController < ApplicationController
  def index
    @boroughs = Borough.order(:name)
    render json: @boroughs
  end

end
