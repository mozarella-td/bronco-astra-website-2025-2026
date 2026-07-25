import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import Fuse from 'fuse.js';
import logo from '../assets/bronco-astra-logo.png';
import cleanContent from '../constants/content.js'


function escapeRegExp (str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function Navbar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    const wrapperRef = useRef(null);
    
    const fuse = useMemo(() => {
        return new Fuse(cleanContent, {
          keys: ['title', 'text'],
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

    function handleChange (e) {
        const q = e.target.value; 
        setQuery(q);

        const trimmed = q.trim();
        if (!trimmed) {
            setResults([]);
            setOpen(false);
            return;
        }

        const matches = fuse.search(trimmed).map(m => m.item).slice(0, 6);
        setResults(matches);
        setOpen(true);
    }

    function handleResultClick (item) {
        setQuery('');
        setResults([]);
        setOpen(false);

        // navigate to url (supports hashes)
        navigate(item.url);

        // if hash exists, scroll after route render
        const hashIndex = item.url.indexOf('#');
            if (hashIndex !== -1) {
                const hash = item.url.slice(hashIndex + 1);
                setTimeout(() => {
                    const el = document.getElementById(hash);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 50);
            }
    }

    // close dropdown on outside click
    useEffect(() => {
        function onDocClick(e) {
            if (!wrapperRef.current) return;
            if (!wrapperRef.current.contains(e.target)) setOpen(false);
        }
        document.addEventListener('mousedown', onDocClick);
        return () => document.removeEventListener('mousedown', onDocClick);
    }, []);

    return (
        <nav>
          <NavLink to='/' className="logo">
            <img src={logo} alt="Bronco ASTRA Logo" className='astra--logo'/>
            <h2>Bronco ASTRA</h2>
          </NavLink>
    
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/team'>Team</NavLink>
          <NavLink to='/drone'>Drone</NavLink>
          <NavLink to='/timeline'>Timeline</NavLink>
          <NavLink to='/testing'>Testing</NavLink>
          <NavLink to='/tips'>Tips</NavLink>
    
          <div ref={wrapperRef} style={{ position: 'relative' }}>
            <form className="nav-search" onSubmit={handleSubmit} role="search">
              <input
                className="nav-search__input"
                type="search"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
                onFocus={() => results.length && setOpen(true)}
                aria-label="Search"
                autoComplete="off"
              />
              <button className="nav-search__btn" type="submit" aria-label="Search">
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path
                    d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm11 3-6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </form>
    
            {open && results.length > 0 && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  left: 0,
                  width: '240px', // matches your .nav-search width
                  background: 'rgba(0,0,0,0.92)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  zIndex: 2000,
                  boxShadow: '0 12px 30px rgba(0,0,0,0.45)',
                  maxHeight: '320px',
                  overflowY: 'auto',
                }}
                role="listbox"
              >
                {results.map((item, idx) => {
                  const q = query.trim();
                  const snippet = (item.text || '').slice(0, 120);
                  const highlighted = q
                    ? snippet.replace(
                        new RegExp(`(${escapeRegExp(q)})`, 'gi'),
                        '<mark style="background: rgba(255,184,28,0.35); color: inherit; padding: 0 2px;">$1</mark>'
                      )
                    : snippet;
    
                  return (
                    <div
                      key={`${item.url}-${idx}`}
                      onMouseDown={(e) => e.preventDefault()} // keeps click working
                      onClick={() => handleResultClick(item)}
                      style={{
                        padding: '10px 12px',
                        cursor: 'pointer',
                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <div style={{ color: '#FFB81C', fontSize: '0.9rem', letterSpacing: '0.06em' }}>
                        {item.title}
                      </div>
                      <div
                        style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.8rem', marginTop: '4px' }}
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