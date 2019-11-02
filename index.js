"use strict"

module.exports = (string, stringToCheck, sideOrSideLeft = 1, sideRight) => {
    if (
        typeof string !== "string" || // `string` must be a string
        typeof stringToCheck !== "string" || // `stringToCheck` must be a string
        typeof sideOrSideLeft !== "number" || // `sideOrSideLeft` must be a number
        sideRight && typeof sideRight !== "number" // `sideRight` must not exist or must be a number
    ) throw new ReferenceError("Invalid parameters provided!")

    const leftSide = sideOrSideLeft
    const rightSide = sideRight || sideOrSideLeft

    const length = string.length
    const index = string.indexOf(stringToCheck)

    return index > leftSide - 1 && index < length - rightSide
}
