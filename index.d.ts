/**
 * Check if a string is inside another string but not on the edge.
 * @param string The string to search.
 * @param stringToCheck The string to check for.
 * @param sides The amount of characters inwards from the left and right edges of the string to search.
 * @param leftSide The amount of characters inward from the left edge of the string to search.
 * @param rightSide The amount of characters inward from the right edge of the string to search.
 * @example
 * ```
 * const insideString = require("inside-string");
 *
 * insideString("abc", "a");
 * //=> false
 *
 * insideString("abc", "b");
 * //=> true
 *
 * insideString("abc", "c");
 * //=> false
 *
 * insideString("abcdef", "c", 2); // Setting edge to 2
 * //=> true
 *
 * insideString("abcdef", "e", 2, 1); // Setting left edge to 2 and right edge to 1
 * //=> true
 * ```
*/
declare function insideString(string: string, stringToCheck: string, sides?: number): boolean;
declare function insideString(string: string, stringToCheck: string, leftSide: number, rightSide: number): boolean;

export = insideString;
