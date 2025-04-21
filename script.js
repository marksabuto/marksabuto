// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: 'ease-in-out'
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile Navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Dark Mode Toggle
const toggleBtn = document.createElement('button');
toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
toggleBtn.className = 'dark-toggle';
document.body.appendChild(toggleBtn);

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  toggleBtn.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Form Validation and Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    try {
      // Show loading state
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      // Send form data
      const response = await fetch(contactForm.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        // Show success message
        submitBtn.textContent = 'Message Sent!';
        contactForm.reset();
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Show error message
      submitBtn.textContent = 'Error! Try Again';
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 3000);
    }
  });
}

// Skill Progress Animation
const skillBars = document.querySelectorAll('.skill-progress .progress');
const animateSkills = () => {
  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
};

// Intersection Observer for Skills Animation
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkills();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(skillsSection);
}

// Project Card Hover Effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

const showTestimonial = (index) => {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? 'block' : 'none';
  });
};

if (testimonials.length > 0) {
  showTestimonial(currentTestimonial);
  
  // Auto-rotate testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000);
}

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Add loading animation to images
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('load', () => {
    img.style.opacity = '1';
  });
  img.style.opacity = '0';
  img.style.transition = 'opacity 0.5s ease';
});

// Add parallax effect to hero section
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
  });
}

// Add typing effect to hero description
const heroDescription = document.querySelector('.hero-description');
if (heroDescription) {
  const text = heroDescription.textContent;
  heroDescription.textContent = '';
  
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      heroDescription.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  };
  
  typeWriter();
}

// Add hover effect to social media icons
const socialIcons = document.querySelectorAll('.socials a');
socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.2) rotate(5deg)';
  });
  
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'scale(1) rotate(0)';
  });
});
  