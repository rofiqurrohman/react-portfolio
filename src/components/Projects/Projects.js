import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import inventory from '../../Assets/Projects/inventory.png';
import warung from '../../Assets/Projects/warung_apps.png';
import sekolah from '../../Assets/Projects/sekolah.png';
import portfolio from '../../Assets/Projects/portfolio.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          Project <strong className='purple'>Terbaru</strong> Saya
        </h1>
        <p style={{ color: 'white' }}>Berikut adalah beberapa project yang saya kerjakan baru-baru ini</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title='Inventory Management'
              description='Project Aplikasi Perpustakaan akhir tahun event Developer Student Club Jogja. Dibuat menggunakan HTML,SCSS,JS'
              link='https://github.com/rofiqurrohman/dscjogfest-inventory-management'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={warung}
              isBlog={false}
              title='Warung Apps'
              description='Project Aplikasi Warung(restoran) submission Dicoding Front-End Web Developer Expert. Dibuat menggunakan HTML,SCSS,JS dan dibundle menggunakan Webpack dengan membuat web apps mobile(PWA)'
              link='#'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={sekolah}
              isBlog={false}
              title='Sekolahan ID'
              description='Sekolahan ID adalah aplikasi yang memberikan data-data sekolah yang ada di Indonesia. Dibuat menggunakan React.js, Recoil.js, Bootstrap5 dan Data data ambil dari API'
              link='https://github.com/rofiqurrohman/SekolahanID'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title='Portfolio'
              description='Project portfolio re-Develope. Dibuat menggunakan React.js, Bootstrap'
              link='#'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
