const express = require('express');
const authRouter = require('./src/routes/auth/login.routes'); 
const app = express();
const PORT = 5000;

app.get('/', function (req, res) {
  res.send('welcome on admin-backend');
});

app.use("/admin", authRouter);

app.listen(PORT, () => console.log("server is running on port:", PORT));
