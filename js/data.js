/* ============================================================
   INVIMA CONSCIENTE · Cartilla interactiva — CONTENIDOS
   Todo el texto de la cartilla vive aquí para editarlo fácil.
   Fuente: Protocolo INVIMA CONSCIENTE (Res. 2026041802 de 2026)
   y Propuesta de intervención «NO ES NORMAL».
   ============================================================ */

/* ---------- VIDEOS ----------
   Para insertar un video: poner la ruta del archivo en src
   (ej. "video/v1.mp4"). Si src es null, se muestra el espacio reservado. */
window.VIDEOS = {
  personajes: { src: null, poster: null, titulo: "Conoce a los personajes de NO ES NORMAL", estado: "listo" },
  v1: { src: null, poster: null, titulo: "Video 1 · ¿Qué es INVIMA CONSCIENTE?", estado: "listo" },
  v2: { src: null, poster: null, titulo: "Video 2 · ¿Esto que vi es normal?", estado: "listo" },
  v3: { src: null, poster: null, titulo: "Video 3 · ¿Qué hago si lo vivo o lo veo?", estado: "listo" },
  v4: { src: null, poster: null, titulo: "Video 4 · ¿Qué me protege si hablo?", estado: "produccion" },
  v5: { src: null, poster: null, titulo: "Video 5 · ¿Qué puedo hacer para que esto se mantenga?", estado: "produccion" }
};

/* ---------- PERSONAJES ----------
   Los nombres los elige la comunidad Invima. Cuando estén, cambiar "nombre". */
window.PERSONAJES = [
  { id: "p3", img: "img/p3.webp", nombre: "Gerardo", perfil: "Ingeniero de alimentos · paso fronterizo de Cúcuta", rol: "Trabaja en territorio, en un paso fronterizo. Te presenta el protocolo: qué es, a quién cobija y dónde aplica, también fuera de la sede.", momento: 1 },
  { id: "p1", img: "img/p1.webp", nombre: "Sandra", perfil: "Apoyo administrativo · Secretaría General, sede Chapinero (Bogotá)", rol: "Trabaja en el área administrativa de la sede de Chapinero. Te ayuda a reconocer las situaciones que se han vuelto «normales» y no deberían serlo.", momento: 2, escena: true },
  { id: "p2", img: "img/p2.webp", nombre: "Julio", perfil: "Contratista", rol: "Recuerda que el protocolo también cobija el ámbito contractual. Te muestra qué hacer y a qué instancia acudir si lo vives o lo ves.", momento: 3 },
  { id: "p4", img: "img/p4.webp", nombre: "Catalina", perfil: "Oficina de Atención al Ciudadano", rol: "Atiende a la ciudadanía todos los días. Te cuenta tus derechos, las garantías y las medidas que te protegen si decides hablar.", momento: 4 },
  { id: "p5", img: "img/p5.webp", nombre: "Arturo", perfil: "Coordinador de grupo", rol: "Lidera un equipo y usa audífono. Te invita a llevar lo aprendido a la práctica, con acciones cotidianas de respeto y cuidado.", momento: 5 }
];

window.MOMENTOS = [
  { n: 1, id: "m1", titulo: "Me entero", pregunta: "¿Qué es INVIMA CONSCIENTE?", logro: "Conoces el propósito del protocolo, a quién aplica y qué situaciones contempla.", color: "#004C94", ink: "#fff", pj: "p3", video: "v1", mensaje: "Conocer el protocolo es el primer paso." },
  { n: 2, id: "m2", titulo: "Lo reconozco", pregunta: "¿Esto que veo es normal?", logro: "Aprendes a identificar situaciones de violencia, discriminación y otras conductas de alerta.", color: "#0FA69D", ink: "#fff", pj: "p1", video: "v2", mensaje: "No todo lo que se ha vuelto frecuente es normal." },
  { n: 3, id: "m3", titulo: "Sé qué hacer", pregunta: "¿Qué hago si lo vivo o lo veo?", logro: "Conoces las rutas de actuación y las instancias a las que puedes acudir.", color: "#006ECF", ink: "#fff", pj: "p2", video: "v3", mensaje: "Reconocer una situación es importante. Saber qué hacer también." },
  { n: 4, id: "m4", titulo: "Sé que estoy protegido/a", pregunta: "¿Qué me protege si hablo?", logro: "Conoces tus derechos, las garantías, las medidas de protección y los principios de la atención.", color: "#028183", ink: "#fff", pj: "p4", video: "v4", mensaje: "Conocer las garantías también es conocer tus derechos." },
  { n: 5, id: "m5", titulo: "Lo hago parte de mí", pregunta: "¿Qué puedo hacer para que esta cultura se mantenga?", logro: "Pasas del conocimiento a la acción: tu papel en la construcción de ambientes respetuosos.", color: "#73CC80", ink: "#16324a", pj: "p5", video: "v5", mensaje: "Una cultura de respeto también se construye con las acciones cotidianas." }
];

