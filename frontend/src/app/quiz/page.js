// pages/quiz/index.js

import React from 'react';
import QuizGame from '../../components/QuizGame';
import Chat from "@/components/Chat";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const QuizPage = () => (
  <Container className="h-100">
    <Row className="h-100">
      <Col className="h-100"><QuizGame/></Col>
      <Col className="h-100"><Chat/></Col>
    </Row>
  </Container>
);

export default QuizPage;
