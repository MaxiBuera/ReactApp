const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
//const db = require('./backend/routes/keys').mongoURI;
const routes = require('./backend/Routes/index')
const mongoose = require("mongoose");
var url ="mongodb+srv://MaxiB:1234@mycluster-9sh7r.mongodb.net/Weatherdb?retryWrites=true&w=majority";

var db = mongoose.connection;


const port = process.env.PORT || 5000;
/*app.listen(port, () => {
  console.log("Server is running on " + port + " port");
});*/

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

app.use('/users', require('./backend/routes/userRoutes'));

mongoose.connect(url, { useUnifiedTopology: true , useNewUrlParser: true   });
  /*.then(() => console.log('Connection to Mongo DB established'))
  .catch(err => console.log("AUTH",err));*/
  db.on('error',console.error.bind(console, 'connection error:'));
  db.once('open',function(){

    app.listen(port, () => console.log(`server running on port ${port}`))
    console.log("Mongoose is connected")

    app.use('/',routes)

});
