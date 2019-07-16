$(document).ready(() => {

setInterval(function() {
    // var today = new Date();
    // var time = today.toLocaleTimeString();
    // $("#time").html(time);
    var today = new Date()
    var hour = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()
    if(hour > 12){
        hour = hour - "12";
    }
    if (min <= 9){
        min = "0" + min;
    }
    if (sec <= 9){
        sec = "0" + sec;
    }
    var myTime = hour + ":" + min + ":" + sec
       
    $("#time").html(myTime)
}, 1000);

setInterval (function(){
  var today = new Date()
  var hour = today.getHours()
  var min = today.getMinutes()
  var sec = today.getSeconds()
  if(hour > 12){
    hour = hour - "12";
  }
  if(hour <= 9){
    hour = "0" + hour;
  }
  if(min <= 9){
    min = "0" + min;
  }
  if(sec <= 9){
    sec = "0" + sec;
  }
  var myColor = "#"+hour+min+sec
  
  $("#color").html(myColor)
  $("#color").css("background-color", `${myColor}`)
  $("#time").css("background-color", `${myColor}`)
},1000)
 





})


