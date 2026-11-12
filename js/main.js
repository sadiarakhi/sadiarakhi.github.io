/* ============================================================================
   MAIN SCRIPT — builds the page from js/data.js
   ----------------------------------------------------------------------------
   You normally do not need to edit this file. Change your content in
   js/data.js and the design in css/style.css.
   ========================================================================== */
(function () {
  "use strict";
  // PORTFOLIO is defined in js/data.js, which loads before this file
  const D = typeof PORTFOLIO !== "undefined" ? PORTFOLIO : null;
  if (!D) return;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  // Escape text before putting it into HTML
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Small inline icons (no external icon library needed) ---------- */
  const ICON_PATHS = {
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    server: '<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.4 8.5-8 9-4.6-.5-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    plug: '<path d="M9 2v6M15 2v6"/><path d="M6 8h12v3a6 6 0 0 1-12 0z"/><path d="M12 17v5"/>',
    cloud: '<path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9.5 4.3 4.3 0 0 0 7 18z"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    tool: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',
    github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>',
    cap: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  };
  const icon = (name, cls = "icon") =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name] || ICON_PATHS.code}</svg>`;

  /* ---------- Simple text bindings: <element data-bind="name"> ---------- */
  const binds = { name: D.personal.name, initials: D.personal.initials, tagline: D.personal.tagline, availability: D.contact.availability };
  $$("[data-bind]").forEach((el) => { el.textContent = binds[el.dataset.bind] ?? ""; });
  document.title = `${D.personal.name} — ${D.personal.roles[0] || D.personal.title}`;
  $$("[data-cv]").forEach((a) => { a.href = D.contact.cv; });
  $$('[data-link="github"]').forEach((a) => { a.href = D.contact.github; a.innerHTML = icon("github"); });
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Section headings ---------- */
  $$("[data-section]").forEach((el) => {
    const s = D.sections[el.dataset.section] || {};
    el.innerHTML = `<p class="kicker">${esc(s.kicker)}</p><h2 class="section__title">${esc(s.title)}</h2>`;
  });

  /* ---------- Hero: rotating roles ---------- */
  (function rotateRoles() {
    const el = $("#roleText"); const roles = D.personal.roles.length ? D.personal.roles : [D.personal.title];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || roles.length === 1) { el.textContent = roles[0]; return; }
    let r = 0, i = 0, deleting = false;
    (function tick() {
      const word = roles[r];
      el.textContent = word.slice(0, i);
      if (!deleting && i < word.length) i++;
      else if (!deleting) { deleting = true; return setTimeout(tick, 1800); }
      else if (i > 0) i--;
      else { deleting = false; r = (r + 1) % roles.length; }
      setTimeout(tick, deleting ? 35 : 70);
    })();
  })();

  /* ---------- Hero: decorative code card ---------- */
  $("#codeCard").innerHTML = [
    '<span class="c-k">const</span> express = <span class="c-f">require</span>(<span class="c-s">"express"</span>);',
    '<span class="c-k">const</span> app = <span class="c-f">express</span>();',
    "",
    'app.<span class="c-f">post</span>(<span class="c-s">"/api/orders/checkout"</span>,',
    '  requireAuth, <span class="c-k">async</span> (req, res) =&gt; {',
    '  <span class="c-c">// prices and stock come from the database</span>',
    '  <span class="c-k">const</span> order = <span class="c-k">await</span> <span class="c-f">placeOrder</span>(req.user);',
    '  res.<span class="c-f">status</span>(<span class="c-n">201</span>).<span class="c-f">json</span>({ success: <span class="c-k">true</span>, order });',
    "});",
  ].join("\n");

  /* ---------- Hero stats ---------- */
  $("#heroStats").innerHTML = D.stats.map((s) =>
    `<li class="reveal"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></li>`).join("");

  /* ---------- About ---------- */
  $("#aboutPhoto").innerHTML = D.personal.photo
    ? `<img src="${esc(D.personal.photo)}" alt="Photo of ${esc(D.personal.name)}">`
    : `<div class="avatar" aria-hidden="true">${esc(D.personal.initials)}</div>`;
  $("#aboutText").innerHTML = (D.personal.headline ? `<p class="about__headline">${esc(D.personal.headline)}</p>` : "")
    + D.personal.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#aboutFacts").innerHTML = D.personal.highlights.map((h) =>
    `<li><span>${esc(h.label)}</span><strong>${esc(h.value)}</strong></li>`).join("");

  /* ---------- Skills ---------- */
  $("#skillsGrid").innerHTML = D.skills.map((g) => `
    <article class="skill-card reveal">
      <div class="skill-card__head">${icon(g.icon, "icon icon--badge")}<h3>${esc(g.group)}</h3></div>
      <ul class="chips">${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
    </article>`).join("");

  /* ---------- Projects ---------- */
  const projects = [...D.projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  $("#projectList").innerHTML = projects.map(projectHTML).join("");

  function projectHTML(p, idx) {
    const media = p.images && p.images.length
      ? `<figure class="gallery">
           <button class="gallery__main" data-zoom="${esc(p.images[0].src)}" data-caption="${esc(p.name + " — " + p.images[0].caption)}">
             <img src="${esc(p.images[0].src)}" alt="${esc(p.name + " — " + p.images[0].caption)}" loading="lazy">
           </button>
           ${p.images.length > 1 ? `<div class="gallery__thumbs" role="tablist" aria-label="${esc(p.name)} screenshots">
             ${p.images.map((im, i) => `<button class="${i === 0 ? "is-active" : ""}" data-src="${esc(im.src)}" data-caption="${esc(im.caption)}" aria-label="${esc(im.caption)}">
               <img src="${esc(im.src)}" alt="" loading="lazy"><span>${esc(im.caption)}</span></button>`).join("")}
           </div>` : ""}
         </figure>`
      : `<div class="cover" style="--from:${esc(p.cover?.from || "#5466C4")};--to:${esc(p.cover?.to || "#14193F")}">
           ${icon(p.cover?.icon || "code", "icon cover__icon")}
           <span class="cover__name">${esc(p.name)}</span>
           <span class="cover__sub">${esc(p.subtitle)}</span>
         </div>`;
    const links = `
      ${p.github ? `<a class="btn btn--dark" href="${esc(p.github)}" target="_blank" rel="noopener">${icon("github")} Source code</a>` : ""}
      ${p.live ? `<a class="btn btn--gold" href="${esc(p.live)}" target="_blank" rel="noopener">${icon("external")} Live demo</a>` : ""}`;
    return `
      <article class="project ${p.featured ? "project--featured" : ""} reveal" id="project-${idx}">
        <div class="project__media">${media}</div>
        <div class="project__body">
          <p class="project__badge">${esc(p.badge)}</p>
          <h3 class="project__name">${esc(p.name)}</h3>
          <p class="project__subtitle">${esc(p.subtitle)}</p>
          ${p.meta?.length ? `<dl class="project__meta">${p.meta.map((x) => `<div><dt>${esc(x.label)}</dt><dd>${esc(x.value)}</dd></div>`).join("")}</dl>` : ""}
          <p class="project__summary">${esc(p.summary)}</p>
          ${p.problem ? `<p class="project__problem">${esc(p.problem)}</p>` : ""}
          ${p.stats?.length ? `<ul class="project__stats">${p.stats.map((s) => `<li><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></li>`).join("")}</ul>` : ""}
          <details class="project__features" ${p.featured ? "open" : ""}>
            <summary>Key features</summary>
            <ul>${p.features.map((f) => `<li>${icon("check")}<span>${esc(f)}</span></li>`).join("")}</ul>
          </details>
          <ul class="chips chips--tech">${p.tech.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
          <div class="project__links">${links}</div>
          ${p.live && p.liveNote ? `<p class="project__note">${esc(p.liveNote)}</p>` : ""}
        </div>
      </article>`;
  }

  // Screenshot thumbnails and zoom
  $$(".project").forEach((card) => {
    const main = $(".gallery__main", card); if (!main) return;
    $$(".gallery__thumbs button", card).forEach((b) => b.addEventListener("click", () => {
      $$(".gallery__thumbs button", card).forEach((x) => x.classList.remove("is-active"));
      b.classList.add("is-active");
      const img = $("img", main); img.src = b.dataset.src; img.alt = b.dataset.caption;
      main.dataset.zoom = b.dataset.src; main.dataset.caption = b.dataset.caption;
    }));
  });
  const lb = $("#lightbox");
  document.addEventListener("click", (e) => {
    const z = e.target.closest("[data-zoom]");
    if (z) { $("img", lb).src = z.dataset.zoom; $("img", lb).alt = z.dataset.caption; $(".lightbox__caption", lb).textContent = z.dataset.caption; lb.hidden = false; $(".lightbox__close", lb).focus(); }
    else if (e.target === lb || e.target.closest(".lightbox__close")) lb.hidden = true;
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.hidden = true; });

  /* ---------- Education ---------- */
  $("#educationList").innerHTML = D.education.map((ed) => `
    <li class="timeline__item reveal">
      <span class="timeline__dot">${icon("cap")}</span>
      <div class="timeline__card">
        <div class="timeline__top">
          <h3>${esc(ed.degree)}</h3>
          ${ed.status ? `<span class="pill">${esc(ed.status)}</span>` : ""}
        </div>
        <p class="timeline__place">${esc(ed.institution)}${ed.location ? ` · ${esc(ed.location)}` : ""}</p>
        ${ed.department ? `<p class="timeline__dept">${esc(ed.department)}</p>` : ""}
        ${ed.period ? `<p class="timeline__period">${esc(ed.period)}</p>` : ""}
        ${ed.details?.length ? `<ul>${ed.details.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
      </div>
    </li>`).join("");

  /* ---------- Contact ---------- */
  const c = D.contact;
  const contactItems = [
    c.email && { icon: "mail", label: "Email", value: c.email, href: `mailto:${c.email}` },
    c.phone && c.showPhoneOnWebsite && { icon: "phone", label: "Phone", value: c.phone, href: `tel:${c.phone.replace(/[^\d+]/g, "")}` },
    c.github && { icon: "github", label: "GitHub", value: c.github.replace(/^https?:\/\//, ""), href: c.github, ext: true },
    c.linkedin && { icon: "linkedin", label: "LinkedIn", value: c.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: c.linkedin, ext: true },
    D.personal.location && { icon: "pin", label: "Location", value: D.personal.location },
    c.cv && { icon: "download", label: "Curriculum vitae", value: "Download CV (PDF)", href: c.cv, download: true },
  ].filter(Boolean);
  $("#contactList").innerHTML = contactItems.map((i) => `
    <li>${icon(i.icon, "icon icon--badge")}<div><span>${esc(i.label)}</span>
      ${i.href ? `<a href="${esc(i.href)}" ${i.ext ? 'target="_blank" rel="noopener"' : ""} ${i.download ? "download" : ""}>${esc(i.value)}</a>` : `<strong>${esc(i.value)}</strong>`}
    </div></li>`).join("");

  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target; const hint = $("#formHint");
    if (!f.checkValidity()) { hint.textContent = "Please fill in your name, a valid email and a message."; f.reportValidity(); return; }
    const subject = encodeURIComponent(`Portfolio message from ${f.name.value}`);
    const body = encodeURIComponent(`${f.message.value}\n\n— ${f.name.value} (${f.email.value})`);
    window.location.href = `mailto:${c.email}?subject=${subject}&body=${body}`;
    hint.textContent = "Your email app is opening with the message ready to send.";
  });

  /* ---------- Navigation: mobile menu, scroll state, active link ---------- */
  const nav = $("#nav"), toggle = $("#navToggle"), links = $("#navLinks");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open); toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  $$("a", links).forEach((a) => a.addEventListener("click", () => { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }));
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 20);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  const sectionLinks = $$('a[href^="#"]', links);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      sectionLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${en.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => spy.observe(s));

  /* ---------- Reveal-on-scroll animation ---------- */
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); reveal.unobserve(en.target); } });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((el, i) => { el.style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`; reveal.observe(el); });
})();
