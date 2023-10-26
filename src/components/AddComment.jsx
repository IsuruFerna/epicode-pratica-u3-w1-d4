import Form from "react-bootstrap/Form";

const AddComment = function () {
   return (
      <Form>
         <Form.Group className="mb-3">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
         </Form.Group>
         <Form.Group className="mb-3">
            <Form.Label>Rate</Form.Label>
            <Form.Control type="number" min={0} max={5} placeholder="1-5" />
         </Form.Group>
      </Form>
   );
};

export default AddComment;
