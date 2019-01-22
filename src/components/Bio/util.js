/**
 * @overview Bio utility functions.
 */

export const getMyAge = () => {
  const diff = Date.now() - new Date(1997, 5, 6).getTime();
  const diffYear = new Date(diff).getUTCFullYear();

  return diffYear - 1970;
};
