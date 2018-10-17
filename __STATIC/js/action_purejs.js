


function init(){
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
 }
