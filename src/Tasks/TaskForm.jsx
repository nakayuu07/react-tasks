import React from 'react';
import Btn from './Btn'
import CustomForm from './CustomForm'

const TaskForm = ({
  title, 
  color,
  size,
  placeholder,
  inputType,
  name,
  label,
}) => {
  return (
    <React.Fragment>
      <CustomForm
        name={name}
        size={size}
        placeholder={placeholder}
        inputType={inputType}
      />
      <Btn
        title={title}
        color={color}
      />
    </React.Fragment>
  )
}

export default TaskForm