var $ = require('jquery');
var jQuery = $;
var grammar = require('./grammar.js');
var hljs = require('highlight.js');
var stringify = require('json-stringify-safe');
require('jsml-jquery');

function buildErrorMessage(e){
    return e.line !== undefined && e.column !== undefined
        ? "Line " + e.line + ", column " + e.column + ": " + e.message
        : e.message;
}

function get_file(url){
    var string = $.ajax({url: url,async: false
    }).responseText;
    return string;
}

$(document).ready( function (){
    var parser;
    try{
        $("#message").text("Building parser...");
        parser = grammar;
    }catch(e)
    {
        $("#message").text(buildErrorMessage(e));
        return;
    }

    var input = get_file("ml.test.txt");
    var date = new Date;
    var time_start = date.getTime();
    $("#input").text(input);
    try{
        $("#message").text("Parsing text...");
        var parsed = parser.parse(input);
        $("#output").text(stringify(parsed));
    }catch(e)
    {
        $("#message").text(buildErrorMessage(e));
        return;
    }
    $("#html_output").jsml(parsed);
    date = new Date;
    var time_end = date.getTime();
    var text = "Pasered: time "+(time_end-time_start).toString()+"ms."
    $("#message").text(text);


    $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
});