/* ---------- INTRO DE CADA VIDEO ---------- */
window.VIDEO_INTROS = {
  personajes: {
    contexto: "Gerardo, Sandra, Julio, Catalina y Arturo te acompañarán en toda la campaña: en los videos, los casos, las piezas gráficas y los dummies de las zonas comunes.",
    busca: "Que los conozcas antes de empezar. No son víctimas ni agresores: son guías que hacen preguntas e invitan a reflexionar.",
    fijate: ["¿En qué contexto trabaja cada uno?", "¿Con cuál te identificas más?"]
  },
  v1: {
    contexto: "En el Invima existe un protocolo que nos protege a todas y todos. Este video lo presenta en poco más de un minuto.",
    busca: "Que sepas qué es INVIMA CONSCIENTE, para qué existe, a quién aplica y qué situaciones contempla.",
    fijate: ["¿A quiénes cobija el protocolo?", "¿En qué espacios aplica?", "¿Qué conductas menciona?"]
  },
  v2: {
    contexto: "Hay frases que escuchamos tanto que ya ni las notamos: «era una broma», «no fue para tanto», «solo estaba molestando».",
    busca: "Cuestionar situaciones cotidianas que suelen minimizarse y relacionarlas con las conductas que contempla el protocolo, en planta, contratación y atención a la ciudadanía.",
    fijate: ["¿Qué ejemplos te resultan familiares?", "¿Qué preguntas ayudan a reconocer una conducta?"]
  },
  v3: {
    contexto: "Reconocer una situación es importante. Saber qué hacer también. A partir de una situación hipotética, el video explica las rutas del protocolo.",
    busca: "Mostrar qué puede hacer quien vive la situación, quien la presencia y quien recibe un relato.",
    fijate: ["¿A qué instancia se acude en cada caso?", "¿Qué no se debe hacer al recibir un relato?"]
  },
  v4: {
    contexto: "Un relato en primera persona muestra los temores más frecuentes al hablar: que todos se enteren, sufrir represalias, tener que repetir la historia.",
    busca: "Que conozcas cómo responde el protocolo a cada temor: confidencialidad, no revictimización, protección frente a represalias y medidas de protección.",
    fijate: ["¿Qué temor te parece más común?", "¿Qué garantía responde a cada uno?"]
  },
  v5: {
    contexto: "La cultura de respeto no depende solo de un documento: se construye todos los días, con acciones sencillas.",
    busca: "Invitarte a la corresponsabilidad: escuchar, respetar, no normalizar, no reproducir comentarios discriminatorios, orientar, acompañar y conocer las rutas.",
    fijate: ["¿Qué acción ya practicas?", "¿Cuál podrías empezar hoy?"]
  }
};

/* ---------- FRASES QUE NORMALIZAN (campaña) ---------- */
window.FRASES = [
  { f: "Era solo una broma.", r: "Un comentario que discrimina o violenta no deja de serlo por presentarse como broma." },
  { f: "Siempre ha sido así.", r: "Que algo se repita no lo vuelve aceptable." },
  { f: "No fue para tanto.", r: "Para saber si una conducta es ofensiva hay que considerar la perspectiva de quien la vive." },
  { f: "Es mejor no meterse.", r: "Nombrar una situación es llevarla a las instancias del protocolo, no exponerla." },
  { f: "¿Para qué reportarlo?", r: "Existen rutas, orientación, acompañamiento y garantías para quien decida buscarlas." },
  { f: "Solo hizo un comentario.", r: "Los comentarios sobre el cuerpo, la apariencia o la identidad de alguien pueden ser acoso o discriminación." }
];

