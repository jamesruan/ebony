all: no_node
    
no_node: browserify css

node: node_modules
	npm install

browserify: javascripts/ml.js javascripts/ml_tutorial.js
	pegjs grammar.pegjs javascripts/grammar.js
	browserify -r jquery -r highlight.js -r json-stringify-safe -r jsml-jquery -r knockout | uglifyjs > javascripts/bundle.min.js 
	browserify -x jquery -x highlight.js -x json-stringify-safe -x jsml-jquery -x knockout javascripts/ml.js |uglifyjs > javascripts/ml.min.js
	browserify -x jquery -x highlight.js -x json-stringify-safe -x jsml-jquery -x knockout javascripts/ml_tutorial.js |uglifyjs > javascripts/ml_tutorial.min.js

grammar: grammar.pegjs node

css:
	$(MAKE) -C stylesheets

clean:
	rm -f javascripts/*.min.js
	rm -f javascripts/grammar.js
	rm -f stylesheets/*.css
	rm -f stylesheets/*.css.map



