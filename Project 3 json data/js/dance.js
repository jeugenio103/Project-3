// Use d3 to read the JSON file.
// The data from the JSON file is arbitrarily named importedData as the argument.
d3.json("js/88data.js").then((importedData) => {
  // console.log(importedData);
  let data = importedData;

  // Sort the data array by using the miles value.
  data.sort(function(a, b) {
    return parseFloat(b.tempo) - parseFloat(a.tempo);
  });

  // Slice the first 10 objects for plotting.
  data = data.slice(0, 10);



  // Trace1 for the car miles data.
  let trace1 = {
    x: data.map(row => row.tempo),
    y: data.map(row => row.valence),
    text: data.map(row => row.songname),
    name: "Car Miles",
    type: "bar",
    orientation: "b"
  };

  // Data
 
  var options = {
    series: [{
    name: 'series1',
    data: data.map(row => row.tempo)
  }, {
    name: 'series2',
    data: data.map(row => row.valence)
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

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
})
