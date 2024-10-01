document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    emailjs.sendForm('service_amm2z2v', 'template_7w9zmnk', this) // Replace with your EmailJS service and template IDs
        .then(function() {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Reset the form after sending
        }, function(error) {
            alert('Error sending message: ' + JSON.stringify(error));
        });
});