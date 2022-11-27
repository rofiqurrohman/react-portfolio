import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaBootstrap } from 'react-icons/fa'
import { DiJavascript1, DiReact, DiNodejs, DiSass } from 'react-icons/di';
import { SiFirebase, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaVuejs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiSass />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiTypescript />
      </Col>
    </Row>
  );
}

export default Techstack;