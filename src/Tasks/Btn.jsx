import React from 'react';
import { Button } from 'reactstrap';

const Btn = ({title, color, handleAddTask, taskName}) => {
  return (
    <Button color={color} onClick={() => handleAddTask(taskName)}>
      {title}
    </Button>
  )
}

export default Btn