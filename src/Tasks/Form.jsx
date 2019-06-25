import React from 'react';
import { Col, Form, FormGroup, Input } from 'reactstrap';


const CustomForm = ({ 
  size,
  placeholder,
  inputType,
  name,
}) => {
  return (
    <Form>
      <FormGroup row>
        <Col sm={size ? size.sm : 6}>
          <Input type={inputType} name={name}  placeholder={placeholder} />
        </Col>
      </FormGroup>
    </Form>
  )
}

export default CustomForm