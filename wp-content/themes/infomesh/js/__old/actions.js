$(document).ready(function(){

   //$('.box').draggable();

   $('.drag').draggable({
    containment: "body"
    //grid : [20 , 20]
  });

  $( '.drag' ).resizable({
    containment: "body",
    maxHeight: 400,
    maxWidth: 400,
    minHeight: 100,
    minWidth: 100
  });


  $(document).on('click','.UIButton', function() {
    //console.log(e);

    console.log("[Action.js] | Clicked on UIButton");
    $(this).parent().addClass("hidden");
    let idtofind = $(this).parent().attr('idC');
    console.log("[Action.js] | "+idtofind);
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
        /*$(".box").css({'z-index': '10'});
        $(".box[idC='"+idtofind+"']").css({'z-index': '12'});*/
        //$(".box[idC='"+idtofind+"']").css({z-index: '12'});

    }
  });

  $(document).on('click','.box', function() {

        $(".box").css({'z-index': '10'});
        $(this).css({'z-index': '12'});
        //$(".box[idC='"+idtofind+"']").css({z-index: '12'});


  });

  let minDate = new Date($("#infos").attr("minDate"));
  let maxDate = new Date($("#infos").attr("maxDate"));
  console.log(minDate);
  console.log(maxDate);

  var a = moment($("#infos").attr("minDate"),'M/D/YYYY');
  var b = moment($("#infos").attr("maxDate"),'M/D/YYYY');
  var diffDays = b.diff(a, 'hours');
  console.log(diffDays);



  $( ".box" ).each(function( index ) {
    let date = moment($(this).attr("date"));
    var diff = date.diff(a, 'hours');
    let test = map_range(diff,0,diffDays,0,100);
    let Width = $( window ).width();
    let Percent = map_range(diff,0,diffDays, 0+200,Width-400);
    console.log(Percent);
    $(this).css({left: Percent, position:'absolute'});

    let idtofind = $(this).attr("idC");
    $(".dot[idC='"+idtofind+"']").css({left: Percent, position:'absolute'});


  });


  function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  }

});
