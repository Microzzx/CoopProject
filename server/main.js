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
app.use('/a1_edit', require('./routes/a1_edit'));
app.use('/a1_delete', require('./routes/a1_delete'));
app.use('/a2_get', require('./routes/a2_get'));
app.use('/a2_input', require('./routes/a2_input'));
app.use('/a2_edit', require('./routes/a2_edit'));
app.use('/a2_delete', require('./routes/a2_delete'));
app.use('/doc_status', require('./routes/doc_status'));
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/jwtauth', require('./routes/jwtauth'));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log("Server is running on port", port);
});





