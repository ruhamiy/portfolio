import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Ruhama</div>

      {/* Hamburger button */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"} {/* toggle between hamburger and X */}
      </div>

      {/* Nav links */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;