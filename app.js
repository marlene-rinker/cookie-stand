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

Store.prototype.renderToPage = function(){
  // run functions to get the info needed for each store to report in the table
  this.customersPerHour();
  this.cookiesPerHour();
  this.allCookies();
  // 1. find target
  var tableToTarget = document.getElementById('store-sales');

  // 2. create content
  //  need a tr, with tds for the location, sales each hour and daily total sales, then need a totals row

  var newTrEl = document.createElement('tr');
  var newTdEl = document.createElement('td');
  newTdEl.textContent = this.location;
  newTrEl.appendChild(newTdEl);

  for (var i = 0; i < this.storeHours.length; i++){
    newTdEl = document.createElement('td');
    newTdEl.textContent = this.cookiesBoughtPerHour[i];
    newTrEl.appendChild(newTdEl);
  }

  newTdEl = document.createElement('td');
  newTdEl.textContent = this.totalCookies;
  newTrEl.appendChild(newTdEl);

  // append content to the target
  tableToTarget.appendChild(newTrEl);
};



function renderTableHeader(hoursArray, tableID){//creates a table header including Daily Total using the table ID provided and the array of hours the store is open
  // identify target
  var tableToTarget = document.getElementById(tableID);

  // create content
  //  a. tr, then need tds for "blank", each value in storeHours, and the "Daily Total"
  var newTrEl = document.createElement('tr');
  var newThEl = document.createElement('th');
  newTrEl.appendChild(newThEl);

  for(var i = 0; i < hoursArray.length; i++){
    newThEl = document.createElement('th');
    newThEl.textContent = hoursArray[i];
    newTrEl.appendChild(newThEl);
  }

  newThEl = document.createElement('th');
  newThEl.textContent = 'Daily Location Total';
  newTrEl.appendChild(newThEl);

  // add content to the target
  tableToTarget.appendChild(newTrEl);
}

function renderTableRows(arrayStores){
  for(var i = 0; i < arrayStores.length; i++){
    arrayStores[i].renderToPage();
  }
}

function renderTableFooter(hoursArray, arrayStores, tableID){

  //  find target
  var tableToTarget = document.getElementById(tableID);
  
  var newTrEl = document.createElement('tr');
  var newTdEl = document.createElement('td');

  // / sum of the cookies bought per hour for each store
  // in the cookiesBoughtPerHour array in each store object
  var cookiesNum = 0;
  var dailyTotalCookies = 0;
  var j = 0;
  for(var i = 0; i < arrayStores.length; i++){//THIS IS BROKEN; NEED TO WORK ON LOGIC; GETTING CLOSE -for each hour in the hoursArry,
    var c = 0;
    while(c < hoursArray.length){
      cookiesNum = cookiesNum + arrayStores[i].cookiesBoughtPerHour[j];
      // debugger;
      newTdEl = document.createElement('td');
      newTdEl.textContent = cookiesNum;
      newTrEl.appendChild(newTdEl);
      j++;
      c++;
    }
  }

  // sum of the total daily sales for each store
  // in the totalCookies variable for each store
  for (i = 0; i < arrayStores.length; i++) {
    dailyTotalCookies = dailyTotalCookies + arrayStores[i].totalCookies;
  }
  newTdEl = document.createElement('td');
  newTdEl.textContent = dailyTotalCookies;
  newTrEl.appendChild(newTdEl);


  tableToTarget.appendChild(newTrEl);
}

// ============================================= Stores =========================================================
var seattleStore = new Store('Seattle', 23, 65, 6.3, typicalHours);
var tokyoStore = new Store('Tokyo', 3, 24, 1.2, typicalHours);
var dubaiStore = new Store('Dubai', 11, 38, 3.7, typicalHours);
var parisStore = new Store('Paris', 20, 38, 2.3, typicalHours);
var limaStore = new Store('Lima', 2, 16, 4.6, typicalHours);

// ============================================= Sales Table =========================================================
var storesOnTable = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];
renderTableHeader(typicalHours, 'store-sales');
renderTableRows(storesOnTable);
// renderTableFooter(typicalHours, storesOnTable, 'store-sales');








// // ============================================= Seattle Store =========================================================

// var seattleStore = new Store('Seattle', 23, 65, 6.3, typicalHours);
// seattleStore.renderToPage();

// // ============================================= Tokyo Store =========================================================

// var tokyoStore = new Store('Tokyo', 3, 24, 1.2, typicalHours);
// tokyoStore.renderToPage();

// // ============================================= Dubai Store =========================================================
// var dubaiStore = new Store('Dubai', 11, 38, 3.7, typicalHours);
// dubaiStore.renderToPage();

// // ============================================= Paris Store =========================================================
// var parisStore = new Store('Paris', 20, 38, 2.3, typicalHours);
// parisStore.renderToPage();

// // ============================================= Lima Store =========================================================
// var limaStore = new Store('Lima', 2, 16, 4.6, typicalHours);
// limaStore.renderToPage();

