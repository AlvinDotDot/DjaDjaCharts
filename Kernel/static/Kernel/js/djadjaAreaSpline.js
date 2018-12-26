Highcharts.chart('container', {
            chart: {
                backgroundColor: 'rgba(125, 125, 0, 0)',
                type: 'areaspline'
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
                categories: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday'
                ],
                lineColor: 'rgba(0, 0, 0, 1)',
                minorGridLineColor: 'rgba(0, 0, 0, 1)',
                tickColor: 'rgba(0, 0, 0, 1)',
                labels: {
                    style: {
                        color: 'rgba(0, 0, 0, 1)'
                    }
                },
                plotBands: [{ // visualize the weekend
                    from: 4.5,
                    to: 6.5,
                    color: 'rgba(153, 180, 51, 0.8)'
                }]
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
                name: 'John',
                data: [3, 4, 3, 5, 4, 10, 12]
            }, {
                name: 'Jane',
                data: [1, 3, 4, 3, 3, 5, 4]
            }]
        });