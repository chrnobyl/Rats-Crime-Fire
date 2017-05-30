class CreateZipCodes < ActiveRecord::Migration[5.1]
  def change
    create_table :zip_codes do |t|
      t.integer :number
      t.belongs_to :borough, foreign_key: true

      t.timestamps
    end
  end
end
