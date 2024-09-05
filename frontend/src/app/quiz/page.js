// pages/quiz/index.js
'use client'
import React from 'react';
import QuizGame from '../../components/QuizGame';
import Chat from "@/components/Chat";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useMediaQuery } from 'react-responsive';
const QuizPage = () => {
    const isMdAndDown = useMediaQuery({ maxWidth: 991 });
    return(
        <Container className="h-100">
                <Row className="h-100">
                    <Col className="" xs={12} lg={8}>
                        <QuizGame/>
                    </Col>
                    <Col className={` ${isMdAndDown ? 'pt-4' : ''}`} xs={12} lg={4}>
                        <Chat/> 
                    </Col>
                </Row>
        </Container>
    )
};

export default QuizPage;