/* ---------- M1 · FLASHCARDS: TÉRMINOS ---------- */
window.CARDS_M1 = [
  { g: "Base", t: "Comunidad Invima", d: "Servidoras y servidores públicos, contratistas y demás colaboradores. También pasantes, judicantes, practicantes, personal tercerizado o en comisión, proveedores y la ciudadanía que recibe servicios del Instituto." },
  { g: "Base", t: "Conducta prohibida", d: "Conductas que atentan contra la dignidad de las personas, como el acoso laboral, el acoso sexual, la discriminación y el abuso de autoridad. El desacuerdo sobre el trabajo, por sí solo, no suele ser una conducta prohibida: se resuelve en la gestión de la actuación profesional." },
  { g: "Sexual", t: "Acoso sexual", d: "Todo acto de persecución, hostigamiento o asedio de carácter o connotación sexual, lasciva o libidinosa, que se manifiesta en relaciones de poder verticales u horizontales (por edad, sexo, género, orientación, posición laboral, social o económica) y que se da una o varias veces contra otra persona en el contexto laboral (Ley 2365 de 2024)." },
  { g: "Sexual", t: "Hostigamiento sexual o acoso", d: "Conductas de naturaleza sexual ofensivas o humillantes que interfieren con el trabajo, condicionan una contratación o crean un entorno intimidante u hostil. Puede ser un hecho aislado. Para saber si es ofensiva, se considera la perspectiva de la víctima: va desde miradas y palabras hasta el contacto físico." },
  { g: "Sexual", t: "Abuso sexual", d: "Toda intrusión física de carácter sexual, cometida o con amenaza de cometerse, ya sea por la fuerza, en condiciones de desigualdad o mediante coacción." },
  { g: "Sexual", t: "Explotación sexual", d: "Abuso real o intencionado de una posición de poder, de la confianza o de la vulnerabilidad de una persona para obtener conductas sexuales. Incluye ofrecer dinero u otras ventajas, como contratos o beneficios, a cambio." },
  { g: "Sexual", t: "Violencia sexual", d: "Todo acto sexual, o su tentativa, y los comentarios o insinuaciones sexuales no deseados, ejercidos mediante coacción por otra persona." },
  { g: "Laboral", t: "Acoso laboral", d: "Toda conducta persistente y demostrable, ejercida por un jefe, un compañero o un subalterno, que busca infundir miedo, intimidación, terror o angustia, causar perjuicio laboral, desmotivar o inducir la renuncia (Ley 1010 de 2006)." },
  { g: "Laboral", t: "Acoso laboral en razón de género", d: "Situaciones o comportamientos no deseados y repetidos hacia una persona por su sexo o género, con el objetivo de atentar contra su dignidad." },
  { g: "Discriminación", t: "Discriminación como acoso laboral", d: "La que anula el reconocimiento o el ejercicio de los derechos laborales, y todo trato diferenciado por raza, género, origen familiar o nacional, credo religioso, preferencia política o situación social, o que carezca de razonabilidad laboral." },
  { g: "Discriminación", t: "Discriminación por discapacidad", d: "Cualquier distinción, exclusión o restricción por motivos de discapacidad que obstaculice o deje sin efecto el reconocimiento o el ejercicio, en igualdad de condiciones, de los derechos y libertades." },
  { g: "Discriminación", t: "Discriminación racial", d: "Toda distinción, exclusión, restricción o preferencia basada en raza, color, linaje u origen nacional o étnico, que anule o menoscabe el ejercicio de los derechos en condiciones de igualdad." },
  { g: "Discriminación", t: "Hostigamiento por razones de discriminación", d: "Promover o instigar actos orientados a causar daño físico o moral a una persona, grupo o comunidad por su raza, etnia, religión, nacionalidad, ideología política o filosófica, sexo u orientación sexual." },
  { g: "Discriminación", t: "Orientación sexual", d: "Es independiente del sexo biológico y de la identidad de género. Se refiere a la capacidad de cada persona de sentir atracción emocional, afectiva y sexual por personas de un género diferente, del mismo género o de más de un género." },
  { g: "Violencias", t: "Violencias basadas en género", d: "Agresiones físicas, sexuales, psicológicas, económicas o simbólicas dirigidas a una persona por su género, que afectan su integridad y sus derechos, y se sostienen en estructuras de poder y desigualdad." },
  { g: "Violencias", t: "Violencia psicológica", d: "Acciones u omisiones que degradan o controlan las acciones, creencias y decisiones de una persona mediante intimidación, manipulación, amenazas o aislamiento, y afectan su salud psicológica (Ley 1257 de 2008)." },
  { g: "Violencias", t: "Violencia física", d: "Ocurre cuando una persona transgrede el espacio corporal de otra o amenaza con causarle daño, como golpes, jalones o empujones." },
  { g: "Violencias", t: "Violencia económica", d: "Acción u omisión orientada al abuso económico, al control abusivo de las finanzas o a recompensas o castigos monetarios por razón de la condición social, económica o política. Puede darse también en las relaciones laborales." },
  { g: "Violencias", t: "Violencia patrimonial", d: "Restricción o limitación de los bienes y recursos de una persona destinados a suplir sus necesidades." },
  { g: "Violencias", t: "Violencia institucional", d: "Daño físico, psicológico, simbólico o social que una persona sufre a manos de agentes o instituciones que deberían protegerla, por el uso abusivo, negligente o discriminatorio del poder." },
  { g: "Violencias", t: "Violencia digital", d: "También llamada ciberviolencia: se comete y se expande por redes sociales, correo, mensajería y otras plataformas, con el fin de causar daño psicológico, emocional, sexual o económico." },
  { g: "Violencias", t: "Feminicidio", d: "Causar la muerte a una mujer por su condición de mujer o por motivos de su identidad de género. Es la manifestación más extrema de violencia contra las mujeres (art. 104A del Código Penal)." },
  { g: "Atención", t: "Revictimización", d: "Sucede cuando una víctima de violencia o abuso vuelve a ser víctima, ahora del sistema, por ejemplo al tener que declarar los hechos en más de una oportunidad." },
  { g: "Atención", t: "Psicoeducación", d: "Técnica de educación psicológica que brinda información sobre una situación o problemática para fortalecer la adaptación y el afrontamiento." }
];

/* ---------- M1 · RETO: ¿VERDADERO O FALSO? ---------- */
window.QUIZ_M1 = [
  { q: "El protocolo solo aplica a servidoras y servidores de planta.", o: ["Verdadero", "Falso"], k: 1,
    fb: "Aplica también a contratistas, pasantes, judicantes, practicantes, personal tercerizado o en comisión, proveedores y a la ciudadanía que recibe servicios del Invima." },
  { q: "Un mensaje ofensivo que llega por el chat de trabajo a las 10 de la noche puede estar cubierto por el protocolo.", o: ["Verdadero", "Falso"], k: 0,
    fb: "El protocolo aplica en las tecnologías de la información y los espacios de interacción digital, dentro o fuera de las instalaciones, siempre que la conducta se relacione con el entorno laboral o contractual." },
  { q: "Si la situación ocurre durante una comisión o una visita de inspección fuera de la sede, el protocolo no aplica.", o: ["Verdadero", "Falso"], k: 1,
    fb: "Aplica en desplazamientos, viajes, eventos y actividades relacionadas con las funciones o las obligaciones contractuales." },
  { q: "El protocolo también contempla lo que ocurre en la relación con la ciudadanía que atiende el Invima.", o: ["Verdadero", "Falso"], k: 0,
    fb: "La ciudadanía que recibe servicios o atención directa está incluida, tanto si vive la conducta como si la ejerce." },
  { q: "La cafetería, los baños y los vestuarios también son espacios cubiertos por el protocolo.", o: ["Verdadero", "Falso"], k: 0,
    fb: "Incluye los lugares donde se toma el descanso, se come, se usan las instalaciones sanitarias y los vestuarios." },
  { q: "Los eventos sociales y de formación del trabajo quedan por fuera del protocolo.", o: ["Verdadero", "Falso"], k: 1,
    fb: "Las actividades sociales o de formación relacionadas con el trabajo también están cubiertas." }
];

