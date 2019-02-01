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
  $('#Selections2').hide();
  $('#Selections3').hide();
  $("form#Selections1").submit(function(event){
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
    $('#Selections1').hide();
    $('#Selections2').show();
  });



  $("form#Selections2").submit(function(event){
    event.preventDefault();
    $('#results').hide();
    $("#makePizza").hide();
    $('#Selections2').hide();
    $('#Selections3').show();

  });





  $("form#Selections3").submit(function(event){
    event.preventDefault();
    $("#makePizza").hide();
    $("#pizzaCost").hide();
    $("#Selections3").hide();
    $('#results').show();
    var mySecondPizza = new Pizza();
    mySecondPizza.size = $("#size").val()
    $("input:checkbox[name=toppings]:checked").each(function(){
      mySecondPizza.toppings.push($(this).val());
    });
    var cost = mySecondPizza.findCost();
    if (cost === 0){
      $("#pizzaCost").hide()
      $("#hiddenCosts").show()
    };
    $('#makePizza').append(mySecondPizza.toppings.join(' and ') + " pizza coming up!");
    $('#pizzaCost').append("You're lucky it only costs $" + cost);
    $('#Selections1').hide();
  });
});
