/* Sueño Andino — interacciones (menú, animaciones, galería, contacto) */
(function () {
  var d = document, root = d.documentElement;

  // Menú móvil
  var btn = d.querySelector('.menu-btn'), overlay = d.querySelector('.nav-overlay');
  function setMenu(open) {
    root.classList.toggle('nav-open', open);
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (btn) btn.addEventListener('click', function () { setMenu(!root.classList.contains('nav-open')); });
  if (overlay) overlay.addEventListener('click', function () { setMenu(false); });
  d.querySelectorAll('.site-nav a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  d.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Animación de entrada
  var items = d.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Galería (lightbox)
  var links = d.querySelectorAll('a[data-gallery]');
  if (links.length && typeof HTMLDialogElement === 'function') {
    var dlg = d.createElement('dialog');
    dlg.className = 'lightbox';
    dlg.innerHTML = '<div class="stage"><img alt=""></div>' +
      '<button class="lb-btn lb-close" aria-label="Cerrar">&times;</button>' +
      '<button class="lb-btn lb-prev" aria-label="Anterior">&#8249;</button>' +
      '<button class="lb-btn lb-next" aria-label="Siguiente">&#8250;</button>' +
      '<div class="lb-count"></div>';
    d.body.appendChild(dlg);
    var img = dlg.querySelector('img'), count = dlg.querySelector('.lb-count'), group = [], idx = 0;
    function show(i) {
      idx = (i + group.length) % group.length;
      img.src = group[idx].getAttribute('href');
      img.alt = (group[idx].querySelector('img') || {}).alt || '';
      count.textContent = (idx + 1) + ' / ' + group.length;
    }
    links.forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        group = Array.prototype.slice.call(d.querySelectorAll('a[data-gallery="' + a.dataset.gallery + '"]'));
        show(group.indexOf(a));
        dlg.showModal();
      });
    });
    dlg.querySelector('.lb-close').addEventListener('click', function () { dlg.close(); });
    dlg.querySelector('.lb-prev').addEventListener('click', function () { show(idx - 1); });
    dlg.querySelector('.lb-next').addEventListener('click', function () { show(idx + 1); });
    dlg.querySelector('.stage').addEventListener('click', function (e) { if (e.target !== img) dlg.close(); });
    dlg.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    });
  }

  // Formulario de contacto: abre el correo con el mensaje
  var form = d.querySelector('form[data-mailto]');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var body = f.mensaje.value + '\n\n' + f.nombre.value + (f.correo.value ? ' <' + f.correo.value + '>' : '');
    window.location.href = 'mailto:' + form.dataset.mailto + '?subject=' + encodeURIComponent('Contacto desde la web' + (f.nombre.value ? ' — ' + f.nombre.value : '')) + '&body=' + encodeURIComponent(body);
  });
})();
