var ML = function(){
    function render(text, targetDOM, messageDOM, return_type, ast){
        var $ = require('jquery');
        var grammar = require('grammar');
        var hljs = require('highlight.js');
        var stringify = require('json-stringify-safe');
        require('jsml-jquery');

        function buildErrorMessage(e){
            return e.line !== undefined && e.column !== undefined
                ? "Line " + e.line + ", column " + e.column + ": " + e.message
                : e.message;
        }

        var parsed;
        var date = new Date;
        var time_start;
        var time_end;
        time_start = date.getTime();
        if(messageDOM){
            messageDOM.text("语法解析中...");
        }
        try{
            parsed = grammar.parse(text);
        }catch(e)
        {
            if(messageDOM){
                messageDOM.text(buildErrorMessage(e));
            }else{
                console.log(buildErrorMessage(e));
            }
            return false;
        }
        date = new Date;
        time_end = date.getTime();
        console.log( "Pasered: time "+(time_end-time_start).toString()+"ms." );

        time_start = date.getTime();
        if(messageDOM){
            messageDOM.text("渲染中...");
        }
        try{
            if(ast){
                ast.text(stringify(parsed));
            }
            if(targetDOM){
                targetDOM.jsml(parsed);
                targetDOM.find('pre code').each(function(i, e) {hljs.highlightBlock(e)});
            }else{
                var targetDOM = $("<div>").jsml(parsed);
                targetDOM.find('pre code').each(function(i, e) {hljs.highlightBlock(e)});
            }
        }catch(e)
        {
            if(messageDOM){
                messageDOM.text(buildErrorMessage(e));
            }else{
                console.log(buildErrorMessage(e));
            }
            return false;
        }
        date = new Date;
        time_end = date.getTime();
        if(messageDOM){
                messageDOM.text("");
        }
        console.log( "Rendered: time "+(time_end-time_start).toString()+"ms." );

        if(return_type==="html"){
            return targetDOM.html();
        }else{
            return text;
        }
    }

    function render_file(file, targetDOM, messageDOM, return_type, ast){
        function get_file(url){
            var $ = require('jquery');
            var string = $.ajax({url: url,async: false, cache: false, dataType: "text"
            }).responseText;
            return string;
        }
        var text = get_file(file);
        return render( text, targetDOM, messageDOM, return_type, ast); 
    };

    return{
        render : render,
        render_file : render_file
    };
};
module.exports = ML();
