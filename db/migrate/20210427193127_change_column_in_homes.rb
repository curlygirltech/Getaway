class ChangeColumnInHomes < ActiveRecord::Migration[6.1]
  def change
    change_column :homes, :avg_rating, :float

  end
end
