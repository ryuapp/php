/**
 * Checks the validity of the date formed by the arguments. \
 * A date is considered valid if each parameter is properly defined.
 *
 * @param {number} month The month is between 1 and 12 inclusive
 * @param {number} day The day is within the allowed number of days for the given month. Leap years are taken into consideration
 * @param {number} year The year is between 1 and 32767 inclusive
 * @return {boolean}
 */
export function checkdate(month: number, day: number, year: number): boolean {
  if (year < 1 || year > 32767) return false;
  return new Date(year, month - 1, day).getMonth() === month - 1;
}
