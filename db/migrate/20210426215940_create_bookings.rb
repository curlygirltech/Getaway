class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.references :user, null: true, foreign_key: true
      t.references :home, null: true, foreign_key: true
      t.date :start_date
      t.date :end_date
      t.int :price

      t.timestamps
    end
  end
end
