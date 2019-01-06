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
var submit = d3.select("#submit");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var inputValue = d3select("#list-group-item").node().value;

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});

// // function to filter table by input results
// function myFunction() {
//     // Declare variables
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("datetime");
//     filter = input.value();
//     table = document.getElementById("ufo-table");
//     tr = table.getElementsByTagName("tr");
  
//     // Loop through all table rows, and hide those who don't match the search query
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } 
//             else {
//                 tr[i].style.display = "none";
//             }
        
//         }
//     }
// }
// figure out how to add filter to table
