import * as React from 'react';
import {MarkdownText} from '../_components';
import {ListItem} from 'material-ui';
import {green500, orange500} from 'material-ui/lib/styles/colors';
const iconPath = 'material-ui/lib/svg-icons/';
let Complete = require(iconPath + 'toggle/check-box');
let Incomplete = require(iconPath + 'toggle/check-box-outline-blank');
let RunningTest = require(iconPath + 'toggle/indeterminate-check-box');

function visibleTasks(tasks: CR.Task[], taskPosition: number) {
  return tasks.slice(0, taskPosition + 1);
}

const TaskCheckbox = ({index, taskPosition, runTests}) => {
  let icon = null;
  if (index < taskPosition) {
    icon = <Complete color={green500} />;
  } else if (index === taskPosition && runTests) {
    // TODO: loading animation inside of checkbox
    icon = <RunningTest color={orange500} />;
  } else {
    icon = <Incomplete />;
  }
  return <span className='cr-task-checkbox'>{icon}</span>;
};

const TaskIndex = ({index}) => (
  <span className='cr-task-index'>{index + 1}.</span>
);

const TaskContent = ({task}) => (
  <div className='cr-task-description'>
    <MarkdownText text={task.description} />
  </div>
);

export const Task = ({task, taskPosition, index, runTests}) => {
  let taskClass = 'cr-task';
  if (index < taskPosition) {
    taskClass += ' isCompletedTask';
  } else if (index === taskPosition) {
    taskClass += 'isCurrentTask';
  }
  return (
    <ListItem key={index} className={taskClass} >
        <TaskCheckbox index={index} taskPosition={taskPosition} runTests={runTests}/>
        <TaskIndex index={index} />
        <TaskContent task={task} />
      </ListItem>
    );
};

export const Tasks = ({tasks, taskPosition, runTests}) => {
  const visTasks = visibleTasks(tasks, taskPosition);
  return <div className='cr-tasks'>
      {visTasks.map((task, index) => <Task
        key={'task' + index}
        task={task}
        taskPosition={taskPosition}
        index={index}
        runTests={runTests} />)}
    </div>;
};