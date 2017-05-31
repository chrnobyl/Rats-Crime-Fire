# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

filename = "db/rats.csv"

read_file = File.read(filename)

def format_to_datetime(time)
  time.insert(5, "/"+time[0..1])[3..-1].to_datetime
end

File.foreach(filename) do |line|
  # json_line = JSON.parse(line)
  csv_line = CSV.parse(line)
  if csv_line[0][1][6..9] == "2017" && !!csv_line[0][8] && csv_line[0][8].length == 5
    borough = Borough.find_or_create_by(name: csv_line[0][24])
    zip_code = ZipCode.find_or_create_by(number: csv_line[0][8], borough_id: borough.id)
    Complaint.create(
      complaint_type: csv_line[0][5],
      time_of_complaint: format_to_datetime(csv_line[0][1]),
      latitude: csv_line[0][50],
      longitude: csv_line[0][51],
      zip_code_id: zip_code.id
    )

  end
end
