class CreateComplaints < ActiveRecord::Migration[5.1]
  def change
    create_table :complaints do |t|
      t.string :complaint_type
      t.datetime :time_of_complaint
      t.string :borough
      t.integer :zip_code
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
