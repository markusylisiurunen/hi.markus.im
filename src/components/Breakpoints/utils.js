/**
 * @overview Utility functions for the breakpoints component.
 */

/**
 * Sort the breakpoints.
 */
export const sortBreakpoints = breakpoints => {
  const unsortedBreakpoints = Object.entries(breakpoints);

  return unsortedBreakpoints.sort((a, b) => {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  });
};

/**
 * Find the media from the breakpoints.
 */
export const getMedia = sortedBreakpoints => {
  const windowWidth = window.innerWidth;

  for (let i = sortedBreakpoints.length - 1; i >= 0; i -= 1) {
    if (sortedBreakpoints[i][1] <= windowWidth) {
      return sortedBreakpoints[i][0];
    }
  }

  return null;
};
