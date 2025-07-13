const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">

          {/* Logo & Description */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white fw-bold">
              LIQUOR <span className="fw-light text-warning">STORE</span>
            </h4>
            <p className="mt-3 text-light small">
              Far far away, behind the word mountains, far from the countries.
            </p>
            <div className="d-flex gap-2 mt-3">
  <a href="#" className="d-inline-block" style={{ width: '35px', height: '35px' }}>
    <img
      src="https://cdn-icons-png.flaticon.com/512/733/733547.png" // Twitter
      alt="Twitter"
      style={{ width: '100%', height: '100%', borderRadius: '50%' }}
    />
  </a>
  <a href="#" className="d-inline-block" style={{ width: '35px', height: '35px' }}>
    <img
      src="https://cdn-icons-png.flaticon.com/512/733/733558.png" // Facebook
      alt="Facebook"
      style={{ width: '100%', height: '100%', borderRadius: '50%' }}
    />
  </a>
  <a href="#" className="d-inline-block rounded-circle overflow-hidden bg-primary" style={{ width: '35px', height: '35px' }}>
  <img
    src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
    alt="Twitter"
    style={{ width: '70%', height: '70%', objectFit: 'contain', margin: '15%' }}
  />
</a>

</div>

          </div>

          {/* Links Column - My Accounts */}
          <div className="col-lg-2 col-md-6">
            <h6 className="text-white mb-3">My Accounts</h6>
            <ul className="list-unstyled">
              {["My Account", "Register", "Log In", "My Order"].map((item, i) => (
                <li key={i} className="mb-2">
                  <a href="#" className="text-light text-decoration-none small">➤ {item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column - Information */}
          <div className="col-lg-2 col-md-6">
            <h6 className="text-white mb-3">Information</h6>
            <ul className="list-unstyled">
              {["About us", "Catalog", "Contact us", "Terms & Conditions"].map((item, i) => (
                <li key={i} className="mb-2">
                  <a href="#" className="text-light text-decoration-none small">➤ {item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column - Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              {["New User", "Help Center", "Report Spam", "FAQs"].map((item, i) => (
                <li key={i} className="mb-2">
                  <a href="#" className="text-light text-decoration-none small">➤ {item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white mb-3">Have Questions?</h6>
            <ul className="list-unstyled text-light small">
              <li className="mb-3 d-flex">
                <i className="bi bi-geo-alt-fill text-warning me-2 mt-1"></i>
                <span>203 Fake St. Mountain View, San Francisco, USA</span>
              </li>
              <li className="mb-3 d-flex">
                <i className="bi bi-telephone-fill text-warning me-2 mt-1"></i>
                <span>+2 392 3929 210</span>
              </li>
              <li className="d-flex">
                <i className="bi bi-send-fill text-warning me-2 mt-1"></i>
                <span>info@yourdomain.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="border-secondary mt-5" />
        <div className="text-center text-light small">
          <p className="mb-0">
            © 2025 All rights reserved | Made with <span className="text-danger">♥</span> by <a href="https://colorlib.com" className="text-warning text-decoration-none">Colorlib.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
