$(document).ready(function(){
  console.log("[cursors-action.js] I am the cursors script");

  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;


  var canvasOffset=$("#canvas").offset();
  var offsetX=canvasOffset.left;
  var offsetY=canvasOffset.top;

  function handleMouseMove(e){
      mouseX=parseInt(e.clientX-offsetX);
      mouseY=parseInt(e.clientY-offsetY);



      drawCursor(mouseX,mouseY);
      //$("#movelog").html("Move: "+ mouseX + " / " + mouseY);

      // Put your mousemove stuff here

    }

    function drawCursor(mouseX,mouseY){
      //ctx.clear();
      ctx.beginPath();
      //ctx.arc(100,75,50,0,2*Math.PI);

      ctx.arc(mouseX,mouseY,50,0,2*Math.PI);
      ctx.stroke();

    }


  $("#canvas").mousemove(function(e){handleMouseMove(e);});
});
