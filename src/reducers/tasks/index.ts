import {PAGE_SET} from '../../actions/_types';
import configTaskTests from './config-task-tests';

const _tasks: CR.Task[] = [{
  actions: [],
  completed: false,
  description: '',
  hints: [],
  tests: [],
}];

export default function tasksReducer(tasks = _tasks,
  action: Action): CR.Task[] {
  switch (action.type) {

    case PAGE_SET:
      return action.payload.tasks;

    default:
      return tasks;
  }
}
