
  function sidebar(classname){
    $(classname).mouseenter(function() {
      $(this).css("color", "black");
      $(this).css("text-decoration", "underline");
    });
    $(classname).mouseleave(function() {
        $(this).css("color", "gray");
        $(this).css("text-decoration", "none");
      }

    );


    $(classname).click(function() {
      if ($(this).hasClass("clicked") != true) {
        $(this).addClass("clicked");
        $(classname).not(this).removeClass("clicked");
      }

      var name = "#" + ($(this).attr("id")).replace("button", "page");
      $('html, body').animate({
        scrollTop: $(name).offset().top
      }, 1000);
    });


  }



  function scrollmenu(){

      var homeheight = $("#homepage").height();
      var profileheight = $("#profilepage").height();
      var projectheight = $("#projectpage").height();
      var researchheight = $("researchpage").height();
      var contactheight = $("contactpage").height();
    var currentpos = $(document).scrollTop();
    if(currentpos < homeheight){
      $("#homebutton").addClass("clicked");
      $(".sidebarelement").not("#homebutton").removeClass("clicked");
    }
  }
