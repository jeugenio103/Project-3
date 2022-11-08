d3.json("/Collabs/collab_html/js/all_collabs.js").then((importedData) => {
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
  let collab_data = data.filter(filterNumCollab)
  
  // Filter data based on Artist
  function filterArtist(data, artist_name) {
    return data.featured_artist == artist_name
  }
  // ---- Artist: 88rising ----
  let collab_88rising = collab_data.filter(filterArtist(collab_data, '88rising'))
  const tracks_88 = collab_88rising.map(row => row.featured)
  const tracks_88_size = tracks_88.length;
  
  const pop_88 = collab_88rising.map(row => row.popularity)
  const avg_pop_88 = pop_88.reduce((a, b) => a + b, 0) / tracks_88_size;
  
    // ---- Artist: Higher Brothers ----
    let collab_highbro = collab_data.filter(filterArtist(collab_data, 'Higher Brothers'))
    const tracks_highbro = collab_highbro.map(row => row.featured)
    const tracks_highbro_size = tracks_highbro.length;
    
    const pop_highbro = collab_highbro.map(row => row.popularity)
    const avg_pop_highbro = pop_highbro.reduce((a, b) => a + b, 0) / tracks_highbro_size;

    // ---- Artist: guapdad 4000 ----
    let collab_4k = collab_data.filter(filterArtist(collab_data, 'Guapdad 4000'))
    const tracks_4k = collab_4k.map(row => row.featured)
    const tracks_4k_size = tracks_4k.length;
    
    const pop_4k = collab_4k.map(row => row.popularity)
    const avg_pop_4k = pop_4k.reduce((a, b) => a + b, 0) / tracks_4k_size;

    // ---- Artist: Rich Brian ----
    let collab_rich = collab_data.filter(filterArtist(collab_data, 'Rich Brian'))
    const tracks_rich = collab_rich.map(row => row.featured)
    const tracks_rich_size = tracks_rich.length;
    
    const pop_rich = collab_rich.map(row => row.popularity)
    const avg_pop_rich = pop_rich.reduce((a, b) => a + b, 0) / tracks_rich_size;

    // ---- Artist: NIKI ----
    let collab_niki = collab_data.filter(filterArtist(collab_data, 'NIKI'))
    const tracks_niki = collab_niki.map(row => row.featured)
    const tracks_niki_size = tracks_niki.length;
    
    const pop_niki = collab_niki.map(row => row.popularity)
    const avg_pop_niki = pop_niki.reduce((a, b) => a + b, 0) / tracks_niki_size;

    // ---- Artist: BIBI ----
    let collab_bibi = collab_data.filter(filterArtist(collab_data, 'BIBI'))
    const tracks_bibi = collab_bibi.map(row => row.featured)
    const tracks_bibi_size = tracks_bibi.length;
    
    const pop_bibi = collab_bibi.map(row => row.popularity)
    const avg_pop_bibi = pop_bibi.reduce((a, b) => a + b, 0) / tracks_bibi_size;

    // ---- Artist: CHUNG HA ----
    let collab_ha = collab_data.filter(filterArtist(collab_data, 'CHUNG HA'))
    const tracks_ha = collab_ha.map(row => row.featured)
    const tracks_ha_size = tracks_ha.length;
    
    const pop_ha = collab_ha.map(row => row.popularity)
    const avg_pop_ha = pop_ha.reduce((a, b) => a + b, 0) / tracks_ha_size;

    // ---- Artist: Joji ----
    let collab_joji = collab_data.filter(filterArtist(collab_data, 'Joji'))
    const tracks_joji = collab_joji.map(row => row.featured)
    const tracks_joji_size = tracks_joji.length;
    
    const pop_joji = collab_joji.map(row => row.popularity)
    const avg_pop_joji = pop_joji.reduce((a, b) => a + b, 0) / tracks_joji_size;
    // ---------- CHARTS ----------
    // BAR CHART: 88rising Artists Total Collaborated Tracks
    var options = {
        series: [
        {
          name: 'Total Tracks',
          data: [
            {
              x: '88rising',
              y: tracks_88_size,
              goals: [
                {
                  name: 'Popularity',
                  value: avg_pop_88,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
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
                  strokeColor: '#775DD0'
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
                  strokeColor: '#775DD0'
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
                  strokeColor: '#775DD0'
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
                  strokeHeight: 13,
                  strokeWidth: 0,
                  strokeLineCap: 'round',
                  strokeColor: '#775DD0'
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
                  strokeColor: '#775DD0'
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
                  strokeColor: '#775DD0'
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
                  strokeHeight: 2,
                  strokeDashArray: 2,
                  strokeColor: '#775DD0'
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
      colors: ['#00E396'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Total Tracks', 'Popularity'],
        markers: {
          fillColors: ['#00E396', '#775DD0']
        }
      }
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
})