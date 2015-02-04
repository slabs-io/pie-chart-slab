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


    var data = obj || testData;

    var series = [];

    _.forEach(data.values, function(val){

        var seriesItem = { data: [] };
        if(data.labels[val]){
            seriesItem.name = data.labels[val];
        }else{
            seriesItem.name = val;
        }

        _.forEach(data.data, function(item){
            seriesItem.data.push(item[val]);
        });

        series.push(seriesItem);
    });


    $('#container').highcharts({
        title: {
            text: 'Pie Chart',
            x: -20 //center
        },
        xAxis: {
            categories: data.categories
        },
        series: series
    });



});


