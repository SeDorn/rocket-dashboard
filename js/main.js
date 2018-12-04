var socket = new WebSocket("ws://localhost:3000/");

var ROCKETDATA = {
    name: "Andi 1",
    burn_duration: 1.8,
    launched: false
};


var setRocketData = function(data){
    document.getElementById("rocket_name").innerHTML = data.name;
}

document.getElementById("launch_button").onclick = function() {
    if(ROCKETDATA.launched == false){
        ROCKETDATA.launched = true;
        var msg = {
            type: "launch",
            data: "laucn",
            sender: "client",
            date: Date.now()
        };
    
        socket.send(JSON.stringify(msg));

        document.getElementById("launch_button").style.display = "none";
        document.getElementById("launch_confirmed").style.display = "inline";
    
        var startTime = Date.now();
    
        var interval = setInterval(function() {
            var elapsedTime = Date.now() - startTime;
            document.getElementById("engineburn").innerHTML = (elapsedTime / 1000).toFixed(1);
            document.getElementById("engineburn_progress").style.width = Math.round((100 * (elapsedTime / 1000).toFixed(3)) / 2.1) + "%";
            document.getElementById("engineburn_progresstext").innerHTML = Math.round(((100 * (elapsedTime / 1000).toFixed(3)) / 2.1)) + "% of burn complete";
    
            if(Math.round(((100 * (elapsedTime / 1000).toFixed(3)) / 2.1)) >= 100) {
                clearInterval(interval);
                document.getElementById("engineburn").innerHTML = "BURN COMPLETE";
            }
        }, 100);
    }
}


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


socket.onopen = function (event) {
    var msg = {
        type: "status",
        data: "connected",
        sender: "client",
        date: Date.now()
    };

    socket.send(JSON.stringify(msg));
};


socket.onmessage = function (event) {
    var json = JSON.parse(event.data);
    switch(json.type){
        case "altitude":
            var altitude = json.data;
            document.getElementById("altitude").innerHTML = altitude;
        break;
        case "temperature":
            var temperature = json.data;
            document.getElementById("temperature").innerHTML = temperature;
        break;
    }
};



altitudeChart.setOption(option);

setRocketData(ROCKETDATA);













