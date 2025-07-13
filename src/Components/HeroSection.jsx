import React from 'react';
import bgImage from "../Images/Alcohol_img.jpg";

export default function HeroSection() {
  return (
    <div
      className="text-white d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>
        <span style={{ fontStyle: "italic", fontWeight: "400", color: "#ccc" }}>Good </span>
        <span style={{ fontWeight: "700", color: "#fff" }}>Drink</span>
        <br />
        <span style={{ fontStyle: "italic", fontWeight: "400", color: "#ccc" }}>for Good </span>
        <span style={{ fontWeight: "700", color: "#fff" }}>Moments.</span>
      </h1>

      <div className="mt-4 d-flex gap-3">
        <button className="btn btn-danger px-4 py-2 fw-bold">Shop Now</button>
        <button className="btn btn-outline-light px-4 py-2 fw-bold">Read more</button>
      </div>
    </div>
  );
}
