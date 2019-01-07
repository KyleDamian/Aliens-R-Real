// from data.js
var tableData = data;

var tbody = d3.select("tbody");
//console log to verify data file
console.log(data)

// loop through each sighting and append rows and data to table body
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
});

// add input to search through sightings list
// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var inputValue = d3.select("value");

    var filteredData = tableData.filter(data => data.datetime === inputValue);

    console.log(filteredData);
        
});


// figure out how to add multiple filters to table
