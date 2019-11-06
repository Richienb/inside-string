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
    t.false(insideString("abcd", "ab"))
    t.true(insideString("abcd", "bc"))
    t.false(insideString("abcd", "cd"))
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
    t.false(insideString("abcdef", "ab", 2))
    t.false(insideString("abcdef", "bc", 2))
    t.true(insideString("abcdef", "cd", 2))
    t.false(insideString("abcdef", "cde", 2))
    t.false(insideString("abcdef", "de", 2))
    t.false(insideString("abcdef", "ef", 2))
})

test("different edges: left", (t) => {
    t.false(insideString("abcdef", "a", 2, 1))
    t.false(insideString("abcdef", "b", 2, 1))
    t.true(insideString("abcdef", "c", 2, 1))
    t.true(insideString("abcdef", "d", 2, 1))
    t.true(insideString("abcdef", "e", 2, 1))
    t.false(insideString("abcdef", "f", 2, 1))
    t.false(insideString("abcdef", "ab", 2, 1))
    t.false(insideString("abcdef", "bc", 2, 1))
    t.true(insideString("abcdef", "cd", 2, 1))
    t.true(insideString("abcdef", "de", 2, 1))
    t.true(insideString("abcdef", "cde", 2, 1))
    t.true(insideString("abcdef", "de", 2, 1))
    t.false(insideString("abcdef", "ef", 2, 1))
    t.false(insideString("abcdef", "ab", 1, 0))
    t.true(insideString("abcdef", "ef", 1, 0))
})

test("different edges: right", (t) => {
    t.false(insideString("abcdef", "a", 1, 2))
    t.true(insideString("abcdef", "b", 1, 2))
    t.true(insideString("abcdef", "c", 1, 2))
    t.true(insideString("abcdef", "d", 1, 2))
    t.false(insideString("abcdef", "e", 1, 2))
    t.false(insideString("abcdef", "f", 1, 2))
    t.false(insideString("abcdef", "ab", 1, 2))
    t.true(insideString("abcdef", "bc", 1, 2))
    t.true(insideString("abcdef", "cd", 1, 2))
    t.false(insideString("abcdef", "de", 1, 2))
    t.false(insideString("abcdef", "cde", 1, 2))
    t.false(insideString("abcdef", "de", 1, 2))
    t.false(insideString("abcdef", "ef", 1, 2))
    t.true(insideString("abcdef", "ab", 0, 1))
    t.false(insideString("abcdef", "ef", 0, 1))
})
