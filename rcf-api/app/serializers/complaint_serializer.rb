
class ComplaintSerializer < ZipCodeComplaintSerializer
  attributes :borough
  belongs_to :zip_code

  def zip_code
    object.zip_code.number
  end

  def borough
    object.zip_code.borough.name.titlecase
  end
end
