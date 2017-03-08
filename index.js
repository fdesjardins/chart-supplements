const Promise = require('bluebird')
const request = Promise.promisify(require('request'))
const cheerio = require('cheerio')

// Provide a shortcut to the list method
const chartSupplements = module.exports = (icaos, options = {}) => {
  return chartSupplements.list(icaos, options)
}

// Main listing method; accepts one or more ICAO codes
chartSupplements.list = (icaos, options = {}) => {
  if (Array.isArray(icaos)) {
    return Promise.all(icaos.map(listOne))
  }
  return listOne(icaos)
}

const fetchCurrentCycle = chartSupplements.fetchCurrentCycle = () => request('https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/search/')
  .then(res => {
    const $ = cheerio.load(res.body)
    return $('select#cycle > option:contains(Current)').val()
  })

const listOne = (icao) => {
  return fetchCurrentCycle().then(searchCycle => {
    return request(`https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/search/results/?cycle=${searchCycle}&ident=${icao}&navaid=`)
      .then(res => parse(res.body))
  })
}

// Parse the response HTML
const parse = (html) => {
  const $ = cheerio.load(html)
  const $results = $('#resultsTable')

  if (!$results.html()) {
    return null
  }

  const ident = $results.find('td:nth-child(1)').text().trim()
  const city = $results.find('td:nth-child(2)').text().trim()
  const state = $results.find('td:nth-child(3)').text().trim()
  const airport = $results.find('td:nth-child(4)').text().trim()
  const navAid = $results.find('td:nth-child(5)').text().trim()
  const chart = $results.find('td:nth-child(6)').text().trim()
  const volBackPages = {
    name: $results.find('td:nth-child(7)').text().trim(),
    url: $results.find('td:nth-child(7)').find('a').attr('href')
  }
  const airportNavAidListing = {
    name: $results.find('td:nth-child(8)').text().trim(),
    url: $results.find('td:nth-child(8)').find('a').attr('href')
  }

  return {
    ident,
    city,
    state,
    airport,
    navAid,
    chart,
    volBackPages,
    airportNavAidListing
  }
}
