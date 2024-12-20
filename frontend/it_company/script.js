function myFunction(x) {
    x.classList.toggle("change");
  }



  function sendForm() {
    var selectedServices = [];
    var selectedBudget = '';

    // Get selected services
    var serviceBtns = document.querySelectorAll('.service-btn3.active');
    serviceBtns.forEach(function(btn) {
        selectedServices.push(btn.textContent);
    });

    // Get selected budget
    var budgetBtns = document.querySelectorAll('.budget .service-btn3.active');
    if (budgetBtns.length > 0) {
        selectedBudget = budgetBtns[0].textContent;
    }

    // Get name and email
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Get project details
    var projectDetails = document.getElementById('project-details').value;

    // Construct form data
    var formData = {
        name: name,
        email: email,
        selectedServices: selectedServices,
        selectedBudget: selectedBudget,
        projectDetails: projectDetails
    };

    // Simulate sending email by logging data to console
    console.log(formData);

    // Display animation or message
    var sentMessage = document.createElement('div');
    sentMessage.textContent = 'Message sent!';
    sentMessage.classList.add('sent-message');
    document.body.appendChild(sentMessage);

    // Remove the message after 3 seconds
    setTimeout(function() {
        document.body.removeChild(sentMessage);
        // Redirect to main page
        window.location.href = "";
    }, 3000);

    // Prevent form submission
    return false;
}



function filterLogos(category) {
    var logos = document.querySelectorAll('.swiper-slide');

    if (category === 'all') {
        logos.forEach(function(logo) {
            logo.style.display = 'block';
        });
    } else {
        logos.forEach(function(logo) {
            if (logo.classList.contains(category)) {
                logo.style.display = 'block';
            } else {
                logo.style.display = 'none';
            }
        });
    }

    // Update active class for buttons
    var buttons = document.querySelectorAll('.discuss-btn3');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });
    document.querySelector('.discuss-btn3.' + category).classList.add('active');
}