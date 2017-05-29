(function(){

$.getJSON("xoTourLife.json",function(data){
  createTextSong(data);
});
var prev = 0;
var i = 0;
var data;

var stage = $('#stage');
var stop = false;
var track = document.getElementById("pbox");
var timeLine = 0;
var duration = track.currentTime;
track.autoplay = true;
track.load();

$('.vbox').on('click',function(){
  stop = true;
  track.autoplay=false;

  track.stop();
  track.load();
});




  function createTextSong(response){
    data = response;
    setInterval(function(){
      if(parseInt(track.currentTime) == parseInt(data[i].trigger)){
        //console.log(parseFloat(track.currentTime).toFixed(2),track.currentTime,data[i].text)
        render();
        i++;
      }
    },500)
  }

  $('.pauseMe').on('click',function(){
    track.pause();
    console.log(data[i].trigger);
    console.log(parseFloat(track.currentTime).toFixed(2));
  })



function render(){
    testAnim(data[i].animation||'rubberBand');
    stage.html(data[i].text);
    stage.css('fontFamily',data[i].font);
    stage.css('fontSize',data[i].fontSize);
    stage.css('backgroundColor',data[i].backgroundColor);
    stage.css('color',data[i].fontColor);
}

function testAnim(x) {
  $('#stage').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass();
  });
}

})();
