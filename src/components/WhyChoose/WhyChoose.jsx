import React from 'react'
import './WhyChoose.css';
const WhyChoose = () => {
    return (
      <div className="container">
        <h1>
          Why choose Work<span className="highlight">Hive</span> ?
        </h1>
        <div className="features flex flex-col md:flex-row justify-center items-center">
          {/* Feature 1 */}
          <div className="feature">
            <div className="bubble bubble-1">1</div>
            <h2>Completely Free Platform</h2>
            <p>
              No bidding fees, no charges—WorkHive helps freelancers and clients
              connect free of hidden costs.
            </p>
          </div>
  
          {/* Feature 2 */}
          <div className="feature">
            <div className="bubble bubble-2">2</div>
            <h2>For Everyone, Everywhere</h2>
            <p>
              Whether you're a beginner or an expert, WorkHive supports freelancers
              at all skill levels.
            </p>
          </div>
  
          {/* Feature 3 */}
          <div className="feature">
            <div className="bubble bubble-3">3</div>
            <h2>Trusted and Supported</h2>
            <p>
              Work with verified freelancers and enjoy 24/7 support for a secure
              experience.
            </p>
          </div>
        </div>
        <button className="cta-button">Ready to grow ? Join us</button>
      </div>
    );
  };

export default WhyChoose