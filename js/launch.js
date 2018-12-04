var confirm_launch = function () {
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