import React from 'react';

export default function Contact() {
  return (
    <div className="container my-5" style={{ maxWidth: "900px" }}>
      <h2 className="mb-5 fw-bold" style={{ fontSize: "2rem" }}>Contact Us</h2>
      <form>
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label text-uppercase fw-semibold" style={{ color: "#9b3f1d", fontSize: "0.85rem" }}>
              Full Name
            </label>
            <input type="text" className="form-control border-0 border-bottom rounded-0 shadow-none" id="name" placeholder="Name" />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label text-uppercase fw-semibold" style={{ color: "#9b3f1d", fontSize: "0.85rem" }}>
              Email Address
            </label>
            <input type="email" className="form-control border-0 border-bottom rounded-0 shadow-none" id="email" placeholder="Email" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="form-label text-uppercase fw-semibold" style={{ color: "#9b3f1d", fontSize: "0.85rem" }}>
            Subject
          </label>
          <input type="text" className="form-control border-0 border-bottom rounded-0 shadow-none" id="subject" placeholder="Subject" />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="form-label text-uppercase fw-semibold" style={{ color: "#9b3f1d", fontSize: "0.85rem" }}>
            Message
          </label>
          <textarea className="form-control border-0 border-bottom rounded-0 shadow-none" id="message" rows="4" placeholder="Message"></textarea>
        </div>

        <button type="submit" className="Contact-button">
         <p> Send Message</p>
        </button>
      </form>
    </div>
  );
}
