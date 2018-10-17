$(document).ready(function(){
  console.log("hello world");

  /*$(document).on('mouseover','.project-preview', function() {
    //console.log(e);
    console.log($(this));

  });*/


  $(document).on({
    mouseenter: function () {
        //stuff to do on mouse enter
        console.log("enter");
        $("img", this).addClass("hidden");
    },
    mouseleave: function () {
        //stuff to do on mouse leave
          console.log("leave");
          $("img", this).removeClass("hidden");
    }
  }, ".project-preview"); //pass the element as an argument to .on

});
