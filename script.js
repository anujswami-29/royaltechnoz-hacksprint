// Optional: For a smoother effect in the navbar
$(document).ready(function(){
    // Add smooth scrolling to all links inside navbar
    $(".navbar a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
// Optional: To enable automatic sliding and adjust the timing
$('.carousel').carousel({
    interval: 3000, // Slide every 3 seconds
});
