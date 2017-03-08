/* global describe, it */

const assert = require('chai').assert
const chartSupplements = require('./index')

describe('chart supplements', () => {
  it('should fetch chart supplements for a single ICAO', () => {
    return chartSupplements('PANC').then(cs => {
      assert(cs)
    })
  })

  it('should fetch chart supplements for an array of ICAOs', () => {
    return chartSupplements(['PANC', 'PABV']).then(cs => {
      assert(cs.length === 2)
      cs.map(assert)
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
      assert(cs.length === 2)
      cs.map(assert)
    })
  })
})
