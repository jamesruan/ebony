all: no_node
    
no_node: browserify css

node: node_modules

node_modules:
	npm install

bower: node_modules
	bower install

highlight.js: bower_components
	cd bower_components/highlight.js/tools && python build.py && echo "module.exports=hljs;" >> ../build/highlight.pack.js && cd ../../..
	cp -r bower_components/highlight.js/src/styles stylesheets/highlight

jquery = "./bower_components/jquery/dist/jquery.min.js:jquery"
hljs = "./bower_components/highlight.js/build/highlight.pack.js:hljs"
grammar = "./javascripts/grammar.js:grammar"
ML = "./javascripts/ML.js:ML"
jsml = "./bower_components/jsml-jquery/jsml.js:jsml-jquery"

browserify: highlight.js javascripts/ml.js javascripts/ml_tutorial.js
	pegjs grammar.pegjs javascripts/grammar.js
	browserify -r $(jquery) -r $(hljs) -r $(jsml) -r $(grammar) -r$(ML) |uglifyjs --stats > javascripts/bundle.min.js
	browserify -x jquery -x hljs -x jsml-jquery -x grammar -x ML javascripts/ml.js |uglifyjs --stats > javascripts/ml.min.js
	browserify -x jquery -x hljs -x jsml-jquery -x grammar -x ML javascripts/ml_tutorial.js |uglifyjs --stats > javascripts/ml_tutorial.min.js

grammar: grammar.pegjs node

css:
	$(MAKE) -C stylesheets

clean:
	rm -f javascripts/*.min.js
	rm -f javascripts/grammar.js
	rm -f stylesheets/*.css
	rm -f stylesheets/*.css.map



