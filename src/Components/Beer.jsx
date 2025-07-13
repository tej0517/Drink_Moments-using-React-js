import React from 'react';
import bgImage from '../Images/Beer-Background.avif';

// List of rum products
const rumProducts = [
  {
    name: 'Heineken',
    price: '$69.00',
    image:
      'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGVpbmVrZW4lMjBiZWVyfGVufDB8fDB8fHww',
  },
  {
    name: 'Budweiser',
    price: '$79.00',
    image:
      'https://images.unsplash.com/photo-1642647237318-3e30ff181a3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJ1ZHdlaXNlciUyMGJlZXJ8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Corona',
    price: '$85.00',
    image:
      'https://images.unsplash.com/photo-1600213903598-25be92abde40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29yb25hJTIwYmVlcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Carlsberg',
    price: '$90.00',
    image:
      'https://images.unsplash.com/photo-1671118720329-cc1a39b57ccd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2FybHNiZXJnJTIwJTIwQmVlcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Stella Artois',
    price: '$94.00',
    image:
      'https://images.unsplash.com/photo-1506916278879-dc0a599e3885?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFN0ZWxsYSUyMEFydG9pcyUyMGJlZXJ8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Tuborg',
    price: '$88.00',
    image:
      'https://images.unsplash.com/photo-1724092130778-2def39dba30a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHVib3JnJTIwQmVlcnxlbnwwfHwwfHx8MA%3D%3D',
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
          Explore Our Premium Beer Collection
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
      🍺 Why People Love Beer
    </h4>

    <div className="d-flex flex-column gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
      <div>
        <strong>🌾 Timeless Brew:</strong> One of the oldest drinks in history, beer connects cultures through centuries.
      </div>
      <div>
        <strong>🍯 Flavor Diversity:</strong> From crisp lagers to hoppy IPAs and rich stouts, there's a beer for every palate.
      </div>
      <div>
        <strong>🎉 Social Staple:</strong> Whether at a game, a BBQ, or a pub, beer brings people together.
      </div>
      <div>
        <strong>🍻 Craft Culture:</strong> Small breweries worldwide are redefining beer with unique local ingredients and creativity.
      </div>
      <div>
        <strong>🌍 Global Classic:</strong> Enjoyed in every corner of the world — beer is a universal language of relaxation.
      </div>
      <div className="mt-3">
        <em>“Beer — the perfect balance of tradition, taste, and togetherness.”</em>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
