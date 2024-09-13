import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg"; // Ensure the image path is correct
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function SelfIntro() {
  return (
    <Container fluid className="home-about-section container-fluid" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A LITTLE ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              I am a dedicated Software Engineer with a passion for leveraging technology to solve real-world problems. 
              With hands-on experience in building robust platforms and implementing low-code solutions, I enjoy pushing the 
              boundaries of software development.
              <br />
              <br />I am skilled in{" "}
              <i>
                <b className="purple"> Java, JavaScript, </b>
              </i>
              and have a deep understanding of{" "}
              <b className="purple"> modern web and mobile technologies.</b>
              <br />
              <br />
              My interests lie in{" "}
              <i>
                <b className="purple"> web development </b>
              </i>
              and exploring innovative solutions in{" "}
              <b className="purple"> Blockchain, Cloud, DevOps, </b>
              and{" "}
              <b className="purple"> Android development. </b>
              <br />
              <br />
              I thrive on creating impactful projects using{" "}
              <b className="purple"> React.js, Next.js, </b> and developing dynamic, user-friendly applications with{" "}
              <b className="purple"> Node.js, </b> along with crafting engaging mobile experiences through{" "}
              <b className="purple"> Android Studio </b> and modern Android development practices.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Vedang Khedekar's avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    </Container>
  );
}

export default SelfIntro;
