/* global describe, it */

const assert = require('assert')
const { struct } = require('superstruct')
const chartSupplements = require('./index')

const Result = struct({
  ident: 'string',
  city: 'string',
  state: 'string',
  airport: 'string',
  navAid: 'string',
  chart: 'string',
  volBackPages: {
    name: 'string',
    url: 'string'
  },
  airportNavAidListing: {
    name: 'string',
    url: 'string'
  }
})

describe('chart supplements', () => {
  it('should fetch chart supplements for a single ICAO', () => {
    return chartSupplements('PANC').then(cs => {
      Result(cs)
    })
  })

  it('should fetch chart supplements for an array of ICAOs', () => {
    return chartSupplements(['PANC', 'PABV']).then(cs => {
      assert.strictEqual(cs.length, 2)
      cs.map(cs => Result(cs))
    })
  })

  it('should expose the list method', () => {
    return chartSupplements.list('PANC')
  })

  it('should expose the fetchCurrentCycle method', () => {
    return chartSupplements.fetchCurrentCycle().then(cycle => {
      assert(parseInt(cycle))
    })
  })

  it('should fetch chart supplements for an array of ICAOs using the list method', () => {
    return chartSupplements.list(['PANC', 'PABV']).then(cs => {
      assert.strictEqual(cs.length, 2)
      cs.map(cs => Result(cs))
    })
  })
})
