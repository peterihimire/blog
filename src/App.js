import React, { Component, Fragment } from "react";
import "./App.css";
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
  FaArrowAltCircleUp
} from "react-icons/fa";
import { FaRocket, FaHeartbeat, FaGem, FaDesktop } from "react-icons/fa";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

// import Default from "./pages/Missing";
// import Home from "./pages/Home";

import img1 from "./images/benkih-ecommerce.png";
import img2 from "./images/benkih-todo.png";
import img3 from "./images/benkih-budget.png";
import img4 from "./images/benkih-quiz.png";
import img5 from "./images/peterihimirefewd.png";

import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Porfolio";
import Skill from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    services: [
      {
        icon: <FaGem />,
        iconColor: "gem-color",
        title: "intuitive UX/UI",
        info:
          "Strong preference for easy to use Intuitive User Experience and User Interface."
      },
      {
        icon: <FaRocket />,
        iconColor: "rocket-color",
        title: "fast load time",
        info:
          "Fast load times and lag free interaction are my highest priority."
      },
      {
        icon: <FaDesktop />,
        iconColor: "desktop-color",
        title: "responsive layout",
        info:
          "My layout will work on any device, be it desktop, laptop and mobile phones."
      },
      {
        icon: <FaHeartbeat />,
        iconColor: "heart-color",
        title: "dynamic website",
        info:
          "Website dont have to be static, I like to make webpages come to life."
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
    projects: [
      {
        title: "todo app",
        image: img2,
        detail: "A todo productivity app to help organize task.",
        technologies: ["html", "css", "javascript"],
        github: "https://github.com/peterihimire/benkih-todo",
        online: "https://peterihimire.github.io/benkih-todo"
      },
      {
        title: "budget app",
        image: img3,
        detail: "A budget app to help organize expenses.",
        technologies: ["html", "css", "javascript"],
        github: "https://github.com/peterihimire/benkih-budget",
        online: "https://peterihimire.github.io/benkih-budget"
      },
      {
        title: "quiz app",
        image: img4,
        detail: "A science/computer based quiz app.",
        technologies: ["html", "css", "javascript"],
        github: "https://github.com/peterihimire/benkih-quiz",
        online: "https://peterihimire.github.io/benkih-quiz"
      },
      {
        title: "product store",
        image: img1,
        detail: "An e-commerce store, frontend.",
        technologies: ["html", "css", "javascript"],
        github: "https://github.com/peterihimire/benkih-ecommerce",
        online: "https://peterihimire.github.io/benkih-ecommerce"
      },
      {
        title: "personal website",
        image: img5,
        detail: "A personal portfolio website, hosted on netlify.",
        technologies: ["react"],
        github: "https://github.com/peterihimire/peterihimire",
        online: "https://peterihimire.github.io/peterihimire"
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
    isVisible: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
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

  listenToScroll = () => {
    // let position = window.scrollY;
    let position = window.pageYOffset;
    console.log(position);
    if (position >= 1050) {
      console.log("I am at position 1050 and above");
      this.setState({
        isVisible: !this.state.isVisible
      });
    }
  };

  render() {
    return (
      <Fragment>
        <Navbar
          clicked={this.toggleHandler}
          showNav={this.state.isOpen}
          overlay={this.removeOverlay}
        />
        <Hero hero="defaultHero">
          <Banner name="peter ihimire" title="frontend web developer" />
        </Hero>
        <Services myServices={this.state.services} />
        <About aboutDetails={this.state.stacks} />
        <Portfolio portfolios={this.state.projects} />
        <Skill skills={this.state.skills} />
        <Contact />
        <Footer />

        {/* This is element I am trying to apply the listenToScroll method */}
        <Link
          to="/"
          className={this.state.isVisible ? "scroll-top top-btn" : "scroll-top"}
        >
          <FaArrowAltCircleUp />
        </Link>
      </Fragment>
    );
  }
}

export default App;
