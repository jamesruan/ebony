all:main_ebony.css main_ivory.css index_ebony.css index_ivory.css

main_source: main_source.less grid_source.less typo_source.less ui_source.less media_query_source.less 

main_ebony: main_source main_ebony.less theme_ebony.less

main_ebony.css: main_ebony
	lessc --source-map=main_ebony.css.map main_ebony.less main_ebony.css 

main_ivory: main_source main_ivory.less theme_ivory.less

main_ivory.css: main_ivory
	lessc --source-map=main_ivory.css.map main_ivory.less main_ivory.css 

index_ebony.css: index_source.less index_ebony.less theme_ebony.less
	lessc --source-map=index_ebony.css.map index_ebony.less index_ebony.css 

index_ivory.css: index_source.less index_ivory.less theme_ivory.less
	lessc --source-map=index_ivory.css.map index_ivory.less index_ivory.css 

clean:
	rm -f *.css *.map
