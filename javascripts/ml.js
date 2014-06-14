var $ = require('jquery');
var ML = require('ML');

$(document).ready( function (){
    ML.render_file("ml.ml.js", $("#html_output"), $("#message"), "text", $("#output"));
});
