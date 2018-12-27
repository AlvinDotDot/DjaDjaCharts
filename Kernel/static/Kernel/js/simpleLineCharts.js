window.addEventListener('load', function(_e) {

  var chart = new Highcharts.Chart({
    chart: {
      renderTo: document.getElementById('report_charts'),
      backgroundColor: '#d4d3d4',
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

  $('#colorSelectorLine').ColorPicker({
  color: '#0000ff',
  onShow: function (colpkr) {
    $(colpkr).fadeIn(500);
    return false;
  },
  onHide: function (colpkr) {
    $(colpkr).fadeOut(500);
    return false;
  },
  onChange: function (hsb, hex, rgb) {
    $('#colorSelectorLine div').css('backgroundColor', '#' + hex);
        var series = chart.series[0];
        series.color = '#' + hex;
        series.graph.attr({ 
            stroke: '#' + hex
        });
        chart.legend.colorizeItem(series, series.visible);
        $.each(series.data, function(i, point) {
            point.graphic.attr({
                fillColor: '#' + hex
            });
            point.update({
            marker:{
                fillColor: '#' + hex,
                states: {
                      hover: {
                        fillColor: '#' + hex,
                        lineColor: '#' + hex                                 
                    }
                }
            }
            });
        });
        series.redraw();
      }
  });

  $('#graphTitle').keyup(function () {
    chart.setTitle({ text: $('#graphTitle')[0].value });
});

  $('#graphSubTitle').keyup(function () {
    chart.setSubtitle({ text: $('#graphSubTitle')[0].value });
});

  $('#graphYaxisTitle').keyup(function () {
    chart.yAxis[0].setTitle({
        text: $('#graphYaxisTitle')[0].value
  });
  });

  $('#graphXaxisTitle').keyup(function () {
    chart.xAxis[0].setTitle({
        text: $('#graphXaxisTitle')[0].value
  });

});
});