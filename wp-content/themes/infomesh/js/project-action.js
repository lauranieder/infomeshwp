/*-------------DO NOT MODIFY-----------
You can add script under js/proposals/ and link it to a template. */
$(document).ready(function(){
  console.log("[project-actions.js] Script loaded.");

  $(document).on({
    click: function () {
        //console.log("[project-actions.js] click");

    },
    mouseenter: function () {
        //console.log("[project-actions.js] enter");
        //$("img", this).addClass("hidden");
        //$("img", this).addClass("hidden");
    },
    mouseleave: function () {
        //console.log("[project-actions.js] leave");
        //$("img", this).removeClass("hidden");
    }
  }, ".project-preview");

});
