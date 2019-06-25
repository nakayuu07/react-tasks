import React from 'react';
import { Button } from 'reactstrap';

const Btn = ({title, color}) => {
  return (
    <Button color={color}>
      {title}
    </Button>
  )
}

export default Btn