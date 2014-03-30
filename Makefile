all:
	npm install
	browserify -r jquery -r highlight.js -r json-stringify-safe -r pegjs -r jsml-jquery | uglifyjs > javascripts/bundle.min.js 
	browserify -x jquery -x highlight.js -x json-stringify-safe -x pegjs -x jsml-jquery javascripts/ml.js | uglifyjs > javascripts/ml.min.js
	$(MAKE) -C stylesheets

clean:
	rm -f javascripts/*.min.js
	rm -f stylesheets/*.css



