console.log('hello console')

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const msg1 =document.querySelector('#msg1')
const msg2 =document.querySelector('#msg2')
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    msg1.textContent='loaging.....'
    msg2.textContent=''
    fetch('http://localhost:3000/wheather?address='+location).then((response) => {
        response.json().then ((data)=>{
            if (data.error)
            {msg1.textContent=data.error}
            else
           { msg2.textContent=JSON.stringify(data.forecastdata)
            msg1.textContent=data.location
        }
        })
    })
})