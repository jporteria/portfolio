import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const NetPleaseSection = () => {
    return (
      <div className={inView ? "project showHidden" : "project hidden"}>
        <img
          className="projectPhoto"
          src="images/netPlease.png"
          alt="no image available"
        />
        <div className="project--description">
          <h2 className="project--title">NetPlease</h2>
          <div className="project--buttons">
            <button
              onClick={() =>
                window.open("https://netplease.onrender.com/", "NetPlease")
              }
            >
              Go Live
            </button>
            <button
              onClick={() =>
                window.open("https://github.com/wagako3/netplease", "NetPlease")
              }
            >
              View on Github
            </button>
          </div>
          <p>
            NetPlease is a movie rating website aimed at providing users with a
            platform to discover, rate, and review movies. This project is
            created using MERN stack and movie API from TMDb. This website is
            still in the development phase and does not have a responsive design
            yet.
          </p>
        </div>
      </div>
    );
  };

  const SecondSection = () => {
    return (
      <div className={inView ? "project showHidden" : "project hidden"}>
        <img
          className="projectPhoto"
          src="images/netPlease.png"
          alt="no image available"
        />
        <div className="project--description">
          <h2 className="project--title">second section</h2>
          <div className="project--buttons">
            <button
              onClick={() =>
                window.open("https://netplease.onrender.com/", "NetPlease")
              }
            >
              Go Live
            </button>
            <button
              onClick={() =>
                window.open("https://github.com/wagako3/netplease", "NetPlease")
              }
            >
              View on Github
            </button>
          </div>
          <p>
            NetPlease is a movie rating website aimed at providing users with a
            platform to discover, rate, and review movies. This project is
            created using MERN stack and movie API from TMDb. This website is
            still in the development phase and does not have a responsive design
            yet.
          </p>
        </div>
      </div>
    );
  };

  const [index, setIndex] = useState(0);
  const slides = [
    <NetPleaseSection />,
    <SecondSection />,
    <NetPleaseSection />,
  ];

  const updateSlider = (newIndex: any) => {
    if (newIndex >= 0 && newIndex < slides.length) {
      setIndex(newIndex);
    }
  };

  return (
    <section className="projects--section" id="projects--section" ref={ref}>
      <h1 className={inView ? "showHidden" : "hidden"}>Projects</h1>
      <div className="slider--container">
        <button
          className="slider--buttons"
          id="prevBtn"
          onClick={() => updateSlider(index - 1)}
          disabled={index === 0}
        >
          Prev
        </button>
        {/* projects goes here */}
        <div
          className="project--slider"
          style={{ transform: `translateX(${-index * 100}vw)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="projects">
              {slide}
            </div>
          ))}
        </div>
        <button
          className="slider--buttons"
          id="nextBtn"
          onClick={() => updateSlider(index + 1)}
          disabled={index === slides.length - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
}
