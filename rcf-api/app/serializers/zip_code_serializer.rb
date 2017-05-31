class ZipCodeSerializer < BoroughZipCodeSerializer
  belongs_to :borough

  def borough
    object.borough.name.titlecase
  end
end
