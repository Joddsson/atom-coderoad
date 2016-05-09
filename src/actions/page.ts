import {
  ROUTE_SET, PAGE_SET, PAGE_POSITION_SET, PAGE_POSITION_LOAD
} from './_types';
import configTaskTests from './config-task-tests';

export function pageNext(): ReduxThunk.ThunkInterface | Action {
  return (dispatch, getState): void => {
    let {pagePosition, tutorial} = getState();
    const pages = tutorial.pages;
    if (pagePosition >= pages.length - 1) {
      dispatch({ type: ROUTE_SET, payload: { route: 'final' } });
    } else {
      pagePosition += 1;
      dispatch(pageSet(pagePosition));
    }
  };
}

export function pageSet(pagePosition = 0): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {dir, progress, tutorial} = getState();
    // create absolute paths for 'task-tests'
    const tasks = configTaskTests(
      dir, tutorial, tutorial.pages[pagePosition].tasks || []
    );
    if (pagePosition >= progress.pages.length) {
      dispatch({ type: ROUTE_SET, payload: { route: 'final' } });
    }
    dispatch({
      type: PAGE_SET, payload: { dir, pagePosition, tutorial, progress, tasks }
    });
  };
}

export function pagePositionLoad(): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {progress} = getState();
    dispatch({ type: PAGE_POSITION_LOAD, payload: { progress } });
  };
}

export function pagePositionSet(pagePosition: CR.PagePosition): Action {
  return { type: PAGE_POSITION_SET, payload: { pagePosition } };
}
