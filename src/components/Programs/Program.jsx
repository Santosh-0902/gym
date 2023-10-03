import React from "react";
import "./Program.css";
import { programsData } from "../../Data/programsData";
import RightArrow from "../../assets/rightArrow.png";
const Program = () => {
  return (
    <div className="program" id="program">
      {/* --------------------program-header------------------------- */}
      <div className="program-header" id="program">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To Shape You</span>
      </div>
      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
