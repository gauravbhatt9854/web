import React from 'react';
import './HowEasy.css';
import { images } from '../../assets/assets';
const HowEasy = () => {
    return (
        <div className="how-easy-container">
            <h1 className=''>
                How Easy Is It to Use Work<span className="highlight-green">Hive</span>?
            </h1>
            <div className="how-easy-content flex flex-col md:flex-row">
                <div className="points">
                    <div className="point">
                        <div className="checkmark">✔</div>
                        <div>
                            <h2>Effortless Matchmaking: Say Goodbye to Confusion</h2>
                            <p>
                                Smart, intuitive features help you find the perfect opportunities without the hassle.
                            </p>
                        </div>

                    </div>
                    <div className="point">
                        <div className="checkmark">✔</div>
                        <div>
                            <h2>Tailored for Success: Verified Matches Made Easy</h2>
                            <p>
                                We handpick and connect you with the best freelancers and clients, ensuring trust and quality.
                            </p>
                        </div>

                    </div>
                    <div className="point">
                        <div className="checkmark">✔</div>
                        <div>
                            <h2>Freedom to Freelance: No Fees, No Limits</h2>
                            <p>
                                WorkHive is a completely free platform, breaking barriers to kickstart your journey.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="illustration">
                    <img
                        src={images.section}
                        alt="Illustration"
                        className="illustration-image"
                    ></img>
                </div>
            </div>
            <div className="green-but">
                <button className="cta-button green-button">See How workhive works</button>
            </div>
        </div>
    );
};

export default HowEasy