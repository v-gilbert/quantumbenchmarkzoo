// Form
var submitted=false;

// Fade out of the form when message sent
$('#gform').on('submit', function(e) {
    $("#contact").css('background-image', 'none');
    $('#gform *').fadeOut(1);
    $("#contact-sent").fadeIn(1);
    //$("#contact-title").text("Message sent");
    //$("#contact-text").text("Your message has been sent, we will come back to you shortly.");
});