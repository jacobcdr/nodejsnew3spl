var cirkel = document.getElementById("animeraCirkel");
var posX = 0;
var posY = 0;
var dx = 2;
var dy = 2;

function flyttaCirkel() {
  posX += dx;
  posY += dy;

  if(posX > window.innerWidth - 50 || posX < 0) dx = -dx;
  if(posY > window.innerHeight - 50 || posY < 0) dy = -dy;

  cirkel.style.left = posX + 'px';
  cirkel.style.top = posY + 'px';

  requestAnimationFrame(flyttaCirkel);
}

flyttaCirkel();
