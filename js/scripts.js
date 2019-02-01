function Pizza(){
  this.toppings=[];
  this.size=0;
}

Pizza.prototype.findCost = function (){
  var cost = this.toppings.length * 2;
  cost *= (parseInt(this.size) + 1);
  return cost
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#makePizza").show();
    $("#pizzaCost").show();
    var myPizza = new Pizza();
    myPizza.size = $("#size").val()
    $("input:checkbox[name=toppings]:checked").each(function(){
      myPizza.toppings.push($(this).val());
    });
    var cost = myPizza.findCost();
    if (cost === 0){
      $("#pizzaCost").hide()
      $("#hiddenCosts").show()
    };

    $('#makePizza').append(myPizza.toppings.join(' and ') + " pizza coming up!");
    $('#pizzaCost').append("You're lucky it only costs $" + cost);
    $('#Selections').hide();
  });
});
