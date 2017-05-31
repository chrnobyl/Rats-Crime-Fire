class BoroughZipCodeSerializer < ActiveModel::Serializer
  attributes :id, :number, :number_of_complaints

  def number_of_complaints
    object.complaints.count
  end

end
