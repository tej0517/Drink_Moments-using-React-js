import React from 'react';
import { FaHeadset, FaMoneyBillWave, FaShippingFast } from 'react-icons/fa';

export default function FeatureBar() {
  return (
    <div className="bg-danger text-white py-5">
      <div className="container d-flex flex-wrap justify-content-between text-center" style={{ maxWidth: '1100px' }}>
        
        {/* Column 1 */}
        <div className="col-md-4 mb-4 px-4 d-flex flex-column align-items-center">
          <FaHeadset size={40} className="mb-3" />
          <h5 className="fw-bold text-uppercase">Online Support 24/7</h5>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>

        {/* Column 2 */}
        <div className="col-md-4 mb-4 px-4 d-flex flex-column align-items-center">
          <FaMoneyBillWave size={40} className="mb-3" />
          <h5 className="fw-bold text-uppercase">Money Back Guarantee</h5>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>

        {/* Column 3 */}
        <div className="col-md-4 mb-4 px-4 d-flex flex-column align-items-center">
          <FaShippingFast size={40} className="mb-3" />
          <h5 className="fw-bold text-uppercase">Free Shipping & Return</h5>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>

      </div>
    </div>
  );
}
