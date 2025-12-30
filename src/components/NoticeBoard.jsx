import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  X,
  Search,
  Mail,
  Copy,
  ExternalLink,
  Printer
} from "lucide-react";

export default function NoticeBoardPage() {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("nb:dark") === "1";
    } catch (e) {
      return false;
    }
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const modalRef = useRef(null);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };


  useEffect(() => {
    document.documentElement.classList.toggle("nb-dark", dark);
    try {
      localStorage.setItem("nb:dark", dark ? "1" : "0");
    } catch (e) { }
  }, [dark]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && modalOpen) setModalOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  const quickLinks = [
    { label: "MLA Login", href: "https://mpvidhansabha.nic.in/evidhan.pdf" },
    { label: "प्रक्रियाओं संबंधी प्रपत्र", to: "/forms" },
    { label: "प्रश्नों के पूर्ण उत्तर", to: "/full-answers" },
    { label: "लंबित आश्वासन", to: "/lambitashwasan" },
    { label: "स्वेच्छानुदान", to: "/grant-list" },
    { label: "निविदा", to: "/niveda" },
    { label: "IFMIS", href: "/misc/IFMSlogin.pdf" },
    { label: "NeVA", href: "https://www.neva.gov.in/Home/NeVA" },
    { label: "@gov.in", href: "https://email.gov.in/" }
  ];

  const logos = [
    { alt: "Lok Sabha", src: "/galleries/loksabah-logo.png", href: "https://sansad.in/ls" },
    { alt: "Rajya Sabha", src: "/galleries/rajyasabha.jpg", href: "https://sansad.in/rs" },
    { alt: "Supreme Court of India", src: "/galleries/SCI.png", href: "https://www.sci.gov.in/" },
    { alt: "High Court", src: "/galleries/HCI.png", href: "https://mphc.gov.in" },
    { alt: "Legislative Body", src: "/galleries/legisbody.png", href: "https://sansad.in/poi/state-legislatures" },
    { alt: "MP Government", src: "/galleries/mpgov.png", href: "https://mp.gov.in/" },
    { alt: "NIC Mail", src: "/galleries/nicemail.png", href: "https://email.gov.in/" }
  ];

  const filtered = quickLinks.filter((l) =>
    l.label.toLowerCase().includes(query.trim().toLowerCase())
  );

  function copyEmail() {
    navigator.clipboard.writeText("vidhansabha@mp.gov.in").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  function openDocument(link) {
    const href = link.href || link.to || "";
    if (!href) return;

    const isPdf = href.toLowerCase().endsWith(".pdf");

    function isSameOrigin(url) {
      try {
        const u = new URL(url, window.location.href);
        return u.origin === window.location.origin;
      } catch (e) {
        return false;
      }
    }

    if (link.external || !isSameOrigin(href)) {
      window.open(new URL(href, window.location.href).href, "_blank", "noopener");
      return;
    }

    if (isPdf) {
      setModalUrl(new URL(href, window.location.href).href);
      setModalTitle(link.label || "Document");
      setModalOpen(true);
      setTimeout(() => modalRef.current?.focus(), 150);
      return;
    }

    if (link.to) {
      window.location.href = link.to;
      return;
    }

    window.location.href = href;
  }

  return (
    <div className="nb-root nb-advanced">
      <style>{`
/* -------------------------------------------------
   THEME VARIABLES
-------------------------------------------------*/
:root{
  --bg:#f6fbff;
  --card:#ffffff;
  --muted:#58707a;
  --accent:#0966b8;
  --accent-2:#0f6fab;
  --glass: rgba(255,255,255,0.7);
  --border:rgba(12,34,56,0.06);
}
.nb-dark{
  --bg:#071026;
  --card:#071427;
  --muted:#9fb1c4;
  --accent:#67d7ff;
  --accent-2:#4ec6ff;
  --glass: rgba(255,255,255,0.03);
  --border:rgba(255,255,255,0.04);
}

/* -------------------------------------------------
   PAGE WRAPPER + CONTAINER
-------------------------------------------------*/
html, body, #root { margin:0; padding:0; height:100%; }
.nb-root{
  background: radial-gradient(1200px 400px at 10% 10%, rgba(15,111,171,0.06), transparent), var(--bg);
  background-size:200% 200%;
  animation:bgShift 18s ease-in-out infinite;
  font-family:Inter,system-ui;
}

.nb-container{
  max-width:1600px;
  width:100%;
  margin:0 auto;
  padding:10px 20px 12px;
  display:flex;
  flex-direction:column;
  gap:12px;
}

/* -------------------------------------------------
   HEADER
-------------------------------------------------*/
.nb-header{ display:flex; align-items:center; justify-content:space-between; gap:12px; }
.nb-brand{ display:flex; gap:12px; align-items:center; }
.nb-brand img{ height:52px; border-radius:10px; box-shadow:0 8px 30px rgba(15,111,171,0.09); }
.nb-brand h1{ margin:0; font-size:20px; color:var(--accent); }
.nb-brand p{ margin:0; font-size:13px; color:var(--muted); }

.nb-link{ color:var(--muted); text-decoration:none !important; }

/* -------------------------------------------------
   GRID LAYOUT
-------------------------------------------------*/
.nb-grid{
  display:grid;
  grid-template-columns:2fr 1fr;
  gap:16px;
}

/* -------------------------------------------------
   CARDS
-------------------------------------------------*/
.nb-card{
  border-radius:12px;
  background:linear-gradient(180deg,var(--card),rgba(255,255,255,0.95));
  padding:8px 12px;
  border:1px solid var(--border);
  box-shadow:0 12px 32px rgba(17,24,39,0.03);
}

/* -------------------------------------------------
   SEARCH + LINKS
-------------------------------------------------*/
.nb-search{ display:flex; gap:8px; align-items:center; margin-top:6px; }
.nb-search input{
  padding:8px 10px;
  border-radius:10px;
  border:1px solid var(--border);
  outline:none;
}
.nb-links{ margin-top:6px; display:grid; grid-template-columns:repeat(2,1fr); gap:6px; }

.nb-linkcard{
  display:flex; align-items:center; justify-content:space-between;
  padding:6px 8px;
  border-radius:10px;
  border:1px solid var(--border);
  background:rgba(255,255,255,0.02);
  height:38px;
  cursor:pointer;
}
.nb-linkcard .label{ font-size:14px; font-weight:700; }

/* remove all default link underlines */
.nb-card a, .nb-linkcard a, .email button, .fax-btn { text-decoration:none !important; }

/* -------------------------------------------------
   LOGO GRID + HOVER EFFECTS (CLEAN + MERGED)
-------------------------------------------------*/
.nb-logos-wrapper{
  padding:10px;
  border-radius:12px;
  border:1px solid rgba(12,34,56,0.04);
  background:linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.85));
}

.nb-logos{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(120px,1fr));
  gap:3px;
}

.nb-logo-item{
  display:flex;
  align-items:center;
  justify-content:center;
  padding:6px;
  border-radius:10px;
  background:#fff;
  border:1px solid rgba(0,0,0,0.06);
  transition:transform .25s ease, box-shadow .25s ease;
}

/* hover lift + glow */
.nb-logo-item:hover{
  transform:translateY(-6px);
  box-shadow:0 10px 24px rgba(0,0,0,0.12);
}

/* logos fully visible + hover brighten */
.nb-logo-wrap img{
  height:100%;
  filter:none !important;
  opacity:1 !important;
  transition:transform .25s ease, filter .25s ease, opacity .25s ease;
}

.nb-logo-item:hover .nb-logo-wrap img{
  transform:scale(1.05);
  filter:brightness(1.08) contrast(1.1);
}

/* -------------------------------------------------
   CONTACT CARD
-------------------------------------------------*/
.nb-contact address{ font-size:12px; line-height:1.15; margin:0; }
.email{ display:flex; gap:8px; align-items:center; margin-top:6px; }

/* -------------------------------------------------
   FOOTER
-------------------------------------------------*/
.nb-footer{
  height:32px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:13px;
  margin-top:8px;
}

/* -------------------------------------------------
   KEYFRAMES
-------------------------------------------------*/
@keyframes bgShift{
  0%{background-position:0 0;}
  50%{background-position:100% 100%;}
  100%{background-position:0 0;}
}
  /* ==== Remove link underlines only inside the main links card ==== */
.nb-card.links-card,
.nb-card.links-card * {
  text-decoration: none !important;
}

/* If there are <a> tags inside link-cards: keep them clickable but no underline */
.nb-card.links-card a,
.nb-card.links-card .label,
.nb-card.links-card .nb-linkcard {
  text-decoration: none !important;
  color: inherit !important;         /* keep label color consistent */
}

/* ==== Contact: email & fax styling ==== */
/* container */
.nb-contact .contact-line {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
  line-height: 1.15;
  font-size: 13px;
  color: var(--muted);
}

/* icon (lucide or svg) */
.nb-contact .contact-line .icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: var(--muted);
  opacity: .95;
}

/* email/fax buttons: look like links but without underline */
.nb-contact .contact-line button,
.nb-contact .contact-line a.contact-link {
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  color: var(--muted);
  cursor: pointer;
  text-decoration: none !important;
  font-size: 13px;
}

/* make copy button tidy and consistent */
.nb-contact .copy-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  margin-left: 8px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--card);
  cursor: pointer;
  transition: transform .12s ease, box-shadow .12s ease;
}

/* hover/focus states for copy */
.nb-contact .copy-btn:hover,
.nb-contact .copy-btn:focus {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(12,34,56,0.06);
  outline: none;
}

/* accessible focus ring for keyboard users */
.nb-contact .copy-btn:focus-visible,
.nb-contact .contact-line button:focus-visible,
.nb-contact .contact-line a.contact-link:focus-visible {
  outline: 3px solid rgba(9,102,184,0.13);
  border-radius: 8px;
}

/* small icon spacing when copy button sits to the right */
.nb-contact .contact-line .copy-btn svg {
  width: 14px;
  height: 14px;
}

/* optional: reduce visual noise by dimming icon copy box until hover */
.nb-contact .copy-btn { opacity: 0.98; }

/* ==== Make inline fax & email label consistent and compact ==== */
.nb-contact .contact-line .label-text {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 320px; /* shrink as needed */
}

/* Responsive tweak: on small screens stack the contact-line */
@media (max-width: 640px) {
  .nb-contact .contact-line {
    flex-wrap: wrap;
    gap: 6px;
  }
  .nb-contact .copy-btn { margin-left: 0; }
}

`}</style>


      <div className="nb-container">
        <header className="nb-header">


        </header>

        <main className="nb-grid">
          <section>
            {/* main links card — now uses links-card for compact styling */}
            <div className="nb-card links-card" role="region" aria-labelledby="nb-heading">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <div className="nb-search" aria-hidden={false}>
                  <span className="icon">
                    <Search size={16} />
                  </span>
                  <input aria-label="Search quick links" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search links, e.g. निविदा" />
                </div>
              </div>

              <div className="nb-links" role="list">
                {filtered.length ? (
                  filtered.map((link) =>
                    link.to ? (
                      <a
                        key={link.label}
                        href={link.to}
                        onClick={(e) => {
                          e.preventDefault();
                          openDocument(link);
                        }}
                        role="listitem"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") openDocument(link);
                        }}
                        className="nb-linkcard"
                        aria-label={`Open ${link.label}`}
                      >
                        <div className="left">
                          <div>
                            <div className="label">{link.label}</div>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                          {link.badge && <div className="nb-badge">{link.badge}</div>}
                        </div>
                      </a>
                    ) : (
                      <div
                        key={link.label}
                        role="listitem"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") openDocument(link);
                        }}
                        onClick={() => openDocument(link)}
                        className="nb-linkcard"
                        aria-label={`Open ${link.label}`}
                      >
                        <div className="left" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div className="label">{link.label}</div>
                        </div>
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                          {link.badge && <div className="nb-badge">{link.badge}</div>}
                        </div>
                      </div>
                    )
                  )
                ) : (
                  <div style={{ gridColumn: "1/-1", padding: "18px 8px", textAlign: "center", color: "var(--muted)" }}>No matching links</div>
                )}
              </div>
            </div>

            {/* compact website info card */}
            <div className="nb-card footer-info" style={{ textAlign: "center" }}>
              <div className="nb-small footer-info-text">Website designed and hosted by <strong style={{ color: "var(--accent)" }}>National Informatics Centre, Madhya Pradesh State Centre</strong>.</div>
              <div className="nb-small" style={{ marginTop: 6 }}>Best viewed in Edge, Chrome, Mozilla Firefox.</div>

              <Link to="/disclaimer" className="nb-link">
                Disclaimer
              </Link>
            </div>
          </section>

          <aside>
            <div className="nb-card nb-logos-wrapper">
              <div className="nb-logos" aria-hidden={false}>
                {logos.map((l) => (
                  <a key={l.alt} className="nb-logo-item" href={l.href} target="_blank" rel="noopener noreferrer" title={l.alt} aria-label={l.alt}>
                    <div className="nb-logo-wrap">
                      <img src={l.src} alt={l.alt} loading="lazy" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="nb-card nb-contact">
              <h3 style={{ margin: 0 }}>Contact</h3>
              <address>
                Madhya Pradesh Vidhan Sabha Secretariat, Indira Gandhi Vidhan Bhawan, Arera Hills, Bhopal (M.P)-462004
               
                <div style={{ marginTop: 6 }}>Contents provided, updated and maintained by MP Vidhan Sabha Secretariat. Website designed and hosted by National Informatics Centre, Madhya Pradesh State Centre. Website Best Viewed in IE 9 and above, Chrome, Mozilla Firefox.</div>

                {/* EMAIL */}
                <div className="contact-line">
                  <Mail size={16} className="icon" />

                  {/* Main email button (click = copy) */}
                  <button
                    className="contact-link"
                    onClick={() => copyToClipboard("vidhansabha@mp.gov.in")}
                  >
                    <span className="label-text">vidhansabha[at]mp[dot]gov[dot]in</span>
                  </button>

                  {/* Right-side copy button */}
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard("vidhansabha@mp.gov.in")}
                  >
                    <Copy size={14} />
                  </button>
                </div>

                {/* FAX */}
                <div className="contact-line">
                  <Printer size={16} className="icon" />

                  {/* Main fax button */}
                  <button
                    className="contact-link"
                    onClick={() => copyToClipboard("0755-2440238")}
                  >
                    <span className="label-text">Fax- 0755-2440238</span>
                  </button>

                  {/* Right-side copy button */}
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard("0755-2440238")}
                  >
                    <Copy size={14} />
                  </button>
                </div>


                {copied && <div style={{ marginTop: 8, color: "#20c997", fontSize: 13 }}>Copied to clipboard</div>}

                <div style={{ marginTop: 8 }}>
                  <a href="https://www.facebook.com/madhyapradesh.vidhansabha" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginRight: 8 }}>
                    <Facebook size={18} />
                  </a>
                  <a href="https://x.com/MPVidhanSabha?s=20" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <X size={18} />
                  </a>
                </div>
              </address>
            </div>
          </aside>
        </main>



        {modalOpen && (
          <div className="nb-modal-backdrop" role="dialog" aria-modal="true" aria-label={modalTitle} onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}>
            <div className="nb-modal" ref={modalRef} tabIndex={-1}>
              <div className="header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ fontWeight: 700 }}>{modalTitle}</div>
                  <div style={{ fontSize: 13, color: "var(--muted)" }}>Preview</div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <a href={modalUrl} target="_blank" rel="noopener noreferrer" className="nb-btn" style={{ alignItems: "center" }}>
                    <ExternalLink size={14} />
                    Open in new tab
                  </a>
                  <button className="nb-btn" onClick={() => setModalOpen(false)}>Close</button>
                </div>
              </div>
              <iframe src={modalUrl} title={modalTitle}></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
