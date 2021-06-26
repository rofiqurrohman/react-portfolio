import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import Resumecontent from './ResumeContent';
// import pdf from '../../Assets/rofiq.pdf';
import { AiOutlineDownload } from 'react-icons/ai';

function Resume() {
  return (
    <Container fluid className='resume-section'>
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant='primary' href={`#`} target='_blank'>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className='resume'>
          <Col md={6} className='resume-left'>
            <h3 className='resume-title'>Experience</h3>
            <Resumecontent
              title='WEB PROGRAMMER [ Aplysit Corp ]'
              date='Augustus 2020 - Oktober 2020'
              content={['Mengembangkan dan merapikan Website']}
            />
            <Resumecontent
              title='FRONT-END DEVELOPER [ DSC JOGJA ]'
              date='November 2020 - Januari 2021'
              content={['Membuat Front-end website Inventory management']}
            />
            <Resumecontent
              title='WORDPRES DEVELOPER [ Merhabahasa ]'
              date='Januari 2021 - Maret 2021'
              content={['Manage website merhabahasa.com']}
            />
            <h3 className='resume-title'>Extracurricular Activities</h3>
            <Resumecontent title='AMCC (Amikom Computer Club)' content={['Member Back-end AMCC']} />
          </Col>
          <Col md={6} className='resume-right'>
            <h3 className='resume-title'>Education</h3>
            <Resumecontent
              title='UNIVERSITAS AMIKOM YOGYAKARTA'
              date='Informatika . 2018 - Present'
              content={[`IPK: 3.25`]}
            />
            <Resumecontent title='SMK PGRI 1 NGAWI' date='TKJ . 2015 - 2018' content={[]} />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant='primary' href={`#`} target='_blank'>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
