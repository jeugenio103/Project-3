d3.json("js/88data.js").then((importedData) => {
  // console.log(importedData);
  let data = importedData;
  // Sort the data array by using the releasae date value.
  data.sort(function(a, b) {
    return parseFloat(a.release_date) - parseFloat(b.release_date);
    
  });


//88Rising 
function risingfilter(rising) {
  return rising.artist == "Joji"
}
let risingfiltered = data.filter(risingfilter)
console.log(risingfiltered)

var options = {
  series: [{
  name: 'Danceability',
  data: risingfiltered.map(row => row.danceability)
},{
  name: 'Popularity',
  data: (risingfiltered.map(row => row.popularity))
}
],
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
  type: 'date',
  categories: risingfiltered.map(row => row.release_date)
},
tooltip: {
  x: {
    format: 'dd/MM/yy'
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
// })
// data1 = (risingfiltered.map(row => row.danceability)/risingfiltered.map(row => row.danceability).length)
// console.log(data1)
// const arr = risingfiltered.map(row => row.danceability)
// const average = arr.reduce((a, b) => a + b, 0) / arr.length;
// console.log(average)
// data2 = risingfiltered.map(row => row.popularity)

// var options = {
//   series: [{
//   name: 'Series 1',
//   data: [80, 50, 30, 40, 100, 20],
// }],
//   chart: {
//   height: 350,
//   type: 'radar',
// },
// title: {
//   text: 'Basic Radar Chart'
// },
// xaxis: {
//   categories: ['Danceability', 'Popularity',]
// }
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();
})
