document.addEventListener('DOMContentLoaded', function() {
  // Select all elements with the class 'parallax-background'
  var parallaxElements = document.querySelectorAll('.parallax-background');

  // Iterate over each selected element
    parallaxElements.forEach(function(element) {
        // Get the value of the 'data-background-url' attribute
        var imageUrl = element.getAttribute('data-background-url');

        // If imageUrl is not empty, proceed
        if (imageUrl) {
            // Create a new <style> element
             var beforeStyle = document.createElement('style');

            // Set the inner HTML of the <style> element to include a CSS rule
             beforeStyle.innerHTML = `
                 .parallax-background[data-background-url="${imageUrl}"]::before {
                   background-image: url(${imageUrl});
                }
             `;

            // Append the <style> element to the document head
             document.head.appendChild(beforeStyle);
      }
  });

var randomizedBackground = document.querySelector('.randomized-background');

if (randomizedBackground) {
    var images = randomizedBackground.getAttribute('data-images').split(',').map(function(img) {
        return img.trim();
    });
    
    var currentImageUrl = '';

    function getRandomImage() {
        var newImageUrl;
        do {
            newImageUrl = images[Math.floor(Math.random() * images.length)];
        } while (newImageUrl === currentImageUrl); // Ensure the new image is different from the current one

        return newImageUrl;
    }
    

    function updateRandomBackgroundImage() {
        var imageUrl = getRandomImage();
        var img = new Image();
        img.src = imageUrl;

        img.onload = function () {
            randomizedBackground.style.opacity = 0; // Fade out current
            parallaxElements.forEach(function(parallax) {
                parallax.style.opacity = 1; // Show the parallax background
            });

            setTimeout(function () {
                randomizedBackground.style.animation = 'none'; // Stop the animation
            // Force reflow to restart the animation
                void randomizedBackground.offsetWidth; 
                randomizedBackground.style.animation = ''; // Reapply the animat

                randomizedBackground.style.backgroundImage = `url(${imageUrl})`;
                randomizedBackground.style.opacity = 0.5; // Fade in new
                parallaxElements.forEach(function(parallax) {
                    parallax.style.opacity = 0; // Show the parallax background
                });
        
            }, 800); // Match duration with CSS transition
        };
        
        currentImageUrl = imageUrl;
        img.onerror = function () {
            console.error(`Failed to load image: ${imageUrl}`);
        };
    }
    // Initial call and interval for updates
    updateRandomBackgroundImage();
    setInterval(updateRandomBackgroundImage, 10000); // Change every 10 seconds
} else {
    console.error('No element found with class "randomized-background".');
}
});
