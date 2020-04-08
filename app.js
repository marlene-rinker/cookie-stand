'use strict';

// Create objects for each of the stores
// Calculate expected hourly sales for the stores
// Put the information in a table on the sales.html page


var typicalHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];//regular store hours for all stores

function getRandomNum(min, max){//gets a random number between the min and max number inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  var randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
  return randomNumber;
}

function Store(location, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer, storeHours){
  this.location = location;
  this.minCustHr = minHourlyCustomers;
  this.maxCustHr = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.storeHours = storeHours;
  this.custPerHour = [];
  this.cookiesBoughtPerHour = [];
  this.totalCookies = 0;
}


Store.prototype.customersPerHour = function(){//get the number of customers for each hour the store is open
  for (var i = 0; i < this.storeHours.length; i++) {
    var custCount = getRandomNum(this.minCustHr, this.maxCustHr);
    this.custPerHour.push(custCount);
  }
};

Store.prototype.cookiesPerHour = function(){//get the number of cookies sold per hour based on the number of customers in the store
  for (var i = 0; i < this.custPerHour.length; i++) {
    var cookiesBought = this.custPerHour[i] * this.avgCookiesPerCustomer;
    this.cookiesBoughtPerHour.push(Math.round(cookiesBought));
  }
};

Store.prototype.allCookies = function(){//totals the cookies sold during all the store hours
  for (var i = 0; i < this.cookiesBoughtPerHour.length; i++) {
    this.totalCookies = this.totalCookies + this.cookiesBoughtPerHour[i];
  }
};

// Store.prototype.renderToPage = function(locationID){//locationID is the id for the store heading; for example 'seattle'
//   // run functions to get the info needed to report in the table
//   this.customersPerHour();
//   this.cookiesPerHour();
//   this.allCookies();
//   // 1. find target
//   var targetULEl = document.getElementById(locationID);

//   // 2. create content

//   for (var i =0; i < this.storeHours.length; i++){
//     //    a. li
//     var newLiEl = document.createElement('li');//create content
//     //    b. text
//     var cookieSalesText = this.storeHours[i] +': ' + this.cookiesBoughtPerHour[i] + ' cookies';
//     newLiEl.textContent = cookieSalesText;
//     // 3. append to target
//     targetULEl.appendChild(newLiEl);
//   }
//   newLiEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
//   targetULEl.appendChild(newLiEl);
// };

Store.prototype.renderToPage = function(locationID){//locationID is the id for the store heading; for example 'seattle'
  // run functions to get the info needed to report in the table
  this.customersPerHour();
  this.cookiesPerHour();
  this.allCookies();
  // 1. find target
  var targetULEl = document.getElementById(locationID);

  // 2. create content

  for (var i =0; i < this.storeHours.length; i++){
    //    a. li
    var newLiEl = document.createElement('li');//create content
    //    b. text
    var cookieSalesText = this.storeHours[i] +': ' + this.cookiesBoughtPerHour[i] + ' cookies';
    newLiEl.textContent = cookieSalesText;
    // 3. append to target
    targetULEl.appendChild(newLiEl);
  }
  newLiEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
  targetULEl.appendChild(newLiEl);
};

// ============================================= Seattle Store =========================================================

var seattleStore = new Store('Seattle', 23, 65, 6.3, typicalHours);
seattleStore.renderToPage('seattle');

// ============================================= Tokyo Store =========================================================

var tokyoStore = new Store('Tokyo', 3, 24, 1.2, typicalHours);
tokyoStore.renderToPage('tokyo');

// ============================================= Dubai Store =========================================================
var dubaiStore = new Store('Dubai', 11, 38, 3.7, typicalHours);
dubaiStore.renderToPage('dubai');

// ============================================= Paris Store =========================================================
var parisStore = new Store('Paris', 20, 38, 2.3, typicalHours);
parisStore.renderToPage('paris');

// ============================================= Lima Store =========================================================
var limaStore = new Store('Lima', 2, 16, 4.6, typicalHours);
limaStore.renderToPage('lima');

