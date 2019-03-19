//business logic
function Ticket(movie, age, showtime, cost) {
  this.movie = movie;
  this.age = age;
  this.showtime = showtime;
  this.cost = cost;
}


Ticket.prototype.calCost = function() {

  if ((this.age === "youth") && (this.showtime === "matinee")){
    return this.cost + 8;
  }
  if ((this.age === "general") && (this.showtime === "daytime")){
    return this.cost + 12;
  }
  if ((this.age === "senior") && (this.showtime === "evening")){
    return this.cost + 10;
  }
}
//User Interface Logic
$(document).ready(function() {
  $("form#selector").submit(function(event) {
    event.preventDefault();
    var movieInput = $("select#movie").val();
    var ageInput = $("select#age").val();
    var showtimeInput = $("select#showtime").val();
    var cost = 0;
    var newticket = new Ticket (movieInput, ageInput, showtimeInput, cost)
    var result = newticket.calCost();



    $("#price").text(result);
    $("#result").show();
  });
});
