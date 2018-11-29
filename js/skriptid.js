function myFunction() {
    var x = document.getElementById("test");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function iCanHasBeer() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var output = document.getElementById('sisu');
    var remaining;
    if (hours > 10 || hours < 22) {
        remaining = (22 * 60) - (hours * 60) - minutes;
        output.innerHTML = '<p>you can has beer!</p><p>Time till no beer: ' + (remaining - (remaining % 60)) / 60 + ' : ' + (remaining % 60) + '</p>';
    } else {
        output.innerHTML = '<p>you can no has beer...</p>';
    }
}