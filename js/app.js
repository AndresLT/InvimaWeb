/* INVIMA CONSCIENTE · Cartilla interactiva — motor */
(function () {
"use strict";
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const PJ = Object.fromEntries(PERSONAJES.map(p => [p.id, p]));
const MOM = Object.fromEntries(MOMENTOS.map(m => [m.n, m]));

/* ---------------- ICONS ---------------- */
const IP = {
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>', x: '<path d="M6 6l12 12M18 6L6 18"/>',
  left: '<path d="M15 5l-7 7 7 7"/>', right: '<path d="M9 5l7 7-7 7"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>', play: '<path d="M8 5.5v13l11-6.5z" fill="currentColor"/>',
  hand: '<path d="M8 13V6.5a1.5 1.5 0 013 0V12m0-1V5a1.5 1.5 0 013 0v6m0-4.5a1.5 1.5 0 013 0V14c0 4-2.5 7-6.5 7S6 18.5 5 16l-1.6-3.2a1.4 1.4 0 012.4-1.4L8 14"/>',
  cal: '<rect x="4" y="5" width="16" height="15" rx="3"/><path d="M8 3v4M16 3v4M4 10h16"/>',
  swap: '<path d="M7 7h12l-3-3M17 17H5l3 3"/>', msg: '<path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2H9l-5 4z"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  laugh: '<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2.5 4 2.5 4-2.5 4-2.5M9 9.5h.01M15 9.5h.01"/>',
  ear: '<path d="M7 9a5 5 0 0110 0c0 3-3 4-3 7a3 3 0 01-6 0"/><path d="M10 10a2 2 0 014 0"/>',
  warn: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3.5 7l8.5 6 8.5-6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
  plus: '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M12 8v8M8 12h8"/>',
  route: '<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 000-6H9a3 3 0 010-6h6.5"/>',
  lock: '<rect x="5" y="10" width="14" height="10" rx="3"/><path d="M8 10V7a4 4 0 018 0v3"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="3"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"/>',
  home: '<path d="M4 11l8-7 8 7v9H4z"/><path d="M10 20v-5h4v5"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  heart: '<path d="M12 20s-8-4.5-8-10.5A4.5 4.5 0 0112 7a4.5 4.5 0 018 2.5C20 15.5 12 20 12 20z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0M16 4.5a3.5 3.5 0 010 7M18 14a6 6 0 013.5 6"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>',
  scale: '<path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7a3 3 0 006 0zM19 7l-3 7a3 3 0 006 0z"/>',
  stop: '<path d="M8 3h8l5 5v8l-5 5H8l-5-5V8z"/><path d="M8 12h8"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/>',
  doc: '<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5M9 13h7M9 17h5"/>',
  pin: '<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  star: '<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"/>',
  card: '<rect x="3" y="5" width="13" height="16" rx="3"/><path d="M8 3h10a3 3 0 013 3v11"/>',
  puzzle: '<path d="M10 4a2 2 0 014 0v2h4v4h-2a2 2 0 000 4h2v4h-4v-2a2 2 0 00-4 0v2H6v-4h2a2 2 0 000-4H6V6h4z"/>',
  video: '<rect x="3" y="6" width="13" height="12" rx="3"/><path d="M16 10l5-3v10l-5-3z"/>',
  pen: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  flip: '<path d="M4 9a8 8 0 0114-3l2 2M20 15a8 8 0 01-14 3l-2-2"/><path d="M20 4v4h-4M4 20v-4h4"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="3"/><path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  megaphone: '<path d="M3 10v4h4l8 5V5L7 10z"/><path d="M18 9a4 4 0 010 6"/>'
};
const ic = (n, sz = 22, sw = 2) => `<svg class="ico" width="${sz}" height="${sz}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IP[n] || ""}</svg>`;
const brandDots = () => `<div class="brand-dots" aria-hidden="true">${["#004C94", "#006ECF", "#3C93FA", "#00D4C6", "#0FA69D", "#73CC80"].map(c => `<i style="background:${c}"></i>`).join("")}</div>`;

/* ---------------- TRACKING (anónimo) ---------------- */
const LS = "invima-consciente-v1";
const blank = () => ({ v: 1, visits: 0, first: null, last: null, vinc: null, seen: {}, vids: {}, acts: {}, val: {}, mural: {}, acciones: [] });
let S = blank();
try { const raw = localStorage.getItem(LS); if (raw) S = Object.assign(blank(), JSON.parse(raw)); } catch (e) {}
const Remote = { db: null, ref: null, ok: false, busy: false, dirty: false, canPanel: false };
let saveT = null;
function persist() {
  try { localStorage.setItem(LS, JSON.stringify(S)); } catch (e) {}
  if (!Remote.ok) return;
  Remote.dirty = true; clearTimeout(saveT); saveT = setTimeout(flush, 1200);
}
async function flush() {
  if (!Remote.ok || Remote.busy || !Remote.dirty) return;
  Remote.busy = true; Remote.dirty = false;
  try { await Remote.ref.set(JSON.parse(JSON.stringify(S))); }
  catch (e) { if (e && (e.code === "invalid_argument" || e.code === "revoked" || e.code === "not_granted")) Remote.ok = false; }
  Remote.busy = false; if (Remote.dirty) saveT = setTimeout(flush, 1200);
}
const Track = {
  page(id) { if (!S.seen[id]) { S.seen[id] = Date.now(); persist(); } },
  video(id) { if (!S.vids[id]) { S.vids[id] = Date.now(); persist(); } },
  act(id, score, total, ans) {
    const a = S.acts[id] || { n: 0 };
    a.n++; a.s = score; a.t = total; a.at = Date.now();
    if (!a.f) a.f = { s: score, t: total, ans };
    a.best = Math.max(a.best || 0, score);
    S.acts[id] = a; persist(); refreshProgress();
  },
  set(k, v) { S[k] = v; persist(); }
};
async function initRemote() {
  if (!window.claude || typeof window.claude.use !== "function") return;
  try {
    const [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]);
    if (user) { try { Remote.canPanel = !!(await user.canEdit()); } catch (e) {} }
    if (Remote.canPanel) { addPanelToToc(); }
    if (!db || !user) return;
    const uid = await user.id();
    if (!uid) return;
    Remote.db = db; Remote.ref = db.doc("resp/" + uid);
    let snap = null;
    try { snap = await Promise.race([Remote.ref.get(), new Promise((_, r) => setTimeout(() => r({ code: "timeout" }), 10000))]); } catch (e) {}
    if (snap && snap.exists) {
      const d = snap.data() || {};
      // fusiona: conserva lo más completo entre este navegador y lo guardado
      const merged = Object.assign(blank(), d);
      for (const k of ["seen", "vids", "acts"]) merged[k] = Object.assign({}, d[k] || {}, S[k] || {});
      merged.visits = Math.max(d.visits || 0, S.visits || 0);
      merged.vinc = S.vinc || d.vinc || null; merged.val = Object.assign({}, d.val, S.val); merged.mural = Object.assign({}, d.mural, S.mural);
      merged.acciones = (S.acciones && S.acciones.length) ? S.acciones : (d.acciones || []);
      merged.first = d.first || S.first;
      S = merged;
    }
    Remote.ok = true;
    Remote.dirty = true; flush();
    hydrateAll();
  } catch (e) { Remote.ok = false; }
}
// visita
(function () { let ses = null; try { ses = sessionStorage.getItem(LS + "-ses"); } catch (e) {}
  if (!ses) { S.visits = (S.visits || 0) + 1; try { sessionStorage.setItem(LS + "-ses", "1"); } catch (e) {} }
  S.first = S.first || Date.now(); S.last = Date.now(); persist(); })();

/* ---------------- HELPERS ---------------- */
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("on"); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("on"), 2400); }
function pjImg(id, cls = "") { const p = PJ[id]; return `<img src="${p.img}" alt="Personaje: ${esc(p.perfil)}" class="${p.escena ? "scene " : ""}${cls}" loading="lazy">`; }
function pjName(p) { return p.nombre ? esc(p.nombre) : `Nombre por elegir`; }
function ring(pct, color) {
  const r = 80, c = 2 * Math.PI * r;
  return `<svg width="190" height="190" viewBox="0 0 190 190"><circle cx="95" cy="95" r="${r}" fill="none" stroke="#e8eef3" stroke-width="16"/><circle cx="95" cy="95" r="${r}" fill="none" stroke="${color}" stroke-width="16" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - pct)}" style="transition:stroke-dashoffset 1s"/></svg>`;
}
function msgFor(p) { return p >= .9 ? "¡Excelente! Lo tienes muy claro." : p >= .7 ? "¡Muy bien! Vas por buen camino." : p >= .5 ? "Buen intento. Repasa la retroalimentación y vuelve a intentarlo." : "Este tema vale la pena repasarlo. Vuelve a intentarlo cuando quieras."; }
function shuffle(a, seed) { const r = a.slice(); let s = seed || 7; for (let i = r.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; }
function head(m, kicker, title, lead) {
  return `<div class="kicker">${kicker}</div><h2 class="h2">${title}</h2>${lead ? `<p class="lead">${lead}</p>` : ""}`;
}
const momKicker = n => `Momento ${n} · ${MOM[n].titulo}`;

/* ---------------- VIDEO ---------------- */
function videoBox(key) {
  const v = VIDEOS[key];
  if (v && v.src) return `<div class="vbox"><video controls playsinline preload="metadata" src="${esc(v.src)}" ${v.poster ? `poster="${esc(v.poster)}"` : ""} data-vid="${key}" aria-label="${esc(v.titulo)}"></video></div>`;
  const prod = v && v.estado === "produccion";
  return `<div class="vbox"><div class="vph"><span class="badge">${prod ? "En producción" : "Espacio reservado"}</span><div class="play">${ic("play", 34)}</div><b>${esc(v ? v.titulo : "Video")}</b><span>${prod ? "Este video está en producción. Muy pronto lo verás aquí mismo." : "El video se incorporará aquí, dentro de la cartilla."}</span></div><div class="seal">INVIMA CONSCIENTE</div></div>`;
}
function videoPage(key, n) {
  const I = VIDEO_INTROS[key];
  return `<div class="pg">${head(n, n ? momKicker(n) + " · Video" : "Los personajes · Video", n ? esc(VIDEOS[key].titulo.replace(/^Video \d · /, "")) : "Conoce a quienes te acompañan")}
  <div class="vgrid"><div class="vinfo">
    <h4>De qué trata</h4><p>${esc(I.contexto)}</p>
    <h4>Qué busca</h4><p>${esc(I.busca)}</p>
    <h4>Mientras lo ves, fíjate en…</h4><ul>${I.fijate.map(f => `<li>${esc(f)}</li>`).join("")}</ul>
  </div>${videoBox(key)}</div></div>`;
}

/* ---------------- QUIZ ENGINE ---------------- */
function quiz(el, id, items, opt = {}) {
  let i = 0, ans = [], score = 0;
  const tf = items[0].o.length === 2;
  function render() {
    if (i >= items.length) return result();
    const it = items[i];
    el.innerHTML = `<div class="quiz">
      ${opt.side !== false && it.pj ? `<div class="qside">${pjImg(it.pj)}</div>` : ""}
      <div class="qmain">
        <div class="qhead"><div class="qsteps">${items.map((_, k) => `<i class="${k < i ? (ans[k] ? "ok" : "bad") : k === i ? "cur" : ""}"></i>`).join("")}</div>
          <span class="small">${i + 1} de ${items.length}</span>${it.ctx ? `<span class="qctx">${esc(it.ctx)}</span>` : ""}</div>
        <div class="qcase ${tf && !it.pre ? "tf" : ""}">${esc(it.q)}</div>
        ${it.pre ? `<div class="qpre">${esc(it.pre)}</div>` : `<div style="height:16px"></div>`}
        <div class="opts ${tf ? "two" : ""}">${it.o.map((o, k) => `<button class="opt" data-k="${k}"><span class="l">${"ABCD"[k]}</span><span>${esc(o)}</span></button>`).join("")}</div>
        <div class="fbz" aria-live="polite"></div>
        <div class="qfoot"></div>
      </div></div>`;
    $$(".opt", el).forEach(b => b.onclick = () => pick(+b.dataset.k));
  }
  function pick(k) {
    const it = items[i], ok = k === it.k;
    ans[i] = ok; if (ok) score++;
    $$(".opt", el).forEach(b => { const kk = +b.dataset.k; b.disabled = true; if (kk === it.k) b.classList.add("ok"); else if (kk === k) b.classList.add("bad"); });
    $(".fbz", el).innerHTML = `<div class="fb ${ok ? "ok" : "bad"}">${ic(ok ? "check" : "info")}<div><b>${ok ? "¡Así es!" : "No exactamente."}</b> ${esc(it.fb)}</div></div>`;
    $(".qfoot", el).innerHTML = `<button class="btn mc sm">${i + 1 < items.length ? "Siguiente" : "Ver resultado"} ${ic("right", 18)}</button>`;
    $(".qfoot .btn", el).onclick = () => { i++; render(); };
    $$(".qsteps i", el)[i].className = ok ? "ok" : "bad";
  }
  function result() {
    const pct = score / items.length;
    Track.act(id, score, items.length, Object.fromEntries(ans.map((a, k) => [k, a ? 1 : 0])));
    el.innerHTML = `<div class="result"><div class="ring">${ring(pct, "var(--mc)")}<div class="v"><div>${score}/${items.length}<small>respuestas</small></div></div></div>
      <div><div class="kicker">Tu resultado</div><h3 class="h2" style="font-size:30px">${msgFor(pct)}</h3>
      <p class="lead" style="font-size:16.5px">${esc(opt.cierre || "Cada caso es hipotético y tiene una finalidad pedagógica. Esto no es una evaluación: es una oportunidad para practicar.")}</p>
      <div class="row mt24"><button class="btn alt sm rq">${ic("flip", 18)} Intentar de nuevo</button><button class="btn mc sm nx">Continuar ${ic("right", 18)}</button></div></div></div>`;
    $(".rq", el).onclick = () => { i = 0; ans = []; score = 0; render(); };
    $(".nx", el).onclick = () => go(cur + 1);
  }
  render();
}

/* ---------------- FLASHCARDS ---------------- */
function deck(el, id, cards) {
  let i = 0; const st = (S.acts[id] && S.acts[id].cards) ? S.acts[id].cards.slice() : cards.map(() => null);
  function save() {
    const known = st.filter(x => x === 1).length, rated = st.filter(x => x !== null).length;
    if (rated === cards.length) {
      const a = S.acts[id] || { n: 0 }; const firstDone = !a.f;
      a.cards = st.slice(); a.s = known; a.t = cards.length; a.at = Date.now();
      if (firstDone) { a.f = { s: known, t: cards.length, ans: Object.fromEntries(st.map((x, k) => [k, x])) }; a.n = 1; }
      S.acts[id] = a; persist(); refreshProgress();
      if (firstDone) toast(`¡Mazo completo! Conocías ${known} de ${cards.length}.`);
    } else { const a = S.acts[id] || { n: 0 }; a.cards = st.slice(); S.acts[id] = a; persist(); }
  }
  function render() {
    const c = cards[i];
    el.innerHTML = `<div class="deck">
      <div class="fcard" tabindex="0" role="button" aria-label="Tarjeta ${i + 1}: ${esc(c.t)}. Pulsa para voltear.">
        <div class="in">
          <div class="fface ffront"><span class="dec">${brandDots()}</span><span class="n">TARJETA ${String(i + 1).padStart(2, "0")} / ${cards.length}</span><h3>${esc(c.t)}</h3><span class="hint">${ic("flip", 16)} Toca para voltear</span></div>
          <div class="fface fback"><h4>${esc(c.t)}</h4><p>${esc(c.d)}</p>
            <div class="self"><span>¿Ya lo sabías?</span><button class="sbtn yes ${st[i] === 1 ? "on" : ""}" data-v="1">Sí, lo sabía</button><button class="sbtn no ${st[i] === 0 ? "on" : ""}" data-v="0">Aún no · repasar</button></div></div>
        </div></div>
      <div class="dside">
        <p class="small">Lee el término, intenta definirlo con tus palabras y voltea la tarjeta. Luego autoevalúate: nadie más ve tus respuestas individuales.</p>
        <div class="thumbs">${cards.map((k, j) => `<button data-j="${j}" class="${j === i ? "cur" : ""} ${st[j] === 1 ? "y" : st[j] === 0 ? "n" : ""}">${esc(k.t)}</button>`).join("")}</div>
        <div class="darrows mt8"><button class="btn alt sm pv" ${i === 0 ? "disabled" : ""}>${ic("left", 18)}</button><button class="btn mc sm nx">${i + 1 < cards.length ? "Siguiente tarjeta" : "Primera tarjeta"} ${ic("right", 18)}</button></div>
        <p class="small">${st.filter(x => x === 1).length} de ${cards.length} marcadas como «lo sabía».</p>
      </div></div>`;
    const fc = $(".fcard", el);
    fc.onclick = e => { if (e.target.closest(".sbtn")) return; fc.classList.toggle("flip"); };
    fc.onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fc.classList.toggle("flip"); } };
    $$(".sbtn", el).forEach(b => b.onclick = e => { e.stopPropagation(); st[i] = +b.dataset.v; save(); setTimeout(() => { i = (i + 1) % cards.length; render(); }, 250); });
    $$(".thumbs button", el).forEach(b => b.onclick = () => { i = +b.dataset.j; render(); });
    $(".pv", el).onclick = () => { if (i > 0) { i--; render(); } };
    $(".nx", el).onclick = () => { i = (i + 1) % cards.length; render(); };
  }
  render();
}

