import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import Resumecontent from './ResumeContent';
import { DataResume } from './DataResume';
import pdf from '../../Assets/resume_rofiqurrohman.pdf';
import { AiOutlineDownload } from 'react-icons/ai';

function Resume() {
    return (
        <Container fluid className='resume-section'>
            <Particle />
            <Container>
                {/* <Row style={{ justifyContent: 'center', position: 'relative' }}> */}
                <Button variant='primary' href={pdf} target='_blank' className='position-relative'>
                    <AiOutlineDownload />
                    &nbsp;Download CV
                </Button>
                {/* </Row> */}
                <Row className='resume'>
                    <Col md={6} className='resume-left'>
                        <h3 className='resume-title'>Experience</h3>
                        {DataResume.map((item, index) => (
                            <Resumecontent
                                key={index}
                                title={item.title}
                                date={item.date}
                                content={item.content}
                            />
                        ))}
                    </Col>
                    <Col md={6} className='resume-right'>
                        <h3 className='resume-title'>Education</h3>
                        <Resumecontent
                            title='UNIVERSITAS AMIKOM YOGYAKARTA'
                            date='Informatika . Present'
                            content={[]}
                        />
                        <Resumecontent title='SMK PGRI 1 NGAWI' date='TKJ' content={[]} />
                    </Col>
                </Row>
                {/* <Row style={{ justifyContent: 'center' }}> */}
                <Button variant='primary' href={pdf} target='_blank' className='position-relative'>
                    <AiOutlineDownload />
                    &nbsp;Download CV
                </Button>
                {/* </Row> */}
            </Container>
        </Container>
    );
}

export default Resume;
