// Get The Current Year For The Copyright
$('#year').text(new Date().getFullYear());


// make textarea more bueatiful
CKEDITOR.replace( 'editor1' );

// Add scrollspy to <body>
$('body').scrollspy({target: "#main-nav", offset: 50});

// Add smooth scrolling on all links inside the navbar
$("#main-nav a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});