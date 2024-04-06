const Express = require('express');
const app = Express();
const PORT_NO = 4050
const router = require('./correction')
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use('/', router)

app.listen(PORT_NO, ()=>{
    console.log(`the servre is running on port : ${PORT_NO}👌.`);
})

