import React, { Component } from 'react';
import TaskForm from '../TaskForm'
import List from '../items'


class TaskMain extends Component {
  state = {
    tasks: [],
    taskName: ''
  }

  handleAddTask = (newTask) => {
    this.setState({
      tasks: [...this.state.tasks, newTask],
      taskName: ''
    })
  }

  handleChangeTitle = (e) => {
    this.setState({ taskName: e.target.value })
  }

  render() {
    return (
      <div>
        <TaskForm
          size={{ sm: 4 }}
          placeholder={'タスク名'}
          title={'追加'}
          color={'success'}
          taskName={this.state.taskName}
          handleAddTask={this.handleAddTask}
          handleChangeTitle={this.handleChangeTitle}
        />
        <List
          items={this.state.tasks}
        />
      </div>
    )
  }
}
export default TaskMain;
