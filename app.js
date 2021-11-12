const request = require('postman-request');

  


const geocode = (address,callback)=>{
    const cordURL =`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibW9zaDNiYW4iLCJhIjoiY2t2d2sxeGk5YzZ0YjMwczdicjNreWh2YiJ9.QW28twiHjivNMMEkOglXAw&limit=1`
    request({url:cordURL,json:true},(error,response)=>{
        if(error)
        {
            callback(undefined,error)
        }
        else if(response.body.error){
            callback(undefined,response.body.error)
        }
        else
        {
            const longitude = response.body.features[0].center[0]
            const latitude = response.body.features[0].center[1]
            const cordData = {
                longitude:response.body.features[0].center[0],
                latitude:response.body.features[0].center[1],
                location:response.body.features[0].place_name
            }
            callback(cordData,undefined)
        }
        
    })
}
geocode('cairo',(data,error)=>{
    if(data){
        
        console.log(data)
    }
    else{
        console.log(error)
    }
 })
// const url = 'http://api.weatherstack.com/current?access_key=c396b526cc5d10637e0ff83d64435203&query=37.8267,-122,4233&units=m'
// request({url:url,json:true},(error,response)=>{
//     if(error)
//     {
//         console.log(error)
//     }
//     else if(response.body.error){
//         console.log(response.body.error)
//     }
//     else
//     {
//         const current =response.body.current
//         console.log(`The Current Temp is ${current.temperature} and it feal like ${current.feelslike} and the Weather Desctiption is ${current.weather_descriptions[0]}`);
//     }
   
// })
