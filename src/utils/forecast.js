const request =require('request')
const forecast=(lat,long,callback)=>{
    const url='https://api.openweathermap.org/data/2.5/onecall?lat='+encodeURIComponent(lat)+'&lon='+encodeURIComponent(long)+'&appid=dc53a4676717bdcbca329816ab72bc14'
    request({url:url,json:true},(error,{body})=>{
        // const {message}=body
        const{temp,clouds}=body.current
        if (error){
            callback('there no internet')
        }
        else if (body.message){
        callback('can`t find location ')}
        else{
            callback(undefined,{
                temp,
                clouds           
            })
        }
})}
module.exports=forecast
