import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "react-countup";
const Hero = () => {
  const transition = { typye: "string", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* ----------------the-best-ad----------------------- */}

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "192px" : "238px" }}
            whileInView={{ left: "37px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>

          <span>the best fitness club in the town</span>
        </div>

        {/* -----------------hero-text---------------------------- */}

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your body and live up
              your life to fullest
            </span>
          </div>
        </div>
        {/* -----------------------figures--------------------------- */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4s" prefix="+ " />
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={978} start={938} delay="4s" prefix="+ " />
            </span>
            <span>member joined</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={50} start={10} delay="4s" prefix="+ " />
            </span>
            <span>programs</span>
          </div>
        </div>
        {/* -------------------------hero-button--------------------------- */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      {/* ------------------------right---------------------- */}

      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* ----------------------hero-img----------------------- */}
        <img src={hero_image} alt="" className="hero_image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero_image_back"
        />
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
