class User < ApplicationRecord
has_many :homes
has_many :bookings
has_secure_password

validates :email, confirmation: true 
validates :username, presence: true, uniqueness: true
validates :email, presence: true, uniqueness: true
validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
validates :password, length: { minimum: 6 }
end
