(function () {
  "use strict";

  var content = window.SITE_CONTENT;
  if (!content) {
    console.error("content.js failed to load — SITE_CONTENT is undefined.");
    return;
  }

  var ICONS = {
    github:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.02 1.76 2.68 1.25 3.34.96.1-.75.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.5 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56C20.71 21.44 24 17.13 24 12.03 24 5.66 18.85.5 12 .5z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    orcid:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM7.37 4.7a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8zM6.37 8.66h2v10.34h-2V8.66zm5.36 0h4.03c3.85 0 5.54 2.75 5.54 5.17 0 2.65-2.07 5.17-5.51 5.17h-4.06V8.66zm2 1.8v6.75h1.87c3.15 0 3.85-2.4 3.85-3.38 0-1.83-1.16-3.37-3.94-3.37h-1.78z"/></svg>',
    scholar:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1L0 9.5l4.36 2.94V19l7.64 4 7.64-4v-6.56L22 11.1V17h1.5V9.5L12 1zm0 2.47l8.16 5.53L12 14.53 3.84 9.5 12 3.47zM6 13.6l6 4.02 6-4.02v3.53l-6 3.15-6-3.15V13.6z"/></svg>',
    email:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm18.4 2H3.6L12 12.5 20.4 6zM3 7.4V18h18V7.4l-8.4 6.6a1 1 0 0 1-1.2 0L3 7.4z"/></svg>'
  };

  function el(tag, opts) {
    var node = document.createElement(tag);
    opts = opts || {};
    if (opts.className) node.className = opts.className;
    if (opts.text) node.textContent = opts.text;
    if (opts.html) node.innerHTML = opts.html;
    if (opts.attrs) {
      Object.keys(opts.attrs).forEach(function (k) {
        node.setAttribute(k, opts.attrs[k]);
      });
    }
    return node;
  }

  function isNonEmpty(val) {
    if (Array.isArray(val)) return val.length > 0;
    if (typeof val === "string") return val.trim().length > 0;
    return !!val;
  }

  // ---- Head / SEO ----
  function renderMeta() {
    var m = content.meta || {};
    if (m.title) document.title = m.title;
    setMeta("name", "description", m.description);
    setMeta("name", "author", m.author);
    setMeta("property", "og:title", m.title);
    setMeta("property", "og:description", m.description);
    if (m.ogImage) setMeta("property", "og:image", m.ogImage);
    if (m.siteUrl) {
      setMeta("property", "og:url", m.siteUrl);
      var canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", m.siteUrl);
    }
  }

  function setMeta(attr, key, value) {
    if (!isNonEmpty(value)) return;
    var selector = 'meta[' + attr + '="' + key + '"]';
    var tag = document.querySelector(selector);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(attr, key);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", value);
  }

  // ---- Nav ----
  function renderNav() {
    var list = document.getElementById("navList");
    (content.nav || []).forEach(function (item) {
      var li = el("li", { className: "nav__item" });
      var a = el("a", { className: "nav__link", text: item.label, attrs: { href: item.href } });
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  // ---- Hero ----
  function renderHero() {
    var h = content.hero || {};
    var section = document.getElementById("hero");
    if (!section) return;
    var wrap = el("div", { className: "hero__inner" });
    if (isNonEmpty(h.name)) wrap.appendChild(el("h1", { className: "hero__name", text: h.name, attrs: { id: "hero-name" } }));
    if (isNonEmpty(h.tagline)) wrap.appendChild(el("p", { className: "hero__tagline", text: h.tagline }));
    if (isNonEmpty(h.subtext)) wrap.appendChild(el("p", { className: "hero__subtext", text: h.subtext }));
    if (isNonEmpty(h.ctaLabel) && isNonEmpty(h.ctaHref)) {
      wrap.appendChild(el("a", { className: "btn btn--primary", text: h.ctaLabel, attrs: { href: h.ctaHref } }));
    }
    section.appendChild(wrap);
  }

  // ---- Generic section header ----
  function sectionHeading(container, heading) {
    if (isNonEmpty(heading)) {
      container.appendChild(el("h2", { className: "section__heading", text: heading }));
    }
  }

  function sectionInner(section) {
    var inner = el("div", { className: "section__inner" });
    section.appendChild(inner);
    return inner;
  }

  // ---- About / Career Vision (paragraph sections) ----
  function renderParagraphSection(id, data) {
    var section = document.getElementById(id);
    if (!section || !data) return;
    var inner = sectionInner(section);
    sectionHeading(inner, data.heading);
    (data.paragraphs || []).forEach(function (p) {
      if (isNonEmpty(p)) inner.appendChild(el("p", { className: "prose", text: p }));
    });
  }

  // ---- Education ----
  function renderEducation() {
    var data = content.education;
    var section = document.getElementById("education");
    if (!section || !data) return;
    var inner = sectionInner(section);
    sectionHeading(inner, data.heading);
    var list = el("div", { className: "card-list" });
    (data.items || []).forEach(function (item) {
      var card = el("article", { className: "card" });
      if (isNonEmpty(item.degree)) card.appendChild(el("h3", { className: "card__title", text: item.degree }));
      var metaBits = [item.institution, item.location].filter(isNonEmpty).join(" · ");
      if (isNonEmpty(metaBits)) card.appendChild(el("p", { className: "card__meta", text: metaBits }));
      if (isNonEmpty(item.period)) card.appendChild(el("p", { className: "card__period", text: item.period }));
      if (isNonEmpty(item.details)) card.appendChild(el("p", { className: "card__body", text: item.details }));
      list.appendChild(card);
    });
    inner.appendChild(list);
  }

  // ---- Skills ----
  function renderSkills() {
    var data = content.skills;
    var section = document.getElementById("skills");
    if (!section || !data) return;
    var inner = sectionInner(section);
    sectionHeading(inner, data.heading);
    var groups = el("div", { className: "skills-groups" });
    (data.groups || []).forEach(function (group) {
      var g = el("div", { className: "skills-group" });
      if (isNonEmpty(group.category)) g.appendChild(el("h3", { className: "skills-group__title", text: group.category }));
      var tags = el("ul", { className: "tag-list", attrs: { "aria-label": group.category || "Skills" } });
      (group.items || []).forEach(function (skill) {
        var li = el("li", { className: "tag", text: skill });
        tags.appendChild(li);
      });
      g.appendChild(tags);
      groups.appendChild(g);
    });
    inner.appendChild(groups);
  }

  // ---- Projects ----
  function renderProjects() {
    var data = content.projects;
    var section = document.getElementById("projects");
    if (!section || !data) return;
    var inner = sectionInner(section);
    sectionHeading(inner, data.heading);
    var grid = el("div", { className: "card-grid" });
    (data.items || []).forEach(function (proj) {
      var card = el("article", { className: "card card--hover" });
      if (isNonEmpty(proj.title)) card.appendChild(el("h3", { className: "card__title", text: proj.title }));
      if (isNonEmpty(proj.description)) card.appendChild(el("p", { className: "card__body", text: proj.description }));
      if (isNonEmpty(proj.tags)) {
        var tagList = el("ul", { className: "tag-list tag-list--compact" });
        proj.tags.forEach(function (t) {
          tagList.appendChild(el("li", { className: "tag tag--small", text: t }));
        });
        card.appendChild(tagList);
      }
      if (isNonEmpty(proj.link)) {
        card.appendChild(
          el("a", {
            className: "card__link",
            text: proj.linkLabel || "View project",
            attrs: { href: proj.link, target: "_blank", rel: "noopener noreferrer" }
          })
        );
      }
      grid.appendChild(card);
    });
    inner.appendChild(grid);
  }

  // ---- Publications ----
  function renderPublications() {
    var data = content.publications;
    var section = document.getElementById("publications");
    if (!section || !data) return;
    var inner = sectionInner(section);
    sectionHeading(inner, data.heading);
    var list = el("div", { className: "card-list" });
    (data.items || []).forEach(function (pub) {
      var card = el("article", { className: "card" });
      if (isNonEmpty(pub.title)) card.appendChild(el("h3", { className: "card__title", text: pub.title }));
      if (isNonEmpty(pub.authors)) card.appendChild(el("p", { className: "card__meta", text: pub.authors }));
      if (isNonEmpty(pub.venue)) card.appendChild(el("p", { className: "card__period", text: pub.venue }));
      if (isNonEmpty(pub.link)) {
        card.appendChild(
          el("a", {
            className: "card__link",
            text: pub.linkLabel || "View publication",
            attrs: { href: pub.link, target: "_blank", rel: "noopener noreferrer" }
          })
        );
      }
      list.appendChild(card);
    });
    inner.appendChild(list);
  }

  // ---- Certifications ----
  function renderCertifications() {
    var data = content.certifications;
    var section = document.getElementById("certifications");
    if (!section || !data) return;
    if (!isNonEmpty(data.items)) return; // omit section entirely if empty
    var inner = sectionInner(section);
    sectionHeading(inner, data.heading);
    var list = el("div", { className: "card-list" });
    data.items.forEach(function (cert) {
      var card = el("article", { className: "card" });
      if (isNonEmpty(cert.name)) card.appendChild(el("h3", { className: "card__title", text: cert.name }));
      var metaBits = [cert.issuer, cert.year].filter(isNonEmpty).join(" · ");
      if (isNonEmpty(metaBits)) card.appendChild(el("p", { className: "card__meta", text: metaBits }));
      if (isNonEmpty(cert.link)) {
        card.appendChild(
          el("a", { className: "card__link", text: "View credential", attrs: { href: cert.link, target: "_blank", rel: "noopener noreferrer" } })
        );
      }
      list.appendChild(card);
    });
    inner.appendChild(list);
  }

  // ---- Clinical Experience ----
  function renderClinicalExperience() {
    var data = content.clinicalExperience;
    var section = document.getElementById("clinical-experience");
    if (!section || !data) return;
    var inner = sectionInner(section);
    sectionHeading(inner, data.heading);
    var list = el("div", { className: "card-list" });
    (data.items || []).forEach(function (item) {
      var card = el("article", { className: "card" });
      if (isNonEmpty(item.role)) card.appendChild(el("h3", { className: "card__title", text: item.role }));
      var metaBits = [item.organization, item.location].filter(isNonEmpty).join(" · ");
      if (isNonEmpty(metaBits)) card.appendChild(el("p", { className: "card__meta", text: metaBits }));
      if (isNonEmpty(item.period)) card.appendChild(el("p", { className: "card__period", text: item.period }));
      if (isNonEmpty(item.description)) card.appendChild(el("p", { className: "card__body", text: item.description }));
      list.appendChild(card);
    });
    inner.appendChild(list);
  }

  // ---- Research Interests ----
  function renderResearchInterests() {
    var data = content.researchInterests;
    var section = document.getElementById("research-interests");
    if (!section || !data) return;
    var inner = sectionInner(section);
    sectionHeading(inner, data.heading);
    var tags = el("ul", { className: "tag-list" });
    (data.items || []).forEach(function (interest) {
      tags.appendChild(el("li", { className: "tag", text: interest }));
    });
    inner.appendChild(tags);
  }

  // ---- Roadmap ----
  function renderRoadmap() {
    var data = content.roadmap;
    var section = document.getElementById("roadmap");
    if (!section || !data) return;
    var inner = sectionInner(section);
    sectionHeading(inner, data.heading);
    var list = el("ol", { className: "timeline" });
    (data.items || []).forEach(function (item) {
      var li = el("li", { className: "timeline__item" });
      if (isNonEmpty(item.period)) li.appendChild(el("span", { className: "timeline__period", text: item.period }));
      if (isNonEmpty(item.title)) li.appendChild(el("h3", { className: "timeline__title", text: item.title }));
      if (isNonEmpty(item.description)) li.appendChild(el("p", { className: "timeline__body", text: item.description }));
      list.appendChild(li);
    });
    inner.appendChild(list);
  }

  // ---- Contact ----
  function renderContact() {
    var data = content.contact;
    var section = document.getElementById("contact");
    if (!section || !data) return;
    var inner = sectionInner(section);
    sectionHeading(inner, data.heading);
    if (isNonEmpty(data.blurb)) inner.appendChild(el("p", { className: "prose", text: data.blurb }));

    if (isNonEmpty(data.email)) {
      var mailto = el("a", {
        className: "btn btn--primary",
        text: data.email,
        attrs: { href: "mailto:" + data.email }
      });
      inner.appendChild(mailto);
    }

    var iconList = el("ul", { className: "icon-list" });
    (data.links || []).forEach(function (link) {
      if (!isNonEmpty(link.href)) return;
      var li = el("li");
      var a = el("a", {
        className: "icon-link",
        html: (ICONS[link.icon] || "") + '<span class="sr-only">' + (link.label || "") + "</span>",
        attrs: { href: link.href, target: "_blank", rel: "noopener noreferrer", "aria-label": link.label || "" }
      });
      li.appendChild(a);
      iconList.appendChild(li);
    });
    inner.appendChild(iconList);
  }

  // ---- Footer ----
  function renderFooter() {
    var footer = document.querySelector(".site-footer p");
    if (!footer) return;
    var name = (content.hero && content.hero.name) || (content.meta && content.meta.author) || "";
    var year = new Date().getFullYear();
    footer.textContent = (isNonEmpty(name) ? name + " · " : "") + "© " + year;
  }

  // ---- Behavior: nav toggle, smooth scroll active state, back-to-top, theme ----
  function setupNavToggle() {
    var toggle = document.getElementById("navToggle");
    var list = document.getElementById("navList");
    if (!toggle || !list) return;
    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("nav__list--open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    list.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        list.classList.remove("nav__list--open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function setupBackToTop() {
    var btn = document.getElementById("backToTop");
    if (!btn) return;
    window.addEventListener("scroll", function () {
      btn.classList.toggle("back-to-top--visible", window.scrollY > 500);
    });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function setupThemeToggle() {
    var btn = document.getElementById("themeToggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var isDark = document.documentElement.classList.toggle("theme-dark");
      btn.setAttribute("aria-pressed", isDark ? "true" : "false");
      btn.querySelector("span[aria-hidden]").textContent = isDark ? "☀️" : "🌙";
    });
  }

  function setupActiveNavHighlight() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav__link"));
    if (!links.length) return;
    var sections = links
      .map(function (link) {
        var id = link.getAttribute("href").replace("#", "");
        return document.getElementById(id);
      })
      .filter(Boolean);

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.id;
            links.forEach(function (link) {
              link.classList.toggle("nav__link--active", link.getAttribute("href") === "#" + id);
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach(function (s) {
      observer.observe(s);
    });
  }

  function init() {
    renderMeta();
    renderNav();
    renderHero();
    renderParagraphSection("about", content.about);
    renderParagraphSection("career-vision", content.careerVision);
    renderEducation();
    renderSkills();
    renderProjects();
    renderPublications();
    renderCertifications();
    renderClinicalExperience();
    renderResearchInterests();
    renderRoadmap();
    renderContact();
    renderFooter();

    setupNavToggle();
    setupBackToTop();
    setupThemeToggle();
    setupActiveNavHighlight();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
