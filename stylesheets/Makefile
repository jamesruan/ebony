theme_ivory = --global-var='theme_file="theme/ivory.less"'
theme_ebony = --global-var='theme_file="theme/ebony.less"'

all:main_ebony.css main_ivory.css index.css

main: main.less normalize.less mixin.less base.less modifier.less elements.less media_query.less

main_ebony: main theme/ebony.less

main_ebony.css: main_ebony
	lessc --source-map=main_ebony.css.map $(theme_ebony) main.less main_ebony.css 

main_ivory: main theme/ivory.less

main_ivory.css: main_ivory
	lessc --source-map=main_ivory.css.map $(theme_ivory) main.less main_ivory.css 

index.css: index.less
	lessc --source-map=index.css.map index.less index.css 

clean:
	rm -f *.css *.map
