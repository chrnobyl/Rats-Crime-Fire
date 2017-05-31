class BoroughShowSerializer < BoroughSerializer
  has_many :zip_codes, serializer: BoroughZipCodeSerializer
end
