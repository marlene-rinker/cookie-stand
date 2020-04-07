'use strict';

// Object literal for each location (start with the first two)

// Function customersPerHour - random number of customer per hour between the min and max, need to feed min and max in as parameters

// Function cookiesPurchasedPerHour - calculate the number of cookies purchased per hour using the average cookies per customer and the amount of cookies purchased per hour

// Seattle (object)
// 	Location Name - provided
// 	Minimum Hourly Customers - number provided
// 	Maximum Hourly Customers - number provided
// 	Average Cookies per Customer - number provided
//  Store hours - provided
// 	Amount of Cookies purchased per hour: calculate and store here as an array - using the customersPerHour function
// 	Total Number of Cookies: add all the values in the Amount of Cookies purchased per hour array


// Display location name on the page, then put amount of cookies per day in the list with Total number of cookies at the bottom of the list;

// Do this for each of the location objects

var typicalHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// ============================================= Seattle Store =========================================================
var seattleStore  = {
  minCustHr : 23,
  maxCustHr : 65,
  avgCookiesPerCustomer : 6.3,
  storeHours : typicalHours,
  custPerHour: [],
  cookiesBoughtPerHour : [],
  totalCookies : 0
};


seattleStore.customersPerHour = function(){//get a random number of customer for each hour the store is open
  var min = this.minCustHr;
  var max = this.maxCustHr;
  for (var i = 0; i < this.storeHours.length; i++) {
    var custCount = Math.floor(Math.random() * (max - min +1)) + min;//gets a random number between the min number and max number of customers inclusive
    this.custPerHour.push(custCount);
  }
};

seattleStore.cookiesPerHour = function(){//get the number of cookies purchased per hour using the customers per hour

  for (var i = 0; i < this.custPerHour.length; i++) {
    var cookiesBought = this.custPerHour[i] * this.avgCookiesPerCustomer;
    this.cookiesBoughtPerHour.push(Math.round(cookiesBought));
  }
};

seattleStore.allCookies = function(){

  for (var i = 0; i < this.cookiesBoughtPerHour.length; i++) {
    this.totalCookies = this.totalCookies + this.cookiesBoughtPerHour[i];
  }

};

