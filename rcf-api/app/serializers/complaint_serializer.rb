class ComplaintSerializer < ActiveModel::Serializer
  attributes :id, :complaint_type, :description, :latitude, :longitude, :borough
  attribute :time_of_complaint, key: :date
  belongs_to :zip_code

  def borough
    object.zip_code.borough.name
  end

  def zip_code
    object.zip_code.number
  end

  def time_of_complaint
    object.time_of_complaint.strftime("%A, %B %d, %Y")
  end

end
