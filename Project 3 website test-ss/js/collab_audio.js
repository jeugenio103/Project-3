d3.json("js/all_collabs.js").then((importedData) => {
    // console.log(importedData);
    let data = importedData;
  
    // Sort the data array by using the popularity.
    data.sort(function(a, b) {
      return parseFloat(b.popularity) - parseFloat(a.popularity);
    });

    // Filter data for collaborations where num_artists > 1
function filterNumCollab(data) {
    return data.num_artists > 1
  }
  let risingfiltered = data.filter(filterNumCollab)
  
  
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
      name: 'Average Audio Features',
      data: [average1, average2, average3, average4],
    }],
    chart: {
    height: 600,
    type: 'radar',
  },
  title: {
    text: "Average Audio Feature",
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
  
    var chart = new ApexCharts(document.querySelector("#chart2"), options);
    chart.render();})