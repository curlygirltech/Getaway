class CreateHomes < ActiveRecord::Migration[6.1]
  def change
    create_table :homes do |t|
      t.references :user, null: true, foreign_key: true
      t.string :img_url
      t.string :description
      t.int :rate
      t.int :num_beds
      t.int :num_baths
      t.int :avg_rating

      t.timestamps
    end
  end
end
