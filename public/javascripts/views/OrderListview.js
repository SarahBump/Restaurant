var app = app || {};

app.OrderListView = Backbone.View.extend({
  tagName: "div",

  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },
  render: function(){
    this.$el.empty();
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