/* ---------------- MATCH ---------------- */
const PCOL = ["#006ECF", "#0FA69D", "#7b61d1", "#d9822b", "#2D3F54", "#c2417a"];
function match(el, id, pairs, seed) {
  const right = shuffle(pairs.map((p, k) => ({ b: p.b, k })), seed);
  let sel = null, link = {}; // link[leftIdx] = rightK
  function render(checked) {
    const used = Object.values(link);
    el.innerHTML = `<div class="match">
      <div class="mcol">${pairs.map((p, k) => { const n = link[k]; const ci = n !== undefined ? k : -1;
        const st = checked ? (link[k] === k ? "ok" : "bad") : "";
        return `<button class="mitem l ${sel === k ? "sel" : ""} ${n !== undefined ? "paired" : ""} ${st}" data-l="${k}"><span class="badge" style="${n !== undefined ? `background:${PCOL[k % 6]}` : ""}">${k + 1}</span>${esc(p.a)}</button>`; }).join("")}</div>
      <div class="mcol">${right.map(r => { const lk = Object.keys(link).find(x => link[x] === r.k); const ci = lk !== undefined ? +lk : -1;
        const st = checked && lk !== undefined ? (+lk === r.k ? "ok" : "bad") : "";
        return `<button class="mitem r ${lk !== undefined ? "paired" : ""} ${st}" data-r="${r.k}">${esc(r.b)}<span class="badge" style="${lk !== undefined ? `background:${PCOL[ci % 6]}` : ""}">${lk !== undefined ? ci + 1 : ""}</span></button>`; }).join("")}</div>
    </div>
    <div class="qfoot" style="justify-content:space-between;align-items:center"><span class="mhelp">${ic("puzzle", 18)} ${checked ? `<b>${pairs.filter((_, k) => link[k] === k).length} de ${pairs.length}</b> parejas correctas.` : "Toca una situación y luego la opción que le corresponde. Toca de nuevo para deshacer."}</span>
      <span class="row" style="gap:10px">${checked ? `<button class="btn alt sm rq">${ic("flip", 18)} Reintentar</button><button class="btn mc sm nx">Continuar ${ic("right", 18)}</button>` : `<button class="btn mc sm ck" ${used.length < pairs.length ? "disabled" : ""}>${ic("check", 18)} Comprobar</button>`}</span></div>`;
    if (checked) { $(".rq", el).onclick = () => { link = {}; sel = null; render(); }; $(".nx", el).onclick = () => go(cur + 1); return; }
    $$(".mitem.l", el).forEach(b => b.onclick = () => { const k = +b.dataset.l; if (link[k] !== undefined) { delete link[k]; sel = k; } else sel = sel === k ? null : k; render(); });
    $$(".mitem.r", el).forEach(b => b.onclick = () => { const rk = +b.dataset.r; const owner = Object.keys(link).find(x => link[x] === rk);
      if (sel === null) { if (owner !== undefined) { delete link[owner]; render(); } else toast("Primero elige una situación de la izquierda"); return; }
      if (owner !== undefined) delete link[owner]; link[sel] = rk; sel = null; render(); });
    const ck = $(".ck", el); if (ck) ck.onclick = () => { const sc = pairs.filter((_, k) => link[k] === k).length; Track.act(id, sc, pairs.length, Object.fromEntries(pairs.map((_, k) => [k, link[k] === k ? 1 : 0]))); render(true); };
  }
  render();
}

