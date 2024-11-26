var typed = new Typed("#typed", {
    strings: [
      "Web Design",
      "Graphic Design",
      "Web Development",
      "UI/UX Design",
      "Mobile app development",


    ],
    typeSpeed: 50, 
    startDelay: 150,
    backSpeed: 30, 
    backDelay: 1000,
    loop: true,
    loopCount: Infinity, 
    showCursor: true,
    cursorChar: "|",
    contentType: "html", 
  });
  
  
  var container = document.querySelector(".mixitup");
  if (container) {
    mixitup(container);
  }
  
 
  $(document).ready(function () {
    $(".navbar-toggler").click(function () {
      $(".small-device").slideToggle();
    });
  });
  
  