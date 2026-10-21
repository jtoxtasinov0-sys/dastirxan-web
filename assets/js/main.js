(function () {
  'use strict';

  var I18N = window.DX_I18N, MENU = window.DX_MENU, SIG = window.DX_SIGNATURE, SETS = window.DX_SETS;
  var LANGS = ['uz', 'ru', 'en', 'ko'];
  var LIDX = { uz: 0, ru: 1, en: 2, ko: 3 };
  var PHONE = '+821032474734';
  var IG_DM = 'https://ig.me/m/dastirxan_incheon';
  var lang = 'uz';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.uz[key] || ''; }
  function fill(str, map) { return str.replace(/\{(\w+)\}/g, function (_, k) { return map[k] != null ? map[k] : ''; }); }
  function won(p) { return (typeof p === 'number' ? p.toLocaleString('en-US') : p) + '₩'; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* ---------- Korea time ---------- */
  function kst() {
    var p = {};
    new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
      .formatToParts(new Date()).forEach(function (x) { p[x.type] = x.value; });
    return { date: p.year + '-' + p.month + '-' + p.day, min: (+p.hour % 24) * 60 + (+p.minute) };
  }

  /* ---------- language ---------- */
  function detectLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q && LANGS.indexOf(q) > -1) return q;
    var saved = store('dx-lang');
    if (saved && LANGS.indexOf(saved) > -1) return saved;
    var list = navigator.languages || [navigator.language || 'uz'];
    for (var i = 0; i < list.length; i++) {
      var l = (list[i] || '').toLowerCase().slice(0, 2);
      if (l === 'ko' || l === 'ru' || l === 'uz' || l === 'en') return l;
      if (['kk', 'ky', 'tg', 'tk', 'be', 'uk'].indexOf(l) > -1) return 'ru';
    }
    return 'en';
  }

  function loadKoreanSerif() {
    if (document.getElementById('nanum')) return;
    var l = document.createElement('link');
    l.id = 'nanum'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700&display=swap';
    document.head.appendChild(l);
  }

  function applyLang(next, first) {
    lang = next;
    document.documentElement.lang = lang;
    if (lang === 'ko') loadKoreanSerif();
    $$('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (!v) return;
      if (el.hasAttribute('data-split')) splitWords(el, v, first && el.classList.contains('hero__title'));
      else el.textContent = v;
    });
    $$('[data-i18n-ph]').forEach(function (el) { el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph'))); });
    $$('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    $$('[data-i18n-title]').forEach(function (el) { el.setAttribute('title', t(el.getAttribute('data-i18n-title'))); });
    document.title = t('meta.title');
    var md = $('meta[name="description"]'); if (md) md.setAttribute('content', t('meta.desc'));
    $('.lang__cur').textContent = lang === 'ko' ? '한국어' : lang.toUpperCase();
    $$('[data-set-lang]').forEach(function (b) { b.setAttribute('aria-current', b.getAttribute('data-set-lang') === lang ? 'true' : 'false'); });
    renderSigTabs(); renderSig(false); renderSets(); renderMenuTabs(); renderMenu(); renderTimes(); tick();
    if (!first) requestAnimationFrame(function () { $$('.tabs').forEach(movePill); });
  }

  /* headline weave: every word becomes a clipped span so it can rise from a drawn thread */
  function splitWords(el, text, animate) {
    el.classList.add('split');
    el.classList.toggle('is-animating', !!animate);
    el.setAttribute('aria-label', text);
    el.innerHTML = text.split(/\s+/).map(function (w, i) {
      return '<span class="w" aria-hidden="true" style="--i:' + i + '"><span>' + esc(w) + '</span></span>';
    }).join(' ');
  }

  /* ---------- open / closed + lunch countdown ---------- */
  function dur(mins) {
    var h = Math.floor(mins / 60), m = mins % 60;
    return h ? fill(t('t.hm'), { h: h, m: m }) : fill(t('t.m'), { m: m });
  }
  function tick() {
    var now = kst().min, open = now >= 11 * 60 && now < 23 * 60;
    $$('[data-status]').forEach(function (s) {
      s.classList.toggle('is-open', open);
      $('.status__text', s).textContent = t(open ? 'status.open' : 'status.closed');
    });
    var live = $('[data-lunch-live]');
    if (live) {
      var on = now >= 12 * 60 && now < 16 * 60;
      live.classList.toggle('is-on', on);
      $('span', live).textContent = on ? fill(t('lunch.on'), { t: dur(16 * 60 - now) }) : t(now < 12 * 60 ? 'lunch.before' : 'lunch.after');
    }
  }

  /* ---------- tabs with a sliding pill ---------- */
  function movePill(tabs) {
    var pill = $('.tabs__pill', tabs), active = $('[aria-selected="true"]', tabs);
    if (!pill) return;
    if (!active) { pill.style.opacity = '0'; return; }
    pill.style.opacity = '1';
    pill.style.width = active.offsetWidth + 'px';
    pill.style.transform = 'translateX(' + active.offsetLeft + 'px)';
  }
  function buildTabs(root, items, current, onPick) {
    root.innerHTML = '<span class="tabs__pill" aria-hidden="true"></span>' + items.map(function (it) {
      return '<button class="tab" type="button" role="tab" data-id="' + it.id + '" aria-selected="' + (it.id === current) + '">' + esc(it.label) + '</button>';
    }).join('');
    root.onclick = function (e) {
      var b = e.target.closest('.tab'); if (!b) return;
      $$('.tab', root).forEach(function (x) { x.setAttribute('aria-selected', x === b ? 'true' : 'false'); });
      movePill(root);
      root.scrollTo({ left: b.offsetLeft - root.clientWidth / 2 + b.offsetWidth / 2, behavior: reduceMotion ? 'auto' : 'smooth' });
      onPick(b.getAttribute('data-id'));
    };
    movePill(root);
  }

  /* ---------- signature plates ---------- */
  var sigTab = 'national', trayRot = 0, sigBusy = false;
  function renderSigTabs() {
    buildTabs($('[data-sig-tabs]'), SIG.map(function (g) { return { id: g.id, label: t('sig.t.' + g.id) }; }), sigTab, function (id) {
      if (id === sigTab) return; sigTab = id; renderSig(true);
    });
  }
  function dishHTML(d, i) {
    var L = LIDX[lang];
    return '<article class="dish" style="--i:' + i + '"><div class="dish__plate"><img src="assets/img/food/' + d.img + '.webp" alt="' + esc(d.name[L]) + '" loading="lazy" decoding="async"></div>' +
      '<h3>' + esc(d.name[L]) + '</h3><p>' + esc(d.desc[L]) + '</p><span class="price">' + won(d.price) + '</span></article>';
  }
  function renderSig(animate) {
    var box = $('[data-sig-plates]'), group = SIG.filter(function (g) { return g.id === sigTab; })[0];
    var html = group.dishes.map(dishHTML).join('');
    if (!animate || reduceMotion || !box.children.length) { box.innerHTML = html; return; }
    if (sigBusy) { box.innerHTML = html; return; }
    sigBusy = true;
    trayRot -= 120; $('.sig__tray').style.setProperty('--rot', trayRot + 'deg');
    $$('.dish', box).forEach(function (el) { el.classList.add('is-out'); });
    setTimeout(function () {
      box.innerHTML = html;
      var fresh = $$('.dish', box);
      fresh.forEach(function (el) { el.classList.add('is-pre'); });
      void box.offsetWidth;
      requestAnimationFrame(function () { fresh.forEach(function (el) { el.classList.remove('is-pre'); }); sigBusy = false; });
    }, 560);
  }

  /* ---------- grill sets ---------- */
  function renderSets() {
    $('[data-sets]').innerHTML = SETS.map(function (s) {
      var meta = '';
      if (s.people) meta += '<span class="chip"><svg class="i" aria-hidden="true"><use href="assets/img/icons.svg#i-users-three"/></svg>' + fill(t('sets.people'), { n: s.people.join('-') }) + '</span>';
      meta += '<span class="chip"><svg class="i" aria-hidden="true"><use href="assets/img/icons.svg#i-timer"/></svg>' + fill(t('sets.time'), { n: s.time }) + '</span>';
      var pp = s.people ? '<span>' + fill(t('sets.pp'), { p: won(Math.round(s.price / s.people[1] / 100) * 100) }) + '</span>' : '';
      return '<article class="set" data-reveal-set><div class="set__img"><img src="assets/img/food/' + s.img + '.webp" alt="' + esc(s.name) + '" loading="lazy" decoding="async"></div>' +
        '<div class="set__body"><h3 class="set__name">' + esc(s.name) + '</h3><p class="set__desc">' + esc(t('sets.d.' + s.d)) + '</p>' +
        '<div class="set__meta">' + meta + '</div><div class="set__price"><strong>' + won(s.price) + '</strong>' + pp + '</div>' +
        '<button class="btn btn--ghost btn--sm" type="button" data-book data-guests="' + (s.people ? s.people[1] : 4) + '"><svg class="i" aria-hidden="true"><use href="assets/img/icons.svg#i-calendar-blank"/></svg><span>' + esc(t('cta.book')) + '</span></button></div></article>';
    }).join('');
    $$('[data-reveal-set]').forEach(function (el) { io.observe(el); });
  }

  /* ---------- full menu ---------- */
  var menuTab = 'plov', query = '';
  function renderMenuTabs() {
    buildTabs($('[data-menu-tabs]'), MENU.map(function (c) { return { id: c.id, label: t('cat.' + c.id) }; }), query ? null : menuTab, function (id) {
      menuTab = id; query = ''; $('[data-menu-search]').value = ''; renderMenu();
    });
  }
  function norm(s) { return String(s).toLowerCase().replace(/[‘’ʻʼ'`]/g, '').replace(/ё/g, 'е'); }
  function renderMenu() {
    var L = LIDX[lang], rows = [];
    if (query) {
      var q = norm(query);
      MENU.forEach(function (c) { c.items.forEach(function (it) { if (it.slice(0, 4).some(function (n) { return norm(n).indexOf(q) > -1; })) rows.push({ it: it, cat: c.id }); }); });
    } else {
      MENU.filter(function (c) { return c.id === menuTab; })[0].items.forEach(function (it) { rows.push({ it: it, cat: menuTab }); });
    }
    $('[data-menu-list]').innerHTML = rows.map(function (r, i) {
      var it = r.it, note = it[5] ? '<small>' + esc(t('note.' + it[5])) + '</small>' : '';
      var cat = query ? '<em>' + esc(t('cat.' + r.cat)) + '</em>' : '';
      return '<li class="mi" style="--i:' + Math.min(i, 24) + '"><span class="mi__name">' + cat + '<b>' + esc(it[L]) + '</b>' + note + '</span><span class="mi__dots" aria-hidden="true"></span><span class="mi__price">' + won(it[4]) + '</span></li>';
    }).join('');
    $('[data-menu-empty]').hidden = rows.length > 0;
    $('[data-menu-count]').textContent = query ? fill(t('menu.results'), { n: rows.length }) : '';
  }
  var searchTimer;
  $('[data-menu-search]').addEventListener('input', function (e) {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () {
      query = e.target.value.trim();
      var tabs = $('[data-menu-tabs]');
      $$('.tab', tabs).forEach(function (b) { b.setAttribute('aria-selected', !query && b.getAttribute('data-id') === menuTab ? 'true' : 'false'); });
      movePill(tabs); renderMenu();
    }, 140);
  });

  /* ---------- reveal on scroll ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target;
      el.classList.add('in');
      if (el.hasAttribute('data-count-to')) countUp(el);
      if (el.hasAttribute('data-split') && !el.dataset.done) { el.dataset.done = '1'; splitWords(el, el.getAttribute('aria-label') || el.textContent, true); }
      io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

  function staggerGroups() {
    ['.features__list', '.stats', '.visit__rows', '.bento'].forEach(function (sel) {
      $$(sel).forEach(function (g) { $$('[data-reveal], .feat', g).forEach(function (el, i) { el.style.setProperty('--d', (i * 0.08) + 's'); }); });
    });
  }

  function countUp(el) {
    var to = +el.getAttribute('data-count-to'), from = +(el.getAttribute('data-count-from') || 0);
    var fmt = el.getAttribute('data-count-format') === 'won' ? function (n) { return n.toLocaleString('en-US'); } : String;
    if (reduceMotion) { el.textContent = fmt(to); return; }
    var start = null, dur = 1600;
    function step(ts) {
      if (!start) start = ts;
      var k = Math.min(1, (ts - start) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(Math.round(from + (to - from) * e));
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- embers rising from the plate ---------- */
  function embers() {
    var box = $('.embers'); if (!box || reduceMotion) return;
    var html = '';
    for (var i = 0; i < 16; i++) {
      var d = 7 + Math.random() * 7;
      html += '<span class="ember' + (Math.random() < 0.4 ? ' ember--peach' : '') + '" style="left:' + (30 + Math.random() * 65).toFixed(1) + '%;--s:' + (4 + Math.random() * 6).toFixed(1) +
        ';--d:' + d.toFixed(1) + 's;--delay:' + (-Math.random() * d).toFixed(1) + 's;--dx:' + (Math.random() * 160 - 80).toFixed(0) + 'px;--rot:' + (Math.random() * 360 - 180).toFixed(0) + 'deg"></span>';
    }
    box.innerHTML = html;
  }

  /* ---------- nav ---------- */
  var nav = $('#nav'), burger = $('.burger'), drawer = $('#drawer');
  var sentinel = document.createElement('div');
  sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:40px;pointer-events:none';
  document.body.prepend(sentinel);
  new IntersectionObserver(function (e) { nav.classList.toggle('is-solid', !e[0].isIntersecting || !drawer.hidden); }).observe(sentinel);
  function setDrawer(open) {
    drawer.hidden = !open;
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', t(open ? 'nav.close' : 'nav.open'));
    nav.classList.toggle('is-solid', open || window.scrollY > 40);
  }
  burger.addEventListener('click', function () { setDrawer(drawer.hidden); });
  $$('a', drawer).forEach(function (a) { a.addEventListener('click', function () { setDrawer(false); }); });

  var mbar = $('[data-mbar]');
  new IntersectionObserver(function (e) {
    var en = e[0]; mbar.classList.toggle('is-on', !en.isIntersecting && en.boundingClientRect.top < 0);
  }).observe($('.hero__ctas'));

  var langBox = $('[data-lang]'), langBtn = $('.lang__btn');
  function setLangMenu(open) { langBox.classList.toggle('is-open', open); langBtn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
  langBtn.addEventListener('click', function (e) { e.stopPropagation(); setLangMenu(!langBox.classList.contains('is-open')); });
  $$('[data-set-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      var l = b.getAttribute('data-set-lang'); store('dx-lang', l); setLangMenu(false); applyLang(l, false);
    });
  });
  document.addEventListener('click', function (e) { if (!langBox.contains(e.target)) setLangMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setLangMenu(false); if (!drawer.hidden) setDrawer(false); } });

  /* ---------- booking + banquet requests ---------- */
  var dlg = $('#bookDialog'), bookForm = $('[data-form="book"]'), bqForm = $('[data-form="banquet"]');
  var stepForm = $('[data-step="form"]', dlg), stepDone = $('[data-step="done"]', dlg);

  function renderTimes() {
    var sel = $('#bk-time'), cur = sel.value || '19:00', html = '';
    for (var m = 11 * 60; m <= 22 * 60; m += 30) {
      var v = String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
      html += '<option value="' + v + '"' + (v === cur ? ' selected' : '') + '>' + v + '</option>';
    }
    sel.innerHTML = html;
  }
  function prepDates() {
    var today = kst().date;
    ['#bk-date', '#bq-date'].forEach(function (s) { var el = $(s); el.min = today; if (!el.value) el.value = today; });
  }
  function setErr(input, key) {
    var field = input.closest('.field'), out = $('.field__err', field);
    field.classList.toggle('has-err', !!key);
    input.setAttribute('aria-invalid', key ? 'true' : 'false');
    if (out) out.textContent = key ? t(key) : '';
    return !key;
  }
  function validate(form) {
    var ok = true, first = null, today = kst().date;
    $$('input[required], input[name="guests"]', form).forEach(function (inp) {
      var v = inp.value.trim(), key = null;
      if (!v) key = 'err.req';
      else if (inp.type === 'tel' && v.replace(/\D/g, '').length < 8) key = 'err.phone';
      else if (inp.type === 'date' && v < today) key = 'err.date';
      else if (inp.name === 'guests' && !(+v >= 1 && +v <= 300)) key = 'err.guests';
      if (!setErr(inp, key)) { ok = false; first = first || inp; }
    });
    if (first) first.focus();
    return ok;
  }
  $$('input', bookForm).concat($$('input', bqForm)).forEach(function (inp) {
    inp.addEventListener('input', function () { if (inp.closest('.field').classList.contains('has-err')) setErr(inp, null); });
  });

  function openBooking(guests) {
    prepDates();
    if (guests) $('input[name="guests"]', bookForm).value = guests;
    stepForm.hidden = false; stepDone.hidden = true; $('[data-toast]', dlg).hidden = true;
    dlg.showModal();
    setTimeout(function () { $('#bk-date').focus(); }, 60);
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-book]'); if (!b) return;
    e.preventDefault(); setDrawer(false); openBooking(b.getAttribute('data-guests'));
  });
  $$('[data-step-guests]').forEach(function (b) {
    b.addEventListener('click', function () {
      var inp = $('input[name="guests"]', bookForm);
      inp.value = Math.max(1, Math.min(300, (+inp.value || 0) + (+b.getAttribute('data-step-guests'))));
      setErr(inp, null);
    });
  });

  var currentMsg = '';
  function showDone(msg) {
    currentMsg = msg;
    $('[data-msg]', dlg).textContent = msg;
    $('[data-sms]', dlg).href = 'sms:' + PHONE + '?&body=' + encodeURIComponent(msg);
    stepForm.hidden = true; stepDone.hidden = false; $('[data-toast]', dlg).hidden = true;
    if (!dlg.open) dlg.showModal();
  }
  bookForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate(bookForm)) return;
    var f = new FormData(bookForm), note = (f.get('note') || '').trim();
    var msg = fill(t('msg.book'), { name: f.get('name').trim(), phone: f.get('phone').trim(), date: f.get('date'), time: f.get('time'), guests: f.get('guests') });
    if (note) msg += '\n' + fill(t('msg.note'), { note: note });
    dlg.dataset.from = 'book'; showDone(msg);
  });
  bqForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate(bqForm)) return;
    var f = new FormData(bqForm);
    var msg = fill(t('msg.banquet'), { type: t(f.get('type')), date: f.get('date'), guests: f.get('guests'), name: f.get('name').trim(), phone: f.get('phone').trim() });
    dlg.dataset.from = 'banquet'; showDone(msg);
  });
  $('[data-back]', dlg).addEventListener('click', function () {
    if (dlg.dataset.from === 'banquet') { dlg.close(); $('#bq-name').focus(); return; }
    stepDone.hidden = true; stepForm.hidden = false;
  });
  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (res) {
      var ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) { /* ignore */ } ta.remove(); res();
    });
  }
  $('[data-ig]', dlg).addEventListener('click', function () {
    copy(currentMsg).then(function () { $('[data-toast]', dlg).hidden = false; });
    window.open(IG_DM, '_blank', 'noopener');
  });
  $$('[data-close]', dlg).forEach(function (b) { b.addEventListener('click', function () { dlg.close(); }); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });

  /* ---------- gallery lightbox + tilt ---------- */
  var lb = $('#lightbox'), lbImg = $('[data-lb-img]', lb), gal = $$('.gitem img'), lbAt = 0;
  function lbShow(i) { lbAt = (i + gal.length) % gal.length; lbImg.src = gal[lbAt].currentSrc || gal[lbAt].src; lbImg.style.animation = 'none'; void lbImg.offsetWidth; lbImg.style.animation = ''; }
  $$('.gitem').forEach(function (b, i) {
    b.addEventListener('click', function () { lbShow(i); lb.showModal(); });
    if (finePointer && !reduceMotion) {
      b.addEventListener('pointermove', function (e) {
        var r = b.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        b.style.setProperty('--tx', (x * 10).toFixed(2) + 'deg'); b.style.setProperty('--ty', (-y * 10).toFixed(2) + 'deg');
      });
      b.addEventListener('pointerleave', function () { b.style.setProperty('--tx', '0deg'); b.style.setProperty('--ty', '0deg'); });
    }
  });
  $$('[data-lb]', lb).forEach(function (b) { b.addEventListener('click', function () { lbShow(lbAt + (+b.getAttribute('data-lb'))); }); });
  $('[data-close]', lb).addEventListener('click', function () { lb.close(); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') lbShow(lbAt + 1); if (e.key === 'ArrowLeft') lbShow(lbAt - 1); });

  /* ---------- magnetic CTAs ---------- */
  if (finePointer && !reduceMotion) {
    document.addEventListener('pointermove', function (e) {
      var b = e.target.closest && e.target.closest('.magnetic'); if (!b) return;
      var r = b.getBoundingClientRect();
      b.style.setProperty('--mx', ((e.clientX - r.left - r.width / 2) * 0.22).toFixed(1) + 'px');
      b.style.setProperty('--my', ((e.clientY - r.top - r.height / 2) * 0.32).toFixed(1) + 'px');
    });
    $$('.magnetic').forEach(function (b) { b.addEventListener('pointerleave', function () { b.style.setProperty('--mx', '0px'); b.style.setProperty('--my', '0px'); }); });
  }

  /* ---------- boot ---------- */
  applyLang(detectLang(), true);
  embers();
  staggerGroups();
  $$('[data-reveal], .ikat-reveal, .feat, .sig__plates, .lunch__visual, [data-count-to], .final__title').forEach(function (el) { io.observe(el); });
  var yr = $('[data-year]'); if (yr) yr.textContent = new Date().getFullYear();
  setInterval(tick, 30000);
  window.addEventListener('resize', function () { $$('.tabs').forEach(movePill); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { $$('.tabs').forEach(movePill); });
})();
