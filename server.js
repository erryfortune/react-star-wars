const express = require('express')
const path = require('path')
const logger = require('morgan')
const axios = require('axios')


// cross origin access 
const cors = require('cors')



const app = express()

//access
app.use(cors({
    origin: "*"
}))


// logs different requests to our server
app.use(logger('dev'))

// parse stringified json objects
app.use(express.json())

// serve our build folder
app.use(express.static(path.join(__dirname, 'build')))

app.get('/get_starships',async (req, res) =>{

    let apiResponse = await axios('https://swapi.dev/api/starships')
    let data = apiResponse.data
    console.log(apiResponse);
    res.json(data)
} )


// Catch-all route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


app.listen(4000, () => {
    console.log(`Server is Listening on 4000..`)
})