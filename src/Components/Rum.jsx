import React from 'react';
import bgImage from '../Images/Rum-background.avif';

// List of rum products
const rumProducts = [
  {
    name: 'Old Monk',
    price: '$69.00',
    image:
      'https://images.unsplash.com/photo-1575719314727-64ce0e7a03d8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwbW9ua3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Bacardi',
    price: '$79.00',
    image:
      'https://images.unsplash.com/photo-1561150169-371f366b828a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QkFDQVJESXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Havana Club',
    price: '$85.00',
    image:
      'https://images.unsplash.com/photo-1593468645864-5f3b65a3362e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SEFWQU5BJTIwQ0xVQnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Don Pablo',
    price: '$90.00',
    image:
      'https://images.unsplash.com/photo-1651390801311-64923c6c656b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'DIPLOMATICO',
    price: '$94.00',
    image:
      'https://images.unsplash.com/photo-1584474891920-82ecfc9f8868?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
  },
  {
    name: 'The Kraken Black',
    price: '$88.00',
    image:
      'https://images.unsplash.com/photo-1639492588648-4ea72ddcfd83?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
          Explore Our Premium Rum Collection
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
                🍹 Why People Love Rum
              </h4>

              <div className="d-flex flex-column gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <div>
                  <strong>🌴 Caribbean Origins:</strong> Born in the tropics, rum is a legacy of island heritage and spice trade.
                </div>
                <div>
                  <strong>🧪 Versatile Flavors:</strong> From dark and smoky to sweet and vanilla-tinted, every bottle offers something new.
                </div>
                <div>
                  <strong>🍸 Mix It Up:</strong> Rum is the soul of cocktails like Mojitos, Pina Coladas, and Cuba Libre.
                </div>
                <div>
                  <strong>🥃 Collector’s Choice:</strong> Limited editions and barrel-aged rums make perfect collector bottles.
                </div>
                <div>
                  <strong>🔥 Legendary Labels:</strong> Old Monk, Havana Club, Kraken — each one tells a story.
                </div>
                <div className="mt-3">
                  <em>“Rum — it's not just a drink, it's an experience waiting to be uncorked.”</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
