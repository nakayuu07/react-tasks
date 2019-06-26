import React from 'react';
import TaskForm from '../TaskForm'

class TaskMain extends React.Component {
  render() {
    return (
      <TaskForm
        name={'task'}
        size={ {sm: 4} }
        placeholder={'タスク名'}
        title={'追加'} 
        color={'success'}
      />
    )
  }
}

export default TaskMain;
