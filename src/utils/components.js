/**
 * @overview Component utility functions.
 */

/**
 * Convert a prop to either pixel or percentage value.
 * @param {Mixed}  value    Either a number for pixels or string to be returned as-is.
 * @param {String} fallback Value to fall back to if no value provided.
 */
export const toPixelOrPercentage = (value, fallback) => {
  if (value === undefined || value === null) return fallback;
  return typeof value === 'string' ? value : `${value}px`;
};

export const propWithDefault = (prop, defaultValue) =>
  prop === undefined ? defaultValue : prop;
