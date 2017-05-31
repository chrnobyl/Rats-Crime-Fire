class ZipCodeComplaintSerializer < ActiveModel::Serializer
  attributes :id, :complaint_type, :latitude, :longitude
  attribute :time_of_complaint, key: :date
  belongs_to :zip_code

  def zip_code
    object.zip_code.number
  end

  def time_of_complaint
    object.time_of_complaint.strftime("%A, %B %d, %Y")
  end
end
