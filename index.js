"use strict"

module.exports = (string, stringToCheck, sideOrSideLeft, sideRight) => {
    if (
        typeof string !== "string" || // `string` must be a string
        typeof stringToCheck !== "string" || // `stringToCheck` must be a string
        sideOrSideLeft && typeof sideOrSideLeft !== "number" || // `sideOrSideLeft` must not exist or must be a number
        sideRight && typeof sideRight !== "number" // `sideRight` must not exist or must be a number
    ) throw new ReferenceError("Invalid parameters provided!")

    const leftSide = sideOrSideLeft != null ? sideOrSideLeft : 1
    const rightSide = sideRight != null ? sideRight : leftSide

    const stringLength = string.length
    const stringToCheckLength = stringToCheck.length
    const index = string.indexOf(stringToCheck)

    return (
        index > leftSide - 1 && // If the index of the string is more than 1 less than the left side padding.
        index + stringToCheckLength - 1 < stringLength - rightSide // If the index of the string plus 1 less than than the length of the string to check is less than the length of the string minus the right padding.
    )
}
