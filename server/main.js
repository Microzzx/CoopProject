const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const path = require('path')
const bodyParser = require("body-parser");
app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
//routes
app.use('/a1_get', require('./routes/a1_get'));
app.use('/a1_input', require('./routes/a1_input'));
app.use('/a2_image_input', require('./routes/a2_image_input'));
app.use('/a2_image_get', require('./routes/a2_image_get'));
app.use('/companyedit', require('./routes/companyedit'));
app.use('/companydelete', require('./routes/companydelete'));
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/jwtauth', require('./routes/jwtauth'));

app.use('/static', express.static(path.join(__dirname, 'public','images')));

app.listen(port, () => {
  console.log("Server is running on port", port);
});





