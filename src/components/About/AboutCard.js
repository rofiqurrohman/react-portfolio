import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Saya seorang mahasiswa di salah satu <span className='purple'>Universitas Yogyakarta</span>. Saya telah
            berfokus pada Web Development dan Network Security. Saya sangat tertarik dengan Linux, Cloud Computing, IoT,
            dan sangat terbuka untuk mempelajari hal-hal baru terutama perkembangan IT.
          </p>
          <p>Selain coding, beberapa kegiatan lain yang saya suka lakukan</p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Olahraga
            </li>
            <li className='about-activity'>
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className='blockquote-footer'>rofiqurrohmn</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
