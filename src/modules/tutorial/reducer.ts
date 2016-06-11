import {join} from 'path';
import {tutorialConfig} from './utils/config';
import {TUTORIAL_SET} from './types';
import configPaths from './utils/config-paths';

const _tutorial: CR.Tutorial = {
  name: null,
  info: null,
  pages: [],
  packageJson: null,
};

export default function tutorialReducer(
  tutorial = _tutorial, action: Action
): CR.Tutorial {
  switch (action.type) {

    case TUTORIAL_SET:
      const {name, dir} = action.payload;
      const packagePath: string = join(dir, 'node_modules', name);
      const packageJson: PackageJson = require(join(packagePath, 'package.json'));
      // const config: Tutorial.Config = tutorialConfig(packageJson, dir);
      let {info, pages} = require(join(packagePath, packageJson.main));
      // configure test paths to absolute paths
      pages = configPaths(dir, name, packageJson.config, pages || []);
      return {
        name: packageJson.name,
        info,
        pages,
        packageJson,
      };

    default:
      return tutorial;
  }
}
