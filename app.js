//jshint esversion:6

const express = require("express");  //requiring express in order to use it
const bodyParser = require("body-parser");  //requiring body-parser in order to use it
// const request = require("request");
// const { Http2ServerRequest } = require("http2");
// const https = require("https");
// const { post } = require("request");

const app = express();  //creates app constant using express to generate it

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs'); //sets ejs and view engine for express

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){  //request, response

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-us", options);

    res.render("list", {kindOfDay: day, newListItems: items});  //renders a file called list and passes the variable kindOfDay(must match in list.ejs) the value will be the value of day
});        
    // this code adds a new item, when a post request is triggered on home route, will safe value of newItem and redirect to the home route 
app.post("/", function(req, res) {
    var item = req.body.newItem;

    items.push(item);  

    res.redirect("/");
});    
  

//sets up server on port 3000
app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});


//Long way of getting day of week, shorter way is to use .toLocalDateString

    // var currentDay = today.getDay();
    // var day = "";

    // switch (currentDay) {
    //     case 0:
    //         day="Sunday";
    //         break;
    //     case 1:
    //         day="Monday";
    //         break;
    //     case 2:
    //         day="Tuesday";
    //         break;
    //     case 3:
    //         day="Wednesday";
    //         break;
    //     case 4:
    //         day="Thursday";
    //         break;
    //     case 5:
    //         day="Friday";
    //         break;
    //     case 6:
    //         day="Saturday"; 
    //         break;
    //       default:
        // console.log("Error current day is equal to:" + currentDay);
    

    // if (currentDay === 6 || currentDay === 0) {
    //     day = "Weekend";
    //     //res.write allows you to send multiple messages, res.send will send them.  you can only have one res.send
     
    // } else {
    //     day = "Weekday";
    // }
