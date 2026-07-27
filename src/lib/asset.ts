/**
 * Resolve a file in /public against the deployment base path.
 * Needed because GitHub Pages serves project repos from /<repo>/ rather than /.
 */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
