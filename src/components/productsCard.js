import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ProductCard({ data, handleCart }) {
  return (
    <Col xs={4} className="d-flex justify-content-center mb-5">
      <Card style={{ width: "600px" }} className="shadow">
        <Card.Img
          style={
            { width: "400px ", height: "300px"}
          }
          variant="top"
          src={data.images[0]}
        />
        <Card.Body style={{ width: "400px", height: "100px" }}>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text style={{ fontSize: "15px", fontWeight: "lighter" }}>
            {data.description}
          </Card.Text>
          <Card.Text>${data.price}</Card.Text>
        </Card.Body>
        <div className="card-footer border-top-0">
          <Button style={{width: "175px", height: "40px"}}
            onClick={(event) => handleCart(event, data)}
            variant="primary"
          >
            <p>Add to Cart</p>
          </Button>
        </div>
      </Card>
    </Col>
  );
}
