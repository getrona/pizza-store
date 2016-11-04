function Pizza(size, toppings, sides, sauce, quantities) {
  this.size = size;
  this.toppings = toppings;
  this.sides = sides;
  this.sauce = sauce;
  this.quantities = quantities;
}

Pizza.prototype.addPrice = function() {
  var price = ((this.toppings.length) + (this.sides.length * 2))
  if (this.size === "md") {
    price = price + 6;
  } else if (this.size === "lg") {
    price = price + 7;
  } else if (this.size === "xl") {
    price = price + 8;
  } else {
    price = price + 5;
  }
  var finalPrice = price * this.quantities;
  return finalPrice;
}


$(document).ready(function(){
  $(".btn-lb").submit(function(event){
    event.preventDefault();
    var userName = $("#name").val();
    var userEmail = $("#email").val();
    var pizzaQuantity = parseInt($("#quantity").val());
    var pizzaSize = $("#size").val();
    var pizzaSauce = $("#sauce").val();
    var pizzaCrust = $("#crust").val();
    var pizzaSide = [];
    var pizzaSideArr = pizzaSide;
    var pizzaTop = [];
    var pizzaTopArr = pizzaTop;
    var resultPrice = neoPizza.addPrice();
    debugger;

    $("input:checkbox[name=topop]:checked").each(function(){
      var bonTop = $(this).val();
      $("#list").append("<li>" + bonTop + "<li>");
      pizzaTop.push(bonTop);
    });

    debugger;
    $("input:checkbox[name=sideop]:checked").each(function(){
      var bonSide = $(this).val();
      $("#list1").append("<li>" + bonSide + "<li>");
      pizzaSide.push(bonSide);
    });

    debugger;

    var neoPizza = new Pizza(pizzaSize, pizzaTopArr, pizzaSideArr, pizzaSauce, pizzaQuantity);
    $("#userName2").text(userName);
    $("#list2").append("<li>" + neoPizza.sauce + "<li>");
    $("#combien").append(neoPizza.quantities);
    $("#finalTotal").append("$" + resultPrice);
    $("#userSize").append("$" + neoPizza.size);


  });
});
