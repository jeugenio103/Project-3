// AREA CHART - 88rising music analysis

// import data from './88rising.json';

// let id0 = object.values(data)
// Initialized arrays
let songName =  [] 

let danceability = []
// let romanNames = []
// let greekSearchResults = []
// let romanSearchResults = []

// For loop to populate arrays
for (let i = 0; i < searchResults.length; i++) {
  row = searchResults[i];
  songName.push(row.songName);
  danceability.push(row.danceability);
  // romanNames.push(row.romanName);
  // greekSearchResults.push(row.greekSearchResults);
  // romanSearchResults.push(row.romanSearchResults);
}

// Trace1 for the Greek Data
let trace1 = {
  x: songName,
  y: danceability,
  text: Scale,
  name: "Music",
  type: "bar"
};

// Trace 2 for the Roman Data
// let trace2 = {
//   x: names,
//   y: romanSearchResults,
//   text: romanNames,
//   name: "Roman",
//   type: "bar"
// };

// Create data array
let data = [trace1];

// Apply a title to the layout
let layout = {
  title: "Corelation",
  barmode: "group",
  // Include margins in the layout so the x-tick labels display correctly
  margin: {
    l: 50,
    r: 50,
    b: 200,
    t: 50,
    pad: 4
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);

var options4 = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
chart4.render();

