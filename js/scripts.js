function Pizza(){
  this.toppings=[];
  this.size=0;
  this.cost=0;
};
Pizza.prototype.findCost = function (){
  this.cost = this.toppings.length * 2;
  this.cost *= (parseInt(this.size) + 1);
  return this.cost
};
//user interface
$(document).ready(function(){
  var myPizza = new Pizza();
  $('#Selections2').hide();
  $('#Selections3').hide();
  $("form#Selections1").submit(function(event){
    event.preventDefault();
    $("#makePizza").show();
    $("#pizzaCost").show();
    myPizza.size = $("#size").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      myPizza.toppings.push($(this).val());
    });
    myPizza.findCost();

    if (myPizza.cost === 0){
       myPizza.cost = 1000;

      $("#pizzaCost").hide()
      $("#hiddenCosts").show()

    };

    $('#makePizza').append("1 " + myPizza.toppings.join(' and ') + " pizza coming up!");
    $('#pizzaCost').append("You're lucky, it only costs $" + myPizza.cost);
    $('#Selections1').hide();
    $('#Selections2').show();
  });
  $("form#Selections2").submit(function(event){
    event.preventDefault();
    $('#results').hide();
    $('#Selections2').hide();
    $('#Selections3').show();
    $("#morePizza").show();
  });
  $("form#Selections3").submit(function(event){
    var mySecondPizza = new Pizza();
    event.preventDefault();
    $("#Selections3").hide();
    $('#results').show();
    mySecondPizza.size = $("#size2").val()
    $("input:checkbox[name=toppings2]:checked").each(function(){
      mySecondPizza.toppings.push($(this).val());
    });
     mySecondPizza.findCost();

    if (mySecondPizza.cost === 0){
      mySecondPizza.cost = 1000;
      $("#hiddenCosts").show()

    };

    $('#makePizza').append("<br>" + "And another 1! This time with "+ mySecondPizza.toppings.join(' and '));
    $('#pizzaCost').append(" for the first pizza and " + mySecondPizza.cost + "$ for the second."+"<br>" + '<br>' + "Altogether, you're lookin' at $" + (myPizza.cost + mySecondPizza.cost));
    $('#Selections1').hide();
  });
});