// render info from Seattle store on the sales page
seattleStore.renderToPage = function () {
  // 1. find target
  var targetULEl = document.getElementById('seattle');

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

//run functions for Seattle store
seattleStore.customersPerHour();
seattleStore.cookiesPerHour();
seattleStore.allCookies();
seattleStore.renderToPage();

// ============================================= Tokyo Store =========================================================

var tokyoStore  = {
  minCustHr : 3,
  maxCustHr : 24,
  avgCookiesPerCustomer : 1.2,
  storeHours : typicalHours,
  custPerHour: [],
  cookiesBoughtPerHour : [],
  totalCookies : 0
};


tokyoStore.customersPerHour = function(){//get a random number of customer for each hour the store is open
  var min = this.minCustHr;
  var max = this.maxCustHr;
  for (var i = 0; i < this.storeHours.length; i++) {
    var custCount = Math.floor(Math.random() * (max - min +1)) + min;//gets a random number between the min number and max number of customers inclusive
    this.custPerHour.push(custCount);
  }
};

tokyoStore.cookiesPerHour = function(){//get the number of cookies purchased per hour using the customers per hour

  for (var i = 0; i < this.custPerHour.length; i++) {
    var cookiesBought = this.custPerHour[i] * this.avgCookiesPerCustomer;
    this.cookiesBoughtPerHour.push(Math.round(cookiesBought));
  }
};

tokyoStore.allCookies = function(){

  for (var i = 0; i < this.cookiesBoughtPerHour.length; i++) {
    this.totalCookies = this.totalCookies + this.cookiesBoughtPerHour[i];
  }

};

// render info from Tokyo store on the sales page
tokyoStore.renderToPage = function () {
  // 1. find target
  var targetULEl = document.getElementById('tokyo');

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

//run functions for Tokyo store
tokyoStore.customersPerHour();
tokyoStore.cookiesPerHour();
tokyoStore.allCookies();
tokyoStore.renderToPage();


// ============================================= Dubai Store =========================================================

var dubaiStore  = {
  minCustHr : 3,
  maxCustHr : 24,
  avgCookiesPerCustomer : 1.2,
  storeHours : typicalHours,
  custPerHour: [],
  cookiesBoughtPerHour : [],
  totalCookies : 0
};


dubaiStore.customersPerHour = function(){//get a random number of customer for each hour the store is open
  var min = this.minCustHr;
  var max = this.maxCustHr;
  for (var i = 0; i < this.storeHours.length; i++) {
    var custCount = Math.floor(Math.random() * (max - min +1)) + min;//gets a random number between the min number and max number of customers inclusive
    this.custPerHour.push(custCount);
  }
};

dubaiStore.cookiesPerHour = function(){//get the number of cookies purchased per hour using the customers per hour

  for (var i = 0; i < this.custPerHour.length; i++) {
    var cookiesBought = this.custPerHour[i] * this.avgCookiesPerCustomer;
    this.cookiesBoughtPerHour.push(Math.round(cookiesBought));
  }
};

dubaiStore.allCookies = function(){

  for (var i = 0; i < this.cookiesBoughtPerHour.length; i++) {
    this.totalCookies = this.totalCookies + this.cookiesBoughtPerHour[i];
  }

};

// render info from Dubai store on the sales page
dubaiStore.renderToPage = function () {
  // 1. find target
  var targetULEl = document.getElementById('dubai');

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

//run functions for Dubai store
dubaiStore.customersPerHour();
dubaiStore.cookiesPerHour();
dubaiStore.allCookies();
dubaiStore.renderToPage();


// ============================================= Paris Store =========================================================

var parisStore  = {
  minCustHr : 3,
  maxCustHr : 24,
  avgCookiesPerCustomer : 1.2,
  storeHours : typicalHours,
  custPerHour: [],
  cookiesBoughtPerHour : [],
  totalCookies : 0
};


parisStore.customersPerHour = function(){//get a random number of customer for each hour the store is open
  var min = this.minCustHr;
  var max = this.maxCustHr;
  for (var i = 0; i < this.storeHours.length; i++) {
    var custCount = Math.floor(Math.random() * (max - min +1)) + min;//gets a random number between the min number and max number of customers inclusive
    this.custPerHour.push(custCount);
  }
};

parisStore.cookiesPerHour = function(){//get the number of cookies purchased per hour using the customers per hour

  for (var i = 0; i < this.custPerHour.length; i++) {
    var cookiesBought = this.custPerHour[i] * this.avgCookiesPerCustomer;
    this.cookiesBoughtPerHour.push(Math.round(cookiesBought));
  }
};

parisStore.allCookies = function(){

  for (var i = 0; i < this.cookiesBoughtPerHour.length; i++) {
    this.totalCookies = this.totalCookies + this.cookiesBoughtPerHour[i];
  }

};

// render info from Paris store on the sales page
parisStore.renderToPage = function () {
  // 1. find target
  var targetULEl = document.getElementById('paris');

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

//run functions for Paris store
parisStore.customersPerHour();
parisStore.cookiesPerHour();
parisStore.allCookies();
parisStore.renderToPage();

// ============================================= Lima Store =========================================================

var limaStore  = {
  minCustHr : 3,
  maxCustHr : 24,
  avgCookiesPerCustomer : 1.2,
  storeHours : typicalHours,
  custPerHour: [],
  cookiesBoughtPerHour : [],
  totalCookies : 0
};


limaStore.customersPerHour = function(){//get a random number of customer for each hour the store is open
  var min = this.minCustHr;
  var max = this.maxCustHr;
  for (var i = 0; i < this.storeHours.length; i++) {
    var custCount = Math.floor(Math.random() * (max - min +1)) + min;//gets a random number between the min number and max number of customers inclusive
    this.custPerHour.push(custCount);
  }
};

limaStore.cookiesPerHour = function(){//get the number of cookies purchased per hour using the customers per hour

  for (var i = 0; i < this.custPerHour.length; i++) {
    var cookiesBought = this.custPerHour[i] * this.avgCookiesPerCustomer;
    this.cookiesBoughtPerHour.push(Math.round(cookiesBought));
  }
};

limaStore.allCookies = function(){

  for (var i = 0; i < this.cookiesBoughtPerHour.length; i++) {
    this.totalCookies = this.totalCookies + this.cookiesBoughtPerHour[i];
  }

};

// render info from Tokyo store on the sales page
limaStore.renderToPage = function () {
  // 1. find target
  var targetULEl = document.getElementById('lima');

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

//run functions for Lima store
limaStore.customersPerHour();
limaStore.cookiesPerHour();
limaStore.allCookies();
limaStore.renderToPage();
