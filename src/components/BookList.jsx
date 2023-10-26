import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";

const BookList = function (prop) {
   return (
      <Container>
         <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4">
            {prop.bookGenre.map((book) => {
               return (
                  <Col key={book.asin} className="my-3">
                     <SingleBook currentBook={book} />
                  </Col>
               );
            })}
         </Row>
      </Container>
   );
};

export default BookList;
