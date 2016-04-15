import commandLine from '../../services/command-line';
import {store} from '../../store/store';
import {loadTutorials} from '../../actions/actions';

// export function canUpdateTutorial(name: string,
//   currentVersion: string): string {
//   return (commandLine('npm', `outdated ${name}`)
//     .then((res: string) => {
//     if (res.length > 0) {
//       let match = res.match(/[0-9\.]+\s+[0-9\.]+\s+([0-9\.]+)/);
//       if (match.length >= 2) {
//         return match[1];
//       }
//     }
//     return null;
//   }));
// }

export function updateTutorial(name: string): void {
  commandLine('npm', `install --save-dev ${name}`)
  .then(() => {
    store.dispatch(loadTutorials());
  });
}
