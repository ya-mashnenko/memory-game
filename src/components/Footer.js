import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="school-link">
        <a href="https://rs.school/js/">
          <img
            src="https://rs.school/images/rs_school_js.svg"
            alt="RSSchool"
            width="50px"
            height="50px"
          />
        </a>
      </div>
      <p>
        2021
        <br />
        <a href="https://icons8.com/icon/3761/menu" id="icons8">
          Menu icon by Icons8
        </a>
      </p>
      <div className="github-link">
        <a href="https://github.com/ya-mashnenko">
          <img
            src="../../public/GitHub_Logo.png"
            alt="GitHub acc"
            width="70px"
            height="30px"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
