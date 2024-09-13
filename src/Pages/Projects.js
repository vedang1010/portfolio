import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";
import internship from "../Assets/project/Internship.png"
import se from "../Assets/project/se.png"
import dbms from "../Assets/project/dbms.png"
import ai from "../Assets/project/ai.png"
import cn from "../Assets/project/cn.png"
import hackathon from "../Assets/project/hackathon.png"
import app  from "../Assets/project/android.png"
import dsa  from "../Assets/project/dsa.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={internship}
              title="Tagging-System"
              description="Tagging System is a MERN stack project enabling users to interact with components through a view and upload system. It features a commenting system with like/dislike functionality and an upload page with tagging and image previews managed via Cloudinary and MongoDB. The profile page allows users to update information and view their uploaded components, ensuring seamless frontend-backend integration."
              link="https://github.com/vedang1010/Tagging-system"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={hackathon}
              title="BookMyCampus - A Venue Booking System"
              description="BookMyCampus is a Next.js and Firebase application designed to streamline venue requests and approvals. It includes a request form with validation, automated email notifications using Email.js, and dynamic calendar updates to reflect approved bookings. The system simplifies venue management and communication."
              link="https://github.com/vaishnavi775/Hackathon"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={app}
              title="E-VoteX - An Voting App"
              description="E-VoteX is an Android application built with Android Studio and Firebase, offering secure user authentication and intuitive navigation. Users can create elections, cast votes, and view results in real-time. The app facilitates seamless voting experiences and real-time data handling, ideal for small-scale decision-making or college elections."
              link="https://github.com/vedang1010/VotingApp-RPPOOP-Project"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={se}
              title="Decentralized Web Hosting"
              description="Decentralized Web Hosting uses Next.js and blockchain technologies to offer a platform for hosting websites securely. Features include multi-method authentication, a user-friendly dashboard, and integration with IPFS through Fleek.xyz for secure file storage on the Ethereum blockchain. Users can also edit their websites in real-time with the Monaco editor."
              link="https://github.com/vedang1010/Decentralized-Web-Hosting-using-BlockChain"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={dbms}
              title="Car Rental Management"
              description="Car Rental Management is a PHP and MySQL-based system for efficient car rental operations. It features a normalized database schema for managing vehicles and bookings, an employee management interface, and secure user authentication. The system optimizes data management and streamlines employee tasks."
              link="https://github.com/vedang1010/Car-Rental-Database-Management-DBMS-mini-project"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={ai}
              title="Blob Wars Game"
              description="Designed and implemented the Blob Wars Game using Python and Pygame. This project showcases an AI-driven strategy game where the AlphaBeta algorithm with a depth of 2 is used to enable the AI agent to make optimal moves. The game demonstrates effective use of game theory in creating challenging and intelligent gameplay experiences."
              link="https://github.com/vedang1010/Blob-Wars-Game-AI-Project"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={cn}
              title="Mail Client"
              description="Developed a functional email client using Python and PyQt. The application supports email login, allowing users to access their accounts securely. It features the capability to send emails with attachments and includes a history display that shows the last 10 sent and received emails. The client provides a user-friendly interface for managing email communications efficiently."
              link="https://github.com/vedang1010/Mail-Client-CN-mini-project"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={dsa}
              title="Blog Posting Platform"
              description="Blog Posting Platform is a social blogging platform developed in C, featuring custom data structures like Hashmaps for credentials and Graphs for managing friendships. It supports functionalities such as posting content, adding friends, and exploring profiles. The project demonstrates advanced C programming skills and efficient user interaction management."
              link="https://github.com/vedang1010/Blog-Posting-Platform-DSA_Mini_Project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;


// Internship
// hackathon
// app
// se
// dbms
// ai
// cn
// dsa
