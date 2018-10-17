$(document).ready(function(){

  /*$.ajax({
     url: "http://www.json-generator.com/api/json/get/cgRivNixNK",
     type: "POST", //type:"GET"
     dataType: "JSON"
    })
    .done(function(data){
               console.log(data)
    });*/

    $.ajax({
       url: "database/database.json",
       type: "GET", //type:"GET"
       dataType: "JSON"
      })
      .done(function(data){
                 console.log(data);
                 //let obj = jQuery.parseJSON(data);
                 console.log(data[0].Title);
                 console.log(data.length);
                 let minDate;
                 let maxDate;
                 for(let i=0; i< data.length;i++ ){
                   console.log(data[i].Date);

                   if(i>0){
                     console.log("Evaluating date");
                     console.log("min   "+minDate);
                     console.log("max  "+maxDate);
                     if(data[i].Date > maxDate){
                       console.log("bigger");
                       maxDate = data[i].Date;

                     }
                     if(data[i].Date < minDate){
                       console.log("smaller");
                       minDate = data[i].Date;
                     }

                   }else{
                     minDate = data[i].Date;
                     maxDate = data[i].Date;

                   }
                 }
                 console.log("minDate  ");
                 console.log(minDate);
                 console.log("maxDate  ");
                 console.log(maxDate);
                 for(let i=0; i< data.length;i++ ){
                   console.log(data[i].Title);
                   let Width = $( window ).width();
                   let Percent = map_range(data[i].Date, minDate, maxDate, 0+200,Width-200);
                   console.log(Percent);
                   Percent -= 100;

                   console.log(Width);

                   //Percent = map_range(data[i].Date, 0, 100, 0,Width);

                   var customDiv = $("<div/>");
                   customDiv.addClass("box").html(data[i].Title+"</br>"+data[i].Date).appendTo('body');

                   customDiv.css({left: Percent, position:'absolute'});
                   customDiv.attr('idC',i);
                   customDiv.addClass('hidden');

                   var img = $('<img class="UIButton" alt="X">'); //Equivalent: $(document.createElement('img'))
                    img.attr('src','UI/UICross.png');
                    img.appendTo(customDiv);
                   //attr('id','new')
                 }
                 for(let i=0; i< data.length;i++ ){
                   console.log(data[i].Title);
                   let Width = $( window ).width();
                   let Percent = map_range(data[i].Date, minDate, maxDate, 0+200,Width-200);
                   console.log(Percent);

                   console.log(Width);


                   //Percent = map_range(data[i].Date, 0, 100, 0,Width);

                   var customDiv = $("<div/>");
                   customDiv.addClass("dot").appendTo('body');

                   customDiv.css({top:'400px',left: Percent, position:'absolute'});
                   customDiv.attr('idC',i);


                 }
                 let Width = $( window ).width();
                 let Height = $( window ).height();
                 let line1 = $('#line1');
                 let svgline = $('#svgline');
                 var pos1 = $(".dot[idC='"+0+"']").css('left');


                  var pos2 = $(".dot[idC='"+(data.length-1)+"']").css('left');
                  console.log("_________");
                  console.log(pos1);
                  console.log(pos2);
                  line1.attr('x1', pos1).attr('y1', '400px').attr('x2', pos2).attr('y2', '400px');
                  line1.parent().attr('width',Width);
                  line1.parent().attr('height',Height);
                  line1.parent().attr('position','absolute');
                  line1.parent().attr('top','0');
                  line1.parent().attr('left','0');

                  line1.attr('stroke','black' );


                 //foreach()
      });

  /*  var mydata = JSON.parse("database/database.json");
alert(mydata[0].name);*/


  /*$('.UIButton').click(function(e) {
    console.log(e);
    console.log($(this));
    $(this).parent().parent().addClass("hidden");
  });

  $('.dot').click(function(e) {
    console.log("clicked");
  });*/

  $(document).on('click','.UIButton', function() {
    //console.log(e);
    console.log($(this));
    $(this).parent().addClass("hidden");
    let idtofind = $(this).parent().attr('idC');
    $(".dot[idC='"+idtofind+"']").removeClass("selected");
  });

  $(document).on('click','.dot', function() {
    let idtofind = $(this).attr('idC');
    console.log("clicked");

    console.log(idtofind);
    if($(this).hasClass('selected')){
      $(this).removeClass('selected');
      $(".box[idC='"+idtofind+"']").addClass("hidden");
    }else{
        $(this).addClass('selected');
        $(".box[idC='"+idtofind+"']").removeClass("hidden");

    }


  });

  function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  }

});


/*function init(){
  console.log("Hello world!");
  readJSON();

  var dm = document.getElementsByClassName('dragme');
  for (var i = 0; i < dm.length; i++) {
  	dm[i].addEventListener('dragstart', drag_start, false);
  	document.body.addEventListener('dragover', drag_over, false);
  	document.body.addEventListener('drop', drop, false);
  }

}
function drag_start(event) {
  console.log("drag_start");
	var style = window.getComputedStyle(event.target, null);
	event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + ',' + event.target.getAttribute('data-item'));
}

function drag_over(event) {
	event.preventDefault();
	return false;
  console.log("drag_over");
}

function drop(event) {
	var offset = event.dataTransfer.getData("text/plain").split(',');
	var dm = document.getElementsByClassName('dragme');
	dm[parseInt(offset[2])].style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
	dm[parseInt(offset[2])].style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
	event.preventDefault();
	return false;
  console.log("drop");
}



function onClose(element){
  console.log("close");
  console.log(element);
  element.classList.add("hidden");
}

function readJSON() {
  loadJSON(function(response) {
   // Parse JSON string into object
     var obj = JSON.parse(response);
     //console.log(obj.count);
     //console.log(obj[0].Title);

     console.log(obj[0].Title);

     var propValue;
     var count = 0;
     for(var propName in obj) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute("draggable", "true");

      newDiv.classList.add("dragme");
      newDiv.classList.add("box");
      newDiv.setAttribute("data-item", count+2);


      propValue = obj[propName];
      // et lui donne un peu de contenu
      var newContent = document.createTextNode(propValue.Title);
      // ajoute le noeud texte au nouveau div créé
      newDiv.appendChild(newContent);

      // ajoute le nouvel élément créé et son contenu dans le DOM
      var currentDiv = document.getElementById("div1");

      document.body.insertBefore(newDiv, currentDiv);



      //console.log(count);
      //console.log(propName);
      //console.log(propName,propValue);
      console.log(propValue.Title);

      count++;
      }
  });
}





function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'database/database.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
 }*/
