var app = {};

app.FoodModel = Backbone.Model.extend();

app.OrderModel = Backbone.Model.extend();

app.PartyModel = Backbone.Model.extend();


app.FoodCollection = Backbone.Collection.extend({
  url: '/api/foods',
  model: app.FoodModel
});

app.OrderCollection = Backbone.Collection.extend({
  url: '/api/orders',
  model: app.OrderModel
});

app.PartyCollection = Backbone.Collection.extend({
  url: '/api/parties',
  model: app.PartyModel
});

$(document).ready(function(){
  app.foodList = new FoodCollection();
  app.orderList = new OrderCollection();
  app.partyList = new PartyCollection();
  app.foodList.fetch();
  app.orderList.fetch();
  app.partyList.fetch();
});
