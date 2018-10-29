$(document).ready(function(){
  console.log("[examplecanvas-action.js] I am the example script");

  let ctx;
  let canvasOffset;
  let offsetX;
  let offsetY;
  init();

  function init() {
    ctx = document.getElementById('canvas').getContext('2d');
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
  }

  function resizeCanvas(){
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    canvasOffset=$("#canvas").offset();
    offsetX=canvasOffset.left;
    offsetY=canvasOffset.top;

  }

  function handleMouseMove(e){
      mouseX=parseInt(e.clientX-offsetX);
      mouseY=parseInt(e.clientY-offsetY);
      drawCursor(mouseX,mouseY);
    }

    function drawCursor(mouseX,mouseY){
      ctx.beginPath();
      ctx.arc(mouseX,mouseY,50,0,2*Math.PI);
      ctx.stroke();
    }

  $("#canvas").mousemove(function(e){handleMouseMove(e);});
});
