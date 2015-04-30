var app = app || {};

app.FoodView = Backbone.View.extend({
  initialize: function(){
   this.listenTo(this.model,'change', this.render);
   this.listenTo(this.model,'delete', this.remove);
  },
  template: _.template('<h3><%= name %>:$<%= cost %></h3><button class="select-food">Select</button>'),
  tagName: 'li',
  className: 'food',
  render: function() {
    var data = this.model.attributes;
    var renderedTemplate = this.template(data);
    this.$el.html(renderedTemplate);
    // place me later!
    console.log(this.$el.html());
    $('body').append(this.$el);
  },
  events:{
    'click .select-food': 'selectFood'
  },
  selectFood: function(){
    $('.food-selected').removeClass('food-selected');  // for css to show the selected one
    this.$el.addClass('food-selected');  // for css to show the selected one
    app.foodSelection = this.model;
  }

});