/* ---------------- FILL ---------------- */
function fill(el, id, lines, seed) {
  let blanks = [];
  function render() {
    blanks = [];
    el.innerHTML = `<div class="fill">${lines.map((ln, li) => { let bi = 0;
      const html = esc(ln.s).replace(/\{([^}]+)\}/g, () => { const o = ln.opts[bi]; const opts = shuffle(o, (seed || 3) + li * 7 + bi); const idx = blanks.length; blanks.push(o[0]); bi++;
        return `<select data-b="${idx}" aria-label="Espacio ${idx + 1}"><option value="">elige…</option>${opts.map(x => `<option>${esc(x)}</option>`).join("")}</select>`; });
      return `<div class="fline"><span class="num">${li + 1}</span><div>${html}</div></div>`; }).join("")}</div>
      <div class="qfoot" style="justify-content:space-between;align-items:center"><span class="mhelp res">${ic("pen", 18)} Completa todos los espacios y luego comprueba.</span><span class="row bt" style="gap:10px"><button class="btn mc sm ck" disabled>${ic("check", 18)} Comprobar</button></span></div>`;
    const sels = $$("select", el), ck = $(".ck", el);
    sels.forEach(s => s.onchange = () => { ck.disabled = sels.some(x => !x.value); });
    ck.onclick = () => { let sc = 0; const ans = {};
      sels.forEach(s => { const ok = s.value === blanks[+s.dataset.b]; s.classList.add(ok ? "ok" : "bad"); s.disabled = true; ans[s.dataset.b] = ok ? 1 : 0; if (ok) sc++;
        if (!ok) { s.title = "Respuesta: " + blanks[+s.dataset.b]; const o = document.createElement("span"); o.className = "small"; o.style.cssText = "color:var(--ok);font-weight:600;margin-left:2px"; o.textContent = "→ " + blanks[+s.dataset.b]; s.after(o); } });
      Track.act(id, sc, blanks.length, ans);
      $(".res", el).innerHTML = `${ic(sc === blanks.length ? "check" : "info", 18)} <b>${sc} de ${blanks.length}</b>&nbsp;espacios correctos. ${msgFor(sc / blanks.length)}`;
      $(".bt", el).innerHTML = `<button class="btn alt sm rq">${ic("flip", 18)} Reintentar</button><button class="btn mc sm nx">Continuar ${ic("right", 18)}</button>`;
      $(".rq", el).onclick = render; $(".nx", el).onclick = () => go(cur + 1); };
  }
  render();
}

/* ---------------- PAGES ---------------- */
const P = [];
const add = (id, sec, m, html, after, cls = "") => P.push({ id, sec, m, html, after, cls });

/* PORTADA */
add("portada", "Inicio", 0, () => `<div class="pg" style="padding:0">
  <div class="blob" style="width:520px;height:520px;left:-160px;bottom:-260px;background:radial-gradient(circle,rgba(0,212,198,.35),transparent 70%)"></div>
  <div class="blob" style="width:700px;height:700px;right:-200px;top:-300px;background:radial-gradient(circle,rgba(60,147,250,.35),transparent 70%)"></div>
  <div class="logos"><img src="img/logos.webp" alt="Ministerio de Salud · Invima · efr"></div>
  <div class="col abs-m" style="position:absolute;left:72px;top:190px;width:640px">
    <span class="stamp" style="font-size:22px;align-self:flex-start;margin-bottom:26px">NO ES NORMAL</span>
    <h1><small>Cartilla interactiva</small>INVIMA<br>CONSCIENTE</h1>
    <p class="slogan" style="font-size:26px;margin-top:22px">Lo que se nombra, se detiene.</p>
    <p style="font-size:16px;opacity:.85;margin-top:12px;max-width:520px;line-height:1.5">Conoce el protocolo, reconoce lo que no es normal, aprende qué hacer y descubre lo que te protege.</p>
    <div class="row mt32" style="gap:12px"><button class="btn" style="background:#fff;color:var(--navy)" data-go="1">Comenzar ${ic("right", 18)}</button><button class="btn" style="background:rgba(255,255,255,.14);box-shadow:none" data-toc>${ic("menu", 18)} Ver contenido</button></div>
  </div>
  <div class="people abs-m" aria-hidden="true">${["p4", "p2", "p5"].map((id, k) => `<img src="${PJ[id].img}" alt="" class="${k === 1 ? "" : "s"}">`).join("")}</div>
</div>`, null, "cover");

/* BIENVENIDA */
add("bienvenida", "Bienvenida", 0, () => `<div class="pg">
  <div class="kicker">Bienvenida</div><h1 class="h1">Esta cartilla es para ti</h1>
  <p class="lead">Es un recurso para conocer la estrategia <b>INVIMA CONSCIENTE</b>, comprender el protocolo y practicar con situaciones cotidianas. Puedes recorrerla en orden o volver cuando la necesites.</p>
  <div class="g4 mt24">${[["video", "Videos", "Cinco capítulos cortos, cada uno con su presentación."], ["users", "Casos", "Situaciones hipotéticas para reconocer y actuar."], ["card", "Tarjetas", "Conceptos y principios para voltear y autoevaluarte."], ["puzzle", "Retos", "Relaciona, completa y elige. Se califican solos."]]
    .map(([i, t, d]) => `<div class="tile"><div class="icobox">${ic(i)}</div><div><h4>${t}</h4><p>${d}</p></div></div>`).join("")}</div>
  <div class="row mt24" style="gap:22px;align-items:stretch">
    <div class="card" style="flex:1.3"><h4 class="fh" style="font-size:16px;color:var(--navy);margin-bottom:6px">¿Desde dónde participas? <span class="small" style="font-weight:400">· opcional y anónimo</span></h4>
      <p class="small" style="margin-bottom:12px">Nos ayuda a saber si la estrategia llega a todos los contextos de la entidad.</p>
      <div class="vchips">${VINCULOS.map(v => `<button data-v="${esc(v)}" class="${S.vinc === v ? "on" : ""}">${esc(v)}</button>`).join("")}</div></div>
    <div class="card" style="flex:1;display:flex;gap:14px;align-items:flex-start"><div class="icobox" style="background:var(--mint);color:var(--t2)">${ic("lock")}</div>
      <div class="small" style="font-size:14px"><b class="fh" style="color:var(--navy);font-size:15px">Tu participación es anónima</b><br>Tus respuestas se guardan sin tu nombre y solo se usan como totales para medir la estrategia. Duración aproximada: 30 minutos. Tu avance queda guardado.</div></div>
  </div>
  <p class="small mt16">Usa las flechas ← → del teclado o los botones de abajo para pasar las páginas.</p>
</div>`, el => { $$(".vchips button", el).forEach(b => b.onclick = () => { const on = S.vinc === b.dataset.v; Track.set("vinc", on ? null : b.dataset.v); $$(".vchips button", el).forEach(x => x.classList.toggle("on", !on && x === b)); }); });

