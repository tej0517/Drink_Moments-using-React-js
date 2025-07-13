import React from 'react';
import bgImage from '../Images/Vodka-Background.avif';

// List of rum products
const rumProducts = [
  {
    name: 'Smirnoff',
    price: '$69.00',
    image:
      'https://images.unsplash.com/photo-1703437871687-427b69640924?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U21pcm5vZmYlMjB2b2RrYXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'GREY GOOSE',
    price: '$79.00',
    image:
      'https://images.unsplash.com/photo-1650477021184-6fe8ef5b846e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R1JFWSUyMEdPT1NFJTIwdm9ka2F8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Belvedere',
    price: '$85.00',
    image:
      'https://images.unsplash.com/photo-1645784125144-4c06a561fc58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmVsdmVkZXJlJTIwJTIwdm9ka2F8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Cîroc ',
    price: '$90.00',
    image:
      'https://images.unsplash.com/photo-1709688574763-4344605d5b9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEMlQzMlQUVyb2MlMjAlMjB2b2RrYXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Absolut',
    price: '$94.00',
    image:
      'https://images.unsplash.com/photo-1539606494565-02e568638d91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWJzb2x1dCUyMHZvZGthfGVufDB8fDB8fHww',
  },
  {
    name: 'Ketel One',
    price: '$88.00',
    image:
      'https://images.unsplash.com/photo-1590578455926-60dde6d06d56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fEtldGVsJTIwT25lJTIwdm9ka2F8ZW58MHx8MHx8fDA%3D',
  },
];

export default function Rum() {
  return (
    <div
      className="py-5 px-3"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      }}
    >
      <div className="container-fluid text-white">
        <h2 className="text-center fw-bold mb-5" style={{ fontFamily: `'Playfair Display', serif`, fontSize: '2.5rem', letterSpacing: '1px' }}>
          Explore Our Premium Vodka Collection
        </h2>

        <div className="row">
          {/* Left: Rum Cards */}
          <div className="col-md-8">
            <div className="row g-4">
              {rumProducts.map((product, index) => (
                <div className="col-md-4" key={index}>
                  <div
                    className="card shadow-lg h-100"
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 12px 20px rgba(0,0,0,0.3)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="card-img-top"
                      style={{
                        height: 'auto',
                        objectFit: 'cover',
                      }}
                    />
                    <div className="card-body text-center text-dark">
                      <h5
                        className="card-title mb-1"
                        style={{ fontWeight: '600', fontFamily: `'Cinzel', serif` }}
                      >
                        {product.name}
                      </h5>
                      <p
                        className="card-text fw-bold"
                        style={{ color: '#b5431f', fontSize: '1.1rem' }}
                      >
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interesting Info */}
          <div className="col-md-4">
  <div
    className="p-4 text-white h-100 d-flex flex-column justify-content-between"
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderRadius: '20px',
    }}
  >
    <h4 className="fw-bold mb-3" style={{ fontSize: '1.8rem', fontFamily: `'Playfair Display', serif` }}>
      🍸 Why People Love Vodka
    </h4>

    <div className="d-flex flex-column gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
      <div>
        <strong>❄️ Crystal Clarity:</strong> Distilled to perfection, vodka is prized for its smooth, clean finish.
      </div>
      <div>
        <strong>🌍 Global Appeal:</strong> From Russia to Poland to the USA, vodka has become a universal favorite.
      </div>
      <div>
        <strong>🍹 Cocktail Friendly:</strong> From Martinis to Bloody Marys, vodka blends effortlessly into any mix.
      </div>
      <div>
        <strong>🌿 Infused Innovation:</strong> Flavored vodkas with citrus, berries, herbs, and spices offer endless variety.
      </div>
      <div>
        <strong>🥶 Chill Factor:</strong> Best served ice-cold, vodka elevates every toast and celebration.
      </div>
      <div className="mt-3">
        <em>“Vodka — pure, bold, and ready to mix into any moment.”</em>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
