import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const InterestCard = ({ title, text, buttonText }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default InterestCard;
