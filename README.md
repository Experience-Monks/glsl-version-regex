# glsl-version-regex

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A regex for GLSL version statements.

```js
var version = require('glsl-version-regex')

version.test('#version 300')
//=> true

version.test('#version')
//=> false

version.exec('#version 100')
//=> [ ..., '100', ... ]

version.exec('#version 300 es // comment')
//=> [ ..., '300 es', ... ]
```

## Usage

[![NPM](https://nodei.co/npm/glsl-version-regex.png)](https://www.npmjs.com/package/glsl-version-regex)

#### `regex = require('glsl-version-regex')

Requiring this module will provide you with the regex.

## License

MIT, see [LICENSE.md](http://github.com/Jam3/glsl-version-regex/blob/master/LICENSE.md) for details.
