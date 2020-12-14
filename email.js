function sendMail(contactForm) {
    emailjs.send("gmail", "template_iiqvxe3", {
            "name": contactForm.name.value,
            "email": contactForm.email.value,
            "subject": contactForm.subject.value,
            "message": contactForm.message.value

        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}
// emailjs.sendForm('gmail', 'template_iiqvxe3', '#contact-form')
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });