import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";

class ScrollToTop extends Component {
  render() {
    return (
      <>
        <Link
          to="/"
          className={this.props.showTop ? "scroll-top top-btn" : "scroll-top"}
          onClick={this.props.scroll}
        >
          <FaChevronUp />
        </Link>
      </>
    );
  }
}
export default ScrollToTop;
