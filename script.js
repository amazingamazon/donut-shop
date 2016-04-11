var DonutShop = function(location, options) {
  this.location = location;
  this.minCustomers = options.minCustomers;
  this.maxCustomers = options.maxCustomers;
  this.avgPerCustomer = options.avgPerCustomer;
  this.hoursOpen = options.hoursOpen;
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

  console.log(this.hourlyDonuts);

  for (var j = 0; j < this.hourlyDonuts.length; j++) {
    this.dailyDonuts += this.hourlyDonuts[j];
  }

  newRow.innerHTML += "<td>" + this.dailyDonuts + "</td>";

  console.log(this.dailyDonuts);

  main.appendChild(newRow);
};

var downtown = new DonutShop("Downtown", {minCustomers: 8, maxCustomers: 43, avgPerCustomer: 4.50, hoursOpen: 11});
var capitolHill = new DonutShop("Capitol Hill", {minCustomers: 4, maxCustomers: 37, avgPerCustomer: 2.00, hoursOpen: 11});
var southLakeUnion = new DonutShop("South Lake Union", {minCustomers: 9, maxCustomers: 23, avgPerCustomer: 6.33, hoursOpen: 11});
var wedgewood = new DonutShop("Wedgewood", {minCustomers: 2, maxCustomers: 28, avgPerCustomer: 1.25, hoursOpen: 11});
var ballard = new DonutShop("Ballard", {minCustomers: 8, maxCustomers: 58, avgPerCustomer: 3.75, hoursOpen: 11});

downtown.render();
capitolHill.render();
southLakeUnion.render();
wedgewood.render();
ballard.render();
