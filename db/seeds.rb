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
@jovi = User.create!(username: "jovi", email: "jovonnec@gmail.com", img_url:"picture", host:false, password:"123456")

puts "#{User.count} users created"


@home = Home.create!(
  user: @host,
  title: "6 Bedroom Home near Lakehouse",
  img_url:"https://images.unsplash.com/photo-1603622476630-90b1707bedfb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80",
  description: "From the outside this house looks magnificent. It has been built with white bricks and has oak wooden decorations. Tall, squared windows brighten up the house and have been added to the house in a mostly asymmetric way.

  The house is equipped with an old-fashioned kitchen and two modern bathrooms, it also has a large living room, three bedrooms, a snug dining room and a modest basement.
  
  The building is square shaped. The house is half surrounded by a covered patio.
  The second floor is the same size as the first, which has been built exactly on top of the floor below it. This floor follows the same style as the floor below.
  
  The roof is flat and is covered with overlapping roof tiles. One large chimney pokes out the center of the roof. Many smaller windows let in plenty of light to the rooms below the roof.
  The house itself is surrounded by a modest garden, with mostly grass, a few flower patches and a children's playground.",
  rate: 250,
  num_beds: 5,
  num_baths: 6,
  avg_rating: 3

)
@home = Home.create!(
  user: @host,
  title: "Family Home",
  img_url:"https://images.unsplash.com/photo-1590725400160-32050bff94e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  description: "From the outside this house looks impressive. It has been built with sandstone and has brown stone decorations. Small, triangular windows add to the overall style of the house and have been added to the house in a mostly asymmetric way.

  The house is equipped with a modern kitchen and three bathrooms, it also has a small living room, three bedrooms, a spacious dining room and a roomy garage.
  
  The building is square shaped. The house is fully surrounded by stylish gardens.
  The second floor is smaller than the first, which allowed for a roof garden on one side of the house. This floor has a very different style than the floor below.
  
  The roof is high, triangular and layered and is covered with grey ceramic tiles. Two large chimneys sit at the side of the house. Many smaller windows let in plenty of light to the rooms below the roof.
  The house itself is surrounded by a modest garden, with mostly grass, a few flower patches and a children's playground.",
  rate: 250,
  num_beds: 5,
  num_baths: 6,
  avg_rating: 3
)
@home = Home.create!(
  title: "Cozy Cabin in the Woods",
  user: @host,
  img_url:"https://images.unsplash.com/photo-1604210565264-8917562a63d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  description: "From the outside this house looks nice and traditional. It has been built with poplar wood and has fir wooden decorations. Tall, half rounded windows let in plenty of light and have been added to the house in a fairly symmetrical pattern.

  The house is equipped with a small kitchen and one average bathroom, it also has a generous living room, three bedrooms, a cozy dining room, a study and a cozy storage room.
  
  The building is shaped like a T. The two extensions extend into glass overhanging panels reaching until the end of that side of the house.
  The second floor is the same size as the first, which has been built exactly on top of the floor below it. This floor has a slightly different style than the floor below.
  
  The roof is high, triangular, but one side is longer than the other and is covered with red ceramic tiles. One large chimney sits at the side of the house. Several large windows let in plenty of light to the rooms below the roof.
  The house itself is surrounded by paved ground, with a pool at the backside of the house.",
  rate: 350,
  num_beds: 5,
  num_baths: 6,
  avg_rating: 3
)

@home = Home.create!(
  title: "Romantic Cabin Getaway",
  user: @host,
  img_url:"https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
  description: "From the outside this house looks very elegant. It has been built with grey stones and has red pine wooden decorations. Large, triangular windows brighten up the house and have been added to the house in a fairly asymmetrical pattern.

  The house is equipped with a large kitchen and two modern bathrooms, it also has a spacious living room, four bedrooms, a small dining area, a game room and a cozy basement.
  
  The building is fairly rounded in shape. The house is partially surrounded by glass overhanging panels on two sides.
  The second floor is the same size as the first, but part of it hangs over the edge of the floor below, creating an overhang on one side and a balcony on the other. This floor has roughly the same style as the floor below.
  
  The roof is low, triangular and layered and is covered with flat roof tiles. Two small chimneys poke out the center of the roof. Several long, thin windows let in plenty of light to the rooms below the roof.
  The house itself is surrounded by a modest garden, covered mostly in grass, a few flower patches and with a small pond.",
  rate: 440,
  num_beds: 5,
  num_baths: 6,
  avg_rating: 3
)
@home = Home.create!(
  title: "Spacious Family Cabin",
  user: @host,
  img_url:"https://images.unsplash.com/photo-1601919051950-bb9f3ffb3fee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  description: "From the outside this house looks warm and cozy. It has been built with spruce wood and has granite decorations. Tall, rectangular windows allow enough light to enter the home and have been added to the house in a very asymmetric way.
–≠≠≠≠≠≠≠≠–
  The house is equipped with an average kitchen and one large bathroom, it also has a generous living room, two bedrooms, a small dining area, a bar and a modest garage.
  
  The building is square shaped. The house is fully surrounded by stylish gardens.
  The second floor is bigger than the first, which creates a stylish overhang on two sides of the house. This floor has a very different style than the floor below.
  
  The roof is low, triangular and layered and is covered with grey wood shingles. Two large chimneys poke out the center of the roof. Rows of small windows let in plenty of light to the rooms below the roof.
  The house itself is surrounded by paved ground, with a pool at the backside of the house.",
  rate: 400,
  num_beds: 5,
  num_baths: 6,
  avg_rating: 3

)

