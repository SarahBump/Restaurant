class Order < ActiveRecord::Base
  belongs_to(:party)
  belongs_to(:food)

  def party_id
    @party_id
  end

  def total
    @total
  end

  def paid
    @paid
  end
end
