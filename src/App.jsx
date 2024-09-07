import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import projectsData from "./projects.json";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";

const programmingLangData = [
  {
    name: "JavaScript",
    icon: "/img/js.png",
  },
  {
    name: "PHP",
    icon: "/img/php.png",
  },
  {
    name: "JAVA",
    icon: "/img/java.png",
  },
  {
    name: "Python",
    icon: "/img/python.png",
  },
];

const DBData = [
  {
    name: "MySQL",
    icon: "/img/mysql.png",
  },
  {
    name: "MongoDB",
    icon: "/img/mongo.jpg",
  },
];

const frameworkandlibrariesData = [
  {
    name: "Reactjs",
    icon: "/img/react.svg",
  },
  {
    name: "ExpressJS",
    icon: "/img/express.png",
  },
  {
    name: "Bootstrap",
    icon: "/img/bootstrap.png",
  },
  {
    name: "Jquery",
    icon: "/img/jquery.png",
  },
];

const toolsandplatformsData = [
  {
    name: "VS Code",
    icon: "/img/vscode.png",
  },
  {
    name: "Git",
    icon: "/img/git.png",
  },
  {
    name: "Github",
    icon: "/img/github.png",
  },
  {
    name: "Nodejs",
    icon: "/img/node.png",
  },
  {
    name: "Postman",
    icon: "/img/postman.png",
  },
  {
    name: "Android Studio",
    icon: "/img/android.png",
  },
  {
    name: "Eclipse",
    icon: "/img/eclipse.png",
  },
];

const webdevelopment = [
  {
    name: "HTML",
    icon: "/img/html.png",
  },
  {
    name: "CSS",
    icon: "/img/css3.png",
  },
  {
    name: "Javascript",
    icon: "/img/js.png",
  },
  {
    name: "Ajax",
    icon: "/img/ajax.jpg",
  },
  {
    name: "Json",
    icon: "/img/json.png",
  },
  {
    name: "RESTful Apis",
    icon: "/img/rest.png",
  },
];

