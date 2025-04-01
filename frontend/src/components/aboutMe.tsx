import { useInView } from "react-intersection-observer";
import Skills from "./skills";
import { useContext } from "react";
import { Context } from "../app";

export default function AboutMe() {
  const { setAboutBox } = useContext(Context);

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  // const aboutMe = document.getElementById("aboutMe--section")
  // if(entry?.isIntersecting){
  //   aboutMe?.classList.add("nav--active")
  // }
  function showAboutBox() {
    setAboutBox(true);
  }

  return (
    <section className="aboutMe--section" id="aboutMe--section" ref={ref}>
      <h1 className={inView ? "showHidden" : "hidden"}>About Me</h1>
      <div className={inView ? "aboutMe showHidden" : "aboutMe hidden"}>
        {/* <div className="aboutMePhotoContainer">
          <img
            className="aboutMePhoto"
            src="images/avatar.png"
            alt="photo not available"
          />
        </div> */}
        <div className="summary">
          <p>
          I am a dedicated Full Stack Developer with experience in both front-end and back-end development. Passionate about building and optimizing web applications, I thrive on creating seamless user experiences and solving real-world problems.
          <br />
          I take pride in my ability to learn quickly, adapt to new technologies, and collaborate effectively within a team. Eager to contribute my skills and creativity, I’m ready to grow in a dynamic development environment.
          </p>
          <button className="more" onClick={showAboutBox} onBlur={() => setAboutBox(false)}>
            More about me
          </button>
        </div>
      </div>
      <Skills />
    </section>
  );
}
