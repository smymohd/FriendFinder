var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({extended: false})


app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json({type: 'application/**json'}));

app.use(bodyParser.raw({type: 'application/vnd.custom-type'}));

app.use(bodyParser.text({type: 'text/html'}));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
app.listen(PORT, function(){
  console.log("App listening on PORT: "  + PORT);
});

