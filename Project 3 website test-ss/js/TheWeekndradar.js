d3.json("js/mainstreamdata.js").then((importedData) => {
    // console.log(importedData);
    let data = importedData;
    // Sort the data array by using the releasae date value.
    data.sort(function(a, b) {
      return parseFloat(a.release_date) - parseFloat(b.release_date);
      
    });
  
//Joji 
function risingfilter(rising) {
  return rising.artist == "The Weeknd"
}
let risingfiltered = data.filter(risingfilter)

const arr1 = risingfiltered.map(row => row.danceability)
const average1 = arr1.reduce((a, b) => a + b, 0) / arr1.length;

const arr2 = risingfiltered.map(row => row.energy)
const average2 = arr2.reduce((a, b) => a + b, 0) / arr2.length;

const arr3 = risingfiltered.map(row => row.valence)
const average3 = arr3.reduce((a, b) => a + b, 0) / arr3.length;

const arr4 = risingfiltered.map(row => row.popularity)
const average4= (arr4.reduce((a, b) => a + b, 0) / arr4.length)*0.01;

var options = {
    series: [{
    name: "The Weeknd",
    data: [average1, average2, average3, average4],
  }],
  chart: {
  height: 600,
  type: 'radar',
},
title: {
  text: "The Weeknd",
  style: {
    fontSize: '20px',
    fontWeight: 'bold',
    color:  '#FFFFFF'
}
},
yaxis:{
  show: false
},
xaxis: {
  categories: ['Danceability', 'Energy', 'Valence', 'Popularity'],
  labels: {
    show: true,
    style: {
      colors: ["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"],
      fontSize: "15px"
    }
  }
}
};

  var chart = new ApexCharts(document.querySelector("#chart4"), options);
  chart.render();})