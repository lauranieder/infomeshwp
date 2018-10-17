$(document).ready(function(){

  let scroll = 0;
  let maxScroll;
  init();
  function init(){
    let w1 = $("#container-scrollable").width(); //should equal device width
    let w2 = $("#containertimeline").width();
    let width = $(window).width();
    maxScroll = w2-width;
    console.log("[init]w1 "+w1+" w2 "+w2+" width "+width+" maxScroll "+maxScroll);

    let startYear = 1989;

    $(".timeDot").each(function(event){
      placeDot($(this));
    });
  }
  $("#container-scrollable").scroll(function (event) {
      scroll = $("#container-scrollable").scrollLeft();
      //window.requestAnimationFrame(draw);
      let normalized = map_range(scroll, 0,maxScroll, 0,1);
      //console.log("[scrolling] scroll "+scroll +"  normalized  "+normalized);
  });

  function draw() {

  }

  /*Place the dot on the timeline*/
  function placeDot(dot){
    let year = parseInt(dot.attr('year'));
    let diff = year - 1989;
    let tempLeft = ((diff+6)*8.333);
    let endDate =dot.attr('endDate');
    /*If it's a duration rather than a dot*/
    if (typeof endDate !== typeof undefined && endDate !== false) {
      endDate = parseInt(endDate);
      let diffE = endDate - 1989;
      let tempLeftE = ((diffE+6)*8.333);
      let eventDuration = tempLeftE-tempLeft;
      dot.css('width', eventDuration+"vw");
      dot.addClass('stripped');
      dot.css('z-index', '1');
    }else{
      dot.css('z-index', '2');
    }
    dot.css('left', tempLeft+"vw");
  }

  /*Align dot in the center of the timeline*/
  function goToDot(dot){

  }

  $(document).on('click','.timeDot', function() {

    let left = $(this).position().left;
    $(".infobox").css("left",left);

    let width = $(window).width()/2;
    let offset = $(this).width()/2;
    console.log("[Calculate Scroll] scroll "+scroll+" left "+left+" width "+width+ " offset "+offset);
    let centerTarget = (left+offset)-width;
    console.log("[Calculate Scroll] scroll centerTarget "+centerTarget);

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
    $('#container-scrollable').animate({
      scrollLeft:centerTarget+"px"
    }, scrollDistance*2, function(){

      console.log("[Finished scrolling] centerTarget "+centerTarget +"  scroll "+scroll);


      $("#tl-fixed-description").html(text);

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

});
