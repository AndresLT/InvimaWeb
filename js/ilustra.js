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

/* Ilustración: personas diversas despidiéndose (saludo con la mano) */
window.ilustraDespedida = function () {
  const G = 196, shoe = "#1c2a3a";
  function person(cx, o) {
    const sk = o.skin, y0 = 92;
    let s = "";
    // pelo trasero (largo)
    if (o.hair === "long") s += `<path d="M${cx - 21} 70 q0 -30 21 -30 q21 0 21 30 v34 h-42z" fill="${o.hc}"/>`;
    if (o.hair === "hijab") s += `<path d="M${cx - 24} 74 q0 -36 24 -36 q24 0 24 36 v26 q-24 10 -48 0z" fill="${o.hc}"/>`;
    // piernas o silla
    if (o.chair) {
      s += `<circle cx="${cx - 4}" cy="${G - 26}" r="27" fill="none" stroke="#e6eef5" stroke-width="5"/><circle cx="${cx - 4}" cy="${G - 26}" r="4" fill="#e6eef5"/><circle cx="${cx + 34}" cy="${G - 6}" r="6" fill="none" stroke="#e6eef5" stroke-width="4"/>
        <path d="M${cx - 26} ${y0 + 8} v44 h56 l4 ${G - y0 - 58}" fill="none" stroke="#e6eef5" stroke-width="5" stroke-linecap="round"/>
        <rect x="${cx - 6}" y="${y0 + 38}" width="40" height="13" rx="6" fill="${o.pants}"/><rect x="${cx + 24}" y="${y0 + 40}" width="13" height="${G - y0 - 48}" rx="6" fill="${o.pants}"/><ellipse cx="${cx + 34}" cy="${G - 6}" rx="10" ry="4" fill="${shoe}"/>`;
    } else {
      s += `<rect x="${cx - 14}" y="${y0 + 48}" width="12" height="${G - y0 - 48}" rx="6" fill="${o.pants}"/><rect x="${cx + 2}" y="${y0 + 48}" width="12" height="${G - y0 - 48}" rx="6" fill="${o.pants}"/>
        <ellipse cx="${cx - 10}" cy="${G}" rx="10" ry="4.5" fill="${shoe}"/><ellipse cx="${cx + 10}" cy="${G}" rx="10" ry="4.5" fill="${shoe}"/>`;
      if (o.skirt) s += `<path d="M${cx - 22} ${y0 + 44} h44 l8 34 h-60z" fill="${o.skirt}"/>`;
    }
    // brazo izquierdo abajo
    s += `<rect x="${cx - 34}" y="${y0 + 4}" width="13" height="44" rx="6.5" fill="${o.shirt}"/><circle cx="${cx - 27}" cy="${y0 + 50}" r="6" fill="${sk}"/>`;
    // brazo derecho saludando
    s += `<g transform="rotate(-150 ${cx + 27} ${y0 + 8})"><rect x="${cx + 21}" y="${y0 + 4}" width="13" height="46" rx="6.5" fill="${o.shirt}"/><circle cx="${cx + 27.5}" cy="${y0 + 54}" r="7.5" fill="${sk}"/></g>`;
    // cuello y torso
    s += `<rect x="${cx - 5}" y="${y0 - 10}" width="10" height="12" fill="${sk}"/><path d="M${cx - 24} ${y0 + 10} q0 -12 13 -12 h22 q13 0 13 12 v${o.chair ? 40 : 46} h-48z" fill="${o.shirt}"/>`;
    if (o.lanyard) s += `<path d="M${cx - 8} ${y0} l8 15 l8 -15" fill="none" stroke="#73CC80" stroke-width="2"/><rect x="${cx - 4}" y="${y0 + 15}" width="9" height="12" rx="2" fill="#fff"/>`;
    // cabeza
    s += `<circle cx="${cx}" cy="${y0 - 26}" r="18" fill="${sk}"/>`;
    // pelo delantero
    const hy = y0 - 26;
    if (o.hair === "short") s += `<path d="M${cx - 18} ${hy - 2} q0 -20 18 -20 q18 0 18 20 q-6 -9 -18 -9 q-12 0 -18 9z" fill="${o.hc}"/>`;
    if (o.hair === "long") s += `<path d="M${cx - 18} ${hy - 4} q4 -18 20 -16 q14 2 16 16 q-16 -7 -36 0z" fill="${o.hc}"/>`;
    if (o.hair === "curly") [[-15, -12], [-7, -19], [4, -20], [13, -14], [18, -3], [-18, -1]].forEach(([dx, dy]) => s += `<circle cx="${cx + dx}" cy="${hy + dy}" r="9" fill="${o.hc}"/>`);
    if (o.hair === "bald") s += `<path d="M${cx - 18} ${hy + 2} q-2 -12 4 -14 M${cx + 18} ${hy + 2} q2 -12 -4 -14" stroke="${o.hc}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
    if (o.hair === "hijab") s += `<path d="M${cx - 18} ${hy - 2} q2 -20 18 -20 q16 0 18 20 q-4 -13 -18 -13 q-14 0 -18 13z" fill="${o.hc}"/>`;
    if (o.hair === "bun") s += `<circle cx="${cx}" cy="${hy - 22}" r="9" fill="${o.hc}"/><path d="M${cx - 18} ${hy - 1} q0 -19 18 -19 q18 0 18 19 q-8 -10 -18 -10 q-10 0 -18 10z" fill="${o.hc}"/>`;
    if (o.glasses) s += `<g fill="none" stroke="#1c2a3a" stroke-width="2"><circle cx="${cx - 7}" cy="${hy}" r="5.5"/><circle cx="${cx + 7}" cy="${hy}" r="5.5"/><path d="M${cx - 1.5} ${hy}h3"/></g>`;
    if (o.beard) s += `<path d="M${cx - 15} ${hy + 4} q15 20 30 0 q-2 12 -15 14 q-13 -2 -15 -14z" fill="${o.hc}"/>`;
    // sonrisa
    s += `<path d="M${cx - 6} ${hy + 8} q6 6 12 0" fill="none" stroke="#5a2e1a" stroke-width="2" stroke-linecap="round"/>`;
    return s;
  }
  const P = [
    { skin: "#c68642", hair: "long", hc: "#3b2214", shirt: "#006ECF", pants: "#2D3F54", lanyard: true },
    { skin: "#5c3a21", hair: "curly", hc: "#1b1b1b", shirt: "#73CC80", pants: "#52647A" },
    { skin: "#ffdbac", hair: "bald", hc: "#cfcfcf", shirt: "#3C93FA", pants: "#2D3F54", glasses: true, chair: true },
    { skin: "#8d5524", hair: "hijab", hc: "#00D4C6", shirt: "#028183", pants: "#2D3F54", skirt: "#0FA69D" },
    { skin: "#e0ac69", hair: "short", hc: "#4a2c1a", shirt: "#ffffff", pants: "#3C93FA", beard: true },
    { skin: "#f1c27d", hair: "bun", hc: "#7a4b2a", shirt: "#0FA69D", pants: "#2D3F54", glasses: true },
    { skin: "#a0673a", hair: "short", hc: "#d9d9d9", shirt: "#004C94", pants: "#52647A", glasses: true }
  ];
  // fila de atrás (más pequeña y elevada) y fila de adelante
  const back = [[1, 58], [3, 168], [5, 278], [6, 388]], front = [[0, 113], [2, 222], [4, 335]];
  let out = `<svg viewBox="0 -78 446 286" width="100%" height="100%" preserveAspectRatio="xMidYMax meet" role="img" aria-label="Ilustración de personas diversas despidiéndose con la mano" style="display:block">`;
  back.forEach(([k, x]) => { out += `<g transform="translate(${x} 0) scale(.88) translate(0 -96)">${person(0, P[k])}</g>`; });
  front.forEach(([k, x]) => { out += `<g transform="translate(${x} 10)">${person(0, P[k])}</g>`; });
  return out + "</svg>";
};
