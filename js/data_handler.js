var handleMessage = function (msg) {
    switch(json.type){
        case "altitude":
            var altitude = json.data;
            document.getElementById("altitude").innerHTML = altitude;
            break;
        case "temperature":
            var temperature = json.data;
            document.getElementById("temperature").innerHTML = temperature;
            break;
        case "launch":
            if(json.data == "confirmed"){
                confirm_launch();
            }
            break;
    }
}