@home = Home.create!(
  user: @host,
  title: "Luxury Cabin in the Mountains",
  img_url:"https://images.unsplash.com/photo-1590725121839-892b458a74fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
  description: "From the outside this house looks magnificent. It has been built with white bricks and has oak wooden decorations. Tall, squared windows brighten up the house and have been added to the house in a mostly asymmetric way.

  The house is equipped with an old-fashioned kitchen and two modern bathrooms, it also has a large living room, three bedrooms, a snug dining room and a modest basement.
  
  The building is square shaped. The house is half surrounded by a covered patio.
  The second floor is the same size as the first, which has been built exactly on top of the floor below it. This floor follows the same style as the floor below.
  
  The roof is flat and is covered with overlapping roof tiles. One large chimney pokes out the center of the roof. Many smaller windows let in plenty of light to the rooms below the roof.
  The house itself is surrounded by a modest garden, with mostly grass, a few flower patches and a children's playground.",
  rate: 250,
  num_beds: 5,
  num_baths: 6,
  avg_rating: 3

)

@home = Home.create!(
  user: @host,
  title: "Modern 7 bedroom Cabin perfect for Families",
  img_url:"https://images.unsplash.com/photo-1550355191-aa8a80b41353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  description: "From the outside this house looks luxurious. It has been built with white bricks and has cypress wooden decorations. Tall, wide windows brighten up the house and have been added to the house in a mostly symmetric way.

  The house is equipped with an average kitchen and one large bathroom, it also has a large living room, five bedrooms, a grand dining room, a sun room and a spacious storage room.
  
  The building is shaped like a T. The two extensions extend into cloth sunscreens reaching until the end of that side of the house.
  The second floor is the same size as the first, which has been built exactly on top of the floor below it. This floor has a very different style than the floor below.
  
  The roof is low and rounded and is covered with seagrass. Two large chimneys sit at the side of the house. There are no windows on the roof.
  The house itself is surrounded by a modest garden, covered mostly in grass, a few flower patches and with a small pond.",
  rate: 550,
  num_beds: 7,
  num_baths: 6,
  avg_rating: 3

)

@home = Home.create!(
  user: @host,
  title: "Unique Modern Cabin with hot tub",
  img_url:"https://images.unsplash.com/photo-1610928290695-64e621f6a2f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  description: "From the outside this house looks lavish. It has been built with bricks covered in render and has blue stone decorations. Small, triangular windows add to the overall style of the house and have been added to the house in a fairly asymmetrical pattern.

  The house is equipped with an old-fashioned kitchen and one large bathroom, it also has a snug living room, three bedrooms, a roomy dining room, a study and a modest storage room.
  
  The building is shaped like a squared S. The two extensions extend into stylish gardens to each side.
  The second floor is the same size as the first, which has been built exactly on top of the floor below it. This floor has a very different style than the floor below.
  
  The roof is low and pyramid shaped and is covered with black ceramic tiles. Two small chimneys poke out the center of the roof. Many smaller windows let in plenty of light to the rooms below the roof.
  The house itself is surrounded by a well kept garden. Grass, flower patches and trees have been placed in a stylish way.",
  rate: 300,
  num_beds: 4,
  num_baths: 6,
  avg_rating: 3

)
puts "#{Home.count} homes created"



@booking = Booking.create!(user:@guest, home:@home, start_date: DateTime.parse("05/01/2021 09:00"),end_date: DateTime.parse("05/05/2021 18:00"), price:350)
@booking = Booking.create!(user:@jovi, home:@home, start_date: DateTime.parse("05/01/2021 09:00"),end_date: DateTime.parse("05/05/2021 18:00"), price:350)

puts "#{Booking.count} bookings created"



