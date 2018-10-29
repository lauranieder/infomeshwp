/*-------------DO NOT MODIFY-----------
You can add script under js/proposals/ and link it to a template. */
$(document).ready(function(){

  let scroll = 0;
  let scrollcenter = 0;
  let maxScroll;
  init();
  function init(){
    let w1 = $("#container-scrollable").width(); //should equal device width
    let w2 = $("#containertimeline").width();
    let width = $(window).width();
    maxScroll = w2-width;
    //console.log("[init]w1 "+w1+" w2 "+w2+" width "+width+" maxScroll "+maxScroll);

    let startYear = 1989;

    $(".timeDot").each(function(event){
      placeDot($(this));
    });
  }
  $("#container-scrollable").scroll(function (event) {
      scroll = $("#container-scrollable").scrollLeft();

      //loadDotContent(idToLoad);
      //window.requestAnimationFrame(draw);
      let normalized = map_range(scroll, 0,maxScroll, 0,1);
      //console.log("[scrolling] scroll "+scroll +"  normalized  "+normalized);
  });

  function getClosestDot(){


    scrollcenter = $("#container-scrollable").scrollLeft() + ($("#container-scrollable").width() / 2);


    var positions = [];
    $('.timeDot').each(function(){
        //$(this).removeClass("active");
        positions.push({position:$(this).position().left, element: $(this)});
    });
    var getClosest = closest(positions,scrollcenter);
    var idToClosest = getClosest.attr("idToLoad");
    //console.log(idToClosest);
    let idLoaded = $("#idLoaded").attr("idLoaded");
    if(idLoaded != idToClosest){
      loadDotContent(idToClosest);

    }
    let dot = $(".timeDot[idToLoad='" + idToClosest + "']");
    goToDot(dot);

  }


  var finishedScrolling = debounce(function() {
      // All the taxing stuff you do
      console.log("[timeline.js] Finished scrolling debounced !");
      getClosestDot();
  }, 250);

  $("#container-scrollable").on('scroll', finishedScrolling);




    // finds the nearest position (from an array of objects) to the specified number
    function closest(array, number) {
        var num = 0;
        for (var i = array.length - 1; i >= 0; i--) {
            if(Math.abs(number - array[i].position) < Math.abs(number - array[num].position)){
                num = i;
            }
        }
        return array[num].element;
    }

  function draw() {

  }



  /*Place the dot on the timeline*/
  function placeDot(dot){
    //console.log("Place dot");
    let targetLeft = getTargetLeft(dot.attr("startDate"));

    let endDate =dot.attr('endDate');
    /*If it's a duration rather than a dot*/
    if (typeof endDate !== typeof undefined && endDate !== false) {
      let targetLeftEnd = getTargetLeft(dot.attr("endDate"));

      let eventDuration = targetLeftEnd-targetLeft;
      dot.css('width', eventDuration+"vw");
      dot.addClass('stripped');
      dot.css('z-index', '1');
    }else{
      dot.css('z-index', '2');
    }
    dot.css('left', targetLeft+"vw");
  }

  /*Used in placeDot*/
  function getTargetLeft(fulldate){
      /*calculate offsetyears*/
    let offsetyear = 6;
    let yearwidth = 8.333; //screenwidth split in 12*/
    let date = moment(fulldate,'D/M/YYYY');
    let startdate = moment("01/01/1989",'D/M/YYYY');
    var diffHours = date.diff(startdate, 'hours');
    var diffYears = date.diff(startdate, 'years');
    let targetLeft = ((diffYears+offsetyear)*yearwidth);

    /*calculate offsetdays*/
    let startYear = moment().date(1).month(0).year(date.year()).format('DD/MM/YYYY');
    let diffDays = date.diff(startYear, 'days');
    let targetLeftOffsetDays = yearwidth/365 * diffDays;
    targetLeft = targetLeft+targetLeftOffsetDays;

    return targetLeft;
  }

  loadDotContent = function(id){
    //console.log("Loading extra content");
    $('#container-main').html("");
    //AJAX request to load content of Dot
    jQuery.post(
        ajaxurl,
        {
            'action': 'timeline_loadDot',
            'keyword': id
        },
        function(response){
                $('#container-main').html(response);
                //console.log(response);
        }
    );
  }

  /*Align dot in the center of the timeline*/
  function goToDot(dot){
    let left = dot.position().left;
    let width = $(window).width()/2;
    let offset = dot.width()/2;
    let centerTarget = (left+offset)-width;
    let scrollDistance = 0;
    if(centerTarget > scroll){
      scrollDistance = centerTarget-scroll;
    }else{
      scrollDistance = scroll-centerTarget;
    }
    $("#container-scrollable").off('scroll', finishedScrolling);
    $('#container-scrollable').animate({
      scrollLeft:centerTarget+"px"
    }, scrollDistance*2, function(){

      console.log("[Finished scrolling animation] centerTarget "+centerTarget +"  scroll "+scroll);


      //$("#tl-fixed-description").html(text);
      $("#container-scrollable").on('scroll', finishedScrolling);

    });

  }

  $(document).on('click','.timeDot', function() {

    let idToLoad = $(this).attr("idToLoad");
    loadDotContent(idToLoad);

    let left = $(this).position().left;
    $(".infobox").css("left",left);

    let width = $(window).width()/2;
    let offset = $(this).width()/2;
    //console.log("[Calculate Scroll] scroll "+scroll+" left "+left+" width "+width+ " offset "+offset);
    let centerTarget = (left+offset)-width;
    //console.log("[Calculate Scroll] scroll centerTarget "+centerTarget);

    //let targetLeft = scroll - ( - ());
    /*$("#container-scrollable").animate({
                   scrollLeft:targetLeft
               }, 2000);*/

    let scrollDistance = 0;
    if(centerTarget > scroll){
      scrollDistance = centerTarget-scroll;
    }else{
      scrollDistance = scroll-centerTarget;
    }
    $("#tl-fixed-description").html("");

    /*$("#container-scrollable").animate({
      scrollLeft:centerTarget+"px"
    }, scrollDistance);*/
    let text = $(this).attr("info");
    $("#container-scrollable").off('scroll', finishedScrolling);
    $('#container-scrollable').animate({
      scrollLeft:centerTarget+"px"
    }, scrollDistance*2, function(){

      console.log("[Finished scrolling animation] centerTarget "+centerTarget +"  scroll "+scroll);


      $("#tl-fixed-description").html(text);
      $("#container-scrollable").on('scroll', finishedScrolling);

    });



    $("#main-title").html(text);

    //replace content from main div
    let context =$(this).attr('context');
    if (typeof context !== typeof undefined && context !== false) {
      $("#main-context").html(context);
    }else{$("#main-context").html("");}


    let description =$(this).attr('description');
    if (typeof description !== typeof undefined && description !== false) {
      $("#main-description").html(description);
    }else{$("#main-description").html("");}

    let fulldate =$(this).attr('fulldate');
    if (typeof fulldate !== typeof undefined && fulldate !== false) {
      $("#main-fulldate").html(fulldate);
    }else{$("#main-fulldate").html("");}




  });

  $(document).on('click','#button_LeftArrow', function() {
    console.log("[timeline.js] clicked on left arrow");
  });

  $(document).on('click','#button_RightArrow', function() {
    console.log("[timeline.js] clicked on right arrow");
  });




  /*Show info on hover*/
  $(document).on({
    mouseenter: function () {
        //stuff to do on mouse enter
        //console.log("enter");
        let left = $(this).css("left");
        $(".infobox").css("left",left);
        let text = $(this).attr("info");
        $(".infobox").html(text);
        $( ".infobox" ).fadeIn( 300, function() {
          // Animation complete
        });

        //console.log(left);
        //$(".menuItem-choice").removeClass("hidden");
    },
    mouseleave: function () {
        //stuff to do on mouse leave
          //console.log("leave");
          $( ".infobox" ).fadeOut( 300, function() {
          $(".infobox").html("");
          });

          //$(".menuItem-choice").addClass("hidden");
    }
  }, ".timeDot"); //pass the element as an argument to .on

  function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

});
