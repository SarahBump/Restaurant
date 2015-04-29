var app = app || {};

app.OrderCollection = Backbone.Collection.extend({
  url: '/api/orders',
  model: app.OrderModel
});
