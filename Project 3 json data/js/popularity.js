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

