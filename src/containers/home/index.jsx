import React from "react";
import { Animate } from "react-simple-animate";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./styles.scss";
import MyPdf from "../../resume/Abbos555.pdf";

const Home = () => {
   function handleNavigateLinkedin() {
      window.open("https://github.com/abbos0959", "_blank");
   }

   return (
      <section className="home" id="home">
         <div className="home__text-wrapper">
            <h1>
               Hello, I'm Abbos
               <br />
               Full Stack Developer.
            </h1>
         </div>
         <Animate
            play
            duration={1.5}
            delay={1}
            start={{
               transform: "translateY(600px)",
            }}
            end={{
               transform: "translateX(0px)",
            }}
         >
            <div className="contact-me">
               <div className="contact-me__buttons-wrapper">
                  <a href={MyPdf} download="Abbos555.pdf">
                     Download resume
                  </a>
               </div>
               <div className="contact-me__socials-wrapper">
                  <h2 style={{ color: "#FFDD40", marginTop: "10px" }}> Github</h2>
                  <FaGithub onClick={handleNavigateLinkedin} size={32} />
               </div>
            </div>
         </Animate>
      </section>
   );
};

export default Home;
