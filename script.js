var DonutShop = function(location, minCustomers, maxCustomers, avgPerCustomer) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgPerCustomer = avgPerCustomer;
  this.hoursOpen = 11;
  this.hourlyDonuts = [];
  this.dailyDonuts = 0;
};

DonutShop.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

DonutShop.prototype.perHour = function() {
  return Math.floor(this.generateRandom() * this.avgPerCustomer);
};

DonutShop.prototype.render = function() {
  var newRow = document.createElement("tr");
  var main = document.getElementById("donut-table");

  newRow.innerHTML = "<td>" + this.location + "</td>";

  for (var i = 0; i < this.hoursOpen; i++) {
      this.hourlyDonuts[i] = this.perHour();
      newRow.innerHTML += "<td>" + this.hourlyDonuts[i] + "</td>";
    }

  for (var j = 0; j < this.hourlyDonuts.length; j++) {
    this.dailyDonuts += this.hourlyDonuts[j];
  }

  newRow.innerHTML += "<td>" + this.dailyDonuts + "</td>";

  main.appendChild(newRow);
};

// function addShop() {
//   var getInput = document.getElementsByTagName("input");

//   var newLocation = getInput[0].value;
//   var newMinCustomers = parseInt(getInput[1].value);
//   var newMaxCustomers = parseInt(getInput[2].value);
//   var newAvgPerCustomer = parseInt(getInput[3].value);

//   var newShop = new DonutShop(newLocation, newMinCustomers, newMaxCustomers, newAvgPerCustomer);

//   return newShop;
// }

var addNewShop = document.getElementById("new-shop");
addNewShop.addEventListener("submit", function(e) {
  e.preventDefault();
  var getInput = document.getElementsByTagName("input");
  var newLocation = getInput[0].value;
  var newMinCustomers = parseInt(getInput[1].value);
  var newMaxCustomers = parseInt(getInput[2].value);
  var newAvgPerCustomer = parseInt(getInput[3].value);

  var newShop = new DonutShop(newLocation, newMinCustomers, newMaxCustomers, newAvgPerCustomer);

  shops.push(newShop);
  newShop.render();
});



var shops = [];
var downtown = new DonutShop("Downtown", 8, 43, 4.50);
var capitolHill = new DonutShop("Capitol Hill", 4, 37, 2.00);
var southLakeUnion = new DonutShop("South Lake Union", 9, 23, 6.33);
var wedgewood = new DonutShop("Wedgewood", 2, 28, 1.25);
var ballard = new DonutShop("Ballard", 8, 58, 3.75);
var fremont = new DonutShop("Fremont", 2, 8, 4.00);

shops.push(downtown, capitolHill, southLakeUnion, wedgewood, ballard);


downtown.render();
capitolHill.render();
southLakeUnion.render();
wedgewood.render();
ballard.render();
