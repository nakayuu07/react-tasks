import React from 'react';
import { Col, Form, FormGroup, Input } from 'reactstrap';


const InpputForm = ({
  size,
  placeholder,
  handleChangeTitle,
  taskName
}) => {
  return (
    <Form>
      <FormGroup row>
        <Col sm={size ? size.sm : 6}>
          <Input
            type='text'
            value={taskName}
            placeholder={placeholder}
            onChange={(e) => handleChangeTitle(e)}
          />
        </Col>
      </FormGroup>
    </Form>
  )
}

export default InpputForm