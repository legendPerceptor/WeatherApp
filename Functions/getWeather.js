//import { request } from 'https';
const request=require('request');
const config=require('../Config/config');
let getWeather=(location,callback)=>{
    const query=`https://api.darksky.net/forecast/${config.darskyKey}/${location.lat},${location.lng}`;
    request({
        'url':query,
        'json':true
    },(error,response,body)=>{
        if(error){
            console.error(`Can't get access to darksky!`);
            callback(new Error('Fail to get access to darksky'));
        }
        let result={};
        result.timezone=body.timezone;
        result.currently=body.currently;
        result.hourly=body.hourly;
        let date=new Date(body.currently.time*1000);
        let time=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        result.simple={
            'temperature':body.currently.temperature,
            'apparentTemprature':body.currently.apparenttemprature,
            'time':time,
            'summary':body.hourly.summary
        };
        callback(null,result);
    });
}

module.exports=getWeather;
