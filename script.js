/* ============================================================
   WYS — Western Youth Summit — interactions
   ============================================================ */

/* ---------- 1. Icon library (inline SVG, injected by data-icon) --------- */
const ICONS = {
  bulb: '<path d="M12 2a7 7 0 0 0-4 12.7c.6.4.9 1 .9 1.7v.6h6.2v-.6c0-.7.3-1.3.9-1.7A7 7 0 0 0 12 2Z"/><path d="M9.5 20h5M10 22h4" stroke-linecap="round"/>',
  book: '<path d="M4 5.5C6 4.4 8.6 4 12 4.6V19c-3.4-.6-6-.2-8 .9V5.5Z"/><path d="M20 5.5C18 4.4 15.4 4 12 4.6V19c3.4-.6 6-.2 8 .9V5.5Z"/>',
  handshake: '<path d="m3 12 4-3.4 3 2 3-2.6 3 2 4-3"/><path d="M3 12v4l4 3 3-2 3 2 3-2 4 2v-4"/>',
  trophy: '<path d="M8 4h8v4a4 4 0 0 1-8 0V4Z"/><path d="M8 5H5a3 3 0 0 0 3 5M16 5h3a3 3 0 0 1-3 5"/><path d="M12 13v3M9 20h6M9.5 20c-.3-1.6 0-2.8 1-3.5M14.5 20c.3-1.6 0-2.8-1-3.5" stroke-linecap="round"/>',
  seed: '<path d="M12 21c-4-1-7-4.5-7-9 4 0 6 2 7 4 1-2 3-4 7-4 0 4.5-3 8-7 9Z"/><path d="M12 21V9" stroke-linecap="round"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>',
  stories: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 10h8M8 14h5" stroke-linecap="round"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke-linecap="round"/>',
  network: '<circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="18" r="2.2"/><circle cx="19" cy="18" r="2.2"/><path d="M12 7.2v4M12 11.2 6.6 16M12 11.2l5.4 4.8"/>',
  award: '<circle cx="12" cy="9" r="5.5"/><path d="M8.5 13.5 7 21l5-2.6 5 2.6-1.5-7.5" />',
  expo: '<path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6" />',
  crown: '<path d="m4 17 1.5-8L10 12l2-6 2 6 4.5-3L20 17Z"/><path d="M5 20h14" stroke-linecap="round"/>',
  grad: '<path d="M2 8 12 3l10 5-10 5Z"/><path d="M6 12.5V17c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5"/><path d="M22 8v6" stroke-linecap="round"/>',
  people: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><path d="M15.2 14.7c2.4.3 4.3 2.2 4.3 5.3" stroke-linecap="round"/>',
  growth: '<path d="M4 17 9.5 11l3.5 3 6-6.5"/><path d="M15 7.5h4V11.5" stroke-linecap="round" stroke-linejoin="round"/>',
  youth: '<circle cx="12" cy="7" r="3.2"/><path d="M5 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5"/>',
  pro: '<rect x="4" y="7" width="16" height="12" rx="2"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"/>',
  inst: '<path d="M4 21h16M5 21V9l7-5 7 5v12"/><path d="M9 21v-6h6v6" />',
  deal: '<path d="m3 12 4-3.4 3 2 3-2.6 3 2 4-3"/><path d="M3 12v4l4 3 3-2 3 2 3-2 4 2v-4"/>',
  fb: '<path d="M14 21v-7h2.4l.4-3H14V9.2c0-.9.3-1.5 1.6-1.5H17V5.1C16.7 5 15.8 5 14.8 5c-2.2 0-3.7 1.3-3.7 3.8V11H8.7v3H11v7Z"/>',
  ig: '<rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.8" cy="7.2" r="1"/>',
  li: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 10.5V17M8 7.2v.1M12 17v-3.6c0-1.6.9-2.4 2-2.4s2 .8 2 2.4V17M12 10.5V17"/>',
  tt: '<path d="M14 4v9.6a3.2 3.2 0 1 1-2.4-3.1"/><path d="M14 4c.3 1.9 1.6 3.3 3.6 3.6" stroke-linecap="round"/>'
};

function injectIcons(){
  document.querySelectorAll('[data-icon]').forEach(el => {
    const key = el.getAttribute('data-icon');
    const paths = ICONS[key];
    if(!paths) return;
    el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round">${paths}</svg>`;
  });
}
injectIcons();

/* ---------- 2. Mobile navigation ---------- */
const burgerBtn   = document.getElementById('burgerBtn');
const mobileNav   = document.getElementById('mobileNav');
const backdrop    = document.getElementById('mobileNavBackdrop');

function openNav(){
  mobileNav.classList.add('is-open');
  backdrop.classList.add('is-open');
  burgerBtn.classList.add('is-active');
  burgerBtn.setAttribute('aria-expanded','true');
  burgerBtn.setAttribute('aria-label','Fermer le menu');
  document.body.style.overflow = 'hidden';
}
function closeNav(){
  mobileNav.classList.remove('is-open');
  backdrop.classList.remove('is-open');
  burgerBtn.classList.remove('is-active');
  burgerBtn.setAttribute('aria-expanded','false');
  burgerBtn.setAttribute('aria-label','Ouvrir le menu');
  document.body.style.overflow = '';
}
burgerBtn.addEventListener('click', () => {
  mobileNav.classList.contains('is-open') ? closeNav() : openNav();
});
backdrop.addEventListener('click', closeNav);
document.querySelectorAll('#mobileNav a').forEach(a => a.addEventListener('click', closeNav));

/* ---------- 3. Header state on scroll ---------- */
const header = document.getElementById('siteHeader');
const onScroll = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- 4. Smooth scroll for in-page anchors ---------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if(id.length > 1){
      const target = document.querySelector(id);
      if(target){
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 76;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });
});

/* ---------- 5. One orchestrated hero entrance ---------- */
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hero-inner')?.classList.add('is-in');
});
