let canvas;
let ctx;


let incrementor = 0;
let speed = 5;
let alright = 750; 
window.onload = function () {
  canvas = document.getElementById("creativeCoding");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  setInterval(drawBoxxy, 50);
};

function drawBoxxy() {
  incrementor = incrementor + speed;
  alright = alright - speed;
 

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);



  ctx.fillStyle = "blue";
  ctx.fillRect(incrementor, 10, 100, 100);
  ctx.fillStyle = "green";
  ctx.fillRect(30, incrementor, 250, 250);
  ctx.fillRect(700, incrementor, 280, 280);
  ctx.fillStyle = "purple";

  ctx.fillRect(alright, alright, alright, alright);

  ctx.fillStyle = "orange";
  ctx.fillRect(incrementor, incrementor, incrementor, incrementor);
}

