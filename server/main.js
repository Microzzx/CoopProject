const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const path = require("path");
const bodyParser = require("body-parser");
app.use(cors());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
//routes
app.use("/a1", require("./routes/a1"));
app.use("/a2", require("./routes/a2"));
app.use("/user", require("./routes/user"));
app.use("/doc_status", require("./routes/doc_status"));
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/logout", require("./routes/logout"));
app.use("/jwtauth", require("./routes/jwtauth"));

app.use("/static", express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("Server is running on port", port);
});
