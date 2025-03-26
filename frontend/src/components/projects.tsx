import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const projects = [
    {
      title: "WeWrite",
      image: "images/projects/wewrite.png",
      liveLink: "https://wewrite.blog",
      githubLink: "",
      description: `<a href="https://wewrite.blog/" target="_blank" rel="noopener noreferrer">WeWrite</a> is a dynamic blogging platform that enables writers to share their insights and engage with a wider audience. Built using the MERN stack, WeWrite provides a seamless user experience with a structured content management system for efficient blog creation and management.
<br/><br/>
The platform is deployed on Netlify with prerendering for optimized performance and SEO. It also features a custom domain, ensuring a professional and branded online presence.`,
    },
    {
      title: "SideNote",
      image: "images/projects/sidenote.png",
      liveLink: "https://sidenote.onrender.com/",
      githubLink: "https://github.com/jporteria/SideNote-web",
      description:
         `<a href="https://sidenote.onrender.com/" target="_blank" rel="noopener noreferrer">SideNote</a> is a note-taking web application designed to provide a seamless experience for users who want to take notes without leaving the browser. Originally built as a Chrome extension, it was transitioned to a web-based application due to Manifest V3 restrictions. The app is powered by React.js for the frontend and Firebase for authentication and real-time data synchronization.`,
    },
    {
      title: "NetPlease",
      image: "images/projects/netplease.png",
      liveLink: "https://netplease.onrender.com/",
      githubLink: "https://github.com/wagako3/netplease",
      description:
        `<a href="https://netplease.onrender.com/" target="_blank" rel="noopener noreferrer">NetPlease</a> is a movie rating website that allows users to discover, rate, and review movies. Built using the MERN stack and powered by the TMDb movie API, it provides an interactive platform for movie enthusiasts to explore a vast collection of films, share their opinions, and engage with a community of like-minded users.`,
    },
    {
      title: "GiftLink",
      image: "images/projects/giftlink.png",
      liveLink: "https://giftlink-xw98.onrender.com/app",
      githubLink: "https://github.com/jporteria/fullstack-capstone-project",
      description:
        "This project was built using the MERN stack (MongoDB, Express, React, and Node.js) with JWT-based authentication. The app was designed to demonstrate core web development skills, including user authentication, CRUD operations, containerized deployment using Docker, and a CI/CD (Continuous Integration/Continuous Deployment) pipeline for automating the build and deployment process. However, after evaluating its functionality and feasibility, the project was discontinued as it was deemed not suitable for real-world use.",
    },
  ];

  const checkScrollPosition = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setAtStart(scrollLeft === 0);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition(); // Check on mount
    }
    return () => slider?.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="projects--section" id="projects--section" ref={ref}>
      <h1 className={inView ? "showHidden" : "hidden"}>Projects</h1>

      {!atStart && (
        <button
          id="prevBtn"
          className="slider--buttons"
          onClick={() => scrollSlider("left")}
        >
          &#10094;
        </button>
      )}
      {!atEnd && (
        <button
          id="nextBtn"
          className="slider--buttons"
          onClick={() => scrollSlider("right")}
        >
          &#10095;
        </button>
      )}

      <div ref={sliderRef} className="slider--container">
        {projects.map((project, i) => (
          <div key={i} className="project">
            <img
              className="projectPhoto"
              src={project.image}
              alt={project.title}
            />
            <div className="project--description">
              <h2 className="project--title">{project.title}</h2>
              <div className="project--buttons">
                <button onClick={() => window.open(project.liveLink, "_blank")}>
                  View Live
                </button>
                {project.githubLink ? (
                  <button
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    View on Github
                  </button>
                ) : (
                  ""
                )}
              </div>
              <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
