const request =require('request')
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibW9oYW1tYWRtYWxhdGlseSIsImEiOiJja2h2M2cwYmgwMWx6MnRua2RmeGY5ajcwIn0.0nRq16y2RVELVBgUz8L9ug&limit=1'
    request({url,json:true},(error,{body})=>{
        if (error){
            callback('there no internet')
        }
        else if (body.features.length===0){
        callback('can`t find location ')}
        else{
            callback(undefined,{
                latitude:body.features[0].center[1],
                longetude:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
})}
module.exports=geocode
