// Gemmer elevens svar i denne browser (kun til elevens egen brug), styrer fanerne i øvelsen,
// menuen på telefonen og listen "På denne side".
(function () {
  var side = document.body.getAttribute('data-side');
  function hent(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function gem(k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }
  var felter = document.querySelectorAll('.svar');
  felter.forEach(function (f, i) {
    var k = 'gas-ff:' + side + ':' + i; var v = hent(k);
    if (v !== null) f.value = v;
    f.addEventListener('input', function () { gem(k, f.value); });
  });
  var valg = document.querySelectorAll('.valg');
  valg.forEach(function (b, i) {
    var k = 'gas-ff:' + side + ':v' + i;
    if (hent(k) === '1') b.classList.add('ringet');
    b.addEventListener('click', function () { b.classList.toggle('ringet'); gem(k, b.classList.contains('ringet') ? '1' : '0'); });
  });
  var knapper = document.querySelectorAll('.faner button');
  knapper.forEach(function (b) {
    b.addEventListener('click', function () {
      knapper.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      document.querySelectorAll('.fane').forEach(function (f) { f.hidden = f.id !== 'fane-' + b.getAttribute('data-fane'); });
    });
  });
  var ryd = document.getElementById('ryd');
  if (ryd) ryd.addEventListener('click', function () {
    if (!window.confirm('Slet alle svar på denne side?')) return;
    felter.forEach(function (f, i) { f.value = ''; gem('gas-ff:' + side + ':' + i, ''); });
    valg.forEach(function (b, i) { b.classList.remove('ringet'); gem('gas-ff:' + side + ':v' + i, '0'); });
  });
  // menuen på telefonen
  var mk = document.getElementById('menuknap');
  if (mk) mk.addEventListener('click', function () {
    var aaben = document.body.classList.toggle('menu-aaben');
    mk.setAttribute('aria-expanded', aaben ? 'true' : 'false');
  });
  // et klik på et moduls navn åbner modulets forside; pilen folder ud og sammen
  document.querySelectorAll('.modul summary a').forEach(function (a) {
    a.addEventListener('click', function (e) { e.stopPropagation(); });
  });
  // På denne side
  var toc = document.getElementById('toc');
  var overskrifter = document.querySelectorAll('.indhold h2[id]');
  if (!overskrifter.length) { toc.parentNode.classList.add('tom'); return; }
  var links = [];
  overskrifter.forEach(function (h) {
    var li = document.createElement('li'); var a = document.createElement('a');
    a.href = '#' + h.id; a.textContent = h.getAttribute('data-toc') || h.textContent;
    li.appendChild(a); toc.appendChild(li); links.push([h, a]);
  });
  function marker() {
    var aktiv = links[0];
    links.forEach(function (p) { if (p[0].getBoundingClientRect().top < 120) aktiv = p; });
    links.forEach(function (p) { p[1].classList.toggle('aktiv', p === aktiv); });
  }
  window.addEventListener('scroll', marker, { passive: true }); marker();
})();
