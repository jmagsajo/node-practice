const https = require('https')

const url = 'https://api.darksky.net/forecast/c5d45c1e6bc4664f05ad7c45e7ab9d7b/40,-75?lang=en'

const request = https.request(url, (response) => {
    let data = ''
    
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()