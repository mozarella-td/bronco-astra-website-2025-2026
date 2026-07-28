import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import Fuse from "fuse.js";
import logo from "../assets/bronco-astra-logo.png";
import cleanContent from "../constants/content.js";

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function Navbar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const fuse = useMemo(() => {
    return new Fuse(cleanContent, {
      keys: ["title", "text"],
      threshold: 0.25,
      ignoreLocation: true,
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setOpen(false);
    navigate(`/search?q=${encodeURIComponent(q)}`);
  }

  function handleChange(e) {
    const q = e.target.value;
    setQuery(q);

    const trimmed = q.trim();
    if (!trimmed) {
      setResults([]);
      setOpen(false);
      return;
    }

    const matches = fuse
      .search(trimmed)
      .map((m) => m.item)
      .slice(0, 6);
    setResults(matches);
    setOpen(true);
  }

  function handleResultClick(item) {
    setQuery("");
    setResults([]);
    setOpen(false);

    // navigate to url (supports hashes)
    navigate(item.url);

    // if hash exists, scroll after route render
    const hashIndex = item.url.indexOf("#");
    if (hashIndex !== -1) {
      const hash = item.url.slice(hashIndex + 1);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }

  // close dropdown on outside click
  useEffect(() => {
    function onDocClick(e) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <nav className={menuOpen ? "nav-open" : ""}>
      <NavLink to="/" className="logo">
        <img src={logo} alt="Bronco ASTRA Logo" className="astra--logo" />
        <h2>Bronco ASTRA</h2>
      </NavLink>

      {/* MOBILE SEARCH BUTTON */}
      <button
        className="mobile-search-btn"
        onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
        aria-label="Open search"
      >
        <svg viewBox="0 0 24 24" width="22">
          <path
            d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm11 3-6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>

      {/* HAMBURGER */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/team" onClick={() => setMenuOpen(false)}>
          Team
        </NavLink>

        <NavLink to="/drone" onClick={() => setMenuOpen(false)}>
          Drone
        </NavLink>

        <NavLink to="/timeline" onClick={() => setMenuOpen(false)}>
          Timeline
        </NavLink>

        <NavLink to="/testing" onClick={() => setMenuOpen(false)}>
          Testing
        </NavLink>

        <NavLink to="/tips" onClick={() => setMenuOpen(false)}>
          Tips
        </NavLink>
      </div>

      {/* SEARCH */}
      <div
        ref={wrapperRef}
        className={`desktop-search ${mobileSearchOpen ? "mobile-open" : ""}`}
      >
        <form className="nav-search" onSubmit={handleSubmit}>
          <input
            className="nav-search__input"
            type="search"
            placeholder="Search..."
            value={query}
            onChange={handleChange}
          />

          <button className="nav-search__btn" type="submit">
            <svg viewBox="0 0 24 24">
              <path
                d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm11 3-6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </form>

        {open && results.length > 0 && (
          <div
            className="nav-search__results"
            role="listbox"
          >
            {results.map((item, idx) => {
              const q = query.trim();
              const snippet = (item.text || "").slice(0, 120);
              const highlighted = q
                ? snippet.replace(
                    new RegExp(`(${escapeRegExp(q)})`, "gi"),
                    '<mark style="background: rgba(255,184,28,0.35); color: inherit; padding: 0 2px;">$1</mark>',
                  )
                : snippet;

              return (
                <div
                  key={`${item.url}-${idx}`}
                  onMouseDown={(e) => e.preventDefault()} // keeps click working
                  onClick={() => handleResultClick(item)}
                  className="nav-search__result-item"
                >
                  <div
                    className="nav-search__result-title"
                  >
                    {item.title}
                  </div>
                  <div
                  className="nav-search__result-text"
                    
                    dangerouslySetInnerHTML={{ __html: `…${highlighted}…` }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
