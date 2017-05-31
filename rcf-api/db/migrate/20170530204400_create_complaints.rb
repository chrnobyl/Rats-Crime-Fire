class CreateComplaints < ActiveRecord::Migration[5.1]
  def change
    create_table :complaints do |t|
      t.string :complaint_type
      t.string :description
      t.datetime :time_of_complaint
      t.float :latitude
      t.float :longitude
      t.belongs_to :zip_code, foreign_key: true

      t.timestamps
    end
  end
end
