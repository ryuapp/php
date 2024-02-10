/**
 * Interprets the binary value of the first byte of character as an unsigned integer between 0 and 255.
 *
 * @param {string} character A character
 * @return {number} An integer between 0 and 255.
 */
export function ord(character: string): number {
  return character.charCodeAt(0);
}
