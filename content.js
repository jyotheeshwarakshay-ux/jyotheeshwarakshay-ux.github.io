/**
 * All site content lives here. Edit this file to update the portfolio —
 * do not hardcode content in index.html.
 *
 * Fields marked REPLACE_ME or [PLACEHOLDER] are not yet provided and must
 * be filled in before the site is considered final. Nothing below is
 * fabricated: empty/placeholder fields were left that way deliberately.
 */
window.SITE_CONTENT = {
  meta: {
    title: "Jyotheeshwar Akshay Ravikumar — Portfolio",
    description:
      "Pharm.D. candidate focused on quantitative systems pharmacology and pharmacometrics — mechanistic PK/PD, TMDD, and QSP modeling in R.",
    ogImage: "", // optional: URL to a social preview image
    siteUrl: "", // optional: canonical URL once deployed, e.g. https://username.github.io/portfolio/
    author: "Jyotheeshwar Akshay Ravikumar"
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Career Vision", href: "#career-vision" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Publications", href: "#publications" },
    { label: "Certifications", href: "#certifications" },
    { label: "Clinical Experience", href: "#clinical-experience" },
    { label: "Research Interests", href: "#research-interests" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    name: "Jyotheeshwar Akshay Ravikumar",
    tagline: "Pharm.D. candidate | Quantitative Systems Pharmacology & Pharmacometrics",
    subtext:
      "Final-year Pharm.D. student focused on mechanistic PK/PD, target-mediated drug disposition (TMDD), and QSP modeling in R.",
    ctaLabel: "View Projects",
    ctaHref: "#projects"
  },

  about: {
    heading: "About",
    paragraphs: [
      "I am a final-year Pharm.D. candidate at Sri Ramachandra University (SRIHER), Chennai, graduating in August 2027.",
      "My work centers on mechanistic pharmacokinetic/pharmacodynamic (PK/PD) modeling, target-mediated drug disposition (TMDD), and quantitative systems pharmacology (QSP), primarily using R (rxode2, nlmixr2)."
    ]
  },

  careerVision: {
    heading: "Career Vision",
    paragraphs: [
      "[PLACEHOLDER — add your career vision statement here.]"
    ]
  },

  education: {
    heading: "Education",
    items: [
      {
        degree: "Pharm.D. (Doctor of Pharmacy)",
        institution: "Sri Ramachandra University (SRIHER)",
        location: "Chennai, India",
        period: "Final year — expected graduation August 2027",
        details: ""
      }
    ]
  },

  skills: {
    heading: "Skills",
    groups: [
      {
        category: "Modeling & Programming",
        items: ["R", "rxode2", "nlmixr2"]
      },
      {
        category: "Pharmacometrics",
        items: [
          "Population PK",
          "Target-mediated drug disposition (TMDD)",
          "Quantitative systems pharmacology (QSP)",
          "Profile-likelihood identifiability analysis"
        ]
      },
      {
        category: "Other",
        items: ["Git", "Scientific writing"]
      },
      {
        category: "In Progress / Planned",
        items: ["NONMEM", "Simcyp / PBPK", "Julia (SciML)", "Python / ML"]
      }
    ]
  },

  projects: {
    heading: "Projects",
    items: [
      {
        title: "Theophylline-popPK",
        description: "Population PK tutorial model.",
        tags: ["R", "rxode2", "Population PK"],
        link: "https://github.com/REPLACE_ME/Theophylline-popPK",
        linkLabel: "View on GitHub"
      },
      {
        title: "tmdd-approximations",
        description: "Target-mediated drug disposition (TMDD) approximation methods.",
        tags: ["R", "rxode2", "TMDD"],
        link: "https://github.com/REPLACE_ME/tmdd-approximations",
        linkLabel: "View on GitHub"
      },
      {
        title: "denosumab-tmdd-qss",
        description:
          "Denosumab TMDD quasi-steady-state (QSS) parameter-recovery study. Reproduced a published identifiability limitation and ran a profile-likelihood analysis.",
        tags: ["R", "TMDD", "QSS", "Identifiability"],
        link: "https://github.com/REPLACE_ME/denosumab-tmdd-qss",
        linkLabel: "View on GitHub"
      },
      {
        title: "rankl-opg-qsp",
        description:
          "RANKL–OPG bone-remodeling QSP model with virtual-population biomarker simulation.",
        tags: ["R", "QSP", "Virtual Population"],
        link: "https://github.com/REPLACE_ME/rankl-opg-qsp",
        linkLabel: "View on GitHub"
      }
    ]
  },

  publications: {
    heading: "Publications",
    items: [
      {
        title: "Manuscript in preparation",
        authors: "",
        venue: "In preparation",
        link: "",
        linkLabel: ""
      }
    ]
  },

  certifications: {
    heading: "Certifications",
    items: []
  },

  clinicalExperience: {
    heading: "Clinical Experience",
    items: [
      {
        role: "[PLACEHOLDER]",
        organization: "[PLACEHOLDER]",
        location: "[PLACEHOLDER]",
        period: "[PLACEHOLDER]",
        description: "[PLACEHOLDER — add clinical experience details.]"
      }
    ]
  },

  researchInterests: {
    heading: "Research Interests",
    items: [
      "Mechanistic PK/PD modeling",
      "Target-mediated drug disposition (TMDD)",
      "Quantitative systems pharmacology (QSP)",
      "Pharmacometrics"
    ]
  },

  roadmap: {
    heading: "Roadmap",
    items: [
      {
        period: "[PLACEHOLDER]",
        title: "[PLACEHOLDER]",
        description: "[PLACEHOLDER — add roadmap milestones.]"
      }
    ]
  },

  contact: {
    heading: "Contact",
    blurb: "",
    email: "REPLACE_ME@example.com",
    links: [
      { label: "GitHub", href: "https://github.com/REPLACE_ME", icon: "github" },
      { label: "LinkedIn", href: "https://linkedin.com/in/REPLACE_ME", icon: "linkedin" },
      { label: "ORCID", href: "https://orcid.org/REPLACE_ME", icon: "orcid" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=REPLACE_ME", icon: "scholar" }
    ]
  }
};
