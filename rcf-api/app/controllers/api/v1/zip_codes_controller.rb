class Api::V1::ZipCodesController < ApplicationController
  def index
    @zip_codes = ZipCode.order(:number)
    render json: @zip_codes
  end

  def show
    @zip_code = ZipCode.find_by(number: params[:number])
    render json: @zip_code, serializer: ZipCodeShowSerializer
  end

end
