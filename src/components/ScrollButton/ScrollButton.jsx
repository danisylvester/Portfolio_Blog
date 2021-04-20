import React, { Component } from "react";
import styles from "./scrollButton.module.scss";

export default class ScrollButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount(){
  //     window.addEventListener(scroll, this.displayButton);
  // }

  // displayButton() {
  //   const scrollBtn = document.getElementById("scrollBtn");
  //   if (document.body.scrollTop > 10) {
  //     scrollBtn.style.display = "block";
  //   } else {
  //     scrollBtn.style.display = "none";
  //   }
  // }

  handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div>
        <button
          id="scrollBtn"
          onClick={this.handleClick}
          className={styles.scrollBtn}
        >
          ^
        </button>
      </div>
    );
  }
}
