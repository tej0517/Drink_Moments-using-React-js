import React from 'react';
import bgImage from '../Images/Whiskey-background.avif'; // Replace with your whiskey-themed image

// List of whiskey products
const whiskeyProducts = [
  {
    name: 'Jack Daniel’s',
    price: '$72.00',
    image:
      'https://images.unsplash.com/photo-1737252917787-75b47facd183?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGphY2slMjBkYW5pZWxzZSUyMHdoaXNreXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Jameson Irish Whiskey',
    price: '$75.00',
    image:
      'https://images.unsplash.com/photo-1569977621579-58987bec59cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SmFtZXNvbiUyMElyaXNoJTIwV2hpc2tleXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Johnnie Walker',
    price: '$90.00',
    image:
      'https://images.unsplash.com/photo-1658493665479-1cd33e3a07ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Sm9obm5pZSUyMFdhbGtlciUyMFdoaXNrZXl8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Glenfiddich',
    price: '$98.00',
    image:
      'https://images.unsplash.com/photo-1598635606561-b97a4c61f7c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R2xlbmZpZGRpY2glMjBXaGlza2V5fGVufDB8fDB8fHww',
  },
  {
    name: 'Macallan',
    price: '$120.00',
    image:
      'https://images.unsplash.com/photo-1580413572232-b026a143e8a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fE1hY2FsbGFuJTIwd2hpc2tleXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Chivas Regal',
    price: '$85.00',
    image:
      'https://images.unsplash.com/photo-1711037568757-4131c0c2c0b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hpdmFzJTIwUmVnYWwlMjB3aGlza2V5fGVufDB8fDB8fHww',
  },
];

export default function Whiskey() {
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
          Discover Our Finest Whiskey Selection
        </h2>

        <div className="row">
          {/* Left: Whiskey Cards */}
          <div className="col-md-8">
            <div className="row g-4">
              {whiskeyProducts.map((product, index) => (
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
                🥃 Why Whiskey Enthusiasts Adore It
              </h4>

              <div className="d-flex flex-column gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <div>
                  <strong>🌍 Global Heritage:</strong> From Scotland to Ireland, the U.S. to Japan — whiskey tells a worldwide tale.
                </div>
                <div>
                  <strong>🕰 Aged to Perfection:</strong> Time adds complexity and smoothness like no other spirit.
                </div>
                <div>
                  <strong>🔥 Flavor Depth:</strong> Peat, oak, caramel, spice — each sip brings a story.
                </div>
                <div>
                  <strong>🥃 Savor Neat or Mix:</strong> Whether in a classic Old Fashioned or straight up, it's a gentleman’s choice.
                </div>
                <div>
                  <strong>🎁 A Collector’s Dream:</strong> Limited bottlings make for prized additions to any shelf.
                </div>
                <div className="mt-3">
                  <em>“Whiskey isn’t just a drink — it’s a tradition poured into a glass.”</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
