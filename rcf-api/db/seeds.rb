# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

filename = "db/2017complaints.csv"

read_file = File.read(filename)

def format_to_datetime(time)
  time.insert(5, "/"+time[0..1])[3..-1].to_datetime
end

File.foreach(filename) do |line|
  # json_line = JSON.parse(line)
  csv_line = CSV.parse(line)
  if !!csv_line[0][4] && csv_line[0][4].length == 5
    borough = Borough.find_or_create_by(name: csv_line[0][5])
    zip_code = ZipCode.find_or_create_by(number: csv_line[0][4], borough_id: borough.id)
    Complaint.create(
      complaint_type: csv_line[0][2],
      description: csv_line[0][3],
      time_of_complaint: format_to_datetime(csv_line[0][0]),
      latitude: csv_line[0][6],
      longitude: csv_line[0][7],
      zip_code_id: zip_code.id
    )

    # 02/23/2017 02:22:34 PM,Department of Health and Mental Hygiene,Food Establishment,Kitchen/Food Prep Area,11366,QUEENS,40.72831718797036,-73.78392480456014

  end
end
