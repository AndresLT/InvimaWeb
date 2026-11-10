/* Ilustración sencilla: la Comunidad Invima (personas diversas) */
window.ilustraComunidad = function () {
  const G = 150; // suelo
  const shoe = "#2D3F54";
  function legs(cx, pants) {
    return `<rect x="${cx - 13}" y="108" width="11" height="${G - 108}" rx="5" fill="${pants}"/><rect x="${cx + 2}" y="108" width="11" height="${G - 108}" rx="5" fill="${pants}"/>
      <ellipse cx="${cx - 9}" cy="${G}" rx="9" ry="4" fill="${shoe}"/><ellipse cx="${cx + 9}" cy="${G}" rx="9" ry="4" fill="${shoe}"/>`;
  }
  function torso(cx, shirt, skin, y0 = 62, armL = 0, armR = 0) {
    return `<rect x="${cx - 5}" y="${y0 - 8}" width="10" height="10" fill="${skin}"/>
      <rect x="${cx - 31}" y="${y0 + 4}" width="12" height="40" rx="6" fill="${shirt}" transform="rotate(${armL} ${cx - 25} ${y0 + 6})"/>
      <rect x="${cx + 19}" y="${y0 + 4}" width="12" height="40" rx="6" fill="${shirt}" transform="rotate(${armR} ${cx + 25} ${y0 + 6})"/>
      <path d="M${cx - 22} ${y0 + 10} q0 -10 12 -10 h20 q12 0 12 10 v42 h-44z" fill="${shirt}"/>`;
  }
  const head = (cx, skin, y = 40) => `<circle cx="${cx}" cy="${y}" r="16" fill="${skin}"/>`;
  const glasses = (cx, y = 40) => `<g fill="none" stroke="#2D3F54" stroke-width="2"><circle cx="${cx - 6}" cy="${y}" r="5"/><circle cx="${cx + 6}" cy="${y}" r="5"/><path d="M${cx - 1} ${y}h2"/></g>`;
  const people = [
    // 1 servidora pública: pelo largo, blazer, carné
    cx => `${legs(cx, "#2D3F54")}<path d="M${cx - 19} 42 q0 -24 19 -24 q19 0 19 24 v26 h-38z" fill="#4a2c1a"/>${torso(cx, "#004C94", "#c68642")}${head(cx, "#c68642")}<path d="M${cx - 16} 36 q4 -16 18 -14 q12 2 14 14 q-14 -6 -32 0z" fill="#4a2c1a"/><path d="M${cx - 8} 62 l8 14 l8 -14" fill="none" stroke="#73CC80" stroke-width="2"/><rect x="${cx - 4}" y="76" width="9" height="12" rx="2" fill="#fff"/>`,
    // 2 contratista: pelo corto, camisa teal, laptop
    cx => `${legs(cx, "#52647A")}${torso(cx, "#0FA69D", "#8d5524", 62, 0, -35)}${head(cx, "#8d5524")}<path d="M${cx - 16} 38 q0 -18 16 -18 q16 0 16 18 q-6 -8 -16 -8 q-10 0 -16 8z" fill="#1b1b1b"/><rect x="${cx + 14}" y="80" width="26" height="18" rx="3" fill="#2D3F54" transform="rotate(-10 ${cx + 27} 89)"/>`,
    // 3 practicante: pelo rizado, morral
    cx => `${legs(cx, "#3C93FA")}${torso(cx, "#73CC80", "#f1c27d")}<path d="M${cx - 14} 64 v34 M${cx + 14} 64 v34" stroke="#b5651d" stroke-width="4"/>${head(cx, "#f1c27d")}${[[-14, 30], [-6, 23], [4, 22], [13, 28], [17, 38], [-17, 40]].map(([dx, y]) => `<circle cx="${cx + dx}" cy="${y}" r="8" fill="#6b3e1f"/>`).join("")}`,
    // 4 personal tercerizado: chaleco y gorra
    cx => `${legs(cx, "#2D3F54")}${torso(cx, "#52647A", "#e0ac69")}<path d="M${cx - 22} 72 h14 v44 h-14z M${cx + 8} 72 h14 v44 h-14z" fill="#00D4C6"/><path d="M${cx - 22} 92 h14 M${cx + 8} 92 h14" stroke="#fff" stroke-width="3"/>${head(cx, "#e0ac69")}<path d="M${cx - 17} 36 q0 -16 17 -16 q17 0 17 16z" fill="#006ECF"/><rect x="${cx + 4}" y="32" width="20" height="5" rx="2.5" fill="#006ECF"/>`,
    // 5 personal en comisión: barba, gafas, maleta
    cx => `${legs(cx, "#2D3F54")}${torso(cx, "#028183", "#ffdbac", 62, 0, 0)}${head(cx, "#ffdbac")}<path d="M${cx - 16} 36 q0 -16 16 -16 q16 0 16 16 q-4 -6 -16 -6 q-12 0 -16 6z" fill="#7a4b2a"/><path d="M${cx - 14} 44 q14 18 28 0 q-2 10 -14 12 q-12 -2 -14 -12z" fill="#7a4b2a"/>${glasses(cx, 39)}<rect x="${cx + 26}" y="106" width="22" height="30" rx="4" fill="#3C93FA"/><path d="M${cx + 32} 106 v-6 h10 v6" fill="none" stroke="#2D3F54" stroke-width="3"/>`,
    // 6 proveedora: hiyab y caja
    cx => `${legs(cx, "#52647A")}${torso(cx, "#2D3F54", "#c68642", 62, 20, -20)}<path d="M${cx - 21} 46 q0 -30 21 -30 q21 0 21 30 v20 q-21 8 -42 0z" fill="#73CC80"/>${head(cx, "#c68642", 41)}<path d="M${cx - 16} 38 q2 -18 16 -18 q14 0 16 18 q-4 -12 -16 -12 q-12 0 -16 12z" fill="#73CC80"/><rect x="${cx - 18}" y="84" width="36" height="26" rx="3" fill="#d9a066"/><path d="M${cx - 18} 92 h36" stroke="#b07a3e" stroke-width="2"/>`,
    // 7 ciudadanía: persona en silla de ruedas
    cx => `<circle cx="${cx - 4}" cy="126" r="24" fill="none" stroke="#2D3F54" stroke-width="5"/><circle cx="${cx - 4}" cy="126" r="4" fill="#2D3F54"/><circle cx="${cx + 30}" cy="144" r="6" fill="none" stroke="#2D3F54" stroke-width="4"/>
      <path d="M${cx - 24} 70 v38 h50 l4 34" fill="none" stroke="#2D3F54" stroke-width="5" stroke-linecap="round"/>
      <rect x="${cx - 6}" y="98" width="36" height="12" rx="6" fill="#52647A"/><rect x="${cx + 22}" y="100" width="12" height="40" rx="6" fill="#52647A"/><ellipse cx="${cx + 32}" cy="141" rx="9" ry="4" fill="#2D3F54"/>
      <path d="M${cx - 18} 74 q0 -10 12 -10 h14 q12 0 12 10 v36 h-38z" fill="#006ECF"/><rect x="${cx + 4}" y="74" width="12" height="30" rx="6" fill="#006ECF" transform="rotate(-30 ${cx + 10} 76)"/>
      <rect x="${cx - 3}" y="56" width="10" height="10" fill="#5c3a21"/><circle cx="${cx + 2}" cy="44" r="16" fill="#5c3a21"/><path d="M${cx - 14} 40 q0 -18 16 -18 q16 0 16 18 l-4 -4 q-12 -8 -24 0z" fill="#d9d9d9"/>${glasses(cx + 2, 44)}`
  ];
  const labels = ["Servidoras y|servidores públicos", "Contratistas", "Pasantes, judicantes|y practicantes", "Personal|tercerizado", "Personal|en comisión", "Proveedores", "Ciudadanía que|recibe servicios"];
  const W = 164;
  const bg = ["#eaf3fd", "#e8f7f5", "#effaf1", "#e6fbf9", "#e8f7f5", "#effaf1", "#eaf3fd"];
  const cells = people.map((f, k) => {
    const cx = W / 2;
    let o = `<figure class="ilu-p"><svg viewBox="0 0 ${W} 160" width="100%" aria-hidden="true" style="display:block">`;
    o += `<circle cx="${cx}" cy="86" r="62" fill="${bg[k]}"/><rect x="8" y="${G + 2}" width="${W - 16}" height="5" rx="2.5" fill="#e3e9ef"/>`;
    o += f(cx) + `</svg><figcaption>${labels[k].replace("|", " ")}</figcaption></figure>`;
    return o;
  });
  return `<div class="ilu" role="img" aria-label="Ilustración de la Comunidad Invima: servidoras y servidores públicos, contratistas, pasantes, judicantes y practicantes, personal tercerizado, personal en comisión, proveedores y ciudadanía.">${cells.join("")}</div>`;
};