/* ---------- M2 · SEÑALES DE ALERTA (comportamientos a evitar, num. 6.3) ---------- */
window.SENALES = [
  { i: "hand", t: "Contacto físico no deseado ni consentido con connotación sexual." },
  { i: "cal", t: "Invitaciones o presiones para concertar citas o encuentros no consentidos." },
  { i: "swap", t: "Pedir favores sexuales a cambio de mejoras laborales o de conservar el puesto o el contrato." },
  { i: "msg", t: "Enviar mensajes, fotos o material de contenido sexual no solicitado ni consentido." },
  { i: "eye", t: "Miradas morbosas o gestos sugestivos." },
  { i: "laugh", t: "Comentarios, burlas o chistes sexuales, racistas, capacitistas, homofóbicos o sobre el aspecto físico." },
  { i: "ear", t: "Difundir rumores o información privada de las personas." },
  { i: "warn", t: "Asignar tareas ajenas a las funciones u otras sanciones por rechazar proposiciones sexuales." }
];

/* ---------- M2 · CASOS PARA RECONOCER ---------- */
window.QUIZ_M2 = [
  { ctx: "Planta", pj: "p1", q: "Un compañero insiste en invitar a salir a una servidora y hace comentarios sobre su cuerpo, aunque ella ya le dijo que no le interesa.",
    pre: "¿Qué tipo de conducta es, según el protocolo?",
    o: ["Acoso sexual", "Un desacuerdo laboral", "Discriminación por ciclo de vida", "No es una conducta del protocolo"], k: 0,
    fb: "Invitar a salir de forma repetida y comentar el cuerpo de alguien son ejemplos de acoso sexual que el protocolo menciona. Puede darse una o varias veces, también por chat o redes." },
  { ctx: "Reunión de equipo", pj: "p5", q: "En las reuniones se repiten chistes sobre la orientación sexual de un compañero, y el grupo se ríe «porque siempre ha sido así».",
    pre: "¿Qué tipo de conducta es?",
    o: ["Humor de oficina, no aplica", "Discriminación por orientación sexual", "Acoso laboral por desempeño", "Un conflicto entre dos personas"], k: 1,
    fb: "Las burlas y chistes que reproducen prejuicios homofóbicos están entre los comportamientos que la Comunidad Invima debe evitar. Que sea costumbre no lo hace normal." },
  { ctx: "Contratista", pj: "p2", q: "A un contratista con discapacidad auditiva dejan de convocarlo a las reuniones porque «es complicado incluirlo», y nadie busca ajustes.",
    pre: "¿Qué tipo de conducta es?",
    o: ["Una decisión de logística", "Discriminación por discapacidad", "Acoso sexual", "No aplica porque es contratista"], k: 1,
    fb: "Excluir a alguien por su discapacidad, sin buscar ajustes, obstaculiza el ejercicio de sus derechos en igualdad. Y el protocolo también cobija el ámbito contractual." },
  { ctx: "Planta", pj: "p3", q: "A una profesional la excluyen de las comisiones de campo con el argumento de que «ese trabajo no es para mujeres».",
    pre: "¿Qué tipo de conducta es?",
    o: ["Violencia basada en género", "Una decisión de la jefatura que no se cuestiona", "Discriminación por nacionalidad", "Un desacuerdo laboral"], k: 0,
    fb: "Limitar las oportunidades de alguien por estereotipos de género es violencia basada en género, que se sostiene en relaciones de poder y desigualdad." },
  { ctx: "Funciones misionales", pj: "p3", q: "Durante una visita de inspección, alguien sugiere que un concepto favorable podría «agilizarse» a cambio de favores de tipo sexual.",
    pre: "¿Qué tipo de conducta es?",
    o: ["Un trámite irregular, sin más", "Explotación sexual", "Acoso laboral", "Discriminación por ideología"], k: 1,
    fb: "Aprovechar una posición de poder para obtener conductas sexuales, ofreciendo ventajas a cambio, es explotación sexual. El protocolo establece el deber de reportarla." },
  { ctx: "Reunión de equipo", pj: "p5", q: "Dos colegas discuten en una reunión porque no están de acuerdo con la metodología de un informe. Ambos exponen sus argumentos con respeto.",
    pre: "¿Qué es esta situación?",
    o: ["Acoso laboral", "Discriminación", "Un desacuerdo laboral, no una conducta prohibida", "Violencia psicológica"], k: 2,
    fb: "Un desacuerdo sobre el trabajo, tratado con respeto, no es por sí solo una conducta prohibida: se resuelve en la gestión de la actuación profesional. Distinguirlo también es parte de reconocer." }
];

/* ---------- M2 · RELACIONA: SITUACIÓN ↔ CONDUCTA ---------- */
window.MATCH_M2 = [
  { a: "Una profesional en territorio recibe comentarios recurrentes sobre su acento y sus rasgos, presentados como bromas.", b: "Discriminación por raza o etnia" },
  { a: "A un servidor próximo a pensionarse le niegan una capacitación porque «ya para qué».", b: "Discriminación por ciclo de vida" },
  { a: "Una persona extranjera que adelanta un trámite recibe un trato despectivo y demoras injustificadas.", b: "Discriminación por nacionalidad" },
  { a: "Un grupo se burla de las creencias religiosas de una contratista y la excluye de las conversaciones.", b: "Discriminación por religión" },
  { a: "Alguien comparte en el grupo de WhatsApp del área memes de contenido sexual sobre una compañera.", b: "Acoso sexual (también digital)" }
];

