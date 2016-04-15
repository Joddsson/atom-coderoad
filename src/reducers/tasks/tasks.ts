import {SET_PAGE} from '../../actions/actionTypes';

const defaultTasks: CR.Task[] = [{
  description: '',
  completed: false,
  tests: [],
  hints: [],
  actions: []
}];

export default function tasksReducer(tasks = defaultTasks,
  action: CR.Action): CR.Task[] {
  switch (action.type) {
    case SET_PAGE:
      return action.payload.tasks;
    default:
      return tasks;
  }
}
