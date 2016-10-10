# chart-supplements

[![Build Status][travis-image]][travis-url]
[![NPM Version][npm-image]][npm-url]
[![Coverage][coveralls-image]][coveralls-url]

Fetch the latest chart supplements information for airports

## Installation

```
$ npm install --save chart-supplements
```

## Usage

```js
chartSupplements.list(['PANC', 'PADK']).then(results => {
  console.log(JSON.stringify(results, null, 2))
})
```

### Output

```
[
  {
    "ident": "ANC (PANC)",
    "city": "ANCHORAGE",
    "state": "AK",
    "airport": "TED STEVENS ANCHORAGE INTL",
    "navAid": "",
    "chart": "ANCHORAGE",
    "volBackPages": {
      "name": "AK (PDF)",
      "url": "http://aeronav.faa.gov/afd/15sep2016/AK_rear_15sep2016.pdf"
    },
    "airportNavAidListing": {
      "name": "ak_45_15SEP2016 (PDF)",
      "url": "http://aeronav.faa.gov/afd/15sep2016/ak_45_15SEP2016.pdf"
    }
  },
  {
    "ident": "ADK (PADK)",
    "city": "ADAK ISLAND",
    "state": "AK",
    "airport": "ADAK",
    "navAid": "",
    "chart": "W ALEUTIAN ISLS",
    "volBackPages": {
      "name": "AK (PDF)",
      "url": "http://aeronav.faa.gov/afd/15sep2016/AK_rear_15sep2016.pdf"
    },
    "airportNavAidListing": {
      "name": "ak_32_15SEP2016 (PDF)",
      "url": "http://aeronav.faa.gov/afd/15sep2016/ak_32_15SEP2016.pdf"
    }
  }
]
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
