// Add event listener to button
document.querySelector('button').addEventListener('click', () => {
    // Add fade-in animation to hero image
    const heroImage = document.querySelector('.hero-image');
    heroImage.classList.add('fadeIn');
});

// Add event listener to form submit
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get form data
    const formData = new FormData(e.target);
    // Send form data to server (not implemented in this static site)
    console.log(formData);
});

// Add event listener to video play
document.querySelector('.contact-video').addEventListener('play', () => {
    // Add fade-in animation to video
    const video = document.querySelector('.contact-video');
    video.classList.add('fadeIn');
});