import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "Software Development Engineer",
          "Java Backend Developer",
          "MERN Stack Developer",
          "Cloud Enthusiast"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;