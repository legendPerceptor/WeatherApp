const request = require('request');
const aQueryUrl=`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCNmoP4roWnUCuVY8PMEGJ_1VprLzSMkTw`;
request({
  url:aQueryUrl,
  json:true
},(error,response,body)=>{
  console.log(JSON.stringify(body,undefined,2));
});
