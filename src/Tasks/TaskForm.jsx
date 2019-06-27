import React from 'react';
import Btn from './Btn'
import InputForm from './InputForm'

const TaskForm = ({
  title, 
  color,
  size,
  placeholder,
  taskName,
  handleAddTask,
  handleChangeTitle
}) => {
  return (
    <React.Fragment>
      <InputForm
        taskName={taskName}
        size={size}
        placeholder={placeholder}
        handleChangeTitle={handleChangeTitle}
      />
      <Btn
        taskName={taskName}
        handleAddTask={handleAddTask}
        title={title}
        color={color}
      />
    </React.Fragment>
  )
}

export default TaskForm