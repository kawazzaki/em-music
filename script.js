var cd = document.getElementById("cd");
var rotation = 0;
var rotate_cd = false;

var play = document.getElementById("btn-play");
var next = document.getElementById("btn-next");

var player = new Audio();
player.loop= false;
var audios = [
  'src/audios/song1.mp3',
  'src/audios/song2.mp3',
  'src/audios/song3.mp3',
  'src/audios/song4.mp3'
]
var index = 0;

onload = function(){
  player.src = audios[index];
  play.innerHTML = '<i class="fa-solid fa-play">';

}
play.addEventListener('click',set_rotation);
next.addEventListener('click',set_audio);

function set_audio(){
  rotate_cd = false;
  Rotation();
  index = (index+1) % audios.length;
  player.src = audios[index];
  
}

function set_rotation(){
  rotate_cd = !rotate_cd;
  if (rotate_cd) {
    player.play()
    Rotation();
  }
}
function Rotation(){
  if (!rotate_cd) {
    player.pause();
    play.innerHTML = '<i class="fa-solid fa-play">';
    return;
  }
  if(!player.paused){
    rotation +=1;
    cd.style.rotate = rotation + 'deg';
    if(play.innerHTML != '<i class="fa-solid fa-pause"></i>') play.innerHTML = '<i class="fa-solid fa-pause"></i>';
    setTimeout(Rotation,10);
  }
}
