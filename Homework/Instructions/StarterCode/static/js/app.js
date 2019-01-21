// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

console.log(data);

// // Step 1: Loop Through `data` and console.log each ufosighting object
data.forEach(function(ufosighting) {
    console.log(ufosighting);
  });
  
  data.forEach(function(ufosighting) {
    console.log(ufosighting);
     var row = tbody.append("tr");
   });

   data.forEach(function(ufosighting) {
    console.log(ufosighting);
     var row = tbody.append("tr");
  
     Object.entries(ufosighting).forEach(function([key, value]) {
       console.log(key, value);
       
        
     });
   });
  
   // Step 4: Use d3 to append 1 cell per ufo sighting
 data.forEach(function(ufosighting) {
    console.log(ufosighting);
    var row = tbody.append("tr");
 
    Object.entries(ufosighting).forEach(function([key, value]) {
      console.log(key, value);
 //     // Append a cell to the row for each value
 //     // in the weather report object
     var cell = tbody.append("td");
   });
 
  });
 
 // // Step 5: Use d3 to update each cell's text with
 // 
  data.forEach(function(ufosighting) {
    console.log(ufosighting);
    var row = tbody.append("tr");
    Object.entries(ufosighting).forEach(function([key, value]) {
      console.log(key, value);
 //     // Append a cell to the row for each value
 //     // in the weather report object
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
 
 // Populate data 
 data.forEach((ufosighting) => {
   var row = tbody.append("tr");
   Object.entries(ufosighting).forEach(([key, value]) => {
     var cell = tbody.append("td");
     cell.text(value);
   });
 });
 
 // Select the submit button
var submit = d3.select("#filter-btn");

// Complete the click handler for the form
submit.on("click", function() {

  // Prevent the page from refreshing
d3.event.preventdefault();
// var row=tbody.append("tr");
tbody.html("");



  // Select the input element and get the raw HTML node
  var inputElement=d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputvalue);
  console.log(tabledata)

  // Use the form input to filter the data by datetime
var filterData= tabledata.filter(ufo=>data.datetime===inputValue);

filterData.forEach(function (ufosighting) {
  console.log(ufosighting);
  var row = tbody.append("tr");

  Object.entries(ufosighting).forEach(function ([key, value]) {
      console.log(key, value);
      var cell = tbody.append("td");
      cell.text(value);
  });
});
});