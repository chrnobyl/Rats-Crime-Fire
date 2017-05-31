class BoroughSerializer < ActiveModel::Serializer
  attributes :id, :name, :total_complaints

  def total_complaints
    object.complaints.count
  end

  def name
    object.name.titlecase
  end

end
