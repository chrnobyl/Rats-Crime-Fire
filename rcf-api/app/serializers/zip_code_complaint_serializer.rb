class ZipCodeComplaintSerializer < ActiveModel::Serializer
  attributes :id, :complaint_type, :latitude, :longitude
  attribute :time_of_complaint, key: :date

  def time_of_complaint
    # byebug
    # ComplaintSerializer.time_of_complaint
    object.time_of_complaint.strftime("%A, %B %d, %Y")
  end
end