/* QUÉ ES */
add("que-es", "¿Qué es INVIMA CONSCIENTE?", 0, () => `<div class="pg">
  <div class="kicker">La estrategia</div><h1 class="h1">¿Qué es <span class="grad">INVIMA CONSCIENTE</span>?</h1>
  <div class="row" style="gap:40px;margin-top:6px">
    <div style="flex:1.15">
      <p class="lead" style="font-size:17.5px">Es el <b>protocolo de prevención, atención y protección integral</b> del Invima contra la explotación, el abuso sexual, el acoso sexual, la violencia de género y la discriminación por orientación sexual, discapacidad, raza, etnia, religión, nacionalidad, ideología política o ciclo de vida.</p>
      <p class="lead mt16" style="font-size:17.5px">Aplica en el <b>ámbito laboral y contractual</b> y en las <b>funciones misionales de cara a la ciudadanía</b>. Fue adoptado con la Resolución 2026041802 del 31 de julio de 2026.</p>
      <div class="quote mt24">«El INVIMA vigila la calidad de lo que consume el país. Hoy también cuidamos cómo nos tratamos: dentro del Instituto y con la ciudadanía.»</div>
    </div>
    <div style="flex:1" class="col">
      <div class="g3" style="grid-template-columns:1fr;gap:12px">
        ${[["#004C94", "Prevenir", "Formación, sensibilización y comunicación para que las violencias y la discriminación no ocurran."], ["#0FA69D", "Atender", "Rutas claras para orientar y acompañar a quien vive o presencia una situación."], ["#028183", "Proteger", "Derechos, garantías y medidas de protección para las víctimas, sin revictimizar."]]
          .map(([c, t, d]) => `<div class="pillar" style="background:${c};min-height:0;flex-direction:row;align-items:center;gap:18px;padding:18px 22px"><h3 style="width:120px;flex:none">${t}</h3><p>${d}</p></div>`).join("")}
      </div>
      <div class="card mt16" style="padding:16px 18px"><b class="fh" style="color:var(--navy)">¿Por qué importa?</b><p class="small" style="font-size:14.5px;margin-top:4px">Porque conocer un protocolo es el primer paso, pero no basta: también hay que reconocer las situaciones, saber cómo actuar y conocer las garantías. Por eso esta estrategia busca una cultura basada en el respeto, la prevención y la protección integral.</p></div>
    </div>
  </div></div>`);

/* CAMPAÑA */
add("no-es-normal", "Campaña NO ES NORMAL", 0, () => `<div class="pg">
  <div class="row" style="align-items:flex-end;justify-content:space-between">
    <div><div class="kicker">La campaña</div><h1 class="h1" style="margin-bottom:4px"><span class="stamp" style="font-size:40px;padding:6px 18px">NO ES NORMAL</span></h1></div>
    <div style="text-align:right"><div class="small">Eslogan</div><div class="fh" style="font-size:26px;font-weight:700;color:var(--t2)">Lo que se nombra, se detiene.</div></div>
  </div>
  <p class="lead mt16" style="max-width:none;font-size:17px">Hay conductas que se minimizan o se naturalizan, y esa normalización frena la prevención y el uso de las rutas. <b>NO ES NORMAL</b> interrumpe esa costumbre con una pregunta: <i>¿esto que está ocurriendo realmente debería considerarse normal?</i> El eslogan suma la acción: reconocer y nombrar.</p>
  <p class="fh mt16" style="font-weight:600;color:var(--navy);font-size:15px">Toca cada frase y mira lo que hay detrás:</p>
  <div class="g3 mt8">${FRASES.map((f, k) => `<button class="frase" data-k="${k}"><div class="f">«${esc(f.f)}»</div><div class="r">${esc(f.r)}</div><span class="stamp">NO ES NORMAL</span><span class="tap">Toca ✦</span></button>`).join("")}</div>
  <div class="row mt16" style="gap:14px">
    <div class="card" style="flex:1;padding:14px 18px;display:flex;gap:14px;align-items:center"><div class="icobox">${ic("megaphone")}</div><div><b class="fh" style="color:var(--navy)">Si lo ves, nómbralo.</b><div class="small">Llévalo a las instancias del protocolo, sin exponerlo ni difundirlo.</div></div></div>
    <div class="card" style="flex:1;padding:14px 18px;display:flex;gap:14px;align-items:center"><div class="icobox" style="background:var(--mint);color:var(--t2)">${ic("heart")}</div><div><b class="fh" style="color:var(--navy)">Si lo vives, no estás solo/a.</b><div class="small">Hay orientación, acompañamiento y garantías cuando decidas buscarlas.</div></div></div>
  </div></div>`, el => { $$(".frase", el).forEach(b => b.onclick = () => b.classList.toggle("on")); });

/* CREACIÓN DEL MATERIAL */
add("como-se-creo", "Cómo se creó este material", 0, () => `<div class="pg">
  <div class="kicker">Detrás de la cartilla</div><h2 class="h2">Un material construido con la comunidad</h2>
  <div class="row mt8" style="gap:36px">
    <div style="flex:1">
      <p class="lead" style="font-size:16.5px">Partimos de una encuesta de diagnóstico a la comunidad Invima, que preguntó cuánto se conocía el protocolo y cómo preferían que se divulgara. Las opciones más votadas definieron los formatos:</p>
      <div class="vchips mt16">${["Charlas con diapositivas", "Videos cortos", "Casos prácticos", "Piezas gráficas", "Dummies y QR"].map(x => `<span class="chip">${ic("check", 16)} ${x}</span>`).join("")}</div>
      <p class="lead mt24" style="font-size:16.5px">La estrategia se articula con Talento Humano: inducción, reinducción, Plan Institucional de Capacitación, bienestar y SST, para que no dependa de una campaña puntual.</p>
      <div class="note mt24">${ic("info", 20)}<span>Los casos de esta cartilla son <b>hipotéticos</b> y tienen finalidad pedagógica. Las rutas se presentan conforme al texto oficial del protocolo.</span></div>
    </div>
    <div style="flex:1.1"><h4 class="fh" style="color:var(--navy);font-size:15px;margin-bottom:10px">Pensada para cinco contextos</h4>
      <div class="col" style="gap:9px">${CONTEXTOS.map(c => `<div class="tile" style="padding:12px 14px;align-items:center"><div class="icobox" style="width:40px;height:40px">${ic(c.i, 20)}</div><div><h4 style="font-size:14.5px">${esc(c.t)}</h4><p style="font-size:13.5px">${esc(c.d)}</p></div></div>`).join("")}</div></div>
  </div></div>`);

/* PERSONAJES */
add("personajes", "Los personajes", 0, () => `<div class="pg">
  <div class="row" style="justify-content:space-between;align-items:flex-end"><div><div class="kicker">Te acompañan</div><h2 class="h2">Conoce a los personajes</h2></div>
  <div class="note" style="max-width:440px">${ic("star", 20)}<span><b>¡Tú eliges sus nombres!</b> La comunidad Invima propone, vota y elige cómo se llamarán.</span></div></div>
  <p class="lead" style="font-size:16px;max-width:none">No son víctimas ni agresores: son guías que hacen preguntas, invitan a reflexionar y te orientan. Toca cada tarjeta para conocer su rol.</p>
  <div class="g4 mt16" style="grid-template-columns:repeat(5,1fr);flex:1">${PERSONAJES.map(p => { const m = MOM[p.momento]; return `<div class="pjcard" tabindex="0" role="button">
    <span class="mtag" style="background:${m.color};color:${m.ink}">${m.n} · ${esc(m.titulo)}</span>
    <div class="img">${pjImg(p.id)}</div>
    <div class="tx"><div class="nm">${p.nombre ? esc(p.nombre) : `<em>Nombre por elegir</em>`}</div><div class="pf">${esc(p.perfil)}</div><div class="small" style="margin-top:6px;color:var(--b2);font-weight:600">Toca para ver su rol →</div></div>
    <div class="rol"><b>${esc(p.perfil)}</b>${esc(p.rol)}</div></div>`; }).join("")}</div>
  <div class="row mt16" style="justify-content:flex-end"><button class="btn mc sm" data-go="+1">${ic("video", 18)} Ver el video de presentación</button></div>
</div>`, el => { $$(".pjcard", el).forEach(c => { c.onclick = () => c.classList.toggle("show"); c.onkeydown = e => { if (e.key === "Enter") c.classList.toggle("show"); }; }); });
add("personajes-video", "Los personajes · Video", 0, () => videoPage("personajes", 0));

/* LA RUTA */
add("la-ruta", "La ruta de los cinco momentos", 0, () => `<div class="pg">
  <div class="kicker">Tu recorrido</div><h2 class="h2">De conocer a <span class="grad">hacerlo parte de ti</span></h2>
  <p class="lead" style="font-size:16.5px">La campaña avanza en cinco momentos. Cada uno responde a una pregunta y tiene su video, su contenido y sus actividades. Toca un momento para ir directo.</p>
  <div class="road">${MOMENTOS.map(m => `<button class="stop" data-goto="${m.id}"><span class="c" style="background:${m.color};color:${m.ink}">${m.n}</span><h4>${esc(m.titulo)}</h4><span class="p">${esc(m.pregunta)}</span><span class="st" data-mprog="${m.n}">0% completado</span><span class="bar"><i data-mbar="${m.n}" style="width:0;background:${m.color}"></i></span></button>`).join("")}</div>
  <p class="small mt24" style="text-align:center">ME ENTERO → LO RECONOZCO → SÉ QUÉ HACER → SÉ QUE ESTOY PROTEGIDO/A → LO HAGO PARTE DE MÍ</p>
</div>`);

