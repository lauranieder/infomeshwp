$(document).ready(function(){
  

  $(document).on('click','#menuOpen', function() {
    openMenu();

  });
  $(document).on('click','#menuClose', function() {
    closeMenu();

  });

  function openMenu(){
    $(".menuItem-choice").removeClass("hidden");
    $("#menuOpen").addClass("hidden");
    $("#menuClose").removeClass("hidden");
  }

  function closeMenu(){
    $(".menuItem-choice").addClass("hidden");
    $("#menuOpen").removeClass("hidden");
    $("#menuClose").addClass("hidden");
  }

  $(document).on('click','.menuItem-choice', function() {
    //console.log(e);
    $(".menuItem-choice").removeClass("selected");
    closeMenu();
    $(this).addClass("selected");
    $(".menuItem-choice").addClass("hidden");

  });


  /*$(document).on({
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
  }, ".item-1"); //pass the element as an argument to .on*/
});
