all: bower_components stylesheets/main_ebony.css
	$(MAKE) -C stylesheets
	bower install
