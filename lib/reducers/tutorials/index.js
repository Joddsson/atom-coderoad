"use strict";
var _types_1 = require('../../actions/_types');
var update_tutorial_1 = require('./update-tutorial');
var store_1 = require('../../store');
var check_tutorials_1 = require('./check-tutorials');
function tutorialsReducer(tutorials, action) {
    if (tutorials === void 0) { tutorials = []; }
    switch (action.type) {
        case _types_1.TUTORIAL_UPDATE:
            update_tutorial_1.tutorialUpdate(action.payload.name);
        case _types_1.TUTORIALS_FIND:
            var packageJson = store_1.default.getState().packageJson;
            return ([]
                .concat(check_tutorials_1.searchForTutorials(packageJson.dependencies))
                .concat(check_tutorials_1.searchForTutorials(packageJson.devDependencies)));
        default:
            return tutorials;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialsReducer;