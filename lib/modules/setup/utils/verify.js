"use strict";
var check_system_1 = require('./check-system');
var check_1 = require('../../tutorials/utils/check');
function allTrue(obj) {
    return Object.values(obj).every(function (x) { return x === true; });
}
function setupVerify(dir, packageJson) {
    var hasPackageJson = false;
    var hasTutorial = false;
    var hasDir = !!dir;
    if (hasDir) {
        hasPackageJson = !!packageJson;
    }
    if (hasDir && hasPackageJson) {
        hasTutorial = !!check_1.searchForTutorials(dir, packageJson.dependencies).length ||
            !!check_1.searchForTutorials(dir, packageJson.devDependencies).length;
    }
    var checks = {
        system: {
            node: !!check_system_1.nodeMinVersion(),
            npm: !!check_system_1.npmMinVersion(),
            xcode: !!check_system_1.requiresXCode(),
        },
        setup: {
            hasDir: hasDir,
            hasPackageJson: hasPackageJson,
            hasTutorial: hasTutorial,
        }
    };
    checks.system.passed = allTrue(checks.system);
    checks.setup.passed = allTrue(checks.setup);
    checks.passed = checks.system.passed && checks.setup.passed;
    return checks;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = setupVerify;