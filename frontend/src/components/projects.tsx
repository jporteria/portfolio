import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const NetPleaseSection = () => (
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
              window.open("https://netplease.onrender.com/", "_blank")
            }
          >
            Go Live
          </button>
          <button
            onClick={() =>
              window.open("https://github.com/wagako3/netplease", "_blank")
            }
          >
            View on Github
          </button>
        </div>
        <p>
          NetPlease is a movie rating website aimed at providing users with a
          platform to discover, rate, and review movies. This project is created
          using MERN stack and movie API from TMDb. This website is still in the
          development phase and does not have a responsive design yet.
        </p>
      </div>
    </div>
  );

  const GiftLinkSection = () => (
    <div className={inView ? "project showHidden" : "project hidden"}>
      <img
        className="projectPhoto"
        src="images/giftlink.png"
        alt="no image available"
      />
      <div className="project--description">
        <h2 className="project--title">GiftLink</h2>
        <div className="project--buttons">
          <button
            onClick={() =>
              window.open("https://giftlink-xw98.onrender.com/app", "_blank")
            }
          >
            Go Live
          </button>
          <button
            onClick={() =>
              window.open(
                "https://github.com/jporteria/fullstack-capstone-project",
                "_blank"
              )
            }
          >
            View on Github
          </button>
        </div>
        <p>
          This project was built using the MERN stack (MongoDB, Express, React,
          and Node.js) with JWT-based authentication. The app was designed to
          demonstrate core web development skills, including user
          authentication, CRUD operations, containerized deployment using
          Docker, and a CI/CD (Continuous Integration/Continuous Deployment)
          pipeline for automating the build and deployment process. However,
          after evaluating its functionality and feasibility, the project was
          discontinued as it was deemed not suitable for real-world use.
        </p>
      </div>
    </div>
  );
  const SideNoteSection = () => (
    <div className={inView ? "project showHidden" : "project hidden"}>
      <img
        className="projectPhoto"
        src="images/sidenote.png"
        alt="no image available"
      />
      <div className="project--description">
        <h2 className="project--title">SideNote</h2>
        <div className="project--buttons">
          <button
            onClick={() =>
              window.open("https://sidenote.onrender.com/", "_blank")
            }
          >
            Go Live
          </button>
          <button
            onClick={() =>
              window.open("https://github.com/jporteria/SideNote-web", "_blank")
            }
          >
            View on Github
          </button>
        </div>
        <p>
          SideNote is a note-taking web application designed to provide a
          seamless experience for users who want to take notes without leaving
          the browser. Originally built as a Chrome extension, it was
          transitioned to a web-based application due to Manifest V3
          restrictions. The app is powered by React.js for the frontend and
          Firebase for authentication and real-time data synchronization.
        </p>
      </div>
    </div>
  );

  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    <SideNoteSection />,
    <GiftLinkSection />,
    <NetPleaseSection />,
  ];

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (index === slides.length) {
      setIndex(0); // Jump to the first slide
    } else if (index === -1) {
      setIndex(slides.length - 1); // Jump to the last slide
    }
  };

  const updateSlider = (newIndex: any) => {
    if (isTransitioning) return; // Prevent updates during a transition
    setIsTransitioning(true);
    setIndex(newIndex);
  };

  return (
    <section className="projects--section" id="projects--section" ref={ref}>
      <h1 className={inView ? "showHidden" : "hidden"}>Projects</h1>
      <div
        className={
          inView ? "showHidden slider--container" : "hidden slider--container"
        }
      >
        <button
          className="slider--buttons"
          id="prevBtn"
          onClick={() => updateSlider(index - 1)}
        >
          <img
            className="slider--image"
            src="images/prev-icon.png"
            alt="Prev"
          />
        </button>

        <div
          className="project--slider"
          style={{
            transform: `translateX(${-index * 100}vw)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {/* Clone last slide to the beginning */}
          <div className="projects">{slides[slides.length - 1]}</div>

          {/* Actual slides */}
          {slides.map((slide, i) => (
            <div key={i} className="projects">
              {slide}
            </div>
          ))}

          {/* Clone first slide to the end */}
          <div className="projects">{slides[0]}</div>
        </div>

        <button
          className="slider--buttons"
          id="nextBtn"
          onClick={() => updateSlider(index + 1)}
        >
          <img
            className="slider--image"
            src="images/next-icon.png"
            alt="Next"
          />
        </button>
      </div>
    </section>
  );
}
