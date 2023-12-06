import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../style/portfolio.css';

function ProjectCard({id, title, description, webLink, gitLink, img, techArray}) {
    return (
      <Card className='card-element'>
        <Card.Img variant="top" src={img} style={{width: '100%', height: '33%'}} />
        <Card.Body>
          <Card.Title className='title'><strong>{title}</strong></Card.Title>
          <Card.Text className='description'>
            {description}
          </Card.Text>
          {/* if the array exists */}
         {techArray && techArray.length > 0 && (
          <Card.Text className='tech'>
            <strong>Technologies:</strong>
              {techArray.map((tech, index) => (
                <li key={index} style={{listStyle: 'none'}}>{tech}</li>
              ))}
          </Card.Text>
        )}
        {/* only if there is a Web Link */}
        {webLink && (
            <a href={webLink} target="_blank">
              <Button variant="primary">Visit Website</Button>
            </a>)}
          <a href={gitLink} target='_blank'>
            <Button variant="primary">Visit GitHub</Button>
          </a>
        </Card.Body>
      </Card>
    );
  }
  
  export default ProjectCard;