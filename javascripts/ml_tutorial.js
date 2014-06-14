var $=require('jquery');
var ML = require('ML');

$(document).ready( function (){
    $("a.content-target").click(function(){
        function load_content(file){
            var text = ML.render_file(file, $("#content"), $("#message"));
            $("#source").text(text);
        }
        var file = $(this).attr("title");
        load_content(file);
    });
});
