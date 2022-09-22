import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class BeastForm extends React.Component{

    render(){
        return(
        
            <>
                <Container>
                    <Form.Select onChange={this.props.handleForm} variant="success"  aria-label="Default select example">
                        <option>Choose # of Horns 🦄 </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="100">Too Many Horns!</option>
                    </Form.Select>
            </Container>
            </>
        );
    }
}

export default BeastForm;