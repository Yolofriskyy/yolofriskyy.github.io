<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $email = htmlspecialchars(strip_tags(trim($_POST['email'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));

    // Set the recipient email address
    $to = 'hsimsky2003@gmail.com'; // Replace with your email address

    // Set the email subject
    $subject = 'New Contact Form Submission';

    // Create the email body
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Set the headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo 'Message sent successfully!';
    } else {
        echo 'Message could not be sent.';
    }
} else {
    // Redirect to form if not a POST request
    header("Location: index.html"); // Change this to your form's file name
}
?>