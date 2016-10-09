# chart-supplements

[![Build Status][travis-image]][travis-url]
[![NPM Version][npm-image]][npm-url]
[![Coverage][coveralls-image]][coveralls-url]

Fetch airport chart supplements for airports

## Installation

```
$ npm install --save chart-supplements
```

## Usage

```js
chartSupplements(['PADK', 'PADU']).then(results => {
  console.log(results)
})
```

## API

### `chartSupplements.(icaos)`
### `chartSupplements.list(icaos)`

#### `icaos`

Type: `string` or `array`

One of the following:
- a single ICAO code
- an array of ICAO codes

## License

MIT © [Forrest Desjardins](https://github.com/fdesjardins)

[npm-url]: https://www.npmjs.com/package/chart-supplements
[npm-image]: https://img.shields.io/npm/v/chart-supplements.svg?style=flat
[travis-url]: https://travis-ci.org/fdesjardins/chart-supplements
[travis-image]: https://img.shields.io/travis/fdesjardins/chart-supplements.svg?style=flat
[coveralls-url]: https://coveralls.io/r/fdesjardins/chart-supplements
[coveralls-image]: https://img.shields.io/coveralls/fdesjardins/chart-supplements.svg?style=flat
