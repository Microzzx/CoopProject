const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(cors());
app.use(express.json());
//routes
app.use('/companyinfo', require('./routes/companyinfo'));
app.use('/companyinput', require('./routes/companyinput'));
app.use('/companyedit', require('./routes/companyedit'));
app.use('/companydelete', require('./routes/companydelete'));
app.use('/jwtauth', require('./routes/jwtauth'));
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));

app.listen(port, () => {
  console.log("Server is running on port", port);
});





