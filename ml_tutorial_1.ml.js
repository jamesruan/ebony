\h3{标记语言?}

标记语言（the Markup Language）是重新设计的，用于代替UBB代码（BBCode）的一种描述性语言。以下简称ML。

ML通过对文字做标记，可以实现很多HTML的功能，相比HTML，ML更加简单。

与BBCode不同，ML的标签标记的是“语义”（是什么），而不是排版原语（看起来怎么样）。

ML有两种语法，一种接近BBCode，简单，但书写稍繁琐；一种接近TeX，稍复杂，但书写较快捷。

ML由于有语法结构，暂时不考虑提供可视化编辑器。

\hline

\h3{罗嗦一下}

最初设计ML是为了解决这样几个问题：

\list#{
    \* 原来的BBCode语法历经多年改造，语法不够一致，功能过于多样，导致Bug众多，代码维护困难重重；
    \* 基于排版原语的BBCode功能强大，对于没有排版背景知识的普通用户来说，容易滥用（看看大部分人的Word排版就知道了）；
    \* 所见即所得的可视化编辑器进一步降低了使用BBCode的门槛，催生了更多糟糕的排版，然而编辑器本身却Bug众多，难以维护；
    \* 由于没有BBCode没有语义化，在原有的BBCode基础上，做出一致性好的排版样式几乎不可能。
}

于是我开始问这个问题，设计这个替代性的代码，到底是为了读者能更好的读，还是方便写者更好的写？然后我意识到，写者写的目的是为了让读者更好的读（普通的论坛阅读和发帖的比例大约是100:1），设计代码来提供更加丰富的写作元素，最终的目的还是为了更好地表达内容，取悦读者。

因此，写者可以做出一些牺牲，为了写出更好的东西，而去学习一种设计更完善的语言。真正在意读者的写者，是愿意去用更好的方式呈现他的作品的。考虑到论坛上绝大部分的发言并不需要ML提供的丰富的语言元素，真正学习ML的写者，必定是更在乎读者的少数人。这样一考虑，少数人通过学习ML，牺牲ML更加严格的语法所带来的复杂性，来提高绝大多数人的阅读体验，是完全值得的。

ML是一个有严格语法定义的的语言，实现这个语言用到了PEG.js这个开源项目。由于PEG.js（parsing expression grammar）是一种语法解析语言，PEG代码本身就是对语言语法的描述与解析，这使得ML非常容易维护（在学习PEG的代价下）。

同时，ML又是全新设计的语言，各个元素标记的语法比较一致，功能上也仅仅用于排版，便于学习。

最重要的是，ML的元素面向语意设计，很容易实现一致性好的样式，更改样式也无需hack语言本身，只需改动样式表。这使得不同主题页面下不同样式成为可能。另一方面，写者可以集中在自己要表达的内容上，而不用去考虑排版样式。

最后，去掉所见即所得的编辑器，一方面是因为简单的点击按钮添加的代码不一定符合ML的语法结构，不一定能写出正确的ML代码；简单的编辑器去编辑有语法结构的ML，容易让使用者误以为是Bug，而写出正确的ML代码依然需要学习，对于学过ML的用户，按钮使他们脱离键盘，不见得可以提高写作效率。同时，对于开发者来说，去掉所见即所的编辑器，进一部减少了代码维护的困难，可以把精力用在开发其他更有用的项目上。

总之，ML对读者与开发者的好处是相当明显的；对于随意的写者，增加了学习成本；对于认真的写者，增加的学习成本可以被作品更好的表现所代替。ML提高了阅读体验，提高了写者的门槛，有助于写出更高质量的内容。