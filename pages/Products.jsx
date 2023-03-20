import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
const Products = ({ product }) => {
  const { productImage, slug } = product.fields;
  
  return (
    <div>
      <div style={{ flexDirection: "row" }}>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem", margin: "1rem" }}>
                <Card.Img
                  variant="top"
                  src={"http:" + productImage.fields.file.url}
                />
                <Card.Body>
                  <Card.Title>{product.fields.productName}</Card.Title>
                  <Card.Text>{product.fields.productDes}</Card.Text>
                  <Button variant="primary">
                    <Link style={{ color: "white" }} href={"/slug/" + slug}>
                      Buy
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Products;
