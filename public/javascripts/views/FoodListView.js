var app = app || {};

app.FoodListView = Backbone.View.extend({
  tagName: "div",

  // template: _.template('<h2><%=food %></h2>')
  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },
  render: function(){
    this.$el.empty();
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
