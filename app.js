const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
const port = 3000;

//mongoose
mongoose.connect("mongodb://localhost/NodeApp2", {
        useNewUrlParser: true
    }).then(()=>{
        console.log("Mongo Connected");
    }).catch((err)=>{
        console.log(err);
    });




//
//template engine and middlewares
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');



//ROUTES
var userRoutes = require("./routes/user");

app.use('/user',userRoutes);



app.get('/',(req,res)=>{
    // res.send("Hello world");
    res.render('landing');
})


app.listen(port,()=>{
console.log(`Server started on ${port}`);
});
