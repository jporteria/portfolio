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
            I am a dedicated Full Stack Developer with experience in both
            front-end and back-end development. I have a passion for building
            and optimizing websites that deliver excellent user experiences. I
            take pride in my ability to learn new concepts quickly and work
            collaboratively with others to achieve shared goals. I’m eager to
            contribute my skills, creativity, and commitment to your development
            team while continuing to grow and learn in a dynamic environment.
          </p>
          <button className="more" onClick={showAboutBox}>
            More about me
          </button>
        </div>
      </div>
      <Skills />
    </section>
  );
}
