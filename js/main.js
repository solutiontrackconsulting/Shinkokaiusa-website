/* ================================================================
   Shinkokai USA — main.js
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHeroAnimation();
  initScrollReveal();
  initContactForm();
  setActiveNav();
});

function initNav() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const isHome = document.body.classList.contains('page-home');

  function updateNavBg() {
    if (!isHome || window.scrollY > 60) {
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
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach(el => observer.observe(el));
}

function initHeroAnimation() {
  if (!document.body.classList.contains('page-home')) return;

  const targets = [
    { sel: '.hero__h1',      delay: 100 },
    { sel: '.hero__h1-ja',   delay: 250 },
    { sel: '.hero__sub',     delay: 400 },
    { sel: '.hero__sub-ja',  delay: 550 },
    { sel: '.hero__actions', delay: 700 },
  ];

  targets.forEach(({ sel, delay }) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.classList.add('hero-load');
    setTimeout(() => el.classList.add('in'), delay);
  });
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
