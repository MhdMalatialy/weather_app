const path=require('path')
const express = require('express')
const hbs =require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const app =express()
const port=process.env.PORT || 3000;
const viewpath=path.join(__dirname,'../template/views')
const publicdirectory=path.join(__dirname,'../public')
const partialpath=path.join(__dirname,'../template/partials')
app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialpath)
app.use(express.static(publicdirectory))
app.get('',(req,res)=>{
    res.render('index',
    {
        title:'wheather app',
        name:'mohammad mlatialy'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title :'help',
        name:'mohammad mlatialy',
        help_massage:'how i can help you?'

    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        name:'mohammad mlatialy',
        title:'about'

    })
})
app.get('/wheather',(req,res)=>{
    if (!req.query.address){
        return res.send('error, you have to provide the address!')
    }
    const address=req.query.address
    geocode(address,(error, {latitude,longetude,location}={})=>{
        if (error){
        return res.send({error})}
            // const {latitude,longetude,location}=data
        else{
            forecast(latitude,longetude, (error, forecastdata) => {
            if (error){
            return res.send({error})}
            else{
           res.send({ location,forecastdata
           } )

         } })}

    // res.send({
    // address
    // })
})})
app.get('/help/*',(req,res)=>{
    res.render('error',{
        error:'artical not found'})})
app.get('/*',(req,res)=>{
    res.render('error',{
    error:'error 404'})})

app.listen(port,()=>{
    console.log('the server is on'+port)
})