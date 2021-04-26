class User < ApplicationRecord
has_many :homes
has_many :bookings
end