/* ---------- MOMENTOS ---------- */
function introPage(n) {
  const m = MOM[n], p = PJ[m.pj];
  return () => `<div class="pg"><span class="bignum">0${n}</span>
    <div class="k" style="margin-top:30px">Momento ${n}</div>
    <h1 class="fh" style="font-size:72px;font-weight:800;line-height:1;margin-top:6px;letter-spacing:-.02em">${esc(m.titulo)}</h1>
    <div class="q">${esc(m.pregunta)}</div>
    <div class="logro"><b>Qué lograrás</b>${esc(m.logro)}</div>
    <div class="msg">«${esc(m.mensaje)}»</div>
    <div class="row mt24"><button class="btn" style="background:${m.ink};color:${m.color}" data-go="+1">${ic("play", 18)} Empezar con el video</button></div>
    <img class="pj ${p.escena ? "scene" : ""}" src="${p.img}" alt="Personaje guía: ${esc(p.perfil)}">
  </div>`;
}

/* M1 */
add("m1", momKicker(1), 1, introPage(1), null, "mintro");
add("m1-video", momKicker(1) + " · Video", 1, () => videoPage("v1", 1));
add("m1-alcance", momKicker(1) + " · A quién y dónde aplica", 1, () => `<div class="pg">
  ${head(1, momKicker(1), "¿A quién cobija y dónde aplica?")}
  <div class="row mt8" style="gap:30px;flex:1">
    <div style="flex:1"><h4 class="fh" style="color:var(--navy);margin-bottom:10px">La Comunidad Invima</h4>
      <div class="vchips">${["Servidoras y servidores públicos", "Contratistas", "Pasantes, judicantes y practicantes", "Personal tercerizado", "Personal en comisión", "Proveedores", "Ciudadanía que recibe servicios"].map(x => `<span class="chip" style="background:var(--sky)">${ic("user", 16)} ${x}</span>`).join("")}</div>
      <h4 class="fh" style="color:var(--navy);margin:22px 0 10px">Qué situaciones contempla</h4>
      <div class="g2" style="gap:8px">${["Acoso sexual", "Explotación y abuso sexual", "Violencia basada en género", "Acoso laboral", "Discriminación por orientación sexual o identidad de género", "Discriminación por discapacidad", "Discriminación por raza o etnia", "Discriminación por religión, nacionalidad, ideología política o ciclo de vida"].map(x => `<div class="small" style="display:flex;gap:8px;align-items:flex-start;font-size:14px;color:var(--ink)"><span style="color:var(--b2)">${ic("check", 18)}</span>${x}</div>`).join("")}</div>
    </div>
    <div style="flex:1"><h4 class="fh" style="color:var(--navy);margin-bottom:10px">Dónde aplica: dentro y fuera de las instalaciones</h4>
      <div class="g2">${[["building", "Sedes y lugares de trabajo", "Incluidos los espacios públicos o privados cuando son lugar de trabajo."], ["pin", "Desplazamientos y eventos", "Viajes, comisiones, visitas, actividades sociales y de formación."], ["home", "Espacios de descanso", "Cafetería, baños y vestuarios."], ["msg", "Espacios digitales", "Correo, chats, redes y reuniones virtuales del trabajo."]]
        .map(([i, t, d]) => `<div class="tile"><div class="icobox">${ic(i)}</div><div><h4>${t}</h4><p>${d}</p></div></div>`).join("")}</div>
      <div class="note mt16">${ic("info", 20)}<span>Un <b>desacuerdo sobre el trabajo</b>, tratado con respeto, no es por sí solo una conducta prohibida: se resuelve en la gestión de la actuación profesional.</span></div>
    </div>
  </div></div>`);
add("m1-tarjetas", momKicker(1) + " · Tarjetas", 1, () => `<div class="pg">${head(1, momKicker(1) + " · Tarjetas", "Términos clave para entender el protocolo")}<div class="grow mt8" id="dk-m1"></div></div>`, el => deck($("#dk-m1", el), "m1-tarjetas", CARDS_M1));
add("m1-reto", momKicker(1) + " · Reto", 1, () => `<div class="pg">${head(1, momKicker(1) + " · Reto", "¿Verdadero o falso?")}<div class="grow mt8 col" id="qz-m1"></div></div>`, el => quiz($("#qz-m1", el), "m1-reto", QUIZ_M1, { cierre: "Recuerda: el protocolo cobija a toda la Comunidad Invima, dentro y fuera de las instalaciones, también en los espacios digitales." }));

/* M2 */
add("m2", momKicker(2), 2, introPage(2), null, "mintro");
add("m2-video", momKicker(2) + " · Video", 2, () => videoPage("v2", 2));
add("m2-senales", momKicker(2) + " · Señales de alerta", 2, () => `<div class="pg">
  ${head(2, momKicker(2), "¿Cómo reconocerlo?")}
  <div class="row mt8" style="gap:30px;flex:1">
    <div style="width:380px;flex:none" class="col">
      <p class="lead" style="font-size:16px">Antes de decir «no es para tanto», hazte tres preguntas:</p>
      ${["¿Es un trato <b>no deseado</b>?", "¿Hay una <b>relación de poder</b> de por medio?", "¿Se <b>excluye, humilla o intimida</b> a alguien por quién es?"].map((q, k) => `<div class="tile mt8" style="align-items:center;font-size:17px;padding:14px 18px"><span class="fh" style="font-size:30px;font-weight:800;color:var(--mc);width:28px">${k + 1}</span><span>${q}</span></div>`).join("")}
      <div class="quote mt24" style="font-size:19px">No todo lo que se ha vuelto frecuente es normal.</div>
    </div>
    <div style="flex:1"><h4 class="fh" style="color:var(--navy);margin-bottom:10px">Conductas que la Comunidad Invima debe evitar</h4>
      <div class="g2" style="gap:10px">${SENALES.map(s => `<div class="tile" style="padding:12px 14px;align-items:center"><div class="icobox" style="width:40px;height:40px;background:var(--mint);color:var(--t2)">${ic(s.i, 20)}</div><p style="font-size:14px;color:var(--ink)">${esc(s.t)}</p></div>`).join("")}</div>
      <p class="small mt16">Para saber si una conducta es ofensiva, hay que considerar la perspectiva de quien la vive. Puede darse una sola vez o repetirse, en persona o por medios digitales.</p>
    </div>
  </div></div>`);
add("m2-casos", momKicker(2) + " · Casos para reconocer", 2, () => `<div class="pg">${head(2, momKicker(2) + " · Casos para reconocer", "¿Esto es normal? ¿Qué tipo de conducta es?")}<div class="grow mt8 col" id="qz-m2"></div></div>`, el => quiz($("#qz-m2", el), "m2-casos", QUIZ_M2));
add("m2-relaciona", momKicker(2) + " · Relaciona", 2, () => `<div class="pg">${head(2, momKicker(2) + " · Reto", "Relaciona cada situación con la conducta")}<div class="grow mt8 col" id="mt-m2"></div></div>`, el => match($("#mt-m2", el), "m2-relaciona", MATCH_M2, 11));

/* M3 */
add("m3", momKicker(3), 3, introPage(3), null, "mintro");
add("m3-video", momKicker(3) + " · Video", 3, () => videoPage("v3", 3));
add("ruta-en-una-pagina", momKicker(3) + " · La ruta en una página", 3, () => `<div class="pg">
  <div class="row" style="justify-content:space-between;align-items:flex-end"><div><div class="kicker">${momKicker(3)}</div><h2 class="h2">La ruta en una página</h2></div>
  <div class="small" style="max-width:420px;text-align:right">Quien vive la situación, quien la presencia o quien recibe un relato puede acudir a estas instancias.</div></div>
  <div class="tabs" role="tablist">${Object.entries(RUTAS).map(([k, r], i) => `<button class="tab ${i ? "" : "on"}" data-t="${k}" role="tab">${esc(r.tab)}</button>`).join("")}</div>
  <div id="rt" class="grow" style="margin-top:6px"></div>
  <h4 class="fh" style="color:var(--navy);font-size:14px;margin:10px 0 8px">Canales y líneas de apoyo</h4>
  <div class="lines">${LINEAS.map(l => `<div class="line"><b>${esc(l.n)}</b>${esc(l.v)}</div>`).join("")}</div>
</div>`, el => {
  const show = k => { const r = RUTAS[k]; $("#rt", el).innerHTML = `<p class="small" style="font-size:14.5px;margin-top:6px">${esc(r.intro)}</p><div class="flow">${r.pasos.map((p, i) => `<div class="fstep" style="animation-delay:${i * 70}ms"><div class="n">${i + 1}</div><h4>${esc(p.t)}</h4>${esc(p.d)}</div>`).join("")}</div>`; };
  $$(".tab", el).forEach(t => t.onclick = () => { $$(".tab", el).forEach(x => x.classList.toggle("on", x === t)); show(t.dataset.t); }); show("laboral");
});
add("m3-completa", momKicker(3) + " · Completa la ruta", 3, () => `<div class="pg">${head(3, momKicker(3) + " · Reto", "Completa los pasos de la ruta")}<div class="grow mt8 col" id="fl-m3"></div></div>`, el => fill($("#fl-m3", el), "m3-completa", FILL_M3, 5));
add("m3-casos", momKicker(3) + " · Casos para actuar", 3, () => `<div class="pg">${head(3, momKicker(3) + " · Casos para actuar", "¿Qué debería hacer esta persona?")}<div class="grow mt8 col" id="qz-m3"></div></div>`, el => quiz($("#qz-m3", el), "m3-casos", QUIZ_M3));
add("m3-relaciona", momKicker(3) + " · Relaciona", 3, () => `<div class="pg">${head(3, momKicker(3) + " · Reto", "¿A qué instancia acudir?")}<div class="grow mt8 col" id="mt-m3"></div></div>`, el => match($("#mt-m3", el), "m3-relaciona", MATCH_M3, 23));

