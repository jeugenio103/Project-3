d3.json("js/all_collabs.js").then((importedData) => {
    // console.log(importedData);
    let data = importedData;
  
    // Sort the data array by using the popularity.
    data.sort(function(a, b) {
      return parseFloat(b.popularity) - parseFloat(a.popularity);
    });

    // Filter data for collaborations where num_artists > 1
function filterNumCollab(data) {
    return (data.num_artists > 1 && data.in_88rising == false)
  }
  
  let collab_data = data.filter(filterNumCollab)
  console.log(collab_data)
  // Filter data based on Artist
  // ---- Artist: 88rising ----
  let collab_88rising = collab_data.filter(collab_data => collab_data.featured_artist == '88rising')
  const tracks_88 = collab_88rising.map(row => row.featured)
  const tracks_88_size = tracks_88.length;
  
  const pop_88 = collab_88rising.map(row => row.popularity)
  const avg_pop_88 = pop_88.reduce((a, b) => a + b, 0) / tracks_88_size;
  
    // ---- Artist: Higher Brothers ----
    let collab_highbro = collab_data.filter(collab_data => collab_data.featured_artist == 'Higher Brothers')
    const tracks_highbro = collab_highbro.map(row => row.featured)
    const tracks_highbro_size = tracks_highbro.length;
    
    const pop_highbro = collab_highbro.map(row => row.popularity)
    const avg_pop_highbro = pop_highbro.reduce((a, b) => a + b, 0) / tracks_highbro_size;

    // ---- Artist: guapdad 4000 ----
    let collab_4k = collab_data.filter(collab_data => collab_data.featured_artist == 'Guapdad 4000')
    const tracks_4k = collab_4k.map(row => row.featured)
    const tracks_4k_size = tracks_4k.length;
    
    const pop_4k = collab_4k.map(row => row.popularity)
    const avg_pop_4k = pop_4k.reduce((a, b) => a + b, 0) / tracks_4k_size;

    // ---- Artist: Rich Brian ----
    let collab_rich = collab_data.filter(collab_data => collab_data.featured_artist == 'Rich Brian')
    const tracks_rich = collab_rich.map(row => row.featured)
    const tracks_rich_size = tracks_rich.length;
    
    const pop_rich = collab_rich.map(row => row.popularity)
    const avg_pop_rich = pop_rich.reduce((a, b) => a + b, 0) / tracks_rich_size;

    // ---- Artist: NIKI ----
    let collab_niki = collab_data.filter(collab_data => collab_data.featured_artist == 'NIKI')
    const tracks_niki = collab_niki.map(row => row.featured)
    const tracks_niki_size = tracks_niki.length;
    
    const pop_niki = collab_niki.map(row => row.popularity)
    const avg_pop_niki = pop_niki.reduce((a, b) => a + b, 0) / tracks_niki_size;

    // ---- Artist: BIBI ----
    let collab_bibi = collab_data.filter(collab_data => collab_data.featured_artist == 'BIBI')
    const tracks_bibi = collab_bibi.map(row => row.featured)
    const tracks_bibi_size = tracks_bibi.length;
    
    const pop_bibi = collab_bibi.map(row => row.popularity)
    const avg_pop_bibi = pop_bibi.reduce((a, b) => a + b, 0) / tracks_bibi_size;

    // ---- Artist: CHUNG HA ----
    let collab_ha = collab_data.filter(collab_data => collab_data.featured_artist == 'CHUNG HA')
    const tracks_ha = collab_ha.map(row => row.featured)
    const tracks_ha_size = tracks_ha.length;
    
    const pop_ha = collab_ha.map(row => row.popularity)
    const avg_pop_ha = pop_ha.reduce((a, b) => a + b, 0) / tracks_ha_size;

    // ---- Artist: Joji ----
    let collab_joji = collab_data.filter(collab_data => collab_data.featured_artist == 'Joji')
    const tracks_joji = collab_joji.map(row => row.featured)
    const tracks_joji_size = tracks_joji.length;
    
    const pop_joji = collab_joji.map(row => row.popularity)
    const avg_pop_joji = pop_joji.reduce((a, b) => a + b, 0) / tracks_joji_size;

    // ---- Artist: Jackson Wang ----
    let collab_wang = collab_data.filter(collab_data => collab_data.featured_artist == 'Jackson Wang')
    const tracks_wang = collab_wang.map(row => row.featured)
    const tracks_wang_size = tracks_wang.length;
    
    const pop_wang = collab_wang.map(row => row.popularity)
    const avg_pop_wang = pop_wang.reduce((a, b) => a + b, 0) / tracks_wang_size;

    // ---- Artist: Stephanie Poetri ----
    let collab_steph = collab_data.filter(collab_data => collab_data.featured_artist == 'Stephanie Poetri')
    const tracks_steph = collab_steph.map(row => row.featured)
    const tracks_steph_size = tracks_steph.length;
    
    const pop_steph = collab_steph.map(row => row.popularity)
    const avg_pop_steph = pop_steph.reduce((a, b) => a + b, 0) / tracks_steph_size;

     // ---- Artist: Warren Hue ----
    let collab_hue = collab_data.filter(collab_data => collab_data.featured_artist == 'Warren Hue')
    const tracks_hue = collab_hue.map(row => row.featured)
    const tracks_hue_size = tracks_hue.length;
    
    const pop_hue = collab_hue.map(row => row.popularity)
    const avg_pop_hue = pop_hue.reduce((a, b) => a + b, 0) / tracks_hue_size;

    // ---- Artist: Warren Hue ----
    let collab_ape = collab_data.filter(collab_data => collab_data.featured_artist == 'Keith Ape')
    const tracks_ape = collab_hue.map(row => row.featured)
    const tracks_ape_size = tracks_ape.length;
   
    const pop_ape = collab_ape.map(row => row.popularity)
    const avg_pop_ape = pop_ape.reduce((a, b) => a + b, 0) / tracks_ape_size;

     // ---- Artist: Warren Hue ----
    let collab_mili = collab_data.filter(collab_data => collab_data.featured_artist == 'Mili')
    const tracks_mili = collab_mili.map(row => row.featured)
    const tracks_mili_size = tracks_mili.length;
    
    const pop_mili = collab_mili.map(row => row.popularity)
    const avg_pop_mili = pop_mili.reduce((a, b) => a + b, 0) / tracks_mili_size;   

    // ---------- CHARTS ----------
    // BAR CHART: 88rising Artists Total Collaborations with Artists Outside of 88rising
    var options = {
        series: [
        {
          name: 'Total Tracks',
          data: [
            {
              x: '88rising',
              y: tracks_88_size * 2,
              goals: [
                {
                  name: 'Popularity',
                  value: avg_pop_88,
                  strokeHeight: 5,
                  strokeColor: '#00E396'
                }
              ]
            },
            {
              x: 'Higher Brothers',
              y: tracks_highbro_size,
              goals: [
                {
                  name: 'Popularity',
                  value: avg_pop_highbro,
                  strokeHeight: 5,
                  strokeColor: '#00E396'
                }
              ]
            },
            {
              x: 'Guapdad 4000',
              y: tracks_4k_size,
              goals: [
                {
                  name: 'Popularity',
                  value: avg_pop_4k,
                  strokeHeight: 5,
                  strokeColor: '#00E396'
                }
              ]
            },
            {
              x: 'Rich Brian',
              y: tracks_rich_size,
              goals: [
                {
                  name: 'Popularity',
                  value: avg_pop_rich,
                  strokeHeight: 5,
                  strokeColor: '#00E396'
                }
              ]
            },
            {
              x: 'NIKI',
              y: tracks_niki_size,
              goals: [
                {
                  name: 'Popularity',
                  value: avg_pop_niki,
                  strokeHeight: 5,
                  strokeColor: '#00E396'
                }
              ]
            },
            {
              x: 'BIBI',
              y: tracks_bibi_size,
              goals: [
                {
                  name: 'Popularity',
                  value: avg_pop_bibi,
                  strokeHeight: 5,
                  strokeColor: '#00E396'
                }
              ]
            },
            {
              x: 'CHUNG HA',
              y: tracks_ha_size,
              goals: [
                {
                  name: 'Popularity',
                  value: avg_pop_ha,
                  strokeHeight: 5,
                  strokeColor: '#00E396'
                }
              ]
            },
            {
              x: 'Joji',
              y: tracks_joji_size,
              goals: [
                {
                  name: 'Popularity',
                  value: avg_pop_joji,
                  strokeHeight: 5,
                  strokeColor: '#00E396'
                }
              ]
            },
            {
              x: 'Jackson Wang',
              y: tracks_wang_size,
              goals: [
                {
                  name: 'Popularity',
                  value: avg_pop_wang,
                  strokeHeight: 5,
                  strokeColor: '#00E396'
                }
              ]
            },
            {
              x: 'Stephanie Poetri',
              y: tracks_steph_size,
              goals: [
                {
                  name: 'Popularity',
                  value: avg_pop_steph,
                  strokeHeight: 5,
                  strokeColor: '#00E396'
                }
              ]
            },
            {
              x: 'Warren Hue',
              y: tracks_hue_size,
              goals: [
                {
                  name: 'Popularity',
                  value: avg_pop_hue,
                  strokeHeight: 5,
                  strokeColor: '#00E396'
                }
              ]
            },
            {
              x: 'Keith Ape',
              y: tracks_ape_size,
              goals: [
                {
                  name: 'Popularity',
                  value: avg_pop_ape,
                  strokeHeight: 5,
                  strokeColor: '#00E396'
                }
              ]
            },
            {
              x: 'Mili',
              y: tracks_mili_size,
              goals: [
                {
                  name: 'Popularity',
                  value: avg_pop_mili,
                  strokeHeight: 5,
                  strokeColor: '#00E396'
                }
              ]
            }
          ]
        }
      ],
        chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      colors: ['#FDE12D'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Total Tracks', 'Popularity'],
        labels : {
          colors: '#f5f7ff'
        },
        markers: {
          fillColors: [ '#FDE12D','#00E396']
        }
      },
      tooltip: {
        colors: '#000000'

      },
      xaxis : {
        labels: {
          style: {
            colors: "#f5f7ff",
          }
        }
      },
      yaxis: {
        show: true,
        min: 0,
        max: 50,
        labels: {
          style: {
            colors: "#f5f7ff",
          },
        },
      }
      };

    
      var chart = new ApexCharts(document.querySelector("#chart3"), options);
      chart.render();
})