var times = new Date();
var month = times.getMonth() + 1;
if (month <= 9) {
    month = "0" + month;
}
var day = times.getDate();
var days = times.getDate();
var hour = times.getHours();
var min = times.getMinutes();
if (day < 10) {

    day = "0" + day;

    days = "0" + days;

}
if (min < 10) {

    min = "0" + min;
}
if (document.getElementById("d2")) {
    document.getElementById("d2").innerHTML = "2021-" + month + "-" + (days) + " 09:06";
    // document.getElementById("d2").innerHTML = "2020-12-31 09:06";
}
if (document.getElementById("d21")) {
    document.getElementById("d21").innerHTML = "2021-" + month + "-" + (days);
    // document.getElementById("d21").innerHTML = "2020-12-31";
}
if (document.getElementById("d3")) {
    document.getElementById("d3").innerHTML = "2021/" + month + "/" + (days);
    // document.getElementById("d3").innerHTML = "2020/12/31";
    document.getElementById("d7").innerHTML = "2021/" + month + "/" + (days);
    // document.getElementById("d7").innerHTML = "2020/12/31";
}
if (document.getElementById("d4")) {
    document.getElementById("d4").innerHTML = "2021-" + month + "-" + day;
    document.getElementById("d8").innerHTML = "2021-" + month + "-" + day;
}
if (document.getElementById("d5")) {
    document.getElementById("d5").innerHTML = "2021-" + month + "-" + (days) + " " + hour + ":" + min;
}

