import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard({id, title, description, webLink, gitLink, img, techArray}) {
    return (
      <Card style={{ width: '18rem', border: '1px solid black', margin: '1rem'}}>
        <Card.Img variant="top" src={img} style={{width: '100%', height: '15%'}} />
        <Card.Body>
          <Card.Title><strong>{title}</strong></Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          {/* if the array exists */}
         {techArray && techArray.length > 0 && (
          <Card.Text>
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