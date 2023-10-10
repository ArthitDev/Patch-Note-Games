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
        autoplayTimeout: 3000,
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


//ค้นหา

function searchPage() {
    var searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    var sections = document.querySelectorAll('.section-1, .section-2, .footer, .view-all');

    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var sectionText = section.textContent.trim().toLowerCase();

        if (sectionText.includes(searchTerm)) {
            // Scroll to the section if found
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
            return false; // Prevent form submission
        }
    }

    alert('ไม่พบข้อมูลที่ค้นหา'); // Display a message if search term is not found
    return false; // Prevent form submission
}