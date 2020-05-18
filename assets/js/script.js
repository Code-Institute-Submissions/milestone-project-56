//Navbar

(function($) {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  // Show the navbar when the page is scrolled up
  var MQL = 992;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
            $('#mainNav').addClass('is-visible');
          }
          else {
            $('#mainNav').removeClass('is-visible is-fixed');
          }
        }
        else if (currentTop > this.previousTop) {
          //if scrolling down...
          $('#mainNav').removeClass('is-visible');
          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }

})(jQuery);


//Dropdown box

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  disappear();
  city = document.querySelector("#myDropdown");
  output = city.value;
  if (output == "paris") {
    document.getElementById("paris").style.display = "block";
  }
  if (output == "berlin") {
    document.getElementById("berlin").style.display = "block";
  }
  if (output == "athens") {
    document.getElementById("athens").style.display = "block";
  }
  if (output == "pisa") {
    document.getElementById("pisa").style.display = "block";
  }
  if (output == "istanbul") {
    document.getElementById("istanbul").style.display = "block";
  }
}

function disappear() {
  document.getElementById("paris").style.display = "none";
  document.getElementById("berlin").style.display = "none";
  document.getElementById("athens").style.display = "none";
  document.getElementById("pisa").style.display = "none";
  document.getElementById("istanbul").style.display = "none";
}
