# Inside string [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/inside-string/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/inside-string)

Check if a string is inside another string but not on the edge.

[![NPM Badge](https://nodei.co/npm/inside-string.png)](https://npmjs.com/package/inside-string)

## Install

```sh
npm install inside-string
```

## Usage

```js
const insideString = require("inside-string");

insideString("abc", "a");
//=> false

insideString("abc", "b");
//=> true

insideString("abc", "c");
//=> false

insideString("abcdef", "c", 2); // Setting edge to 2
//=> true

insideString("abcdef", "e", 2, 1); // Setting left edge to 2 and right edge to 1
//=> true
```

## API

### insideString(string, stringToCheck, sides?)

#### string

Type: `string`

The string to search.

#### stringToCheck

Type: `string`

The string to check for.

#### sides

Type: `number`\
Default: `1`

The amount of characters inwards from the left and right edges of the string to search.

### insideString(string, stringToCheck, leftSide?, rightSide?)

#### string

Type: `string`

The string to search.

#### stringToCheck

Type: `string`

The string to check for.

#### leftSide

Type: `number`\
Default: `1`

The amount of characters inward from the left edge of the string to search.

#### rightSide

Type: `number`\
Default: `leftSide`

The amount of characters inward from the right edge of the string to search.