/* ---------- M3 · LA RUTA EN UNA PÁGINA ---------- */
window.RUTAS = {
  laboral: {
    tab: "Acoso laboral y discriminación",
    intro: "Para acoso laboral y para discriminación por orientación sexual, identidad de género, discapacidad, raza, etnia, religión, nacionalidad, ideología política o ciclo de vida.",
    pasos: [
      { t: "Presenta la queja", d: "La persona afectada, o quien conozca los hechos, diligencia el formato GEHU-FOR1 y lo envía a la secretaría del Comité de Convivencia Laboral: convivencia@invima.gov.co" },
      { t: "El Comité inicia el trámite", d: "Confirma la recepción e informa al jefe inmediato para que se tomen medidas que protejan a la persona." },
      { t: "Análisis y apoyo", d: "El Comité analiza el caso y, si lo requiere, se apoya en Talento Humano (Bienestar, SST, psicología) o en el Grupo de Instrucción Disciplinaria." },
      { t: "Conciliación o remisión", d: "Si es conciliable, se convoca a conciliación. Si hay una posible falta disciplinaria, se remite a Instrucción Disciplinaria o a la Procuraduría." },
      { t: "Seguimiento y acompañamiento", d: "El Comité hace seguimiento a los compromisos. Psicología brinda contención y orientación hacia entidades externas si se necesita." }
    ]
  },
  sexual: {
    tab: "Acoso sexual",
    intro: "El acoso sexual no es conciliable. Si una queja llega al Comité de Convivencia, se traslada de inmediato a Instrucción Disciplinaria, Procuraduría y Fiscalía.",
    pasos: [
      { t: "Persona denunciante", d: "Puede presentar la queja por cualquier modalidad." },
      { t: "Grupo de Instrucción Disciplinaria", d: "Oficina Asesora Jurídica: recibe y clasifica la queja, y la remite a la Procuraduría y a la Fiscalía." },
      { t: "Acompañamiento SST y ARL", d: "Primeros auxilios psicológicos y acompañamiento, si la persona lo acepta." },
      { t: "Medidas de protección", d: "Talento Humano y el equipo psicosocial separan de situaciones de riesgo, ofrecen cambio de dependencia y aseguran orientación jurídica." },
      { t: "Entidades de apoyo", d: "Fiscalía (Unidad de Delitos Sexuales), Procuraduría, Medicina Legal y redes de apoyo como la Línea Púrpura y la Defensoría." }
    ]
  },
  contratos: {
    tab: "Contratistas y otros vínculos",
    intro: "Si la queja es contra un contratista, pasante, judicante, practicante o persona en comisión.",
    pasos: [
      { t: "Recepción", d: "La Oficina de Control Interno o Talento Humano (o quien haga sus veces) recibe la información." },
      { t: "Traslado a la autoridad", d: "Se remite de inmediato a la Procuraduría General de la Nación para que inicie la investigación, si procede." },
      { t: "Cláusula del contrato", d: "Todo contrato incluye la obligación de abstenerse de estas conductas. Su incumplimiento es causal de terminación unilateral." }
    ]
  }
};

window.LINEAS = [
  { n: "Comité de Convivencia Laboral", v: "convivencia@invima.gov.co", i: "mail" },
  { n: "Urgencias · EPS", v: "Violencia sexual o agresión física: atención dentro de las primeras 72 horas", i: "plus" },
  { n: "Fiscalía General de la Nación", v: "018000 919748 · Línea 122 · denuncia.acoso@fiscalia.gov.co", i: "phone" },
  { n: "Línea Púrpura Distrital", v: "018000 112137 · WhatsApp 300 755 1846", i: "phone" },
  { n: "Procuraduría General", v: "quejas@procuraduria.gov.co", i: "mail" },
  { n: "Ministerio del Trabajo", v: "018000 513100", i: "phone" },
  { n: "Defensoría del Pueblo", v: "018000 914814", i: "phone" },
  { n: "Personería de Bogotá", v: "Línea 143", i: "phone" }
];

/* ---------- M3 · COMPLETA LA RUTA ---------- */
window.FILL_M3 = [
  { s: "La persona afectada, o quien conozca los hechos, diligencia el formato {GEHU-FOR1} y lo envía al correo {convivencia@invima.gov.co}.",
    opts: [["GEHU-FOR1", "GCON-MAN2", "GDIS-PRO1"], ["convivencia@invima.gov.co", "quejas@invima.gov.co", "talentohumano@invima.gov.co"]] },
  { s: "El {Comité de Convivencia Laboral} inicia el trámite e informa al {jefe inmediato} para que se tomen medidas de protección.",
    opts: [["Comité de Convivencia Laboral", "Grupo de Comunicaciones", "Grupo de Gestión Contractual"], ["jefe inmediato", "equipo de trabajo", "presunto agresor"]] },
  { s: "Si lo requiere, el Comité se apoya en Talento Humano ({Bienestar y SST}) o en el Grupo de {Instrucción Disciplinaria}.",
    opts: [["Bienestar y SST", "Nómina", "Archivo"], ["Instrucción Disciplinaria", "Gestión Contractual", "Comunicaciones"]] },
  { s: "El acoso sexual {no es conciliable}: se traslada de inmediato a Instrucción Disciplinaria, a la {Procuraduría} y a la Fiscalía.",
    opts: [["no es conciliable", "se concilia primero", "se resuelve en el equipo"], ["Procuraduría", "Registraduría", "Contraloría"]] },
  { s: "En caso de violencia sexual o agresión física, se remite a {urgencias} para atención integral dentro de las primeras {72} horas.",
    opts: [["urgencias", "el Comité de Convivencia", "Comunicaciones"], ["72", "24", "120"]] }
];

