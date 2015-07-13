var DonutShop = function(location, options) {
  this.location = location;
  this.minCustomers = options.minCustomers;
  this.maxCustomers = options.maxCustomers;
  this.avgPerCustomer = options.avgPerCustomer;
  this.hoursOpen = options.hoursOpen;
};

DonutShop.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

DonutShop.prototype.perHour = function() {
  return Math.floor(this.generateRandom() * this.avgPerCustomer);
};

DonutShop.prototype.perDay = function() {
  var total = 0;

  for (i = 0; i < this.hoursOpen; i++) {
    total += this.perHour();
  }

  return total;

};

DonutShop.prototype.render = function() {

};

var downtown = new DonutShop("Downtown", {minCustomers: 8, maxCustomers: 43, avgPerCustomer: 4.50, hoursOpen: 11});
var capitolHill = new DonutShop("Capitol Hill", {minCustomers: 4, maxCustomers: 37, avgPerCustomer: 2.00, hoursOpen: 11});
var southLakeUnion = new DonutShop("South Lake Union", {minCustomers: 9, maxCustomers: 23, avgPerCustomer: 6.33, hoursOpen: 11});
var wedgewood = new DonutShop("Wedgewood", {minCustomers: 2, maxCustomers: 28, avgPerCustomer: 1.25, hoursOpen: 11});
var ballard = new DonutShop("Ballard", {minCustomers: 8, maxCustomers: 58, avgPerCustomer: 3.75, hoursOpen: 11});

