import { useContext } from "react";
import { Context } from "../app";

export default function MoreAboutMe() {
  const { aboutBox, setAboutBox } = useContext(Context);

  function hideAboutBox() {
    setAboutBox(false);
  }

  return (
    <div className={aboutBox ? "moreAboutMe--box" : "hideMoreAboutMe--box"}>
      <button className="moreAboutMe--close" onClick={hideAboutBox}>
        <img
          src="images/close.png"
          alt="X"
          height="20px"
        />
      </button>
      <div className="moreAboutMe--withCloseButton">
        <p className="moreAboutMe">
          During college, I built software and web applications using C++, Java, and PHP, gaining hands-on experience in programming. After graduating in 2019, I explored a career in the BPO industry, where I refined my communication and problem-solving skills. However, my passion for technology led me back to coding, and I dedicated myself to mastering JavaScript, modern frameworks, and full-stack development.
          <br />
          <br />
          Now, I’m eager to apply my technical skills and collaborate with a team to build impactful solutions. I thrive in dynamic environments, embrace new challenges, and continuously seek growth as a developer.
        </p>
      </div>
    </div>
  );
}