/* ---------- M3 · CASOS PARA ACTUAR ---------- */
window.QUIZ_M3 = [
  { ctx: "Testigo · Planta", pj: "p1", q: "Ves que un compañero envía a otra persona mensajes de contenido sexual que ella no quiere recibir. No sabes si intervenir.",
    pre: "¿Qué es lo más adecuado?",
    o: ["Reenviar capturas al grupo del área para que todos sepan lo que pasa", "Acercarte con discreción a la persona afectada, ofrecerle apoyo e informarle de la ruta; si conoces los hechos, puedes ponerlos en conocimiento de la instancia", "No meterte: es un asunto entre ellos", "Confrontar al compañero frente a toda la oficina"], k: 1,
    fb: "«Si lo ves, nómbralo» significa llevarlo a las instancias del protocolo, no exponerlo. Difundir capturas o confrontar en público rompe la confidencialidad y puede revictimizar." },
  { ctx: "Líderes · Recibir un relato", pj: "p5", q: "Una persona de tu equipo te cuenta que vive una situación de acoso sexual y te pide que no se lo digas a nadie.",
    pre: "Como jefe, ¿qué haces?",
    o: ["Llamar al presunto agresor para escuchar su versión y arreglarlo en una reunión", "Prometer guardar el secreto y no volver a tocar el tema", "Agradecer su confianza, escuchar sin juzgar, explicarle la ruta y las garantías, y acompañarla a buscar orientación; la información solo la conocen las instancias autorizadas", "Pedirle que escriba todo con detalle y lo cuente en la próxima reunión de equipo"], k: 2,
    fb: "El acoso sexual no es conciliable y la confrontación con el presunto agresor revictimiza. Escuchar, orientar y cuidar la confidencialidad es lo que corresponde. Si se trata de explotación o abuso sexual, el protocolo establece el deber de reportar." },
  { ctx: "Atención a la ciudadanía", pj: "p4", q: "En la ventanilla ves que un compañero trata con desprecio a una persona extranjera y retrasa su trámite sin razón.",
    pre: "¿Qué puedes hacer?",
    o: ["Asegurar que la persona reciba un trato digno y sin demoras, y poner la situación en conocimiento del Comité de Convivencia Laboral", "Nada: la persona usuaria puede quejarse si quiere", "Comentarlo en el pasillo para que los demás estén alerta", "Atender tú a la persona y olvidar lo ocurrido"], k: 0,
    fb: "La ruta de discriminación inicia con la queja ante el Comité de Convivencia Laboral (formato GEHU-FOR1, convivencia@invima.gov.co). El trato digno a la ciudadanía también es parte del protocolo." },
  { ctx: "Territorio · Inspección", pj: "p3", q: "Durante una visita, un funcionario sugiere a una persona regulada que su concepto podría salir más rápido a cambio de favores sexuales. Tú lo presencias.",
    pre: "¿Qué corresponde hacer?",
    o: ["Esperar a ver si se repite antes de decir algo", "Contarlo a otros compañeros de la comisión", "Reportarlo: el protocolo establece el deber de reportar la explotación sexual, ante el Grupo de Instrucción Disciplinaria, que remite a Procuraduría y Fiscalía", "Llevarlo a conciliación en el Comité de Convivencia"], k: 2,
    fb: "Frente a la explotación y el abuso sexual, toda la Comunidad Invima tiene el deber de reportar y cooperar. No es un asunto conciliable." },
  { ctx: "Urgencia", pj: "p2", q: "Una compañera te cuenta que acaba de sufrir una agresión sexual en una actividad de trabajo.",
    pre: "¿Qué es lo primero?",
    o: ["Esperar al lunes para hablar con Talento Humano", "Acompañarla a urgencias de su EPS para atención integral dentro de las primeras 72 horas, y luego activar el acompañamiento de la ARL y la ruta", "Pedirle que lo piense bien antes de hacer algo", "Preguntarle si está segura de lo que pasó"], k: 1,
    fb: "En violencia sexual o agresión física, la atención médica integral se busca dentro de las primeras 72 horas. Cuestionar el relato es revictimizante." }
];

/* ---------- M3 · RELACIONA: SITUACIÓN ↔ INSTANCIA ---------- */
window.MATCH_M3 = [
  { a: "Quiero presentar una queja por acoso laboral o discriminación.", b: "Comité de Convivencia Laboral" },
  { a: "Quiero presentar una queja por acoso sexual.", b: "Grupo de Instrucción Disciplinaria" },
  { a: "Acaba de ocurrir una agresión sexual o física.", b: "Urgencias de la EPS (72 horas)" },
  { a: "Necesito orientación por violencia contra una mujer en Bogotá.", b: "Línea Púrpura 018000 112137" },
  { a: "La queja es contra un contratista, pasante o persona en comisión.", b: "Procuraduría General de la Nación" }
];

