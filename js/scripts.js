function Pizza(){
  this.toppings=[];
  this.size=0;
  this.toppingsCost=0
}










$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#makePizza").show();
    var x = [];
    $("input:checkbox[name=toppings]:checked").each(function(){

      x.push($(this).val());
    });
    $('#makePizza').text(x + " pizza coming up!");
    $('#Selections').hide();
    console.log("help")
  });
});
