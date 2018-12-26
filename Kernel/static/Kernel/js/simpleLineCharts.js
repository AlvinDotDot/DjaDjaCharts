window.addEventListener('load', function(_e) {
  console.debug(abscisse);
  var chart = new Highcharts.Chart({
    chart: {
      renderTo: document.getElementById('report_charts'),
      backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
                [0, '#d4d3d4'],
                [1, '#aaaaaa']
            ]
        },
    },
    title: {
        text: 'Average fruit consumption during one week'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 200,
        y: 50,
        floating: true,
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.7)'
    },
    xAxis: {
        categories: abscisse,
        lineColor: 'rgba(0, 0, 0, 1)',
        minorGridLineColor: 'rgba(0, 0, 0, 1)',
        tickColor: 'rgba(0, 0, 0, 1)',
        labels: {
            style: {
                color: 'rgba(0, 0, 0, 1)'
            }
        },
    },
    yAxis: {
        title: {
            text: 'Fruit units',
            style: {
                color: 'rgba(0, 0, 0, 1)'
            }
        },
        lineColor: 'rgba(0, 0, 0, 1)',
        minorGridLineColor: 'rgba(0, 0, 0, 1)',
        tickColor: 'rgba(0, 0, 0, 1)',
        labels: {
            style: {
                color: 'rgba(0, 0, 0, 1)'
            }
        },
    },
    tooltip: {
        shared: true,
        valueSuffix: ' units'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 1
        }
    },
    series: [{
        name: 'test',
        data: ordonnee
    }]
});

});