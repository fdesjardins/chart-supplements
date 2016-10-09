/* global describe, it */

const chartSupplements = require('./index')

describe('notams', () => {
  it('should fetch chart supplements for a single ICAO', (done) => {
    chartSupplements('KFDC').then(() => done())
  })

  it('should fetch NOTAMs for an array of ICAOs', (done) => {
    chartSupplements(['KFDC', 'KZBW']).then(() => done())
  })

  it('should expose the list method', (done) => {
    chartSupplements.list('KFDC').then(() => done())
  })

  it('should fetch NOTAMs for an array of ICAOs using the list method', (done) => {
    chartSupplements.list(['KFDC', 'KZBW']).then(() => done())
  })
})
