import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

function IplCardReact(prop) {
  return (
    <Card style={{ width: '18rem',marginLeft:"30px" }}>
      <Card.Img variant="top" src={prop.src} />
      <Card.Body>
        <Card.Title>{prop.name}</Card.Title>
        <Card.Text>{prop.text}
        </Card.Text>
        <Card.Title>Trophies</Card.Title>
        <Progress data2={prop.trophy} />
      </Card.Body>
    </Card>
  );
}

const prog=(trop)=>{
    trop=(trop/17)*100
    return trop;
}
function Progress(trop1) {
  return (
    <>
        <ProgressBar now={prog(trop1.data2)} label={`${trop1.data2}`} />
    </>
  )
  
}
export default IplCardReact;