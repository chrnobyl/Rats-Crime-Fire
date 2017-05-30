class Borough < ApplicationRecord
  has_many :zip_codes
  has_many :complaints, through: :zip_codes
end
