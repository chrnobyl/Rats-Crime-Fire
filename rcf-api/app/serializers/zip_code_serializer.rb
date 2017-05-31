class ZipCodeSerializer < ActiveModel::Serializer
  attributes :id, :number, :borough
  has_many :complaints, serializer: ZipCodeComplaintSerializer
  belongs_to :borough

  def borough
    object.borough.name
  end
end
