class ZipCodeShowSerializer < ZipCodeSerializer
  has_many :complaints, serializer: ZipCodeComplaintSerializer
end
