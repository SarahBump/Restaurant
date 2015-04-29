var app = app || {};

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

  $('#place-order').on('click', function(){
    var partyId = app.partySelection.get('id');
    var foodId = app.foodSelection.get('id');

    $.ajax({
      method: 'post',
      url: '/api/orders',
      data: {order: {party_id: partyId, food_id: foodId} },
      success: function(){
        app.partyList.fetch( {reset: true} );
        $('.food-selected').removeClass('food-selected');
        $('.party-selected').removeClass('party-selected');
      }
    }); //ajax

  }); //click event

}); // document is ready
