function Pizza(){
  this.toppings=[];
  this.size=0;
}




Pizza.prototype.findCost = function (){

  return this.toppings.length * 2;

}



$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#makePizza").show();
    var myPizza = new Pizza();
    $("input:checkbox[name=toppings]:checked").each(function(){
      myPizza.toppings.push($(this).val());
    });
    console.log(myPizza.findCost());
    $('#makePizza').text(myPizza.toppings + " pizza coming up!");
    $('#Selections').hide();
    console.log("woah")
  });
});
