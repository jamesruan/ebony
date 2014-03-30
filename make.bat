npm install
browserify -r jquery -r highlight.js -r json-stringify-safe -r pegjs -r jsml-jquery | uglifyjs > javascripts/bundle.min.js 
browserify -x jquery -x highlight.js -x json-stringify-safe -x pegjs -x jsml-jquery javascripts/ml.js | uglifyjs > javascripts/ml.min.js
cd stylesheets
lessc --source-map=main_ebony.css.map main_ebony.less main_ebony.css 
lessc --source-map=main_ivory.css.map main_ivory.less main_ivory.css 
lessc --source-map=index_ebony.css.map index_ebony.less index_ebony.css 
lessc --source-map=index_ivory.css.map index_ivory.less index_ivory.css 
