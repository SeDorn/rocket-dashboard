var createChart = function () {
    var altitudeChart = echarts.init(document.getElementById('chart_alt'));

    var option = {
        xAxis: {
            type: 'category',
            data: []
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [],
            type: 'line',
            smooth: true
        }]
    };
}