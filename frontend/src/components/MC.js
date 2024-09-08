'use client'
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useMediaQuery } from 'react-responsive';


const MC = () => {
  const isMdAndDown = useMediaQuery({ maxWidth: 991 });
  useEffect(() => {
  }, []);
  const buttonVariants = ["primary", "success", "warning", "danger"];
  return (
    <Card 
        border="secondary"
        bg='Light'
        text='black'
    >
        <Card.Body>
            <span>MC</span>
        </Card.Body>
        
    </Card>
  );
};

export default MC;
