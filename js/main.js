/* ================================================================
   Shinkokai USA — main.js
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initDropdown();
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

  function closeAllDropdowns() {
    document.querySelectorAll('.nav__item--has-dropdown.nav__item--open').forEach(item => {
      item.classList.remove('nav__item--open');
      const trigger = item.querySelector('.nav__dropdown-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  }

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
    closeAllDropdowns();
  }

  hamburger.addEventListener('click', () => {
    hamburger.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });

  backdrop.addEventListener('click', closeMenu);
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}

function initDropdown() {
  const items = document.querySelectorAll('.nav__item--has-dropdown');
  if (!items.length) return;

  let hoverTimer = null;

  items.forEach(item => {
    const trigger = item.querySelector('.nav__dropdown-trigger');
    if (!trigger) return;

    function openDropdown() {
      clearTimeout(hoverTimer);
      item.classList.add('nav__item--open');
      trigger.setAttribute('aria-expanded', 'true');
    }

    function closeDropdown() {
      item.classList.remove('nav__item--open');
      trigger.setAttribute('aria-expanded', 'false');
    }

    trigger.addEventListener('click', e => {
      e.stopPropagation();
      item.classList.contains('nav__item--open') ? closeDropdown() : openDropdown();
    });

    item.addEventListener('mouseenter', () => {
      if (window.innerWidth > 960) openDropdown();
    });

    item.addEventListener('mouseleave', () => {
      if (window.innerWidth > 960) {
        hoverTimer = setTimeout(closeDropdown, 150);
      }
    });
  });

  document.addEventListener('click', () => {
    items.forEach(item => {
      item.classList.remove('nav__item--open');
      const trigger = item.querySelector('.nav__dropdown-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      items.forEach(item => {
        item.classList.remove('nav__item--open');
        const trigger = item.querySelector('.nav__dropdown-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const normalized = page === '' ? 'index.html' : page;

  document.querySelectorAll('.nav__links a, .nav__dropdown a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === normalized) {
      link.setAttribute('aria-current', 'page');
      const dropdownParent = link.closest('.nav__item--has-dropdown');
      if (dropdownParent) dropdownParent.classList.add('nav__item--active');
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

  // Reduced motion: leave everything visible, no staggered fade-in.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = [
    { sel: '.hero__h1',      delay: 100 },
    { sel: '.hero__h1-ja',   delay: 250 },
    { sel: '.hero__sub',     delay: 400 },
    { sel: '.hero__sub-ja',  delay: 550 },
    { sel: '.site-motto',    delay: 700 },
    { sel: '.hero__actions', delay: 850 },
  ];

  targets.forEach(({ sel, delay }) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.classList.add('hero-load');
    setTimeout(() => el.classList.add('in'), delay);
  });
}

/* Contact form: validate, then submit to Formspree via fetch.
   FORMSPREE PLACEHOLDER: the endpoint comes from the form's action attribute
   in contact.html (https://formspree.io/f/YOUR_FORM_ID). Replace YOUR_FORM_ID
   with the real form ID before launch; until then every submit will fail and
   show the error banner. */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const success = document.getElementById('form-success');
  const failure = document.getElementById('form-error');
  const submitBtn = form.querySelector('button[type="submit"]');
  const submitLabel = submitBtn.innerHTML;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // [English, Japanese] pairs for each required field.
  const MESSAGES = {
    name:         { required: ['Please enter your name.', 'お名前を入力してください。'] },
    email:        { required: ['Please enter your email address.', 'メールアドレスを入力してください。'],
                    invalid:  ['Please enter a valid email address.', '正しい形式のメールアドレスを入力してください。'] },
    language:     { required: ['Please select a preferred language.', 'ご希望の言語を選択してください。'] },
    relationship: { required: ['Please select your relationship to the senior.', 'ご関係を選択してください。'] },
    message:      { required: ['Please enter a message.', 'メッセージを入力してください。'] },
  };

  const fields = Object.keys(MESSAGES).map(name => form.elements[name]);

  function errorFor(field) {
    const value = field.value.trim();
    const msgs = MESSAGES[field.name];
    if (!value) return msgs.required;
    if (field.name === 'email' && !EMAIL_RE.test(value)) return msgs.invalid;
    return null;
  }

  function renderError(field, msg) {
    const el = document.getElementById(field.id + '-error');
    if (!msg) {
      el.hidden = true;
      el.textContent = '';
      field.removeAttribute('aria-invalid');
      return;
    }
    const en = document.createElement('span');
    en.textContent = msg[0];
    const ja = document.createElement('span');
    ja.className = 'form-error__ja';
    ja.lang = 'ja';
    ja.textContent = msg[1];
    el.replaceChildren(en, ja);
    el.hidden = false;
    field.setAttribute('aria-invalid', 'true');
  }

  // Returns the first invalid field, or null when everything passes.
  function validateAll() {
    let firstInvalid = null;
    fields.forEach(field => {
      const msg = errorFor(field);
      renderError(field, msg);
      if (msg && !firstInvalid) firstInvalid = field;
    });
    return firstInvalid;
  }

  // Once a field has been flagged, clear or update its error as the visitor fixes it.
  fields.forEach(field => {
    const evt = field.tagName === 'SELECT' ? 'change' : 'input';
    field.addEventListener(evt, () => {
      if (field.getAttribute('aria-invalid') === 'true') renderError(field, errorFor(field));
    });
  });

  function setSending(isSending) {
    submitBtn.disabled = isSending;
    if (isSending) {
      submitBtn.setAttribute('aria-busy', 'true');
      submitBtn.innerHTML = 'Sending&hellip; &nbsp;<span lang="ja" style="font-weight:400;opacity:0.85;">「送信中」</span>';
    } else {
      submitBtn.removeAttribute('aria-busy');
      submitBtn.innerHTML = submitLabel;
    }
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (submitBtn.disabled) return;
    failure.hidden = true;

    const firstInvalid = validateAll();
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    setSending(true);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Form submission failed: ' + response.status);

      form.hidden = true;
      success.classList.add('visible');
      success.focus({ preventScroll: true });
      success.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    } catch (err) {
      setSending(false);
      failure.hidden = false;
      failure.focus({ preventScroll: true });
      failure.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    }
  });
}
