import React from 'react';
import './Plan.css';
import { useNavigate } from 'react-router-dom';

const Plan = () => {
  const navigate = useNavigate();
  const Click = () => {
    navigate('/Payment');
  };

  return (
    <div className="page-load-animation">
      <main>
        <section className="heroo">
          <div className="heroo-content">
            <h1>Pricing Plans</h1>
            <p>One plan, all devices, access your recipes on all your devices including iOS, Android & Web</p>
          </div>
          <div className="heroo-images"></div>
        </section>

        <section className="subscription-plans">
          <h2>Choose Your Plan</h2>
          <div className="plans">
            <div className="plan free">
              <h3>Free Plan</h3>
              <p className="price">Free</p>
              <ul>
                <li>Access to limited recipes</li>
                <li>Monthly newsletter</li>
                <li>Basic support</li>
                <li>CB cloud sync</li>
                <li>Use on iOS, Android & Web</li>
              </ul>
              <div className="button1">
                <button onClick={Click} className="button-plan">
                  Choose Free
                </button>
              </div>
            </div>
            <div className="plan basic">
              <h3>Basic Plan</h3>
              <p className="price">$5.99/month</p>
              <ul>
                <li>Access to all recipes</li>
                <li>Monthly cooking classes</li>
                <li>Email support</li>
                <li>CB cloud sync</li>
                <li>Use on iOS, Android & Web</li>
              </ul>
              <div className="button2">
                <button onClick={Click} className="button-plan1">
                  Choose Basic
                </button>
              </div>
            </div>
            <div className="plan standard">
              <h3>Monthly Plan</h3>
              <p className="price">$9.99/month</p>
              <ul>
                <li>Access to all recipes</li>
                <li>Weekly cooking classes</li>
                <li>Exclusive articles</li>
                <li>Email and chat support</li>
                <li>CB cloud sync</li>
                <li>Use on iOS, Android & Web</li>
                <li>Cancel any time</li>
              </ul>
              <div className="button3">
                <button onClick={Click} className="button-plan2">
                  Choose Monthly
                </button>
              </div>
            </div>
            <div className="plan premium">
              <h3>Yearly Plan</h3>
              <p className="price">$99.99/year</p>
              <ul>
                <li>Access to all recipes</li>
                <li>Weekly cooking classes</li>
                <li>Exclusive articles</li>
                <li>One free cooking book</li>
                <li>Priority support</li>
                <li>CB cloud sync</li>
                <li>Use on iOS, Android & Web</li>
                <li>Cancel any time</li>
              </ul>
              <div className="button3">
                <button onClick={Click} className="button-plan3">
                  Choose Yearly
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Plan;
