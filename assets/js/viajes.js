const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$( "#enviar" ).click(function() {
    alert( "El correo fue enviado correctamente." );
});

$("a").click(function() {
    console.log(this.hash);

    if (this.hash !== "") {
        event.preventDefault();

        console.log(this.hash);

        var hash = this.hash;

        console.log(hash);

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 600, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });

    }

});
