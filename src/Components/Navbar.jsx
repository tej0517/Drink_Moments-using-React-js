import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 sticky-top shadow">
      <div className="container" style={{ maxWidth: "1100px" }}>
        <Link className="navbar-brand fw-bold fs-4" to="/">Liquor Store</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="productsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><Link className="dropdown-item" to="/rum">Rum</Link></li>
                <li><Link className="dropdown-item" to="/whiskey">Whiskey</Link></li>
                <li><Link className="dropdown-item" to="/vodka">Vodka</Link></li>
                <li><Link className="dropdown-item" to="/beer">Beer</Link></li>
              </ul>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/blog">Blog</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
            </li>
        
          </ul>
        </div>
      </div>
    </nav>
  );
}
