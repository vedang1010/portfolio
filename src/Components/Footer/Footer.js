import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineYoutube,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css"

function Footer() {
  
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © 2024</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Vedang Khedekar</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          {/* <li className="social-icons">
              <a
                href="https://facebook.com/sijeeshmiziha"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillFacebook/>
              </a>
            </li> */}
            <li className="social-icons">
              <a
                href="https://github.com/vedang1010/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/vedang-khedekar/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/vedang_18/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://youtube.com/c/SijeeshMiziha"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineYoutube />
              </a>
            </li> */}
           
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;