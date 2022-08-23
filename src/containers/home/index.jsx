import React from "react";
import "./styles.scss";
import { Animate } from "react-simple-animate";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Chris
          <br />
          full stack extremo.
        </h1>
      </div>
      <Animate
        play={true}
        duration={1.5}
        start={{transform : "translateY(600px)"}}
        end={{transform : "translateX(0px)"}}
        >
      <div className="contact-me">
        <div className="contact-me__buttons-wrapper">
            {/*TODO: Links need adding  */}
          <button>Hire me</button>
          <a>Download CV</a>
        </div>
        <div className="contact-me__socials-wrapper">
            <FaLinkedin size={32} />
            <FaGithub size={32} />
        </div>
      </div>
      </Animate>
    </section>
  );
};

export default Home;
