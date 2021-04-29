class CreateHomes < ActiveRecord::Migration[6.1]
  def change
    create_table :homes do |t|
      t.references :user, null: false, foreign_key: true
      t.string :img_url
      t.string :description
      t.integer :rate
      t.integer :num_beds
      t.integer :num_baths
      t.integer :avg_rating

      t.timestamps
    end
  end
end
