/* ═══════════════════════════════════════════════
   JOINT VISION — Main JavaScript
   ═══════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Navbar scroll behaviour ── */
  const navbar = document.getElementById('navbar');
  function handleNavScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* ── Mobile nav toggle ── */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
    // Animate hamburger
    const spans = navToggle.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity   = '';
      });
    });
  });


  /* ── Scroll-reveal observer ── */
  const revealEls = document.querySelectorAll(
    '.service-card, .portfolio-card, .process-step, .about-content, .about-photo-wrap, .contact-info, .contact-form-wrap, .video-card, .experience-note'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, Number(delay));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach(el => observer.observe(el));

  /* ── Contact Form Validation & Submission ── */
  const form       = document.getElementById('contactForm');
  const submitBtn  = document.getElementById('submitBtn');
  const successMsg = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      // Show loading state
      submitBtn.querySelector('.btn-text').style.display    = 'none';
      submitBtn.querySelector('.btn-loading').style.display = 'inline';
      submitBtn.disabled = true;

      // Simulate network delay (replace with real endpoint later)
      await simulateSend();

      // Show success
      form.style.display    = 'none';
      successMsg.style.display = 'block';
    });

    // Real-time validation
    ['fname', 'lname', 'email', 'service', 'message'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('blur', () => validateField(id));
        el.addEventListener('input', () => clearError(id));
      }
    });
  }

  function validateForm() {
    const fields = [
      { id: 'fname',   msg: 'Please enter your first name.' },
      { id: 'lname',   msg: 'Please enter your last name.' },
      { id: 'email',   msg: 'Please enter a valid email address.', validator: isValidEmail },
      { id: 'service', msg: 'Please select a service.' },
      { id: 'message', msg: 'Please tell me about your project.' },
    ];

    let valid = true;

    fields.forEach(({ id, msg, validator }) => {
      const el = document.getElementById(id);
      const val = el ? el.value.trim() : '';
      if (!val || (validator && !validator(val))) {
        showError(id, msg);
        valid = false;
      } else {
        clearError(id);
      }
    });

    // Checkbox
    const consent = document.getElementById('consent');
    if (!consent.checked) {
      document.getElementById('consentError').textContent = 'Please confirm your consent.';
      valid = false;
    } else {
      document.getElementById('consentError').textContent = '';
    }

    return valid;
  }

  function validateField(id) {
    const el  = document.getElementById(id);
    const val = el ? el.value.trim() : '';
    if (!val) {
      const msgs = { fname: 'Required.', lname: 'Required.', email: 'Required.', service: 'Please select.', message: 'Required.' };
      showError(id, msgs[id] || 'Required.');
    } else if (id === 'email' && !isValidEmail(val)) {
      showError(id, 'Enter a valid email.');
    } else {
      clearError(id);
    }
  }

  function showError(id, msg) {
    const errEl = document.getElementById(`${id}Error`);
    const input = document.getElementById(id);
    if (errEl) errEl.textContent = msg;
    if (input) input.classList.add('error');
  }

  function clearError(id) {
    const errEl = document.getElementById(`${id}Error`);
    const input = document.getElementById(id);
    if (errEl) errEl.textContent = '';
    if (input) input.classList.remove('error');
  }

  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  function simulateSend() {
    return new Promise(resolve => setTimeout(resolve, 1800));
  }

  /* ── Smooth anchor scroll (for older browsers) ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
