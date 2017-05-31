
class ComplaintSerializer < ActiveModel::Serializer
  attributes :id, :complaint_type, :description, :latitude, :longitude, :borough
  attribute :time_of_complaint, key: :date
  belongs_to :zip_code

  def borough
    object.zip_code.borough.name.titlecase
  end
end
