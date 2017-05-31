class BoroughSerializer < ActiveModel::Serializer
  attributes :id, :name, :total_complaints
  has_many :zip_codes, serializer: BoroughZipCodeSerializer
  # has_many :complaints

  def total_complaints
    object.complaints.count
  end

end
