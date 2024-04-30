import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Rofiqur Rohman </span>
            from <span className='purple'> Indonesia.</span>
            <br />I am a Web Developer, my expertise is more to the frontend developer and a little bit to the backend.
            My experience is making web application with the Javascript programming language, couple with my server
            linux. I have created several application in several instance
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Travelling
            </li>
            <li className='about-activity'>
              <ImPointRight /> Hiking
            </li>
            <li className='about-activity'>
              <ImPointRight /> Volleyball
            </li>
            <li className='about-activity'>
              <ImPointRight /> Badminton
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>"Risk more than other think is safe!" </p>
          <footer className='blockquote-footer'>rofiqurrohmn</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
