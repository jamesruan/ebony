all:main_ebony.css main_ivory.css index.css

main_source: main_source.less grid_source.less typo_source.less ui_source.less media_query_source.less 

main_ebony: main_source main_ebony.less theme_ebony.less

main_ebony.css: main_ebony
	lessc --source-map=main_ebony.css.map main_ebony.less main_ebony.css 

main_ivory: main_source main_ivory.less theme_ivory.less

main_ivory.css: main_ivory
	lessc --source-map=main_ivory.css.map main_ivory.less main_ivory.css 

index.css: index_source.less
	lessc --source-map=index.css.map index_source.less index.css 

clean:
	rm -f *.css *.map
