
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
});
