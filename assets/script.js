var Spotify = require("node-spotify-api")

var axios = require("axios");
var moment = require("moment")
var axios = require("fs")

let queryURL = "http://ww.ombdapi.com/?t=" + process.argv[3] + " " + " ";

axios.get(queryURL).then(
    function(response) {
        console.log(response.data);
    },

function(error) {
    if (error.response) {
        console.log(error.response.data);
        console.loge(error.response.status);
        console.log(response.data.headers);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log("Error", error.message);
    }
    console.log(error.config);
}
);