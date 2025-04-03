// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // ===== Hamburger Menu Toggle =====
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
  
  // ===== Dark Mode Toggle =====
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = '🌙 Dark Mode';
  toggleBtn.className = 'dark-toggle';
  document.body.appendChild(toggleBtn);
  
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  
    // Change nav link colors depending on mode
    const navLinksList = document.querySelectorAll('.navigation a');
    navLinksList.forEach(link => {
      link.style.color = document.body.classList.contains('dark-mode') ? '#eee' : '#222';
    });
  
    // Toggle icon
    toggleBtn.textContent = document.body.classList.contains('dark-mode')
      ? '☀️ Light Mode'
      : '🌙 Dark Mode';
  });
  