/* ---------- M4 · DERECHOS ---------- */
window.DERECHOS = [
  { i: "route", t: "Activación de las rutas", d: "Como medida de prevención, atención y protección." },
  { i: "lock", t: "Confidencialidad", d: "De tus datos personales y de las actuaciones." },
  { i: "briefcase", t: "Estabilidad", d: "Que la situación no afecte tu estabilidad laboral." },
  { i: "home", t: "Traslado o trabajo remoto", d: "Mientras se resuelve la situación." },
  { i: "shield", t: "Protección inmediata", d: "No tener que trabajar ni interactuar con el presunto agresor." },
  { i: "heart", t: "Atención integral", d: "Primeros auxilios psicológicos y acompañamiento. Puedes aceptarlo o rechazarlo." },
  { i: "user", t: "Trato digno", d: "Sin prejuicios y sin revictimización." },
  { i: "info", t: "Información", d: "Sobre tus derechos, los servicios y los avances de tu caso." },
  { i: "scale", t: "Justicia y reparación", d: "Investigación pronta e imparcial, restitución y reintegración." }
];

window.MEDIDAS = [
  "Separar a la persona de lugares o situaciones de riesgo.",
  "Asignar acompañamiento; en acoso sexual, remisión a la ARL para atención psicosocial.",
  "Iniciar la ruta de atención de forma inmediata.",
  "Ofrecer un cambio temporal o permanente de dependencia.",
  "Proteger el buen nombre de la persona.",
  "Dar orientación y asesoría jurídica.",
  "Evitar que la persona y el presunto agresor trabajen en el mismo equipo o espacio.",
  "Remitir el caso a las autoridades; en acoso sexual, a la Procuraduría y la Fiscalía."
];

/* ---------- M4 · FLASHCARDS: PRINCIPIOS ---------- */
window.CARDS_M4 = [
  { t: "Confidencialidad", d: "La información de los casos es confidencial. Solo las personas autorizadas para tramitar el caso son informadas, y se protege la identidad de la víctima, los testigos y los presuntos autores." },
  { t: "No revictimización", d: "Se evita exponer a la persona a confrontarse con el presunto agresor o a repetir el relato, y nadie cuestiona la veracidad de lo que cuenta." },
  { t: "Centralidad de la víctima", d: "Sus derechos, deseos, necesidades, seguridad, dignidad y bienestar ocupan el lugar central en todas las medidas." },
  { t: "Debida diligencia", d: "Los casos se atienden de forma ágil y efectiva, desde la queja hasta el cierre de la ruta." },
  { t: "Acción sin daño", d: "Antes de actuar se piensa cómo evitar más daño a la persona o a su comunidad." },
  { t: "Buena fe", d: "Todas las personas que intervienen en el procedimiento deben actuar de buena fe." },
  { t: "Debido proceso", d: "Se respetan las garantías de todas las partes, incluida la presunción de inocencia de la persona señalada." },
  { t: "Deber de reportar y cooperar", d: "Cualquier integrante de la Comunidad Invima debe reportar los casos, sospechas o quejas de explotación o abuso sexual que conozca." }
];

/* ---------- M4 · MITOS Y REALIDADES ---------- */
window.QUIZ_M4 = [
  { q: "«Si lo cuento, todo el mundo se va a enterar.»", o: ["Mito", "Realidad"], k: 0,
    fb: "Mito. La confidencialidad es un principio del protocolo: solo las personas autorizadas para tramitar el caso conocen la información." },
  { q: "«Si hablo, me van a tomar represalias.»", o: ["Mito", "Realidad"], k: 0,
    fb: "Mito. Tienes derecho a que la situación no afecte tu estabilidad laboral, y las medidas de protección nunca pueden desmejorar tu condición laboral o contractual." },
  { q: "«Voy a tener que contar lo que pasó una y otra vez.»", o: ["Mito", "Realidad"], k: 0,
    fb: "Mito. El principio de no revictimización busca evitar la reiteración del relato y la confrontación con el presunto agresor." },
  { q: "«Puedo pedir que me cambien de área o trabajar en remoto mientras se resuelve.»", o: ["Mito", "Realidad"], k: 1,
    fb: "Realidad. Es uno de los derechos que reconoce el protocolo." },
  { q: "«Las medidas de protección se toman en las primeras 72 horas.»", o: ["Mito", "Realidad"], k: 1,
    fb: "Realidad. Se adoptan dentro de las 72 horas siguientes a la presentación de la queja o denuncia." },
  { q: "«Si me ofrecen apoyo psicológico, estoy obligado/a a aceptarlo.»", o: ["Mito", "Realidad"], k: 0,
    fb: "Mito. El acompañamiento es voluntario: tienes derecho a recibirlo y también a rechazar la ayuda propuesta." },
  { q: "«Esto solo aplica para funcionarios de planta.»", o: ["Mito", "Realidad"], k: 0,
    fb: "Mito. El protocolo aplica en el ámbito laboral y contractual, y en la relación con la ciudadanía." },
  { q: "«Era solo una broma, no es para tanto.»", o: ["Mito", "Realidad"], k: 0,
    fb: "Mito. Un comentario o una conducta que discrimina o violenta no deja de serlo por presentarse como broma." }
];

