const request = require('request')

const forecast = (latitude, longitude, callback) => {
    url = 'http://api.weatherstack.com/current?access_key=0995a2047a78ec33ab66bb9cdaf42c30&query='+ 
    encodeURIComponent(latitude) +','+ encodeURIComponent(longitude) +''

    request({url, json:true} , (error, {body})=> {
        if (error) {
                    
                    callback('Unable to connect to weather service!', undefined)
                } else if (body.error) {
                   
                    callback('Unable to find location.',undefined)
                } else {
                    callback(undefined, {
                        temperature: body.current.temperature,
                        feelslike:body.current.feelslike,
                        weather_descriptions:body.current.weather_descriptions[0]
                    })
                    
                }

    })

}

module.exports=forecast