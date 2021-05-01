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

@host = User.create!(username: "host", email: "Dantheman@gmail.com", img_url:"picture", host:true, password:"123456")
@guest = User.create!(username: "guest", email: "Dantheman@gmail.com", img_url:"picture", host:false, password:"123456")
puts "#{User.count} users created"


@home = Home.create!(
  user: @host,
  title: "4 bedroom home",
  img_url:"https://images.unsplash.com/photo-1603622476630-90b1707bedfb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80",
  description: "best house ever!",
  rate: 250,
  num_beds: 5,
  num_baths: 6,
  avg_rating: 3

)
@home = Home.create!(
  user: @host,
  title: "4 bedroom home",
  img_url:"https://images.unsplash.com/photo-1590725400160-32050bff94e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  description: "best house ever!",
  rate: 250,
  num_beds: 5,
  num_baths: 6,
  avg_rating: 3
)
@home = Home.create!(
  title: "Cozy Cabin in the Woods"
  user: @host,
  img_url:"https://images.unsplash.com/photo-1604210565264-8917562a63d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  description: "best house ever!",
  rate: 250,
  num_beds: 5,
  num_baths: 6,
  avg_rating: 3
)

@home = Home.create!(
  title: "Romantic Cabin Getaway"
  user: @host,
  img_url:"https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
  description: "best house ever!",
  rate: 250,
  num_beds: 5,
  num_baths: 6,
  avg_rating: 3
)
@home = Home.create!(
  title: "Spacious Family Cabin"
  user: @host,
  img_url:"https://images.unsplash.com/photo-1601919051950-bb9f3ffb3fee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  description: "best house ever!",
  rate: 250,
  num_beds: 5,
  num_baths: 6,
  avg_rating: 3

)
puts "#{Home.count} homes created"



@booking = Booking.create!(user:@guest, home:@home, start_date: DateTime.parse("05/01/2021 09:00"),end_date: DateTime.parse("05/05/2021 18:00"), price:350)
puts "#{Booking.count} bookings created"



