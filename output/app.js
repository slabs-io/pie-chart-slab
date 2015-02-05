/* global Highcharts:false, slabs:false, _:false, moment:false, angular:false */

var testData = {
    values: ['mentions_17283728', 'mentions_17283729' ],
    categories: ['18/01/2015', '19/01/2015', '20/01/2015'],
    labels: {
        'mentions_17283728':'"hate" on the dailymail.co.uk',
        'mentions_17283729':'"terror" on the dailymail.co.uk'
    },
    data: [
        {
            'mentions_17283728' : 131,
            'mentions_17283729' : 94
        },
        {
            'mentions_17283728' : 130,
            'mentions_17283729' : 35
        },
        {
            'mentions_17283728': 33,
            'mentions_17283729' : 93
        }
    ]
};



// display the chart
slabs.getData().then(function (obj) {


    var networkData = obj || testData;

    var chartConfig = [{
        type: 'pie',
        data: []
    }];

    _.forEach(networkData.data, function(item, i) {
        var label = Object.keys(item)[0];
        var value = item[label];
        chartConfig[0].data.push({
            name     : networkData.categories[i],
            y        : value,
            sliced   : false,
            selected : false
        });
        console.log(chartConfig);
    });

    $('#container').highcharts({
        title: {
            text: 'Pie Chart',
            x: -20
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y} ({point.percentage:.1f}%)</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y} ({point.percentage:.1f}%)',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: chartConfig
    });



});


