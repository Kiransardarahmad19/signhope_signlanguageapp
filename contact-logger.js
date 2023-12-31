document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
  
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
      };
  
      // Log the form submission to localStorage
      const logs = JSON.parse(localStorage.getItem('webappLogs')) || [];
      logs.push({ type: 'contactFormSubmission', data: formData });
      localStorage.setItem('webappLogs', JSON.stringify(logs));
  
      // Display a success message or redirect the user
      alert('Contact form submitted successfully');
    });
  });  