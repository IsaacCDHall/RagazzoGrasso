function Pizza(){
  this.toppings=[];
  this.size=0;
  this.cost=0;
}

Pizza.prototype.findCost = function (){
  this.cost = this.toppings.length * 2;
  this.cost *= (parseInt(this.size) + 1);
  return this.cost
}

$(document).ready(function(){
  var myPizza = new Pizza();

  $('#Selections2').hide();
  $('#Selections3').hide();
  $("form#Selections1").submit(function(event){
    event.preventDefault();
    $("#makePizza").show();
    $("#pizzaCost").show();
    myPizza.size = $("#size").val()
    $("input:checkbox[name=toppings]:checked").each(function(){
      myPizza.toppings.push($(this).val());
    });
    myPizza.findCost();
    if (myPizza.cost === 0){
       return myPizza.cost = 1000
       console.log(myPizza.cost)
      $("#pizzaCost").hide()
      $("#hiddenCosts").show()
    };

    console.log(myPizza)
    $('#makePizza').append(myPizza.toppings.join(' and ') + " pizza coming up!");
    $('#pizzaCost').append("You're lucky it only costs $" + myPizza.cost);
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
    var mySecondPizza = new Pizza();
    event.preventDefault();
    // $("#makePizza").hide();
    // $("#pizzaCost").hide();
    $("#Selections3").hide();
    $('#results').show();
    mySecondPizza.size = $("#size").val()
    $("input:checkbox[name=toppings]:checked").each(function(){
      mySecondPizza.toppings.push($(this).val());
    });
     mySecondPizza.findCost();
     console.log(mySecondPizza);
    if (mySecondPizza.cost === 0){
      mySecondPizza.cost += 1000
      $("#pizzaCost").hide()
      $("#hiddenCosts").show()
      console.log("no toppings")
    };
    $('#makePizza').append(mySecondPizza.toppings.join(' and ') + " pizza coming up!");
    $('#pizzaCost').append("Altogether, you're lookin' at" + myPizza.cost + mySecondPizza.cost);
    $('#Selections1').hide();
  });
});
