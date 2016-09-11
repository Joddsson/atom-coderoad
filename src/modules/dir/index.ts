/**
 * User directory path Redux reducer
 * @param  {string} dir default user directory path
 * @returns string user directory path
 */
export default function dirReducer(
  dir: string
): string {
  if (!atom) {
    throw new Error('No project directory found. Atom may not be initialized.');
    return '';
  }
  if (atom && atom.project.rootDirectories.length > 0) {
    return atom.project.rootDirectories[0].path;
  }
}
