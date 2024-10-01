function slideToPage(event, url, direction) {
    event.preventDefault(); // Prevent default link action

    // Get the main section
    const mainSection = document.querySelector('#main');
    
    // Check if the user is navigating to a different page
    // Add the slide-out class to animate the current page sliding out
    
    sessionStorage.setItem('slideDirection', direction);

    mainSection.classList.remove('slide-in');

    if (direction === 'left') {
        mainSection.style.transform = 'translateX(-100vw)'; // Slide out to the left
    } else {
        mainSection.style.transform = 'translateX(100vw)'; // Slide out to the right
    }

        // Wait for the animation to complete before navigating to the next page
    setTimeout(function () {
        window.location.href = url;
    }, 400); // Delay matches the CSS transition duration (0.5s)
}

// When the page loads, apply the slide-in class only if it's a new page
window.onload = function () {
    const mainSection = document.querySelector('#main');
    mainSection.classList.add('visible');

    const direction = sessionStorage.getItem('slideDirection');
    // Set the main section offscreen initially


    // Check if the page has been navigated to (via a link click) by checking the referrer
    if (document.referrer && document.referrer !== window.location.href) {
        if (direction === 'left') {
            mainSection.classList.add('start-offscreen-right');
            setTimeout(function () {
                mainSection.classList.remove('start-offscreen-right');
                mainSection.classList.add('slide-in');
            }, 100);
        }

        else if (direction === 'right') {
            mainSection.classList.add('start-offscreen-left');
            setTimeout(function () {
                mainSection.classList.remove('start-offscreen-left');
                mainSection.classList.add('slide-in');
            }, 100);
        }

        direction = sessionStorage.removeItem('slideDirection');
    }
};