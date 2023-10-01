var spanText = document.getElementById('tooltip');
window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    spanText.style.top = (y + 20) + 'px';
    spanText.style.left = (x + 20) + 'px';
}

// Owlcarousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        center: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
});






