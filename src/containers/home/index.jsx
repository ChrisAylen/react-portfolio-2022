import React from "react";
import "./styles.scss";
import { Animate } from "react-simple-animate";
import { FaLinkedin, FaGithub } from "react-icons/fa";
//TODO:Fix home route not loading by default
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          I'm Chris.
          <br />
          A software <br/>
          development <br/> consultant.
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
            
          {/* <button>Hire me</button> */}
          
          {/* <a>Download CV</a> */}
        </div>
        {/* TODO:Pass these as props */}
        <div className="contact-me__socials-wrapper">
        <a href="https://www.linkedin.com/in/chris-aylen-agile-software-development/">
            <FaLinkedin size={32} />
          </a>
          <a href="https://github.com/chrisaylen">
            <FaGithub size={32} />
          </a>
        </div>
      </div>
      </Animate>
    </section>
  );
};

export default Home;
