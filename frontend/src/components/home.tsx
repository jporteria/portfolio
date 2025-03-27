export default function Home() {
  return (
    <section className="home--section" id="home">
      <div className="home--text">
        <p>
          <span className="name">Hi, I'm Jess</span> <br />
          <br />
          I'm a full-stack web developer passionate about creating scalable,
          high-performance web applications that deliver seamless user
          experiences.
        </p>
        <div className="homepageSocial">
        <div
            className="socialBox"
            onClick={() =>
              window.open("https://www.facebook.com/curlytopszxc", "fb")
            }
          >
            <img
              className="socialIcon"
              src="images/contacts/fb.png"
              alt="fb icon"
            />
          </div>
          <div
            className="socialBox"
            onClick={() =>
              window.open("https://www.instagram.com/jessporteria_/", "li")
            }
          >
            <img
              className="socialIcon"
              src="images/contacts/ig.png"
              alt="ig icon"
            />
          </div>
          <div
            className="socialBox"
            onClick={() =>
              window.open("https://www.linkedin.com/in/jessie-porteria", "li")
            }
          >
            <img
              className="socialIcon"
              src="images/contacts/li.png"
              alt="linkedin icon"
            />
          </div>
          <div
            className="socialBox"
            onClick={() => window.open("https://github.com/jporteria", "li")}
          >
            <img
              className="socialIcon"
              src="images/contacts/github.png"
              alt="github icon"
            />
          </div>
        </div>
        <button
          className="downloadCV"
          onClick={() => window.open("files/JessiePorteria_Resume.pdf", "resume")}
        >
          Open CV
        </button>
      </div>
      <div className="homePhotoContainer">
        <img
          className="homePhoto"
          src="images/avatar.png"
          alt="photo not available"
        />
      </div>
    </section>
  );
}
