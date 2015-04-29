var app = app || {};

app.PartyListView = Backbone.View.extend({
  tagName: "div",

  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },
  render: function(){
    this.$el.empty();
    var numOfParties = this.collection.models.length;
    // var data = this.model.attributes;
//
    for (var i = 0; i < numOfParties; i++) {
      var model =  this.collection.models[i];
      var newView = new app.PartyView({ model: model });
      newView.render();
      this.$el.append( newView.$el );

      console.log(model.get('foods'))

    };
  }
});