/* M4 */
add("m4", momKicker(4), 4, introPage(4), null, "mintro");
add("m4-video", momKicker(4) + " · Video", 4, () => videoPage("v4", 4));
add("m4-derechos", momKicker(4) + " · Derechos y medidas", 4, () => `<div class="pg">
  ${head(4, momKicker(4), "Tus derechos y las medidas que te protegen")}
  <div class="row mt8" style="gap:26px;flex:1">
    <div style="flex:1.3"><div class="g3" style="gap:10px">${DERECHOS.map(d => `<div class="tile" style="padding:12px 14px;flex-direction:column;gap:6px"><div class="icobox" style="width:38px;height:38px;background:var(--mint);color:var(--t2)">${ic(d.i, 20)}</div><h4 style="font-size:14.5px">${esc(d.t)}</h4><p style="font-size:13px">${esc(d.d)}</p></div>`).join("")}</div></div>
    <div style="flex:1" class="col">
      <div class="card" style="background:var(--mc);color:#fff;border:0;padding:18px 20px;display:flex;gap:16px;align-items:center"><div style="font-family:var(--fh);font-weight:800;font-size:54px;line-height:1;white-space:nowrap">72 h</div><div style="font-size:14.5px;line-height:1.45">Las medidas de protección se adoptan en las <b>primeras 72 horas</b> desde la queja. Y <b>nunca</b> pueden desmejorar tu situación laboral o contractual.</div></div>
      <h4 class="fh" style="color:var(--navy);font-size:14.5px;margin:14px 0 8px">Medidas de protección (Talento Humano, Bienestar y SST)</h4>
      <div class="col" style="gap:5px">${MEDIDAS.map(x => `<div class="small" style="display:flex;gap:8px;font-size:13.5px;color:var(--ink)"><span style="color:var(--t2)">${ic("shield", 17)}</span>${esc(x)}</div>`).join("")}</div>
      <p class="small mt16" style="font-size:12.5px">La persona señalada también tiene derechos: debido proceso, defensa, presunción de inocencia y confidencialidad de sus datos.</p>
    </div>
  </div></div>`);
add("m4-principios", momKicker(4) + " · Tarjetas de principios", 4, () => `<div class="pg">${head(4, momKicker(4) + " · Tarjetas", "Los principios que orientan la atención")}<div class="grow mt8" id="dk-m4"></div></div>`, el => deck($("#dk-m4", el), "m4-tarjetas", CARDS_M4));
add("m4-mitos", momKicker(4) + " · Mitos y realidades", 4, () => `<div class="pg">${head(4, momKicker(4) + " · Reto", "¿Mito o realidad?")}<div class="grow mt8 col" id="qz-m4"></div></div>`, el => quiz($("#qz-m4", el), "m4-mitos", QUIZ_M4, { side: false, cierre: "Conocer las garantías también es conocer tus derechos. Ninguna de estas creencias debería impedirte buscar orientación." }));

/* M5 */
add("m5", momKicker(5), 5, introPage(5), null, "mintro");
add("m5-video", momKicker(5) + " · Video", 5, () => videoPage("v5", 5));
add("m5-acciones", momKicker(5) + " · Mis acciones", 5, () => `<div class="pg">
  ${head(5, momKicker(5), "Pequeñas acciones, gran cultura", "Elige las acciones con las que te comprometes desde hoy. Puedes marcar todas las que quieras.")}
  <div class="g4 mt16" style="gap:10px">${ACCIONES.map((a, k) => `<button class="check ${(S.acciones || []).includes(k) ? "on" : ""}" data-k="${k}"><span class="bx">${ic("check", 16, 3)}</span><span><b>${esc(a.t)}</b><br><span class="small">${esc(a.d)}</span></span></button>`).join("")}</div>
  <h4 class="fh mt24" style="color:var(--navy);font-size:15.5px">Mural digital colectivo <span class="small" style="font-weight:400">· anónimo y moderado</span></h4>
  <p class="small" style="margin:4px 0 10px">Para cuidar la confidencialidad, no escribas nombres de personas ni situaciones reales identificables.</p>
  <div class="mural">${[["a", "Algo que ya no voy a normalizar"], ["b", "Lo que haría si lo veo o lo vivo"], ["c", "Un compromiso de mi equipo"]].map(([k, t]) => `<label>${t}<textarea data-k="${k}" maxlength="280" placeholder="Escribe aquí…">${esc((S.mural || {})[k] || "")}</textarea></label>`).join("")}</div>
  <div class="qfoot"><span class="small saved" style="margin-right:auto;align-self:center"></span><button class="btn mc sm sv">${ic("check", 18)} Guardar mi aporte</button></div>
</div>`, el => {
  $$(".check", el).forEach(b => b.onclick = () => { const k = +b.dataset.k; let a = (S.acciones || []).slice(); a = a.includes(k) ? a.filter(x => x !== k) : a.concat(k); Track.set("acciones", a); b.classList.toggle("on"); });
  $(".sv", el).onclick = () => { const m = {}; $$("textarea", el).forEach(t => m[t.dataset.k] = t.value.trim().slice(0, 280)); Track.set("mural", m); $(".saved", el).textContent = "✓ Aporte guardado. ¡Gracias!"; toast("Tu aporte quedó guardado"); };
});
add("m5-frases", momKicker(5) + " · Completa la frase", 5, () => `<div class="pg">${head(5, momKicker(5) + " · Reto", "Completa las frases de la campaña")}<div class="grow mt8 col" id="fl-m5"></div></div>`, el => fill($("#fl-m5", el), "m5-frases", FILL_M5, 9));
add("reto-final", "Reto final", 5, () => `<div class="pg">${head(5, "Reto final", "Pon a prueba todo lo que aprendiste")}<div class="grow mt8 col" id="qz-fin"></div></div>`, el => quiz($("#qz-fin", el), "final", QUIZ_FINAL, { cierre: "Gracias por llegar hasta aquí. Lo que se nombra, se detiene." }));

/* CIERRE */
add("cierre", "Cierre", 0, () => `<div class="pg">
  <div class="row" style="gap:40px;flex:1">
    <div style="flex:1" class="col">
      <span class="stamp" style="font-size:20px;align-self:flex-start">NO ES NORMAL</span>
      <h1 class="fh" style="font-size:52px;font-weight:800;line-height:1.02;margin-top:22px">Lo que se nombra,<br><span style="color:var(--aqua)">se detiene.</span></h1>
      <p style="font-size:17px;line-height:1.5;opacity:.92;margin-top:16px;max-width:520px">El INVIMA vigila la calidad de lo que consume el país. Hoy también cuidamos cómo nos tratamos: dentro del Instituto y con la ciudadanía.</p>
      <div class="row mt24" style="gap:12px"><div style="background:rgba(255,255,255,.12);border-radius:14px;padding:12px 16px;flex:1"><b class="fh">Si lo ves, nómbralo.</b><div style="font-size:13px;opacity:.85">convivencia@invima.gov.co</div></div><div style="background:rgba(255,255,255,.12);border-radius:14px;padding:12px 16px;flex:1"><b class="fh">Si lo vives, no estás solo/a.</b><div style="font-size:13px;opacity:.85">Línea Púrpura 018000 112137</div></div></div>
      <div class="mt24" style="background:#fff;border-radius:14px;padding:10px 16px;align-self:flex-start"><img src="img/logos.webp" alt="Ministerio de Salud · Invima · efr" style="height:52px;display:block"></div>
    </div>
    <div style="flex:1" class="col">
      <h4 class="fh" style="font-size:15px;margin-bottom:10px">Tu recorrido</h4>
      <div class="scorelist" id="scl"></div>
      <h4 class="fh" style="font-size:15px;margin:20px 0 8px">Cuéntanos <span style="font-weight:400;opacity:.8">· anónimo</span></h4>
      <div style="font-size:14px;margin-bottom:6px">¿Qué tan útil te pareció esta cartilla?</div><div class="likert" data-q="util">${[1, 2, 3, 4, 5].map(n => `<button data-n="${n}" style="background:rgba(255,255,255,.95)">${n}</button>`).join("")}</div>
      <div style="font-size:14px;margin:12px 0 6px">¿Qué tan seguro/a te sentirías de buscar orientación si la necesitaras?</div><div class="likert" data-q="seguro">${[1, 2, 3, 4, 5].map(n => `<button data-n="${n}" style="background:rgba(255,255,255,.95)">${n}</button>`).join("")}</div>
      <div style="font-size:12px;opacity:.75;margin-top:6px">1 = nada · 5 = mucho</div>
    </div>
  </div>
  <p style="position:absolute;left:72px;bottom:16px;font-size:11.5px;opacity:.6">Estrategia de divulgación y apropiación del Protocolo INVIMA CONSCIENTE (Res. 2026041802 de 2026). Contenidos sujetos a validación institucional.</p>
</div>`, el => {
  $$(".likert", el).forEach(g => $$("button", g).forEach(b => b.onclick = () => { const v = Object.assign({}, S.val, { [g.dataset.q]: +b.dataset.n }); Track.set("val", v); paintLikert(el); toast("¡Gracias por tu respuesta!"); }));
}, "closing");

/* PANEL (solo editores) */
add("panel", "Panel de seguimiento", 0, () => `<div class="pg" style="padding:36px 44px 30px">
  <div class="row" style="justify-content:space-between;align-items:center"><div><div class="kicker">Solo para el equipo de la estrategia</div><h2 class="h2" style="margin:6px 0 0">Panel de seguimiento</h2></div>
  <div class="row" style="gap:8px"><button class="btn alt sm" id="pn-copy">${ic("copy", 18)} Copiar datos (CSV)</button><button class="btn sm" id="pn-ref">${ic("flip", 18)} Actualizar</button></div></div>
  <div id="pn" class="col grow"><p class="small mt24">Cargando datos…</p></div>
</div>`, el => { $("#pn-ref", el).onclick = loadPanel; $("#pn-copy", el).onclick = copyCSV; }, "panel-pg");

