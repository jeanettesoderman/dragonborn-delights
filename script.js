const toggle = document.querySelector('.mobile-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
       event.preventDefault();
         const formData = new FormData(contactForm);
             const response = await fetch(contactForm.action, {
               method: 'POST',
                     body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      window.location.href = 'thank-you.html';
    } else {
      alert('Something went wrong. Please try again.');
    }
  });
}
