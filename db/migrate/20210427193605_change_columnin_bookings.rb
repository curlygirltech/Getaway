class ChangeColumninBookings < ActiveRecord::Migration[6.1]
  def change
    change_column :bookings, :price, :float
    
  end
end
