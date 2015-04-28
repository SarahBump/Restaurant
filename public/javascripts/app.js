
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



// FoodView
app.FoodView = Backbone.View.extend({
  tagName: "h2",
  className: "food",
  template: _.template("<%= name %>:<span> $<%= cost %></span>"),
  initialize: function() {
    this.render();
  },
  render: function() {
    var data = this.model.attributes;
    var renderedTemplate = this.template(data);
    this.$el.html(renderedTemplate);
    // place me later!
    console.log(this.$el.html());
    $('body').append(this.$el);
  }
});

// FoodListView

app.FoodListView = Backbone.View.extend({
  tagName: "div",

  // template: _.template('<h2><%=food %></h2>')
  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },
  render: function(){
    var numOfFoods = this.collection.models.length;
    // var data = this.model.attributes;

    for (var i = 0; i < numOfFoods; i++) {
      var model =  this.collection.models[i];
      var newView = new app.FoodView({ model: model });
      newView.render();
      this.$el.append( newView.$el );
    };
    // this.$el.html( this. template (data) );
  }
});

app.OrderView = Backbone.View.extend({
  tagName: "h2",
  className: "orders",
  template: _.template("<%= party_id %>:<span> $<%= food_id %></span>"),
  initialize: function() {
    this.render();
  },
  render: function() {
    var data = this.model.attributes;
    var renderedTemplate = this.template(data);
    this.$el.html(renderedTemplate);
    // place me later!
    console.log(this.$el.html());
    $('body').append(this.$el);
  }

});
app.OrderListView = Backbone.View.extend({
  tagName: "div",

  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },
  render: function(){
    var numOfOrders = this.collection.models.length;
    // var data = this.model.attributes;
//
    for (var i = 0; i < numOfOrders; i++) {
      var model =  this.collection.models[i];
      var newView = new app.OrderView({ model: model });
      newView.render();
      this.$el.append( newView.$el );
    };
  }
});
app.PartyView = Backbone.View.extend({
  tagName: "h2",
  className: "parties",
  template: _.template("<%= name %>:<span> $<%= count %></span>"),
  initialize: function() {
    this.render();
  },
  render: function() {
    var data = this.model.attributes;
    var renderedTemplate = this.template(data);
    this.$el.html(renderedTemplate);
    // place me later!
    console.log(this.$el.html());
    $('body').append(this.$el);
  }
});

app.PartyListView = Backbone.View.extend({
  tagName: "div",

  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },
  render: function(){
    var numOfParties = this.collection.models.length;
    // var data = this.model.attributes;
//
    for (var i = 0; i < numOfParties; i++) {
      var model =  this.collection.models[i];
      var newView = new app.PartyView({ model: model });
      newView.render();
      this.$el.append( newView.$el );
    };
  }
});


$(document).ready(function(){

  app.foodList = new app.FoodCollection();
  app.foodListPainter = new app.FoodListView({
    collection: app.foodList,
    el: $('#food-list')
  })

  app.orderList = new app.OrderCollection();
  app.orderListPainter = new app.OrderListView({
    collection: app.orderList,
    el: $('#order-list')
  })

  app.partyList = new app.PartyCollection();
  app.partyListPainter = new app.PartyListView({
    collection: app.partyList,
    el: $('#party-list')
  })

  app.foodList.fetch();
  app.orderList.fetch();
  app.partyList.fetch();
});
