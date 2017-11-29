const request = require('request');

const yargs = require('yargs');

let argv = yargs.option('address', {
    alias: 'a',
    demand: true,
    string: true
  })
  .help()
  .argv;
//console.log(argv);
//&key=AIzaSyCNmoP4roWnUCuVY8PMEGJ_1VprLzSMkTw`
//https://maps.googleapis.com/maps/api/geocode/json?address=${search_argv.uri_address}&key=${config.key}
const uri_address = encodeURIComponent(argv.address);
const getLocation = require('./Functions/getLocation');
const getWeather = require('./Functions/getWeather');
getLocation(uri_address, (err, result) => {
  if (err) {
    console.error(`Can't get the correct location!`);
    return;
  }
  console.log('Address:',result.address);
  getWeather({
    lat:result.latitude,
    lng:result.longitude
  },(err,result)=>{
    if(err){
      console.error(`Can't get the correct Weather!`);
      return;
    }
    //console.log("Location:",);
    console.log("Summary:",result.simple.summary);
    console.log(`Temperature:,${(result.simple.temperature-32)/1.8} degree celsus`);
  })

});