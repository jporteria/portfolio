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
          src="https://drive.google.com/thumbnail?id=1w1HcCbNpBeXq5-RsqmjF7UeqSb1U_or-&sz=w1000"
          alt="X"
          height="20px"
        />
      </button>
      <div className="moreAboutMe--withCloseButton">
        <p className="moreAboutMe">
          During college, I gained hands-on experience with programming
          languages like C++, Java, and PHP, learning how to build software and
          web applications from scratch to deployment. However, after graduating
          in 2019, I faced a challenge that many fresh graduates encounter:
          translating technical knowledge into a career. Unsure of how to
          navigate the IT job market, I pursued a role in the BPO industry to
          gain work experience.
          <br />
          <br />
          Over time, I realized that while the BPO industry honed my
          communication and problem-solving skills, it didn’t align with my
          passion for technology. Years passed, and I saw my technical knowledge
          fade, but I also recognized that my potential remained untapped.
          <br />
          <br />
          Determined to reclaim my passion, I began teaching myself JavaScript
          and delved into modern frameworks. While self-study reignited my
          technical skills, I’ve come to understand that true growth comes from
          collaboration and real-world experience.
          <br />
          <br />
          Today, I am eager to contribute to a team as a web developer,
          leveraging my foundation in programming and my drive to learn. I am
          ready to embrace new challenges, develop innovative solutions, and
          grow alongside professionals in the field I love.
        </p>
        <button className="moreAboutMe--closeButton" onClick={hideAboutBox}>
          Close
        </button>
      </div>
    </div>
  );
}
