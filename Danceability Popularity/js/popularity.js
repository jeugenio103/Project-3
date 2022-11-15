// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



// ---------- CHARTS ----------


// BAR CHART - Both

      
var options1 = {
  series: [{
  name: "Top Artist Monthly Listeners",
  data: [78.77, 77.95, 73.80, 68.20, 63.02, 60.81, 56.43, 53.19, 51.54, 39.95]
}, {
  name: "Top 88rising Monthly Listeners",
  data: [30.05, 10.01, 9.00, 3.59, 2.68, 2.67, 1.62, 1.58, 1.03, 0.98]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
  },
  xaxis: {
    categories: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th',
      '8th', '9th', '10th'
    ],
    title: {
      style: {
        color: "#f5f7ff",
      },
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis: {
    title: {
      text: 'Top 10',
      style: {
        color: "#f5f7ff",
      },
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " million"
      }
    }
  }
  };
var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
chart1.render();


// BAR CHART - Mainstream
      
var options2 = {
  series: [{
  name: "Monthly Listeners",
  data: [78.77, 77.95, 73.80, 68.20, 63.02, 60.81, 56.43, 53.19, 51.54, 39.95]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    borderRadius: 4,
    horizontal: true,
  }
},
dataLabels: {
  enabled: false
},
xaxis: {
  categories:  ["The Weeknd",
  "Ed Sheeran",
  "Taylor Swift",
  "David Guetta",
  "Justin Bieber",
  "Sam Smith",
  "Harry Styles",
  "Bad Bunny",
  "Rihanna",
  "Dua Lipa",
  ],
  title: {
    text: 'Listeners (millions)',
    style: {
      color: "#f5f7ff",
    },
  },
  labels: {
    style: {
      colors: "#f5f7ff",
    },
  },
},
yaxis: {
  title: {
    text: 'Artist Name',
    style: {
      color: "#f5f7ff",
    },
  },
  labels: {
    style: {
      colors: "#f5f7ff",
    },
  },
},
tooltip: {
  y: {
    formatter: function (val) {
      return val + " million"
    }
  }
}
};

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();

// BAR CHART - 88 Rising
      
var options3 = {
  series: [{
    name: "Monthly Listeners",
    data: [30.05, 10.01, 9.00, 3.59, 2.68, 2.67, 1.62, 1.58, 1.03, 0.98]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories:  ["Joji",
    "Niki",
    "Rich Brian",
    "Bibi",
    "Jackson Wang",
    "Chungha",
    "Stephanie Poetri",
    "Higher Brothers",
    "Milli",
    "Guapdad 4000"
  ],
    title: {
      text: 'Listeners (millions)',
      style: {
        color: "#f5f7ff",
      },
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis: {
    title: {
      text: 'Artist Name',
      style: {
        color: "#f5f7ff",
      },
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " million"
      }
    }
  }
  };

var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.render();

// AREA CHART - 88 Rising & Mainstream timeline
      
var options4 = {
  series: [{
  name: ["Eminem",
  null,
  "Taylor Swift",
  null, null,
  "Justin Bieber",
  "The Weeknd",
  "Drake",
  "Ed Sheeran",
  "Ariana Grande",
  "Post Malone",
  "Bad Bunny",
  null,
  "BTS",
  null, null, null, null, null, null, null, null, null, null, null,
  ],
  data: [56.43, null, 73.80, null, null, 68.20, 78.77, 60.81, 77.95, 58.19, 51.54, 63.02, null, 39.95,null, null, null, null, null, null, null, null, null, null, null]
}, {
  name: [null, null, null, null, null, null, null, null, null, null, null, null, null, null,
  "Rich Brian",
  "Niki",
  "Higher Brothers",
  "Joji",
  "Jackson Wang",
  "Chungha",
  null,
  "Stephanie Poetri",
  "Guapdad 4000",
  "Bibi",
  "Milli"
],
  data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 9.00, 10.01, 1.58, 30.05, 2.68, 2.67, null, 1.62, 0.98, 3.59, 1.03]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  },
  animations: {
    enabled: false
  }
},
stroke: {
  width: [5,5,4],
  curve: 'straight'
},
labels: [1998, 2002, 2006, 2007, 2008, 2009, 2010, 2010, 2011, 2011, 2011, 2012, 2013, 2014, 2015, 2016, 2016, 2017, 2017, 2017, 2018, 2019, 2019, 2019, 2020],
title: {
  text: 'Missing data (null values)'
},
xaxis: {
},
};
var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
chart4.render();

// PIE CHART

var options5 = {
  series: [6.5, 8.5, 5, 2, 2, 1.5, 1.5, 2.5, 2, 1, 3],
  chart: {
  width: 380,
  type: 'pie',
},
labels: ['R&B', 'Pop', 'Hip Hop', 'Dance Pop', 'Alternative', 'Folk', 'Rock', 'Trap', 'EDM', 'Kpop', 'Misc.'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart5 = new ApexCharts(document.querySelector("#chart5"), options5);
chart5.render();

// PIE CHART 2

var options6 = {
  series: [3.5, 1, 6.5, 1, 0.5, 0.5, 0, 1, 0, 2, 3],
  chart: {
  width: 380,
  type: 'pie',
},
labels: ['R&B', 'Pop', 'Hip Hop', 'Dance Pop', 'Alternative', 'Folk', 'Rock', 'Trap', 'EDM', 'Kpop', 'Misc.'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom',
      colors: [
        "#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0",
        "#3F51B5", "#546E7A", "#D4526E", "#8D5B4C", "#F86624",
        "#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"
      ],
    }
  }
}]
};

var chart6 = new ApexCharts(document.querySelector("#chart6"), options6);
chart6.render();

  // DEBUT TIME CHART

var options7 = {
  series: [

  {
    name: "Top Artists Debut Years",
    data: [
      {
        x: '',
        y: [
          new Date(1996, 10, 12).getTime(),
          new Date(2013, 4, 12).getTime()
        ],
      },
    ],
  },
  {
    name: "Top 88rising Artists Debut Years",
    data: [
      {
        x: '',
        y: [
          new Date(2015, 6, 15).getTime(),
          new Date(2020, 1, 13).getTime()
        ],
      },
    ],
  },
],
chart: {
height: 350,
type: 'rangeBar'
},
plotOptions: {
bar: {
  horizontal: true,
  barHeight: '50%',
  rangeBarGroupRows: true
}
},

fill: {
type: 'solid'
},
xaxis: {
type: 'datetime',
labels: {
  style: {
    colors: "#f5f7ff",
  },
},
},
legend: {
position: 'right',
labels: {
  style: {
    colors: "#f5f7ff",
  },
},
},
tooltip: {
custom: function(opts) {
  const fromYear = new Date(opts.y1).getFullYear()
  const toYear = new Date(opts.y2).getFullYear()
  const values = opts.ctx.rangeBar.getTooltipValues(opts)

  return (
    ''
  )
}
}
};

var chart7 = new ApexCharts(document.querySelector("#chart7"), options7);
chart7.render();


