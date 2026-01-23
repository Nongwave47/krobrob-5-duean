const events = document.querySelectorAll('.event');

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

events.forEach(e => observer.observe(e));

// Click expand + pulse animation
events.forEach(e => {
  e.addEventListener('click', () => {
    if (e.classList.contains('active')) {
      e.classList.remove('active');
    } else {
      events.forEach(el => el.classList.remove('active'));
      e.classList.add('active');
      // Pulse effect on click
      e.animate([
        { transform: 'scale(1.08)' },
        { transform: 'scale(1.1)' },
        { transform: 'scale(1.08)' }
      ], {
        duration: 400,
        easing: 'ease-in-out'
      });
    }
  });
});
