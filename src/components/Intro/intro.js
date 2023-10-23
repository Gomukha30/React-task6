import React from "react";
import "./intro.css";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Sudheshna</span> <br />
          AI and ML Engineer
        </span>
        <p className="introPara">
          I am a skilled Machine Learning Engineer with visualisation and data
          analytics knowledge
        </p>
        <Link>
          <button className="btn">
            <img
              src={btnImg}
              style={{marginInlineEnd:'10px'}}
              
              height="20"
              width="20"
              alt="Hire Me"
            />
            Hire Me
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
