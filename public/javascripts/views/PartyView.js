var app = app || {};

app.PartyView = Backbone.View.extend({
  tagName: "h2",
  className: "parties",
  template: _.template("<%= name %>:<span> $<%= count %></span><button class='select-party'>Select</button>"),
  initialize: function() {
    this.render();
  },
  render: function() {
    var data = this.model.attributes;
    var renderedTemplate = this.template(data);
    this.$el.html(renderedTemplate);
    // place me later!
    this.$el.append( this.renderFoodList() );
    console.log(this.$el.html());
    $('body').append(this.$el);
  },
  renderFoodList: function(){
    var foods = this.model.get('foods')
    var foodList = $('<ul>');
    for (var i = 0; i < foods.length; i++) {
      foodList.append( $('<li>').text(foods[i]['name']));
    }
    this.$el.append(foodList);
  },
  events:{
    'click .select-party': 'selectParty'
  },
  selectParty: function(){
    $('.party-selected').removeClass('party-selected');  // for css to show the selected one
    this.$el.addClass('party-selected');  // for css to show the selected one
    app.partySelection = this.model;
  }
});
