import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard({id, title, description, webLink, gitLink, img, techArray}) {
    return (
      <Card style={{ width: '18rem', border: '1px solid black', margin: '1rem'}}>
        <Card.Img variant="top" src={img} style={{width: '100%'}} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
         {techArray && techArray.length > 0 && (
          <Card.Text>
            <strong>Technologies:</strong>
            <ul>
              {techArray.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </Card.Text>
        )}
          <a href={webLink} target="_blank">
            <Button variant="primary">Visit Website</Button>
          </a>
          <a href={gitLink} target='_blank'>
            <Button variant="primary">Visit GitHub</Button>
          </a>
        </Card.Body>
      </Card>
    );
  }
  
  export default ProjectCard;