import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../Assets/home-main.svg';
import Particle from '../Particle';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Type from './Type';

function Home() {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Particle />
        <Container className='home-content'>
          <Row>
            <Col md={7} className='home-header'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                Hi There! <span className='wave'>👋🏻</span>
              </h1>

              <h1 className='heading-name'>
                I'M
                <strong className='main-name'> ROFIQUR ROHMAN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt='home pic' className='img-fluid' />
            </Col>
          </Row>
          <Row>
            <Col md={12} className='home-about-social'>
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className='purple'>connect </span>with me
              </p>
              <ul className='home-about-social-links'>
                <li className='social-icons'>
                  <a
                    href='https://github.com/rofiqurrohman'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour  home-social-icons'
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className='social-icons'>
                  <a
                    href='https://twitter.com/rofiqurrohmn'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour  home-social-icons'
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className='social-icons'>
                  <a
                    href='https://www.linkedin.com/in/rofiqurrohman/'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour  home-social-icons'
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className='social-icons'>
                  <a
                    href='https://www.instagram.com/rofiqurrohmn/'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour home-social-icons'
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
