//EDSHEERAN ------------------------------------------------------------------------------

d3.json("js/mainstreamdata.js").then((importedData) => {
  // console.log(importedData);
  let data = importedData;
  // Sort the data array by using the releasae date value.
  data.sort(function(a, b) {
    return parseFloat(a.release_date) - parseFloat(b.release_date);
    
  });

function risingfilter(rising) {
return rising.artist == "Ed Sheeran"
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

var options1 = {
  series: [{
    color: '#0FFF50',
    name: "Ed Sheeran",
    data: [average1, average2, average3, average4],
}],
chart: {
height: 600,
type: 'radar',
},
title: {
text: "Ed Sheeran",
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

var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
chart1.render();})

// JOJI ------------------------------------------------------------------------------
d3.json("js/88data.js").then((importedData) => {
  // console.log(importedData);
  let data = importedData;
  // Sort the data array by using the releasae date value.
  data.sort(function(a, b) {
    return parseFloat(a.release_date) - parseFloat(b.release_date);
    
  });

//Joji 
function risingfilter(rising) {
return rising.artist == "Joji"
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

var options2 = {
  series: [{
  color: '#0000FF',
  name: 'Joji',
  data: [average1, average2, average3, average4],
}],
chart: {
height: 600,
type: 'radar',
},
title: {
text: "Joji",
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

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();})

// NIKI ------------------------------------------------------------------------------

d3.json("js/88data.js").then((importedData) => {
  // console.log(importedData);
  let data = importedData;
  // Sort the data array by using the releasae date value.
  data.sort(function(a, b) {
    return parseFloat(a.release_date) - parseFloat(b.release_date);
    
  });

//Niki 
function risingfilter(rising) {
return rising.artist == "NIKI"
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

var options3 = {
  series: [{
  color: '#8b008b',
  name: 'NIKI',
  data: [average1, average2, average3, average4],
}],
chart: {
height: 600,
type: 'radar',
},
title: {
text: "NIKI",
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

var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.render();})

// RICH BRIAN ------------------------------------------------------------------------------

d3.json("js/88data.js").then((importedData) => {
  // console.log(importedData);
  let data = importedData;
  // Sort the data array by using the releasae date value.
  data.sort(function(a, b) {
    return parseFloat(a.release_date) - parseFloat(b.release_date);
    
  });

 
function risingfilter(rising) {
return rising.artist == "Rich Brian"
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

var options4 = {
  series: [{
  color: '#FF0000',
  name: 'Rich Brian',
  data: [average1, average2, average3, average4],
}],
chart: {
height: 600,
type: 'radar',
},
title: {
text: "Rich Brian",
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

var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
chart4.render();})

// TAYLOR SWIFT ------------------------------------------------------------------------------

d3.json("js/mainstreamdata.js").then((importedData) => {
  // console.log(importedData);
  let data = importedData;
  // Sort the data array by using the releasae date value.
  data.sort(function(a, b) {
    return parseFloat(a.release_date) - parseFloat(b.release_date);
    
  });
 
function risingfilter(rising) {
return rising.artist == "Taylor Swift"
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

var options5 = {
  series: [{
  color: '#ff8c00',
  name: "Taylor Swift",
  data: [average1, average2, average3, average4],
}],
chart: {
height: 600,
type: 'radar',
},
title: {
text: "Taylor Swift",
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

var chart5 = new ApexCharts(document.querySelector("#chart5"), options5);
chart5.render();})

// THE WEEKND ------------------------------------------------------------------------------

d3.json("js/mainstreamdata.js").then((importedData) => {
  // console.log(importedData);
  let data = importedData;
  // Sort the data array by using the releasae date value.
  data.sort(function(a, b) {
    return parseFloat(a.release_date) - parseFloat(b.release_date);
    
  });

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

var options6 = {
  series: [{
  color: '#ff1493',
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

var chart6 = new ApexCharts(document.querySelector("#chart6"), options6);
chart6.render();})