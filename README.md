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

The ebony/ui is an angular based components library under development.

Start a http-server under ebony/ui/demo to see it's performance.

Currently, it is needed to include following javascript files in the HTML to use the UI library:

	ebony/javascripts/bundle.min.js                  // everything other of other part of ebony bundled.
	ebony/bower_components/angular/angular.min.js    // angular main js.
	ebony/ui/javascripts/ebony.js                    // the main UI js.
	ebony/ui/javascripts/accordion.js                // the accordion components.	
	ebony/ui/javascripts/tabs.js                     // the tabs components.	
	// your javascript file here.

Upon completion, the last three javascripts would be bundled together.

-----

What's going on?
 - Transition to Angular based infrastructure.
 - Adopting link+[SMACSS]{https://smacss.com/book/} architecturing technique.
