const request = require('request')
const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=6db7ebcb2c5f48bb55852e25c39942ce&query='+ latitude + ','+ longitude + '&units=m'
 
    request({url,json:true},(error,{ body })=>{
       if(error){
          callback('Unable to connect with the weather services!',undefined)
       }else if(body.error){
           callback('Unable to find location!',undefined)
       }else{
           callback(undefined,'It is currently ' + body.current.temperature + ' degrees out. ' + 'There is a ' + body.current.feelslike + '% chance of rain.')
       }
    })
 }

 module.exports = forecast