/* ---------------- RENDER & NAV ---------------- */
const stage = $("#stage");
stage.innerHTML = P.map((p, k) => `<section class="page ${p.cls} ${p.m && p.cls === "mintro" ? "" : ""}" id="pg-${p.id}" data-k="${k}" aria-label="${esc(p.sec)}" ${p.m ? `style="--mc:${MOM[p.m].color};--mink:${MOM[p.m].ink}"` : ""}>${p.html()}<span class="pnum">${k + 1}</span></section>`).join("");
P.forEach((p, k) => { const el = stage.children[k]; if (p.after) { try { p.after(el); } catch (e) { console.error(p.id, e); } } });
// la página del panel queda fuera del recorrido normal
const PANEL_K = P.findIndex(p => p.id === "panel");
const LAST = PANEL_K - 1;
let cur = -1;

function go(k, from) {
  if (k === PANEL_K && !Remote.canPanel) return;
  k = Math.max(0, Math.min(k === PANEL_K ? PANEL_K : LAST, k));
  if (k === cur) return;
  const pages = stage.children;
  if (cur >= 0) { const o = pages[cur]; o.classList.remove("on"); o.classList.toggle("out-l", k > cur); setTimeout(() => o.classList.remove("out-l"), 650); }
  const n = pages[k]; n.classList.remove("out-l"); n.classList.add("on");
  $$("video", stage).forEach(v => { if (!n.contains(v)) try { v.pause(); } catch (e) {} });
  cur = k; const p = P[k];
  document.documentElement.style.setProperty("--mc", p.m ? MOM[p.m].color : "#006ECF");
  $("#crumb").innerHTML = p.m ? `<b>Momento ${p.m}</b> · ${esc(p.sec.replace(/^Momento \d · /, ""))}` : esc(p.sec);
  $("#prev").disabled = k === 0; $("#next").disabled = k >= LAST;
  $("#pcount").textContent = k === PANEL_K ? "Panel" : `${k + 1} / ${LAST + 1}`;
  $$("#dots button").forEach((d, j) => d.classList.toggle("on", +d.dataset.k === secStart(k)));
  if (location.hash.slice(1) !== p.id) { try { history.replaceState(null, "", "#" + p.id); } catch (e) { location.hash = p.id; } }
  Track.page(p.id); refreshProgress();
  if (p.id === "cierre") paintScores();
  if (p.id === "panel") loadPanel();
  $$(".toc a").forEach(a => a.classList.toggle("on", a.dataset.k == k));
  if (document.body.classList.contains("mob")) window.scrollTo(0, 0);
}
const SECS = [];
P.forEach((p, k) => { if (k > LAST) return; const key = p.m ? "m" + p.m : p.id; if (!SECS.length || SECS[SECS.length - 1].key !== key || !p.m) SECS.push({ key, k, m: p.m, label: p.m ? `Momento ${p.m} · ${MOM[p.m].titulo}` : p.sec }); });
function secStart(k) { let s = 0; SECS.forEach(x => { if (x.k <= k) s = x.k; }); return s; }
$("#dots").innerHTML = SECS.map(s => `<button data-k="${s.k}" class="${s.m ? "sec" : ""}" title="${esc(s.label)}" aria-label="${esc(s.label)}" style="${s.m ? `background:${MOM[s.m].color}` : ""}"></button>`).join("");
$$("#dots button").forEach(b => b.onclick = () => go(+b.dataset.k));
$("#prev").onclick = () => go(cur - 1); $("#next").onclick = () => go(cur + 1);
document.addEventListener("keydown", e => { if (/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return; if (e.key === "ArrowRight" || e.key === "PageDown") go(cur + 1); if (e.key === "ArrowLeft" || e.key === "PageUp") go(cur - 1); if (e.key === "Escape") closeToc(); });
stage.addEventListener("click", e => {
  const g = e.target.closest("[data-go]"); if (g) { const v = g.dataset.go; go(v[0] === "+" ? cur + (+v.slice(1)) : +v); }
  const gt = e.target.closest("[data-goto]"); if (gt) go(P.findIndex(p => p.id === gt.dataset.goto));
  if (e.target.closest("[data-toc]")) openToc();
});
stage.addEventListener("play", e => { if (e.target.dataset && e.target.dataset.vid) Track.video(e.target.dataset.vid); }, true);
// swipe
let tx = null; stage.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
stage.addEventListener("touchend", e => { if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 70 && !e.target.closest(".fcard,.match,select,textarea")) go(cur + (dx < 0 ? 1 : -1)); tx = null; });

/* TOC */
function buildToc() {
  let h = "", lastM = -1;
  P.forEach((p, k) => {
    if (k > LAST && !(k === PANEL_K && Remote.canPanel)) return;
    if (p.m !== lastM) { if (p.m) h += `<h3 style="color:${MOM[p.m].color}">Momento ${p.m} · ${esc(MOM[p.m].titulo)}</h3>`; else if (lastM > 0 || lastM === -1) h += `<h3>${k === PANEL_K ? "Equipo de la estrategia" : lastM === -1 ? "Presentación" : "Cierre"}</h3>`; lastM = p.m; }
    const act = ACTS.find(a => p.id.startsWith(a.id) || (a.id === "final" && p.id === "reto-final") || (a.id === "m4-tarjetas" && p.id === "m4-principios"));
    const done = act && S.acts[act.id] && S.acts[act.id].f;
    h += `<a href="#${p.id}" data-k="${k}"><span class="mdot" style="background:${p.m ? MOM[p.m].color : "#b8c6d3"}"></span>${esc(p.sec.replace(/^Momento \d · [^·]+· ?/, "").replace(/^Momento \d · /, "Introducción · "))}${act ? `<span class="tag ${done ? "done" : ""}">${done ? "✓ hecho" : "actividad"}</span>` : ""}</a>`;
  });
  $("#toc").innerHTML = h;
  $$("#toc a").forEach(a => a.onclick = e => { e.preventDefault(); go(+a.dataset.k); closeToc(); });
}
function openToc() { buildToc(); $("#drawer").classList.add("open"); setTimeout(() => { const a = $("#toc a.on") || $("#toc a"); a && a.focus(); }, 50); }
function closeToc() { $("#drawer").classList.remove("open"); }
$("#tocbtn").onclick = openToc; $("#drawer .scrim").onclick = closeToc; $("#tocclose").onclick = closeToc;
function addPanelToToc() { const b = $("#panelbtn"); b.style.display = ""; b.onclick = () => go(PANEL_K); }

/* PROGRESS */
function refreshProgress() {
  const graded = ACTS.length, done = ACTS.filter(a => S.acts[a.id] && S.acts[a.id].f).length;
  const seen = P.slice(0, LAST + 1).filter(p => S.seen[p.id]).length;
  $("#prog i").style.width = Math.round((seen / (LAST + 1)) * 60 + (done / graded) * 40) + "%";
  MOMENTOS.forEach(m => {
    const pg = P.filter(p => p.m === m.n), acts = ACTS.filter(a => a.m === m.n);
    const pct = Math.round(((pg.filter(p => S.seen[p.id]).length / pg.length) * .5 + (acts.filter(a => S.acts[a.id] && S.acts[a.id].f).length / Math.max(1, acts.length)) * .5) * 100);
    $$(`[data-mprog="${m.n}"]`).forEach(x => x.textContent = pct + "% completado"); $$(`[data-mbar="${m.n}"]`).forEach(x => x.style.width = pct + "%");
  });
}
function paintScores() {
  const el = $("#scl"); if (!el) return;
  el.innerHTML = ACTS.map(a => { const r = S.acts[a.id]; return `<div class="srow"><span class="mdot" style="width:9px;height:9px;border-radius:50%;background:${MOM[a.m].color};flex:none"></span><span>${esc(a.n)}</span><span class="s ${r && r.s !== undefined ? "" : "no"}">${r && r.s !== undefined ? `${r.s}/${r.t}` : "pendiente"}</span></div>`; }).join("");
  paintLikert($("#pg-cierre"));
}
function paintLikert(el) { $$(".likert", el).forEach(g => $$("button", g).forEach(b => b.classList.toggle("on", (S.val || {})[g.dataset.q] === +b.dataset.n))); }
function hydrateAll() {
  refreshProgress();
  // re-sincroniza vistas que dependen del estado guardado
  const b = $("#pg-bienvenida"); if (b) $$(".vchips button", b).forEach(x => x.classList.toggle("on", S.vinc === x.dataset.v));
  const a = $("#pg-m5-acciones"); if (a) { $$(".check", a).forEach(x => x.classList.toggle("on", (S.acciones || []).includes(+x.dataset.k))); $$("textarea", a).forEach(t => { if (!t.value) t.value = (S.mural || {})[t.dataset.k] || ""; }); }
  if (P[cur] && P[cur].id === "cierre") paintScores();
}

