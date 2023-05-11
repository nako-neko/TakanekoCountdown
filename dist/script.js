function timeLeft(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
};

function showClock(clockNumber) {

  // 隐藏所有的时钟
  // var clocks = document.getElementsByClassName("clock-pane");
  // for (var i = 0; i < clocks.length; i++) {
  //   clocks[i].classList.remove("active");
  // };
  document.getElementById('clock-pane1').style.display = 'none';
  document.getElementById('clock2-pane').style.display = 'none';
  document.getElementById('clock3-pane').style.display = 'none';

  // 显示选定的时钟
  var clock = document.getElementById("clock-pane" + clockNumber);
  clock.classList.add("active");
};


$(document).ready(function() {
  var today = new Date();
  var live = 'June 23 ' + (today.getFullYear() ) + " 19:00:00";
  var tiktok1 = 'June 24 ' + (today.getFullYear() ) + " 12:45:00";
  var tiktok2 = 'June 24 ' + (today.getFullYear() ) + " 16:45:00";
  if (today.getMonth() == 5 && today.getDate() == 23 && today.getHours() == 19) {   //还没改！！！
    deadline = 'January 1 ' + (today.getFullYear()) + " 00:00:00";                  //还没改！！！
  };                                                                                //还没改！！！

  $("#header").hover(function() {
    $(this).toggleClass('bluelight');
  });
  
  $(".clock").hover(function() {
    $(this).toggleClass('bluelight');
  });

  $(".ptext").hover(function() {
    $(this).toggleClass('bluelight');
  });
  
  var setClock_live = function(newyear){
    var timeinterval = setInterval(function(){
      var t = timeLeft(newyear);
      $('#days1').text(t.days);
      $('#hours1').text(t.hours);
      $('#mins1').text(('0' + t.minutes).slice(-2));
      $('#secs1').text(('0' + t.seconds).slice(-2));
      if(t.total<=0){
        clearInterval(timeinterval);
        var now = new Date();
        var yearStr = now.getFullYear().toString();
        var str = "LIVE"
        $('#header1').text("Tokyo Live!!!");
        $('#days1').text(str[0]);
        $('#days-text1').text("Enjoy");
        $('#hours1').text(str[1]);
        $('#hours-text1').text("Takaneko's");
        $('#mins1').text(str[2]);
        $('#mins-text1').text("Live");
        $('#secs1').text(str[3]);
        $('#secs-text1').text("!!!");
        // $('#info1').text("Countdown starts again tomorrow!");
      }
    },1000);
  };

  var setClock_tt1 = function(newyear){
    var timeinterval = setInterval(function(){
      var t = timeLeft(newyear);
      $('#days2').text(t.days);
      $('#hours2').text(t.hours);
      $('#mins2').text(('0' + t.minutes).slice(-2));
      $('#secs2').text(('0' + t.seconds).slice(-2));
      if(t.total<=0){
        clearInterval(timeinterval);
        var now = new Date();
        var yearStr = now.getFullYear().toString();
        var str = "LOVE"
        $('#header2').text("TIkTok1!!!");
        $('#days2').text(str[0]);
        $('#days-text2').text("With");
        $('#hours2').text(str[1]);
        $('#hours-text2').text("Momoko");
        $('#mins2').text(str[2]);
        $('#mins-text2').text("&");
        $('#secs2').text(str[3]);
        $('#secs-text2').text("Mikuru");
        // $('#info2').text("Countdown starts again tomorrow!");
      }
    },1000);
  };

  var setClock_tt2 = function(newyear){
    var timeinterval = setInterval(function(){
      var t = timeLeft(newyear);
      $('#days3').text(t.days);
      $('#hours3').text(t.hours);
      $('#mins3').text(('0' + t.minutes).slice(-2));
      $('#secs3').text(('0' + t.seconds).slice(-2));
      if(t.total<=0){
        clearInterval(timeinterval);
        var now = new Date();
        var yearStr = now.getFullYear().toString();
        var str1 = "LOVE"
        $('#header3').text("TikTok2!!!");
        $('#days3').text(str1[0]);
        $('#days-text3').text("With");
        $('#hours3').text(str[1]);
        $('#hours-text3').text("Nao");
        $('#mins3').text(str[2]);
        $('#mins-text3').text("&");
        $('#secs3').text(str[3]);
        $('#secs-text3').text("Momona");
        // $('#info3').text("Countdown starts again tomorrow!");
      }
    },1000);
  };
  
  setClock_live(live);
  setClock_tt1(tiktok1);
  setClock_tt2(tiktok2);
  
});