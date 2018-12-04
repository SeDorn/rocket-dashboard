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
    if(ROCKETDATA.launched === false){
        ROCKETDATA.launched = true;
        var msg = {
            type: "launch",
            data: "laucn",
            sender: "client",
            date: Date.now()
        };
    
        socket.send(JSON.stringify(msg));
    }
}


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
    handleMessage(json);
};



altitudeChart.setOption(option);

setRocketData(ROCKETDATA);