/* ---------- M5 · ACCIONES COTIDIANAS ---------- */
window.ACCIONES = [
  { i: "ear", t: "Escuchar", d: "sin juzgar ni cuestionar." },
  { i: "user", t: "Respetar", d: "a cada persona por quien es." },
  { i: "stop", t: "No normalizar", d: "lo que no está bien." },
  { i: "laugh", t: "No reproducir", d: "chistes ni comentarios discriminatorios." },
  { i: "route", t: "Orientar", d: "hacia la ruta y las instancias." },
  { i: "heart", t: "Acompañar", d: "a quien decida buscar ayuda." },
  { i: "info", t: "Conocer las rutas", d: "para saber qué hacer." }
];

/* ---------- M5 · COMPLETA LA FRASE ---------- */
window.FILL_M5 = [
  { s: "No todo lo que se ha vuelto {frecuente} es normal.", opts: [["frecuente", "legal", "divertido"]] },
  { s: "Lo que se {nombra}, se detiene.", opts: [["nombra", "olvida", "calla"]] },
  { s: "Si lo ves, {nómbralo}. Si lo vives, {no estás solo/a}.", opts: [["nómbralo", "compártelo en redes", "ignóralo"], ["no estás solo/a", "aguanta", "no digas nada"]] },
  { s: "Conocer las garantías también es conocer tus {derechos}.", opts: [["derechos", "funciones", "horarios"]] },
  { s: "Una cultura de respeto también se construye con las acciones {cotidianas}.", opts: [["cotidianas", "obligatorias", "extraordinarias"]] }
];

/* ---------- RETO FINAL ---------- */
window.QUIZ_FINAL = [
  { ctx: "Garantías", pj: "p4", q: "Después de buscar orientación, Laura empieza a ser excluida de tareas y escucha comentarios sobre «quién habló».",
    pre: "¿Qué dice el protocolo?",
    o: ["Es normal que el ambiente cambie después de una queja", "Son represalias: debe ponerse en conocimiento, porque las medidas de protección no pueden desmejorar su condición y tiene derecho a su estabilidad", "Laura debería retirar la queja para calmar el ambiente", "Solo aplica si Laura es de planta"], k: 1,
    fb: "La protección frente a represalias es una garantía central del protocolo." },
  { q: "¿En qué plazo deben adoptarse las medidas de protección?", o: ["En las primeras 72 horas desde la queja", "En 15 días hábiles", "Cuando termine la investigación", "Solo si la víctima lo pide por escrito"], k: 0,
    fb: "Las medidas se adoptan en las primeras 72 horas contadas a partir de la queja o denuncia." },
  { q: "¿Cuál de estas acciones revictimiza?", o: ["Explicarle a la persona sus derechos", "Pedirle que cuente los hechos frente al presunto agresor", "Orientarla hacia la ruta", "Cuidar la confidencialidad"], k: 1,
    fb: "La confrontación con el presunto agresor y la repetición del relato son formas de revictimización." },
  { q: "¿A qué correo se envía una queja por acoso laboral o discriminación?", o: ["convivencia@invima.gov.co", "comunicaciones@invima.gov.co", "Al correo del jefe inmediato", "No existe correo"], k: 0,
    fb: "Se diligencia el formato GEHU-FOR1 y se envía a la secretaría del Comité de Convivencia Laboral." },
  { q: "¿Puede conciliarse una queja de acoso sexual en el Comité de Convivencia?", o: ["Sí, siempre", "Sí, si ambas partes aceptan", "No: se traslada de inmediato a Instrucción Disciplinaria, Procuraduría y Fiscalía", "Depende del cargo del agresor"], k: 2,
    fb: "El acoso sexual no es conciliable." },
  { q: "¿Por qué la campaña dice «Si lo vives, no estás solo/a» en lugar de «repórtalo»?", o: ["Porque reportar está prohibido", "Porque la decisión de activar la ruta corresponde a la persona afectada, y presionarla podría revictimizarla", "Porque suena mejor", "Porque no existen rutas"], k: 1,
    fb: "La frase comunica que hay orientación, acompañamiento y garantías disponibles cuando la persona decida buscarlas." }
];

window.MATERIAL = [
  { i: "clock", t: "Corto", d: "Videos de uno o dos minutos y páginas que se leen de un vistazo." },
  { i: "eye", t: "Visual", d: "Personajes, íconos e ilustraciones en lugar de grandes bloques de texto." },
  { i: "users", t: "Cotidiano", d: "Casos hipotéticos basados en situaciones del día a día en el Invima." },
  { i: "puzzle", t: "Práctico", d: "Retos para aplicar lo aprendido, con retroalimentación inmediata." },
  { i: "route", t: "A la mano", d: "La ruta en una página y el protocolo completo, para consultarlos cuando los necesites." }
];


/* Actividades calificables (para el panel y el cierre) */
window.ACTS = [
  { id: "m1-reto", n: "¿Verdadero o falso? · A quién y dónde aplica", m: 1 },
  { id: "m1-tarjetas", n: "Tarjetas · Definiciones del protocolo", m: 1 },
  { id: "m2-casos", n: "Casos para reconocer", m: 2 },
  { id: "m2-relaciona", n: "Relaciona situación y conducta", m: 2 },
  { id: "m3-completa", n: "Completa la ruta", m: 3 },
  { id: "m3-casos", n: "Casos para actuar", m: 3 },
  { id: "m3-relaciona", n: "Relaciona situación e instancia", m: 3 },
  { id: "m4-tarjetas", n: "Tarjetas · Principios", m: 4 },
  { id: "m4-mitos", n: "Mitos y realidades", m: 4 },
  { id: "m5-frases", n: "Completa la frase", m: 5 },
  { id: "final", n: "Reto final", m: 5 }
];
