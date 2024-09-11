import RootLayout from "./layout";
export const layout = RootLayout;
import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/HomePage.module.css";
import Link from "next/link";

const Home = () => (
  <div className={styles.container}>
    <div className={styles.background}></div>
    <div
      className={`"d-flex justify-content-between align-items-center" ${styles.content}`}
    >
      <Row className="justify-content-between d-flex ">
        <Col className="col-12 col-md-3 mx-auto my-2">
          <Container
            style={{
              width: "30vw",
              height: "30vh",
              backgroundColor: "#1e1e1e",
              overflow: "hidden",
              borderRadius: "2em",
            }}
            className="text-center py-3 d-flex align-items-center justify-content-center display-4 fw-semibold"
          >
            <Link href="/caro">
              <button className={styles.sun}>Tic Tac Toe</button>
            </Link>
          </Container>
        </Col>
        <Col className="col-12 col-md-3 mx-auto my-2">
          <Container
            style={{
              width: "30vw",
              height: "30vh",
              backgroundColor: "#1e1e1e",
              overflow: "hidden",
              borderRadius: "2em",
            }}
            className="text-center py-3 d-flex align-items-center justify-content-center display-4 fw-semibold"
          >
            <Link href="/caro">
              <button className={styles.sun}>Memory Game</button>
            </Link>
          </Container>
        </Col>
        <Col className="col-12 col-md-3 mx-auto my-2">
          <Container
            style={{
              width: "30vw",
              height: "30vh",
              backgroundColor: "#1e1e1e",
              overflow: "hidden",
              borderRadius: "2em",
            }}
            className="text-center py-3 d-flex align-items-center justify-content-center display-4 fw-semibold"
          >
            <Link href="/caro">
              <button className={styles.sun}>Quiz Game</button>
            </Link>
          </Container>
        </Col>
      </Row>
    </div>
  </div>
);

export default Home;
