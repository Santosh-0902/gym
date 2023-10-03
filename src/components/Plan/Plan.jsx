import React from "react";
import "./Plan.css";
import { plansData } from "../../Data/plansData";
import whiteTick from "../../assets/whiteTick.png";
const Plan = () => {
  return (
    <div className="plan-container" id="plan-container">
      <div className="blur plan-blur-1"></div>
      <div className="blur plan-blur-2"></div>
      <div className="program-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      {/* -----------------plans-card------------------ */}

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -></span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
