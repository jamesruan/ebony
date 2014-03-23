copy: jquery highlight angular

jquery: init
	cp bower_components/jquery/dist/jquery.min.js javascripts/

highlight: init
	cp Makefile.highlight bower_components/highlight/Makefile
	$(MAKE) -C bower_components/highlight
	
angular: init
	cp bower_components/angular/angular.min.js javascripts/

init: bower_components
	$(MAKE) -C stylesheets
	bower install

clean:
	rm -f javascripts/highlight.pack.js
	rm -f javascripts/jquery.min.js	
	rm -f javascripts/angular.min.js
	rm -rf stylesheets/highlight
	rm -f bower_components/highlight/Makefile
