var argv = require('minimist')(process.argv.slice(2))
var microformats = require('microformat-node')
var form = require('form-urlencoded')

if (!argv._[0]) {
  console.log('Provide a url to some mf2 formatted html')
} else {
  microformats.parseUrl(argv._[0], {}, processJson)
}

function processJson (err, data) {
  if (err) return console.error(err)
  console.log(data)
  console.log(form.encode(data))
}
