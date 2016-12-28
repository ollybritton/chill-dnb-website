var play = document.getElementById('play');
var pause = document.getElementById('pause');
var audio = document.getElementById('audio');
var rewind = document.getElementById('rewind');
var slider = document.getElementById('slider');
var rewindAmount = 5;

var track = 0;

pause.style.display = "none";

var playAudio = function(){
  track++;
  audio.play();
  play.style.display = "none";
  pause.style.display = "block";
  rewind.style.color = "rgba(0,0,0,1)";
};

var pauseAudio = function(){
  track--;
  audio.pause();
  play.style.display = "block";
  pause.style.display = "none";
  rewind.style.color = "rgba(0,0,0,0.3)";
};

var rewindAudio = function(){
  if(track === 0) {
    return;
  } else {
    audio.currentTime -= rewindAmount;
  }
};

var updateVolume = function() {
  audio.volume = slider.value;
  console.log(slider.value)
};
