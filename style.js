
// MOBILE MENU

function toggleMenu() {
  document.getElementById('nav').classList.toggle('show');
}

// CLOSE MENU AFTER CLICK

document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav').classList.remove('show');
  });
});

// PROPERTY SEARCH

function searchProperties() {
  const type = document.getElementById('type').value;
  const location = document.getElementById('location').value;
  const purpose = document.getElementById('purpose').value;
  const budget = document.getElementById('budget').value;

  const cards = document.querySelectorAll('.property-card');
  let count = 0;

  cards.forEach(card => {
    const matchType =
      type === 'all' || card.dataset.type === type;

    const matchLocation =
      location === 'all' || card.dataset.location === location;

    const matchPurpose =
      purpose === 'all' || card.dataset.purpose === purpose;

    const matchBudget =
      budget === 'all' ||
      Number(card.dataset.price) <= Number(budget);

    if (matchType && matchLocation && matchPurpose && matchBudget) {
      card.style.display = 'block';
      count++;
    } else {
      card.style.display = 'none';
    }
  });

  document.getElementById('noResults').style.display =
    count === 0 ? 'block' : 'none';

  document.getElementById('properties').scrollIntoView({
    behavior: 'smooth'
  });
}

// SCROLL ANIMATION

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => {
  observer.observe(element);
});

// WHATSAPP CONTACT FORM

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // CHANGE THIS TO YOUR REAL WHATSAPP NUMBER
  const whatsappNumber = '923001234567';

  const text =
    `Hello KAKA REAL ESTATE!\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Email: ${email}\n` +
    `Requirements: ${message}`;

  const url =
    'https://wa.me/' + whatsappNumber +
    '?text=' + encodeURIComponent(text);

  window.open(url, '_blank');
}
