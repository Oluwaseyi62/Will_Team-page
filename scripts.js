// Add hover effects to team cards
document.querySelectorAll('.bg-white.p-4').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('shadow-lg', 'scale-105', 'transition', 'duration-300', 'ease-in-out');
    });
  
    card.addEventListener('mouseleave', () => {
      card.classList.remove('shadow-lg', 'scale-105');
    });
  });
  
  // Smooth scroll for buttons
  document.querySelectorAll('button, a').forEach((element) => {
    element.addEventListener('click', (event) => {
      const href = element.getAttribute('href');
      if (href && href.startsWith('#')) {
        event.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });
  
  // Add responsive menu functionality (if applicable for mobile screens)
  const nav = document.querySelector('nav');
  const toggleButton = document.createElement('button');
  toggleButton.textContent = '☰';
  toggleButton.classList.add('text-gray-600', 'hover:text-black', 'lg:hidden');
  toggleButton.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
  });
  
  // Insert toggle button for small screens
  const header = document.querySelector('header .container');
  header.insertBefore(toggleButton, header.children[1]);
  
  // Hide nav by default on smaller screens
  nav.classList.add('hidden', 'flex-col', 'lg:flex', 'lg:flex-row');
  