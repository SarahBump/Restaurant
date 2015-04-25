class Food < ActiveRecord::Base
  has_many(:orders)
  has_many(:parties, through: :orders)

  def price
    @price
  end

  def name
    @name
  end
end
