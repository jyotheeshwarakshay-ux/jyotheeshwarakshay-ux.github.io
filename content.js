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
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Releases", href: "#releases" },
    { label: "Certifications", href: "#certifications" },
    { label: "Research Interests", href: "#research-interests" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    name: "Jyotheeshwar Akshay Ravikumar",
    tagline: "Pharm.D. candidate | Quantitative Systems Pharmacology & Pharmacometrics",
    subtext:
      "Final-year Pharm.D. student focused on mechanistic PK/PD, target-mediated drug disposition (TMDD), and QSP modeling in R.",
    ctaLabel: "View Projects",
    ctaHref: "#projects",
    portrait: "", // optional: path to a headshot, e.g. "assets/portrait.jpg". Leave empty to show the PK-curve graphic instead.
    portraitAlt: "" // alt text for the portrait (defaults to your name)
  },

  about: {
    heading: "About",
    paragraphs: [
      "I am a final-year Pharm.D. candidate at Sri Ramachandra University (SRIHER), Chennai, graduating in August 2027.",
      "My work centers on mechanistic pharmacokinetic/pharmacodynamic (PK/PD) modeling, target-mediated drug disposition (TMDD), and quantitative systems pharmacology (QSP), primarily using R (rxode2, nlmixr2).",
      "Most of my work so far has been on monoclonal antibodies, with denosumab as the main case study. I built a quasi-steady-state TMDD population model and tested how well its parameters can be recovered from PK-only data, reproducing a published identifiability limitation and running a profile-likelihood analysis. I modeled denosumab's effect on bone remodeling through the RANK–RANKL–OPG pathway in a virtual population, and reproduced a platform antibody PBPK model from source to estimate denosumab exposure in bone tissue.",
      "Alongside that, I developed a population PK model of theophylline as a worked model-development example, compared full, quasi-steady-state and Michaelis–Menten TMDD approximations in a simulation study, and built an India-specific minimal PBPK model of nirsevimab for infants.",
      "Every project is public on GitHub, and each release is archived on Zenodo with a DOI, so the code can be inspected and cited. R is my main environment; NONMEM, Simcyp/PBPK, Julia (SciML) and Python/ML are in progress or planned.",
      "My goal is to pursue a PhD in pharmacometrics and quantitative systems pharmacology in Europe. The projects above are the groundwork for that: mechanistic models of monoclonal antibodies, built openly and reproducibly."
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
        link: "https://github.com/jyotheeshwarakshay-ux/Theophylline-popPK",
        linkLabel: "View on GitHub"
      },
      {
        title: "tmdd-approximations",
        description: "Target-mediated drug disposition (TMDD) approximation methods.",
        tags: ["R", "rxode2", "TMDD"],
        link: "https://github.com/jyotheeshwarakshay-ux/tmdd-approximations",
        linkLabel: "View on GitHub"
      },
      {
        title: "denosumab-tmdd-qss",
        description:
          "Denosumab TMDD quasi-steady-state (QSS) parameter-recovery study. Reproduced a published identifiability limitation and ran a profile-likelihood analysis.",
        tags: ["R", "TMDD", "QSS", "Identifiability"],
        link: "https://github.com/jyotheeshwarakshay-ux/denosumab-tmdd-qss",
        linkLabel: "View on GitHub"
      },
      {
        title: "denosumab-qss-tmdd-fragility",
        description:
          "Analysis code for estimation fragility in multi-start profile-likelihood assessment of Kss in a QSS-TMDD model of denosumab.",
        tags: ["R", "TMDD", "QSS", "Profile Likelihood"],
        link: "https://github.com/jyotheeshwarakshay-ux/denosumab-qss-tmdd-fragility",
        linkLabel: "View on GitHub"
      },
      {
        title: "rankl-opg-qsp",
        description:
          "RANKL–OPG bone-remodeling QSP model with virtual-population biomarker simulation.",
        tags: ["R", "QSP", "Virtual Population"],
        link: "https://github.com/jyotheeshwarakshay-ux/rankl-opg-qsp",
        linkLabel: "View on GitHub"
      },
      {
        title: "denosumab-mpbpk",
        description:
          "A from-source reproduction of the Shah & Betts platform antibody PBPK model, applied to denosumab bone-tissue exposure and validated against the published bone ABC benchmark.",
        tags: ["R", "rxode2", "PBPK"],
        link: "https://github.com/jyotheeshwarakshay-ux/denosumab-mpbpk",
        linkLabel: "View on GitHub"
      },
      {
        title: "Nirsevimab-India-mPBPK",
        description:
          "India-specific mPBPK-QSSA-TMDD model of nirsevimab with IAP 2015 growth ontogeny (PharmD flagship project).",
        tags: ["R", "mPBPK", "TMDD"],
        link: "https://github.com/jyotheeshwarakshay-ux/Nirsevimab-India-mPBPK",
        linkLabel: "View on GitHub"
      }
    ]
  },

  // Zenodo-archived software releases, taken from the public ORCID record (type: software).
  // These are code/model releases with DOIs, not journal papers.
  releases: {
    heading: "Software Releases",
    items: [
      {
        title: "Population Pharmacokinetic Model of Theophylline in nlmixr2 (v1.0.0)",
        type: "Software",
        publisher: "Zenodo",
        year: "2026",
        doi: "10.5281/zenodo.23346705"
      },
      {
        title: "Full TMDD, Quasi-Steady-State and Michaelis-Menten Approximations: A Comparative Simulation Study (v1.0.0)",
        type: "Software",
        publisher: "Zenodo",
        year: "2026",
        doi: "10.5281/zenodo.23346923"
      },
      {
        title: "QSS-TMDD Population Pharmacokinetic Model of Denosumab (v1.0.0)",
        type: "Software",
        publisher: "Zenodo",
        year: "2026",
        doi: "10.5281/zenodo.23347032"
      },
      {
        title: "Analysis Code for Estimation Fragility in Multi-Start Profile-Likelihood Assessment of Kss in a QSS-TMDD Model of Denosumab",
        type: "Software",
        publisher: "Zenodo",
        year: "2026",
        doi: "10.5281/zenodo.23347302"
      },
      {
        title: "RANKL–RANK–OPG Bone-Remodeling Quantitative Systems Pharmacology Model (v1.0.0)",
        type: "Software",
        publisher: "Zenodo",
        year: "2026",
        doi: "10.5281/zenodo.23347131"
      },
      {
        title: "Platform Antibody PBPK Model of Denosumab (v1.0.0)",
        type: "Software",
        publisher: "Zenodo",
        year: "2026",
        doi: "10.5281/zenodo.23347217"
      },
      {
        title: "Minimal PBPK Model of Nirsevimab for an Indian Infant Population (v1.0.0)",
        type: "Software",
        publisher: "Zenodo",
        year: "2026",
        doi: "10.5281/zenodo.23347537"
      }
    ]
  },

  certifications: {
    heading: "Certifications",
    items: []
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

  contact: {
    heading: "Contact",
    blurb: "",
    email: "", // [PLACEHOLDER] no public email address provided yet
    links: [
      { label: "GitHub", href: "https://github.com/jyotheeshwarakshay-ux", icon: "github" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jyotheeshwar-akshay/", icon: "linkedin" },
      { label: "ORCID", href: "https://orcid.org/0009-0008-1481-4140", icon: "orcid" }
      // Google Scholar link removed — no profile yet. Re-add as:
      // { label: "Google Scholar", href: "https://scholar.google.com/citations?user=...", icon: "scholar" }
    ]
  }
};
