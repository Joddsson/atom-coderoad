"use strict";
var _types_1 = require('../../actions/_types');
var editor_reducer_1 = require('./editor-reducer');
var store_1 = require('../../store');
function handleTaskActions(actions) {
    console.log('actions', actions);
    var next = actions.shift();
    console.log('next', next);
    if (next && next.length) {
        next.reduce(function (total, curr) {
            console.log('total, curr', total, curr);
            return total.then(function () { return editor_reducer_1.default(curr); });
        }, Promise.resolve());
    }
}
var taskTracker = 0;
function taskActionsReducer(taskActions, action) {
    if (taskActions === void 0) { taskActions = []; }
    var actions = null;
    switch (action.type) {
        case _types_1.TESTS_LOAD:
            var tasks = store_1.default.getState().tasks || [];
            var pagePosition = store_1.default.getState().pagePosition;
            var isCompleted = store_1.default.getState().progress.pages[pagePosition];
            if (!isCompleted) {
                actions = tasks.map(function (task) { return task.actions || []; });
            }
            else {
                actions = tasks.map(function (task) {
                    return task.actions.filter(function (a) { return !!a.match(/^open/); });
                });
            }
            taskTracker = 0;
            handleTaskActions(actions);
            return actions;
        case _types_1.TEST_RESULT:
            actions = action.payload.actions || [];
            console.log('TEST_RESULT actions', actions);
            var nextTaskPosition = action.payload.result.taskPosition;
            var times = nextTaskPosition - taskTracker;
            if (times > 0) {
                for (var i = 0; i < times; i++) {
                    handleTaskActions(actions);
                }
                taskTracker = nextTaskPosition;
            }
            return actions;
        default:
            return taskActions;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = taskActionsReducer;