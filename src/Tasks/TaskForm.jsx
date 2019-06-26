import React from 'react';
import Btn from './Btn'
import InputForm from './InputForm'

const TaskForm = ({
  title, 
  color,
  size,
  placeholder,
  name,
}) => {
  return (
    <React.Fragment>
      <InputForm
        name={name}
        size={size}
        placeholder={placeholder}
      />
      <Btn
        title={title}
        color={color}
      />
    </React.Fragment>
  )
}

export default TaskForm