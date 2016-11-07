function Pizza(size, toppings, sides, sauce, quantities) {
  this.size = size;
  this.toppings = toppings;
  this.sides = sides;
  this.sauce = sauce;
  this.quantities = quantities;
}

Pizza.prototype.addPrice = function() {
  var price = ((this.toppings.length) + (this.sides.length * 2))
  if (this.size === "medium") {
    price = price + 6;
  } else if (this.size === "large") {
    price = price + 7;
  } else if (this.size === "Extra large") {
    price = price + 8;
  } else if (this.size === "small") {
    price = price + 5;
  } else {
    price = price + 5;
  }
  var finalPrice = 0;
  (this.quantities >= 1 ? finalPrice = price * this.quantities : finalPrice = price);
  return finalPrice;
}


$(document).ready(function(){
  $("form#pizza_order").submit(function(event){
    event.preventDefault();
    var userName = $("#name").val();
    var userEmail = $("#email").val();
    var pizzaQuantity = parseInt($("#quantity").val());
    var pizzaSize = $("#size").val();
    var pizzaSauce = $("#sauce").val();
    var pizzaCrust = $("#crust").val();
    var pizzaSide = [];
    var pizzaTop = [];

    $("input:checkbox[name=topop]:checked").each(function(){
      var bonTop = $(this).val();
      $("#list").append("<li>" + bonTop + "</li>");
      pizzaTop.push(bonTop);
    });


    $("input:checkbox[name=sideop]:checked").each(function(){
      var bonSide = $(this).val();
      $("#list1").append("<li>" + bonSide + "</li>");
      pizzaSide.push(bonSide);
    });


    var neoPizza = new Pizza(pizzaSize, pizzaTop, pizzaSide, pizzaSauce, pizzaQuantity);
    $("#userName2").text(userName);
    var resultPrice = neoPizza.addPrice();
    $("#list2").append("<li>" + neoPizza.sauce + "</li>");
    $("#combien").append(neoPizza.quantities);
    $("#finalTotal").append("$" + resultPrice);
    $("#userSize").append(neoPizza.size);
    $("form").hide();
    $("#receipt").show();


  });
});
