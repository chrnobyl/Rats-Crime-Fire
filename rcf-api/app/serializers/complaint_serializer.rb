class ComplaintSerializer < ZipCodeComplaintSerializer
  attributes :borough

  def borough
    object.zip_code.borough.name.titlecase
  end
end
