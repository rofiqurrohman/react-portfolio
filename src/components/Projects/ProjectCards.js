import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiLinkExternal } from 'react-icons/bi';

function ProjectCards(props) {
  return (
    <Card className='project-card-view'>
      <Card.Img variant='top' src={props.imgPath} alt='card-img' />
      <Card.Body>
        <div className='d-flex flex-column  h-100'>
          <div className='project-topic mb-4 flex-grow-1'>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text style={{ textAlign: 'justify' }}>{props.description}</Card.Text>
          </div>
          <div>
            <Button variant='primary' href={props.link} target='_blank'>
              <BiLinkExternal /> &nbsp;
              {props.isProject ? 'View Project' : 'View Site'}
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
