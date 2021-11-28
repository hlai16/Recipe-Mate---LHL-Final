import { useNavigate } from "react-router-dom";
import { Form, FormControl, Row, Col } from "react-bootstrap";
import axios from "axios";
import Buttons from './Buttons';

function SearchRecipes() {
  let navigate = useNavigate()
  
  async function handleSubmit(event) {
    event.preventDefault();
    await axios
      .get(`/search_recipes?search=${event.target[0].value}`)
      .then((res) => {
        navigate("/recipes", { state: res.data })
      })
  }

  return (
    <Form inline onSubmit={handleSubmit}>
      <Row>
        <Col><FormControl type="text" placeholder="Search" className="mr-sm-2" /></Col>
        <Col><Buttons small>Search</Buttons></Col>
      </Row>
    </Form>)
}

export default SearchRecipes