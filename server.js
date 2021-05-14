const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

/* const secretKey = "keepThisSecret";
const payload = {
  _id: user._id
};
const myJWT = jwt.sign(payload, secretKey); */
 
require('./server/config/connectMongo')(); 
 
//app.use(cors());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//require('./server/routes')(app); 
//require('./server/routes/player.routes')(app);
require('./server/routes/user.routes')(app);
 
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})