class ZipCode < ApplicationRecord
  has_many :complaints
  belongs_to :borough
end
