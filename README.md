ebony
=====

  EBONY is a responsive grid framework that derives from IVORY.
It provides basic stylesheets for the new CC98.org front-end.


----

Demo [here](http://jamesruan.github.io/ebony).

The Markup Language's Tutorial is [here](http://jamesruan.github.io/ebony/ml_tutorial.html).

Need node.js installed.

	npm install 

if too slow (because of GFW) try this before:

    npm config set registry http://registry.cnpmjs.org 

then (on linux)

    make

or you may need manually build EBONY

use:

    npm test

to run a test server.

----

Usage: 

The \*.less file is complied into css file.

Javascript libraries are bundled and minified into bundle.min.js.

    
    var $ = require('jquery');  //jquery
    var grammar = require('grammar');   //low level ML parser and JSML generator
    require('jsml-jquery');     //load the jquery-plugin, for render JSML into HTML
    var hljs = require('highlight.js'); //stand alone highlight.js

    var ML = require('ML');     //for rendering ML file. And an external MathML js file should be loaded to render Math Symbols.

    var ko = require('knockout');   //MVVC framework

    require('Sammy');   //load the Sammy event driven library.
