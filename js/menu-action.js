$(document).ready(function(){
  console.log("hello world");

  $(document).on('click','.UIButton_2x', function() {
    //console.log(e);
    $(".menuItem-choice").removeClass("hidden");

  });

  $(document).on('click','.menuItem-choice', function() {
    //console.log(e);
    $(".menuItem-choice").removeClass("selected");
    $(this).addClass("selected");
    $(".menuItem-choice").addClass("hidden");


  });


  $(document).on({
    mouseenter: function () {
        //stuff to do on mouse enter
        console.log("enter");
        $(".menuItem-choice").removeClass("hidden");
    },
    mouseleave: function () {
        //stuff to do on mouse leave
          console.log("leave");
          $(".menuItem-choice").addClass("hidden");
    }
  }, ".item-1"); //pass the element as an argument to .on

});
