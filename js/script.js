// ขึ้นไปบนสุดของเพจ
// Get a reference to the button element
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Add a click event listener to the button
scrollToTopButton.addEventListener('click', () => {
  // Scroll to the top of the page with a smooth animation
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Show or hide the button based on the user's scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    // Show the button when the user scrolls down 200 pixels or more
    scrollToTopButton.style.display = 'block';
  } else {
    // Hide the button when the user is near the top of the page
    scrollToTopButton.style.display = 'none';
  }
});




