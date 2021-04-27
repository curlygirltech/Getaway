# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Booking.destroy_all
Home.destroy_all
User.destroy_all

@user = User.create!(username: "Dan", email: "Dantheman@gmail.com", img_url:"picture", host:true, password_digest:"123456")
@guest = User.create!(username: "Dan", email: "Dantheman@gmail.com", img_url:"picture", host:false, password_digest:"123456")
puts "#{User.count} users created"


@home = Home.create!(
  user: @user,
  img_url:"picture",
  description: "best house ever!",
  rate: 250,
  num_beds: 5,
  num_baths: 6,
  avg_rating: 3

)
puts "#{Home.count} homes created"



@booking = Booking.create!(user:@guest, home:@home, start_date: DateTime.parse("05/01/2021 09:00"),end_date: DateTime.parse("05/05/2021 18:00"), price:350)
puts "#{Booking.count} bookings created"



