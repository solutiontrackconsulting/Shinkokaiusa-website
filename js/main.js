/* ================================================================
   Shinkokai USA — main.js
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollReveal();
  initContactForm();
  setActiveNav();
});

function initNav() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const isHome = document.body.classList.contains('page-home');

  function updateNavBg() {
    if (!isHome || window.scrollY > 20) {
      header.classList.add('has-bg');
    } else {
      header.classList.remove('has-bg');
    }
  }

  updateNavBg();
  window.addEventListener('scroll', updateNavBg, { passive: true });

  const hamburger = document.getElementById('nav-hamburger');
  const menu = document.getElementById('nav-menu');
  const backdrop = document.getElementById('nav-backdrop');
  if (!hamburger || !menu || !backdrop) return;

  function openMenu() {
    menu.classList.add('open');
    backdrop.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('open');
    backdrop.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    hamburger.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });

  backdrop.addEventListener('click', closeMenu);
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}

function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const normalized = page === '' ? 'index.html' : page;

  document.querySelectorAll('.nav__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === normalized) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
  );

  els.forEach(el => observer.observe(el));
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const success = document.getElementById('form-success');

  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    if (success) {
      success.classList.add('visible');
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}
