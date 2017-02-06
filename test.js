/* global describe, it */

const assert = require('chai').assert
const chartSupplements = require('./index')

describe('notams', () => {
  it('should fetch chart supplements for a single ICAO', () => {
    return chartSupplements('PANC').then(cs => {
      assert(cs)
    })
  })

  it('should fetch NOTAMs for an array of ICAOs', () => {
    return chartSupplements(['PANC', 'PABV']).then(cs => {
      assert(cs.length === 2)
      cs.map(assert)
    })
  })

  it('should expose the list method', () => {
    return chartSupplements.list('PANC')
  })

  it('should fetch NOTAMs for an array of ICAOs using the list method', () => {
    return chartSupplements.list(['PANC', 'PABV']).then(cs => {
      assert(cs.length === 2)
      cs.map(assert)
    })
  })
})
