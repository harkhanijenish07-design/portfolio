/* ==========================================================
   EDIT YOUR PROJECTS HERE.
   Each object becomes a card in the Projects section.
   Add GitHub or demo links by filling in the `links` list.
   ========================================================== */
const projects = [
  {
    title: "TradeNexus",
    subtitle: "Stock Brokerage Management System",
    points: [
      "Designed and managed the database layer and backend logic for a multi-module platform (dashboard, stock search, portfolio, watchlist), keeping data consistent across modules.",
      "Fixed calculation issues in the portfolio module (holdings, profit/loss, buy/sell) and wrote test cases for edge scenarios such as zero holdings and partial sells.",
      "Maintained a centralized architecture supporting real-time data updates on the dashboard.",
    ],
    stack: "Database, Backend, Testing",
    links: [
      // { label: "Code", url: "https://github.com/YOUR-USERNAME/tradenexus" },
    ],
  },
  {
    title: "DocuFlow AI",
    subtitle: "AI Document Processing and Workflow Automation",
    points: [
      "Developed backend APIs and the database for a system that processes PDFs and images (invoices, resumes, KYC documents).",
      "Troubleshot and validated data extraction and classification accuracy across document types, and tested endpoints in Postman for reliability.",
      "Automated end-to-end data routing to email, Slack, Google Sheets and databases by configuring and maintaining the integration pipeline.",
    ],
    stack: "APIs, Databases, Postman",
    links: [
      // { label: "Code", url: "https://github.com/YOUR-USERNAME/docuflow-ai" },
    ],
  },
];

/* ---------- Render project cards ---------- */
const carousel = document.getElementById("carousel");

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

projects.forEach((p) => {
  const card = el("article", "card");
  card.appendChild(el("h3", "", p.title));
  card.appendChild(el("p", "subtitle", p.subtitle));

  const list = el("ul", "card-points");
  p.points.forEach((pt) => list.appendChild(el("li", "", pt)));
  card.appendChild(list);

  card.appendChild(el("p", "stack", p.stack));

  if (p.links && p.links.length) {
    const wrap = el("div", "card-links");
    p.links.forEach((l) => {
      const a = el("a", "", l.label);
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener";
      wrap.appendChild(a);
    });
    card.appendChild(wrap);
  }
  carousel.appendChild(card);
});

/* ---------- Carousel arrows (hidden when everything already fits) ---------- */
const arrows = document.getElementById("arrows");
const step = () => Math.min(carousel.clientWidth * 0.85, 460);

function updateArrows() {
  arrows.hidden = carousel.scrollWidth <= carousel.clientWidth + 2;
}
updateArrows();
window.addEventListener("resize", updateArrows);

document.getElementById("prev").addEventListener("click", () =>
  carousel.scrollBy({ left: -step(), behavior: "smooth" })
);
document.getElementById("next").addEventListener("click", () =>
  carousel.scrollBy({ left: step(), behavior: "smooth" })
);
