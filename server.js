const express = require("express");
const morgan = require("morgan");
const axios = require('axios');
const app = express();

app.use(express.json()); //json data
app.use(morgan('dev')); //api log

// route as a callback function
app.get('/route_name', async (req, res) => {
    try {
        var config = {
           method: "POST",
           url: '// https://discord.com/webhook/url/here', 
           headers: { "Content-Type": "application/json" },
           data: {
            content: "Fire Detected"
           },
        };
        
        // api call function 
        // then - promise async function
         axios(config)
           .then((response) => {
              console.log("Webhook delivered successfully");
              return res.send('success');
           })
           .catch((error) => {
             console.log(error);
             return error;
           });
    } catch (error) {
        res.send('error')
    }
});

// node express app listens/ running on port 80
app.listen(80, () => {
    console.log('server runnning on port 4000')
});