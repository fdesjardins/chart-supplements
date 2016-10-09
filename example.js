const chartSupplements = require('./')

chartSupplements.list(['PANC', 'PADK']).then(results => {
  console.log(JSON.stringify(results, null, 2))
})
