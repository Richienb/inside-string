import test from "ava"
import insideString from "."

const invalidParametersExpect = {
    instanceOf: ReferenceError,
    message: "Invalid parameters provided!",
}

test("basic functionality", (t) => {
    t.false(insideString("abcd", "a"))
    t.true(insideString("abcd", "b"))
    t.true(insideString("abcd", "c"))
    t.false(insideString("abcd", "d"))
    t.false(insideString("abcd", "e"))
})

test("catching invalid parameters", (t) => {
    t.throws(() => insideString(), invalidParametersExpect)
    t.throws(() => insideString("a"), invalidParametersExpect)
    t.throws(() => insideString(undefined, "b"), invalidParametersExpect)
    t.throws(() => insideString("a", "b", "invalid"), invalidParametersExpect)
    t.throws(() => insideString("a", "b", 1, "invalid"), invalidParametersExpect)
})

test("same edges", (t) => {
    t.false(insideString("abcdef", "a", 2))
    t.false(insideString("abcdef", "b", 2))
    t.true(insideString("abcdef", "c", 2))
    t.true(insideString("abcdef", "d", 2))
    t.false(insideString("abcdef", "e", 2))
    t.false(insideString("abcdef", "f", 2))
})

test("different edges: left", (t) => {
    t.false(insideString("abcdef", "a", 2, 1))
    t.false(insideString("abcdef", "b", 2, 1))
    t.true(insideString("abcdef", "c", 2, 1))
    t.true(insideString("abcdef", "d", 2, 1))
    t.true(insideString("abcdef", "e", 2, 1))
    t.false(insideString("abcdef", "f", 2, 1))
})

test("different edges: right", (t) => {
    t.false(insideString("abcdef", "a", 1, 2))
    t.true(insideString("abcdef", "b", 1, 2))
    t.true(insideString("abcdef", "c", 1, 2))
    t.true(insideString("abcdef", "d", 1, 2))
    t.false(insideString("abcdef", "e", 1, 2))
    t.false(insideString("abcdef", "f", 1, 2))
})
