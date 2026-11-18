// Gemmer elevens svar i denne browser (kun til elevens egen brug) og styrer fanerne i øvelsen.
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
})();
