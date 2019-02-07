var publick = $.get("https://ipinfo.io", function(response) {
    console.log(response);
  }, "jsonp");

var os = navigator.platform;
var battery = navigator.getBattery()




$("#showdatabutton").on("click", function(){

navigator.getBattery().then(function(battery) {
    $("#dataprompt").hide(2000);
    $("#showdatabutton").hide(2000);
    var level = battery.level;
    var charging = battery.charging;
    var tillFull = battery.chargingTime / 60;
    var tillEmpty = battery.dischargingTime / 60;
    var ipInformation = publick.responseJSON;

    $("#browserleak").html("<h3>Browser:</h3><p>Browser Name: " + platform.name + "<br>Browser Version: "+ platform.version+"<br>Operating System: "+ os+"<br></p><h3>Battery:</h3><p>Battery level: " + ((level / 1) *100) + "%<br>Charging: " + charging + "<br>Minutes Until Charged: " + tillFull +"<br>Battery Life Remaining: " + tillEmpty + "<br></p>");
    $("#ipinfo").html("<h3>Your IP Information:</h3><br><h5>IP Address: " + ipInformation.ip +"<br>City: " + ipInformation.city + "<br>Region: "+ipInformation.region+"<br>Postal Code: "+ipInformation.postal+"<br>Country: "+ipInformation.country+"<br>Location: "+ipInformation.loc+"<br>Organization: "+ipInformation.org+"</h5><br><br><br>")
    $("#browserleak").show(2000);
    $("#ipinfo").show(2000);

});

})