/* PANEL DATA */
let PDATA = [];
async function loadPanel() {
  const box = $("#pn"); if (!box) return;
  if (!Remote.db) { box.innerHTML = `<div class="note mt24">${ic("info", 20)}<span>El registro de datos no está disponible en esta vista. Abre la cartilla desde su enlace de Claude con tu sesión iniciada.</span></div>`; return; }
  box.innerHTML = `<p class="small mt24">Cargando datos…</p>`;
  try {
    const all = []; let q = Remote.db.collection("resp").limit(1000);
    const snap = await Promise.race([q.get(), new Promise((_, r) => setTimeout(() => r({ code: "timeout" }), 12000))]);
    snap.docs.forEach(d => { if (d.exists) all.push(d.data()); });
    PDATA = all; renderPanel(all);
  } catch (e) { box.innerHTML = `<div class="note mt24">${ic("info", 20)}<span>No fue posible leer los datos todavía (${esc(e && e.code || "error")}). Intenta actualizar en unos segundos.</span></div>`; }
}
function renderPanel(D) {
  const box = $("#pn"), N = D.length;
  const visits = D.reduce((s, d) => s + (d.visits || 0), 0);
  const fin = D.filter(d => ACTS.every(a => d.acts && d.acts[a.id] && d.acts[a.id].f)).length;
  const anyAct = D.filter(d => d.acts && Object.keys(d.acts).some(k => d.acts[k].f)).length;
  let sp = 0, st = 0; D.forEach(d => ACTS.forEach(a => { const f = d.acts && d.acts[a.id] && d.acts[a.id].f; if (f && f.t) { sp += f.s; st += f.t; } }));
  const avg = st ? Math.round(sp / st * 100) : 0;
  const vidKeys = Object.keys(VIDEOS);
  const per = ACTS.map(a => { const fs = D.map(d => d.acts && d.acts[a.id] && d.acts[a.id].f).filter(Boolean); const s = fs.reduce((x, f) => x + f.s, 0), t = fs.reduce((x, f) => x + f.t, 0);
    const qn = fs[0] ? fs[0].t : 0; const qs = []; for (let i = 0; i < qn; i++) { const v = fs.map(f => f.ans && f.ans[i]).filter(x => x === 0 || x === 1); qs.push(v.length ? v.filter(x => x === 1).length / v.length : null); }
    return { a, n: fs.length, pct: t ? Math.round(s / t * 100) : null, qs }; });
  const reach = MOMENTOS.map(m => ({ m, n: D.filter(d => d.seen && d.seen[m.id]).length }));
  const vinc = {}; D.forEach(d => { const v = d.vinc || "Sin respuesta"; vinc[v] = (vinc[v] || 0) + 1; });
  const avgVal = k => { const v = D.map(d => d.val && d.val[k]).filter(Boolean); return v.length ? (v.reduce((a, b) => a + b, 0) / v.length).toFixed(1) : "—"; };
  const nval = D.filter(d => d.val && (d.val.util || d.val.seguro)).length;
  const murals = D.map(d => d.mural || {}).filter(m => m.a || m.b || m.c);
  const accCount = ACCIONES.map((a, k) => D.filter(d => (d.acciones || []).includes(k)).length);
  const pctOf = n => N ? Math.round(n / N * 100) : 0;
  box.innerHTML = `
  <div class="kpis">
    <div class="kpi"><div class="l">Visualizaciones</div><div class="v">${visits}</div><div class="s">visitas a la cartilla</div></div>
    <div class="kpi"><div class="l">Personas</div><div class="v">${N}</div><div class="s">que abrieron la cartilla</div></div>
    <div class="kpi"><div class="l">Participaron</div><div class="v">${anyAct}</div><div class="s">hicieron al menos una actividad</div></div>
    <div class="kpi"><div class="l">Completaron todo</div><div class="v">${fin}</div><div class="s">${pctOf(fin)}% de las personas</div></div>
    <div class="kpi"><div class="l">Promedio general</div><div class="v">${avg}%</div><div class="s">primer intento, todas las actividades</div></div>
  </div>
  <div class="pgrid">
    <div class="pbox"><h4>${ic("chart", 18)} Resultados por actividad <span class="small" style="font-weight:400">· primer intento · toca para ver cada pregunta</span></h4>
      <div class="arow h"><span>Actividad</span><span class="np">Personas</span><span>Acierto</span><span class="pc">%</span></div>
      ${per.map(r => `<details class="adet"><summary><div class="arow"><span><span class="mdot" style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${MOM[r.a.m].color};margin-right:6px"></span>${esc(r.a.n)}</span><span class="np">${r.n}</span><span class="bar"><i style="width:${r.pct || 0}%;background:${MOM[r.a.m].color}"></i></span><span class="pc">${r.pct === null ? "—" : r.pct + "%"}</span></div></summary>
        <div class="qbars" style="padding:6px 0 10px 16px">${r.qs.length ? r.qs.map((q, i) => `<div class="qb"><span>P${i + 1}</span><span class="bar"><i style="width:${q === null ? 0 : Math.round(q * 100)}%"></i></span><b style="width:38px;text-align:right">${q === null ? "—" : Math.round(q * 100) + "%"}</b></div>`).join("") : `<span class="small">Sin respuestas aún.</span>`}</div></details>`).join("")}
    </div>
    <div class="col" style="gap:14px;min-height:0">
      <div class="pbox" style="flex:none"><h4>${ic("route", 18)} Alcance por momento y videos</h4>
        ${reach.map(r => `<div class="qbars"><div class="qb"><span style="width:120px">${r.m.n} · ${esc(r.m.titulo)}</span><span class="bar"><i style="width:${pctOf(r.n)}%;background:${r.m.color}"></i></span><b style="width:60px;text-align:right">${r.n} (${pctOf(r.n)}%)</b></div></div>`).join("")}
        <div class="small mt8">Reproducciones: ${vidKeys.map(k => `${k === "personajes" ? "Personajes" : k.toUpperCase()}: <b>${D.filter(d => d.vids && d.vids[k]).length}</b>`).join(" · ")}</div>
      </div>
      <div class="pbox" style="flex:none"><h4>${ic("users", 18)} Contexto y valoración</h4>
        <div class="small">${Object.entries(vinc).map(([k, v]) => `${esc(k)}: <b>${v}</b>`).join(" · ")}</div>
        <div class="small mt8">Utilidad: <b>${avgVal("util")}</b>/5 · Seguridad para buscar orientación: <b>${avgVal("seguro")}</b>/5 · (${nval} respuestas)</div>
        <div class="small mt8">Compromisos más elegidos: ${ACCIONES.map((a, k) => ({ t: a.t, n: accCount[k] })).sort((x, y) => y.n - x.n).slice(0, 4).map(x => `${esc(x.t)} <b>${x.n}</b>`).join(" · ")}</div>
      </div>
      <div class="pbox" style="flex:1"><h4>${ic("pen", 18)} Mural digital (${murals.length}) <span class="small" style="font-weight:400">· revisar antes de publicar</span></h4>
        <div class="mural-list">${murals.length ? murals.slice(-60).reverse().map(m => [["a", "Ya no voy a normalizar"], ["b", "Si lo veo o lo vivo"], ["c", "Compromiso de equipo"]].filter(([k]) => m[k]).map(([k, t]) => `<div class="m"><i>${t}</i>${esc(m[k])}</div>`).join("")).join("") : `<span class="small">Aún no hay aportes.</span>`}</div>
      </div>
    </div>
  </div>`;
}
function copyCSV() {
  const head = ["visitas", "vinculo", "util", "seguro", ...ACTS.map(a => a.id), "acciones", "mural_normalizar", "mural_haria", "mural_equipo"];
  const rows = PDATA.map(d => [d.visits || 0, d.vinc || "", (d.val || {}).util || "", (d.val || {}).seguro || "", ...ACTS.map(a => { const f = d.acts && d.acts[a.id] && d.acts[a.id].f; return f ? `${f.s}/${f.t}` : ""; }), (d.acciones || []).map(k => ACCIONES[k] && ACCIONES[k].t).join(" | "), (d.mural || {}).a || "", (d.mural || {}).b || "", (d.mural || {}).c || ""]);
  const csv = [head, ...rows].map(r => r.map(x => `"${String(x).replace(/"/g, '""')}"`).join(",")).join("\n");
  navigator.clipboard.writeText(csv).then(() => toast("Datos copiados. Pégalos en una hoja de cálculo."), () => toast("No se pudo copiar en esta vista."));
}

/* SCALE */
function fit() {
  const mob = window.innerWidth < 760 || (window.innerWidth < 1000 && window.innerHeight > window.innerWidth);
  document.body.classList.toggle("mob", mob);
  const w = $("#sw");
  if (mob) { w.style.transform = ""; return; }
  const vp = $(".viewport"), s = Math.min((vp.clientWidth - 32) / 1280, (vp.clientHeight - 16) / 720);
  w.style.transform = `translate(-50%,-50%) scale(${s})`;
}
window.addEventListener("resize", fit); fit();
$(".viewport").addEventListener("scroll", e => { if (!document.body.classList.contains("mob")) { e.target.scrollTop = 0; e.target.scrollLeft = 0; } });
stage.addEventListener("scroll", e => { const c = e.target.classList; if (c && (c.contains("page") || c.contains("pg")) && !document.body.classList.contains("mob")) { e.target.scrollTop = 0; e.target.scrollLeft = 0; } }, true);

/* START */
function fromHash() { const id = location.hash.slice(1); const k = P.findIndex(p => p.id === id); return k >= 0 ? k : 0; }
window.addEventListener("hashchange", () => { const k = fromHash(); if (k !== cur) go(k); });
go(fromHash() === PANEL_K ? 0 : fromHash());
refreshProgress();
initRemote().then(() => { if (location.hash.slice(1) === "panel" && Remote.canPanel) go(PANEL_K); });
})();
