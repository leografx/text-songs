(function(){

$.getJSON("xoTourLife.json",function(data){
  createTextSong(data);
});

var i = 0;
var data;
var stage = $('#stage');
var stop = false;
var track = document.getElementById("pbox");
var timeLine = 0;
var duration = track.currentTime;
track.autoplay = true;
track.load();


  function createTextSong(response){
    data = response;
    setInterval(function(){
      if(parseInt(track.duration) > parseInt(track.currentTime)){
        if(parseInt(track.currentTime) == parseInt(data[i].trigger)){
          render();
          i++;
        }
      }
    },500)
  }

  $('.pauseMe').on('click',function(){
    track.pause();
    //console.log(data[i].trigger);
    //console.log(parseFloat(track.currentTime).toFixed(2));
    //console.log("track duration: ",parseInt(track.duration)==parseInt(track.currentTime))
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
