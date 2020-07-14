import React, { Component, Fragment } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaSass,
  FaLinux,
  FaGit,
  FaGulp,
  FaArrowDown
} from "react-icons/fa";
import { FaRocket, FaHeartbeat, FaGem, FaDesktop } from "react-icons/fa";
import Navbar from "./components/Navbar";
import { Link } from "react-scroll";

// import img1 from "./images/benkih-ecommerce.png";
// import img2 from "./images/benkih-todo.png";
// import img3 from "./images/benkih-budget.png";
// import img4 from "./images/benkih-quiz.png";
// import img5 from "./images/peterihimirefewd.png";

// import resp from "./images/svg-imgs/responsive.svg";
// import send from "./images/svg-imgs/send.svg";
// import vide from "./images/svg-imgs/video-player.svg";
// import smar from "./images/svg-imgs/smartphone.svg";

import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Skill from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    services: [
      {
        icon: <FaGem />,
        // icon: <img src={smar} alt="send" />,
        iconColor: "gem-color",
        title: "intuitive UX/UI",
        info:
          "I have strong preference for easy to use Intuitive User Experience and User Interfaces."
      },
      {
        icon: <FaRocket />,
        // icon: <img src={send} alt="send" />,
        iconColor: "rocket-color",
        title: "fast load time",
        info:
          "Fast load times and lag free interaction are my highest priority."
      },
      {
        icon: <FaDesktop />,
        // icon: <img src={resp} alt="send" />,
        iconColor: "desktop-color",
        title: "responsive layout",
        info:
          "My layout will work on any device, be it desktops, laptops, tablets and mobile phones."
      },
      {
        icon: <FaHeartbeat />,
        // icon: <img src={vide} alt="send" />,
        iconColor: "heart-color",
        title: "dynamic website",
        info:
          "Website dont have to be static, I like to make web pages come to life."
      }
    ],
    stacks: [
      {
        title: "web designer",
        details:
          "As a designer, passionate about making a difference, I value simple content structure, clean design patterns and thoughtful interactions. I have strong preference for easy to use Intuitive User Interface and User Experience. Things I enjoy designing are UI and UX for web , desktop and mobile layouts."
      },
      {
        title: "web developer",
        details:
          "I've always been drawn to the overlap between design and development. In addition to web design, I like to code things from scratch and enjoy bringing ideas to life in the browser. Technologies I use in the front-end are HTML, CSS, JavaScript, Bootstrap, React, Node.JS etc. Check out some of my projects in the portfolio section."
      },
      {
        title: "mentor",
        details:
          " Starting the journey of a web development and software engineering has never been easy, I know what it feels like, thats why I genuinely care about new programmers and fellow web developers, mentoring and helping them improve on their soft and hard skills as a software engineer."
      }
    ],
    skills: [
      {
        icon: <FaHtml5 />,
        title: "html",
        iconColor: "html-color",
        lineColor: "html-line"
      },
      {
        icon: <FaCss3Alt />,
        title: "css",
        iconColor: "css-color",
        lineColor: "css-line"
      },
      {
        icon: <FaJs />,
        title: "javascript",
        iconColor: "js-color",
        lineColor: "js-line"
      },
      {
        icon: <FaReact />,
        title: "react",
        iconColor: "react-color",
        lineColor: "react-line"
      },
      {
        icon: <FaBootstrap />,
        title: "bootstrap",
        iconColor: "bootstrap-color",
        lineColor: "bootstrap-line"
      },
      {
        icon: <FaNodeJs />,
        title: "node js",
        iconColor: "node-color",
        lineColor: "node-line"
      },
      {
        icon: <FaLinux />,
        title: "linux",
        iconColor: "linux-color",
        lineColor: "linux-line"
      },
      {
        icon: <FaGit />,
        title: "git",
        iconColor: "git-color",
        lineColor: "git-line"
      },
      {
        icon: <FaGulp />,
        title: "gulp",
        iconColor: "gulp-color",
        lineColor: "gulp-line"
      },
      {
        icon: <FaSass />,
        title: "saas",
        iconColor: "sass-color",
        lineColor: "sass-line"
      }
    ],
    isOpen: false,
    isVisible: false,
    //
    projects: [],
    sortedProjects: [],
    technologies: [],
    loading: true,
    type: "all"
  };

  componentDidMount() {
    document.addEventListener("scroll", e => {
      this.toggleVisibility();
    });
  }

  toggleHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  removeOverlay = () => {
    console.log("navbar overlay has been clicked.");
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggleVisibility = () => {
    // let position = window.scrollY;
    let position = window.pageYOffset;
    console.log(position);
    if (position > 2050) {
      console.log("I am at position 1050 and above");
      this.setState({
        isVisible: true
      });
    } else {
      this.setState({
        isVisible: false
      });
    }
  };

  scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <Fragment>
        <Navbar
          clicked={this.toggleHandler}
          showNav={this.state.isOpen}
          overlay={this.removeOverlay}
        />
        <Hero hero="defaultHero">
          <Banner name="peter ihimire" title="frontend web developer">
            <Link
              activeClass="active"
              to="project-section"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="btn animated-btn"
            >
              see my work
            </Link>
          </Banner>
          <Link
            activeClass="active"
            to="service-section"
            spy={true}
            smooth={true}
            duration={500}
            offset={-74}
            className="indicator"
          >
            <FaArrowDown />
          </Link>
        </Hero>
        <Services myServices={this.state.services} />
        <About aboutDetails={this.state.stacks} />
        <Projects />
        <Skill skills={this.state.skills} />
        <Contact />
        <Footer />
        <ScrollToTop scroll={this.scrollUp} showTop={this.state.isVisible} />
      </Fragment>
    );
  }
}

export default App;
