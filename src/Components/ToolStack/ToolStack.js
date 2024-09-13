import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiAmazonaws,
  SiNginx,
  SiHeroku,
  SiVercel,
  SiNetlify,

  SiFirebase,
  SiCss3,
  SiHtml5
} from "react-icons/si";
import { FaAndroid } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
function ToolStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {/* <Col xs={4} md={2} className="tech-icons">
          <SiLinux />
        </Col> */}
        {/* <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col> */}
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazonaws />
        </Col>
        {/* <Col xs={4} md={2} className="tech-icons">
          <SiNginx />
        </Col> */}
        {/* <Col xs={4} md={2} className="tech-icons">
          <SiHeroku />
        </Col> */}
        {/* <Col xs={4} md={2} className="tech-icons">
          <SiVercel />
        </Col> */}
        {/* <Col xs={4} md={2} className="tech-icons">
          <SiNetlify />
        </Col> */}
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaAndroid />
        </Col>
        {/* <Col xs={4} md={2} className="tech-icons">
          <FaDev />
        </Col> */}
      </Row>
  );
}

export default ToolStack;