import * as React from 'react';
import {Markdown} from '../../index';
import {TaskCheckbox} from './TaskCheckbox';
import {ListItem} from 'material-ui/List';
import {lightGreen200, orange200} from 'material-ui/styles/colors';

const styles = {
  margin: '5px',
  padding: '5px',
  position: 'relative'
};

const indexStyles = {
  position: 'absolute',
  top: '20px',
  left: '45px',
};

const descriptionStyles = {
  backgroundColor: 'inherit',
  paddingTop: '-10px',
  paddingLeft: '55px',
  fontSize: '14px',
  lineHeight: '1.6',
};

function getStatus(
  index: number, taskPosition: number, testRun: boolean
): string {
  return index < taskPosition ? lightGreen200 : 'inherit';
}

export const Task: React.StatelessComponent<{
  task: CR.Task, taskPosition: number, index: number, testRun: boolean
}> = ({task, taskPosition, index, testRun}) => {
  const backgroundColor = getStatus(index, taskPosition, testRun);
  return (
    <ListItem
      key={index}
      style={Object.assign({}, styles, {backgroundColor})}
    >
      {testRun ? <TaskCheckbox /> : null}
      <span style={indexStyles}>{index + 1}.</span>
      <div style={descriptionStyles}>
        <Markdown >{task.description}</Markdown>
      </div>
    </ListItem>
  );
};