function App() {
  const [modalData, setModalData] = useState();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const handleOnclick = (project) => {
    setModalData(project);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.target);
    // const
    if (!data.get("name") && !data.get("email") && !data.get("msg")) {
      alert("All Fields Required");
      setLoading(false);
    } else {
      try {
        const res = await fetch("https://sagarbhoi.in/send_mail.php", {
          method: "POST",
          body: data,
        });

        const result = await res.json();
        setLoading(false);
        // Clear the input values
        e.target.reset();
        alert(result.message);
      } catch (error) {
        console.error("Error sending mail:", error);
        setLoading(false);
        alert("Something went wrong.");
      }
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />

      {/* hero section  */}
      <div className="container hero">
        <div className="row">
          <div className="col-12 col-sm-6 intro" data-aos="fade-right">
            <h3>Hello, i'm</h3>
            <h1>Sagar Bhoi</h1>
            <p>
              Freelance Full Stack Web Developer. I create seamless and dynamic
              web experiences.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <a className="btn-1" href="#about">
                Download CV <i className="ri-file-download-fill"></i>
              </a>
              {/* <a className="btn-2" href="#projects">
                Projects <i className="ri-eye-fill"></i>
              </a> */}
            </div>
          </div>
          <div className="col-12 col-sm-6 pic-art" data-aos="fade-left">
            <div className="circle">
              <img src="/sagar.png" alt="Your Image" />
            </div>
          </div>
        </div>
      </div>
      {/* hero section  */}

      {/* ABout me section  */}
      <div
        id="about"
        className="container about-section my-5"
        data-aos="zoom-in"
      >
        <h3>About me:</h3>
        <p>
          Hi, my name is Sagar Aananda Bhoi, i am a Fullstack web developer, and
          Mobile developer. I'm a passionate and experienced web developer
          specializing in creating dynamic, responsive, and user-friendly web
          applications. With a strong foundation in both front-end and back-end
          technologies, I bring innovative solutions to life. Whether it's
          building robust websites, developing comprehensive systems, or
          participating in hackathons, my commitment to excellence and
          continuous learning drives me to deliver top-notch results. Explore my
          portfolio to see the projects I've worked on and the skills I bring to
          the table. Let's connect and make something amazing together!
        </p>
      </div>

      {/* ABout me section  */}

      {/* Skill section  */}
      <div id="skills" className="container about-section my-5">
        <h3>My Skills:</h3>
        <div>
          <div className="my-4">
            <h5 className="text-center">Programming Languages</h5>
            <div className="skill-container">
              {programmingLangData.map((skill) => {
                return (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    style={{ width: "auto", height: "45px" }}
                    data-toggle="tooltip"
                    data-placement="top"
                    title={skill.name}
                    data-aos="flip-left"
                  />
                );
              })}
            </div>
          </div>
          <div className="my-4">
            <h5 className="text-center">Frameworks and Libraries</h5>
            <div className="skill-container">
              {frameworkandlibrariesData.map((skill) => {
                return (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    style={{ width: "auto", height: "45px" }}
                    data-toggle="tooltip"
                    data-placement="top"
                    title={skill.name}
                    data-aos="flip-right"
                  />
                );
              })}
            </div>
          </div>
          <div className="my-4">
            <h5 className="text-center">Tools and Platforms</h5>
            <div className="skill-container">
              {toolsandplatformsData.map((skill) => {
                return (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    style={{ width: "auto", height: "45px" }}
                    data-toggle="tooltip"
                    data-placement="top"
                    title={skill.name}
                    data-aos="flip-left"
                  />
                );
              })}
            </div>
          </div>
          <div className="my-4">
            <h5 className="text-center">Database Technologies</h5>
            <div className="skill-container">
              {DBData.map((skill) => {
                return (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    style={{ width: "auto", height: "45px" }}
                    data-toggle="tooltip"
                    data-placement="top"
                    title={skill.name}
                    data-aos="flip-right"
                  />
                );
              })}
            </div>
          </div>

          <div className="my-4">
            <h5 className="text-center">Web Development</h5>
            <div className="skill-container">
              {webdevelopment.map((skill) => {
                return (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    style={{ width: "auto", height: "45px" }}
                    data-toggle="tooltip"
                    data-placement="top"
                    title={skill.name}
                    data-aos="flip-left"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Skill section  */}

      {/* Education section  */}
      <div id="education" className="container about-section my-5">
        <h3>Education:</h3>
        <div
          className="row d-flex justify-content-center gap-2"
          data-aos="fade-up"
        >
          <div className="education-box col-12 col-md-5">
            <h5>Gangamai College of Engineering</h5>
            <h6>Bachelor of Engineering (BE)</h6>
            <span>2024</span>
            <hr />
            <p>Specialization: Computer Science & Engineering</p>
          </div>

          <div className="education-box col-12 col-md-5" data-aos="fade-up">
            <h5>Ahinsa polytechnic</h5>
            <h6>Diploma</h6>
            <span>2021</span>
            <hr />
            <p>Specialization: Computer Technology</p>
          </div>

          <div className="education-box col-12 col-md-5" data-aos="fade-up">
            <h5>R.D.M.P Jr College</h5>
            <h6>Higher Secondary Education (HSC)</h6>
            <span>2019</span>
            <hr />
            <p>Specialization: Science</p>
          </div>
        </div>
      </div>

      {/* Education section  */}

      {/*service section  */}
      <div className="container service-section my-5">
        <h3 className="mb-4">The Services I Offer:</h3>

        <div className="service-container gap-2" data-aos="zoom-in-right">
          <div className="service-card">
            <i className="ri-pages-line fs-1"></i>
            <h5>WEB DEVELOPMENT</h5>
            <p>
              As a Full Stack Web Developer, I specialize in creating dynamic,
              responsive, and user-friendly web applications using the latest
              technologies. My expertise spans across front-end and back-end
              development, ensuring seamless and efficient solutions for every
              project.
            </p>
          </div>
          <div className="service-card" data-aos="zoom-in-left">
            <i className="ri-android-line fs-1"></i>
            <h5>MOBILE DEVELOPMENT</h5>
            <p>
              While my primary focus is on web development, I also develop
              Android applications. I aim to create intuitive and functional
              mobile apps that enhance user experiences and meet modern
              standards.
            </p>
          </div>
        </div>
      </div>

      {/* service section  */}

      {/*Project section  */}
      <div id="projects" className="container service-section my-5">
        <h3 className="mb-4">Featured projects:</h3>
        <p>
          I’ve worked on numerous projects as a Web Developer, here are a few of
          my live, real-world creations.
        </p>

        <div className="project-container gap-3">
          {projectsData.map((project) => {
            return (
              <div
                className="project-card"
                key={project.title}
                data-aos="fade-up"
              >
                <div className="img-box">
                  <img
                    className="img-fluid"
                    src={project.thumbnail}
                    alt="project"
                  />
                </div>
                <div className="content-box">
                  <h6 className="mt-2">{project.title}</h6>
                  <p>{project.description.slice(0, 100)}...</p>
                  <a
                    className="btn-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    type="button"
                    onClick={() => handleOnclick(project)}
                  >
                    View Details <i className="ri-external-link-line"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project section  */}

      {/*Contact section  */}
      <div
        id="contact"
        className="container service-section contact-section row my-5"
      >
        <div className="col-12 col-sm-6">
          <h3 className="mb-4">Connect With Me:</h3>
          <div className="contact-icons">
            <a href="mailto:ramolesagar08@gmail.com" data-aos="flip-up">
              <i className="ri-mail-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/bhoi-sagar/"
              target="_blank"
              data-aos="flip-up"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a
              href="https://github.com/SagarBhoi404"
              target="_blank"
              data-aos="flip-up"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/sagarbhoi.dev"
              target="_blank"
              data-aos="flip-up"
            >
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <h6 className="mt-2">Contact me, let's make magic together</h6>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name :"
                  name="name"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email :"
                  name="email"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Message :"
                  name="msg"
                  autoComplete="off"
                  required
                />
              </div>

              <button type="submit" className="btn-contact">
                {loading ? (
                  <img
                    src="/tail-spin.svg"
                    alt="loading..."
                    style={{ height: "22px" }}
                  />
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact section  */}

      <Modal data={modalData} />
      <Footer />
    </>
  );
}

export default App;
