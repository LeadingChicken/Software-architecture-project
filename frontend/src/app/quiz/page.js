// pages/quiz/index.js
'use client'
import React, { useEffect, useState } from 'react';
import QuizGame from '../../components/QuizGame';
import MC from "@/components/MC"
import Chat from "@/components/Chat";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useMediaQuery } from 'react-responsive';
import axios, {isCancel, AxiosError} from 'axios';
const QuizPage = () => {
    const isMdAndDown = useMediaQuery({ maxWidth: 991 });
    return(
        <Container className="h-100">
                <Row className="h-100">
                    <Col className="pt-4" xs={12} lg={8} >
                        <QuizGame/>
                    </Col>
                    <Col className={` ${isMdAndDown ? 'pt-4 pb-4' : 'pt-4'}`} xs={12} lg={4} >
                        <Chat/> 
                    </Col>
                </Row>
        </Container>
    )
};

export default QuizPage;
