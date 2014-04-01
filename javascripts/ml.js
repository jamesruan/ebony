var $ = require('jquery');
var jQuery = $;
var pegjs = require('pegjs');
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
    var grammar = get_file("grammar.pegjs")
    var parser;
    var date = new Date;
    var time_start = date.getTime();
    try{
        $("#message").text("Building parser...");
        parser = pegjs.buildParser(grammar);
    }catch(e)
    {
        $("#message").text(buildErrorMessage(e));
        return;
    }

    date = new Date;
    var time_mid = date.getTime();
    var text = "Built: time "+(time_mid-time_start).toString()+"ms."

    var input = get_file("ml.test.txt");
    date = new Date;
    time_mid = date.getTime();
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
    text += "Pasered: time "+(time_end-time_mid).toString()+"ms."
    $("#message").text(text);


    $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
});
