
\h1{新版标记代码完全手册}

\hline

\h2{目录}
\list#{
    \* \toanchor{新98代码和原98代码的区别}
    \list#{
        \*\toanchor{语义级别标签}
        \*\toanchor{支持类似TeX的语法}
        \*\toanchor{其他的不同}
    }
    \* \toanchor{元素标签及代码}
    \list#{
    \* \toanchor{基本概念}
        \list#{
            \* \toanchor{区块级元素与行内元素}
            \* \toanchor{代码风格}
            \* \toanchor{转义字符}
    }
        \* \toanchor{常用元素}
        \list#{
            \* \toanchor{段落、换行和水平分割}
            \* \toanchor{标题与子标题}
            \* \toanchor{有序列表和无序列表}
            \* \toanchor{代码}
            \* \toanchor{特殊意义文字}
            \* \toanchor{通知框}
            \* \toanchor{引文与引用}
            \* \toanchor{超链接和锚点}
            \* \toanchor{表格}
            \* \toanchor{图片与图文混排}
            \* \toanchor{数学公式}
        }
        \* \toanchor{原语级别元素}
        \list#{
        \* \toanchor{字体}
        \* \toanchor{字体大小}
        \* \toanchor{字体颜色与背景颜色}
        \* \toanchor{字体特效}
        }
    }
}

\hline

\h2{\anchor{新98代码和原98代码的区别}新98代码和原98代码的区别}

原98代码是基于UBB（the Ultimate Bullet Board）扩展的，现在这类叫做UUCode的代码由于历史原因依然存在于大多数的网络社区上。UBB出现在1996年，BBCode在1998年的时候被加入UBB，当时的HTML远没有完善，浏览器功能也很局限，BBCode的出现仅仅是为了让用户可以快速地写一些HTML代码。考虑到98的历史，当年的使用BBCode也是非常合理，在国内也是引领潮流的。

\fig{begin}
\img<{img/HTML5_sticker.png}

近年来，各种浏览器纷纷登场，W3C规范备受重视，互联网进入了一个新时代。为了向HTML5的理念靠近，98代码进行了一次重新设计。最主要的变化有两个：

\list#{
\* 语义级别标签
\* 支持类似TeX的语法
}

这些改变的背后是排版思想的改变。

\fig{end}

\h3{\anchor{语义级别标签}语义级别标签}

过去的排版，人人都是“专家”（这要归功于MS Word的普及），掌控了字体、字重、颜色、行间距、段间距、对齐等等细节，恨不得可以自己设计字体。（\link+[扩展阅读材料：Web Design is 95% Typography]{http://ia.net/blog/the-web-is-all-about-typography-period/}）当然，不可能人人都能成为专家，过去那些\emphasis{原语级别}的标签，杀伤力过大，普通人难以驾驭：虽有屠龙的刀在手，杀鸡都困难。现在，大家有了更好的选择，不是去在意细节，而是关注自己要表达的内容，并适当的用代码加上\emphasis{语义级别}的标签——仅仅标注这部分文字是什么——而应该怎样呈现，则交给更专业的设计人员。我们设计了几套主题，如果使用了语义级别标签，则会在不同主题下看到他们不同的表现。

\h3{\anchor{支持类似TeX的语法}支持类似TeX的语法}

过去的代码编辑器，默认是所见即所得的方式。然而，由于技术手段的局限性，开发人员并不能保证真正的“所见即所得”，常常会出现各种看起来可以用，实际上不能用，\i{vice versa}，而老鸟们更习惯用手打代码。现在的代码编辑器默认模式是纯文本模式，没有任何代码功能；去除了可能造成误导的“所见即所得”模式，代码模式下是“所见即所想”，即通过使用标签标注语义。同时，代码模式下提供了实时的“参考效果”，帮助新手使用正确的语法。老鸟们可以从类似BBCode和类似TeX两种风格中选择自己喜欢的一种使用。P.S.这个页面就是用代码标记排版的哦。

使用语义级别的标签，即便是新手，也可以通过编辑器的按钮，满足大部分的需要。原来原语级别的标签，由于不推荐大家使用，所以从编辑器的按钮中去掉了；因为考虑到兼容性，没有从代码中完全去除，只是语法上可能会有些小区别。详情请看：\link+[新旧代码对比汇总]{'';!--"<XSS>=&{()}

\h3{\anchor{其他的不同}其他的不同}

纯文本模式只有最简单的功能：行与段落，仅仅用于快速回复。\newline
单独的回车表示一个段落的结束，多个回车并不能插入空段落；换行则用\@newline\@标签，或可读性更好的两个空格加回车来表示。在这段文字中，细心的你看出换行和换段的区别了吗？纯文本模式下不能用空格和制表符来缩进，因为纯文本模式不是为了排版而设计。

代码模式下可以使用所有的标签来完成排版。\newline
一个段落的结束不能用单独的回车，而需要用空行（两个回车）来表示。单纯的换行，使用\@newline\@标签，或同样可以用两个空格加回车。\emphasis{区块级元素}的结束都能用空行来表示，除了段落外，标题、引文、水平分割、列表、表格、图片、display模式下的数学公式等都是\emphasis{区块级元素}。


\h2{\anchor{元素标签及代码}元素标签及代码}

\h3{\anchor{基本概念}基本概念}

\h4{\anchor{区块级元素与行内元素}区块级元素与行内元素}

区块级元素之间用\strong{空行}分割，表现为\strong{占据整行空间}；\newline
行内元素不需要特别的分割符，表现为\strong{彼此紧密地排列}，通常多个行内元素组成一个区块级元素：比如说段落是区块级元素，它是由各种行内元素组成（比如文本字符、手动换行、特殊文字标记、超链接等）。

区别区块级元素和行内元素，对于正确排版非常重要。当发现代码并不如你所想的那样显示的时候，请重新检查下是否正确区别了区块级元素和行内元素。

\h4{\anchor{代码风格}代码风格}

我们提供了两种语法风格的标记代码，同样的标签可以使用两种不同风格的标记代码表示。TeX风格的标签有比较好的可读性，书写起来比较方便，但有一定的学习成本；BBCode风格的标签有比较一致的格式，学习成本比较小，但可读性稍差。

下表提供了两种风格的语法对比：

\table[各类标签的语法风格对比]{begin}
\r{\h 分类 \h TeX-style \h BBCode-style \h 说明 \h 标签举例}
\r{\d 大区块级 \d \@\tagname[option]{begin} ... \tagname{end}\@ \d \@[tagname{option}] ... [/tagname]\@ \d 大区块级标记通常内容比较多，而且内部会有比较复杂的内容；建议使用单独的行写这类代码。 \d\@table\@ \@code\@}
\r{\d 区块级，行内级 \d \@\tagname[option]{ ... }\@ \d \@[tagname{option}] ... [/tagname]\@ \d 这类标记的内容通常是一行，内部结构简单（仅允许行内级别元素），这一类的标签数量最多，也最为常用。 \d\@h2\@ \@cite\@}
\r{\d 小行内级 \d \@\tagname ...\tagname\@ \d \@[tagname] ... [/tagname]\@ \d 这类代码小于一行，内部无其他结构。 \d \@@\@ \@$\@}
\r{\d 项目标记 \d \@\tagname ...\@ \d \@[tagname] ...\@ \d 这类标签不能单独使用，仅仅在特定元素（列表、表格）中。 \d\@d\@ \@*\@}
\r{\d 特殊字符 \d \@\tagname\@ \d \@[tagname]\@ \d 这类标签内部无内容，本身仅仅用来表示特殊符号。 \d \@hline\@ \@newline\@}
\table{end}


\h4{\anchor{转义字符}转义字符}

一些字符正常情况下会被解释成代码的组成部分，而不是文本。通过在之前加入\@\\@符号，可以将其转义为普通字符进行解读。比如使用\@\\\@来表示“\\”字符。

\h3{\anchor{常用元素}常用元素}

\h4{\anchor{段落、换行和水平分割}段落、换行和水平分割}

段落是\emphasis{区块级元素}，且段落内不能包含段落，通过空行（而不是换行）表示换段。

\emphasis{区块级元素}通过任意数量的空行相互分割。由于段落最常出现，所以它没有单独的标签，段落中所有没有加标签的文字通常就是正文了。\newline
段落内允许存在换行（比如写一首抒情诗啥的），换行是\emphasis{行内元素}，它的标签是\@newline\@，也可以使用两个空格加回车表示。

水平分割是\emphasis{区块级元素}，用于分离相关性不大的段落，它的标签是\@hline\@，效果见下一部分。

\h4{\anchor{标题与子标题}标题与子标题}

标题是\emphasis{区块级元素}，且标题内不能包含标题，但是可以包括子标题。 
标题的标签是\@h1\@到\@h6\@，子标题的标签是\@subh\@。

TeX-style:

\code{begin}

\h1{Heading Text}
\hline
\h2{Heading Text \subh{Sub Heading Text}}
\h3{Heading Text}
\h4{Heading Text}
\h5{Heading Text}
\h6{Heading Text}
\code{end}

BBCode-style:

\code{begin}
[h1]Heading Text[/h1]
[hline]
[h2]Heading Text [subh]Sub Heading Text[/subh][/h2]
[h3]Heading Text[/h3]
[h4]Heading Text[/h4]
[h5]Heading Text[/h5]
[h6]Heading Text[/h6]
\code{end}

参考效果：

\bq{begin}
\h1{Heading Text}
\hline
\h2{Heading Text \subh{Sub Heading Text}}
\h3{Heading Text}
\h4{Heading Text}
\h5{Heading Text}
\h6{Heading Text}
\bq{end}

\h4{\anchor{有序列表和无序列表}有序列表和无序列表}

列表是\emphasis{区块级元素}，列表可以嵌套列表，列表内的元素是\emphasis{行内元素}（除嵌套列表外）。\newline
有序列表会自动标号用于标记有先后顺序的并列项目；无序列表则不会自动标号，仅仅是并列项目的列举。\newline
有序列表与无序列表的标签分别是\@list#\@与\@list*\@，内部的标签项用标签\@*\@标记。

Tex-style:

\code{begin}
\list*{
    \* Unordered-list Item 1
    \* Unordered-list Item 2 \list#{
        \* Ordered-list Item 1
        \* Ordered-list Item 2
        }
    \* Unordered-list Item 3
}

\code{end}

BBCode-style:

\code{begin}
[list*]
    [*] Unordered-list Item 1
    [*] Unordered-list Item 2 [list#]
        [*] Ordered-list Item 1
        [*] Ordered-list Item 2
        [/list#]
    [*] Unordered-list Item 3
[/list*]

\code{end}

参考效果：

\bq{begin}
\list*{
    \* Unordered-list Item 1
    \* Unordered-list Item 2 \list#{
        \* Ordered-list Item 1
        \* Ordered-list Item 2
        }
    \* Unordered-list Item 3
}
\bq{end}

\h4{\anchor{代码}代码}

代码标签用来表示一段文字是计算机语言，其中的文字除了开头和结尾部分的空行外会原样不变地显示出来，有区块级和行内级两种标签，分别是\@code\@和\@@\@，\@code+\@会自动猜测语言，并语法高亮，还可以通过添加参数指定语言（代码量比较少的时候自动猜测容易出错）。

支持的可以制定的语言包括：

\list*{
    \* C类（c, cxx, cc, cpp, c++, cs, c#, java）
    \* Javascript类（js, javascript, json, coffee）
    \* XML类（htm, html, xhtml, xml）
    \* CSS（css）
    \* PHP（php）
    \* HTTP（http）
    \* 脚本类（py, python, cv, pl, perl, pm, rb, ruby, lua）
    \* 专业领域类（sql, r, s, splus, tex）
    \* GO（go）
    \* Functional类（scala, cl, el, lisp, lsp, scm, ss, rkt, erl, erlang）
}


Tex-style:

[code]

Here is \@Inline code\@.

\code+[c]{begin}

/* How much do you know about C? */
int main(){
    return 0;
}

\code+{end}

[/code]

BBCode-style:

\code{begin}

Here is [@]Inline code[/@].

[code+{c}]

/* How much do you know about C? */
int main(){
    return 0;
}

[/code+]

\code{end}

参考效果：

\bq{begin}

Here is \@Inline code\@.

\code+[c]{begin}

/* How much do you know about C? */
int main(){
    return 0;
}

\code+{end}

\bq{end}


\h4{\anchor{特殊意义文字}特殊意义文字}

特殊意义文字都是\emphasis{行内元素}。

\table{begin}
    \r{\h 标签 \h 意义 \h默认表现}
    \r{\d \@abbr\@ \d 缩写或同义词 \d \abbr[dashed underline]{虚下划线}，鼠标移到上去后可以显示全称}
    \r{\d \@emphasis\@ \d 强调的内容 \d \emphasis{变大的斜体}}
    \r{\d \@strong\@ \d 重要的内容 \d \strong{加粗}}
    \r{\d \@cite\@ \d 引用 \d 不同（英文）字体下的\cite{斜体}（\@cite+\@是区块级元素，应用场合不同）}
    \r{\d \@mark\@ \d 标记，或者高亮显示的内容 \d \mark{添加颜色}}
    \r{\d \@insert\@ \d 修订插入的内容 \d \insert{下划线}}
    \r{\d \@delete\@ \d 修订删除的内容 \d \delete{删除线}}
    \r{\d \@i\@ \d 另一种语境或者心情，比如插入拉丁文 \d \i{斜体}}
\table{end}

Tex-style:

\code{begin}

\abbr[abbreviation]{abbr}表示缩写或同义词，表现为虚下划线，鼠标移到上去后可以显示全称；\newline
\emphasis{emphasis}表示强调的内容，表现为变大的斜体；\newline
\strong{strong}表示重要的内容，表现为加粗；\newline
\cite{cite}表示引用，表现为不同（英文）字体下的斜体；\newline
\mark{mark}表示标记，或者高亮显示的内容，表现为添加颜色；\newline
\insert{insert}表示修订插入的内容，表现为下划线；\newline
\delete{delete}表示修订删除的内容，表现为删除线；\newline
\i{i}表示另一种语境或者心情，比如插入拉丁文，表现为斜体。

\code{end}

BBCode-style:

\code{begin}

[abbr{abbreviation}]abbr[/abbr]表示缩写或同义词，表现为虚下划线，鼠标移到上去后可以显示全称；[newline]
[emphasis]emphasis[/emphasis]表示强调的内容，表现为变大的斜体；[newline]
[strong]strong[/strong]表示重要的内容，表现为加粗；[newline]
[cite]cite[/cite]表示引用，表现为不同（英文）字体下的斜体；[newline]
[mark]mark[/mark]表示标记，或者高亮显示的内容，表现为添加颜色；[newline]
[insert]insert[/insert]表示修订插入的内容，表现为下划线；[newline]
[delete]delete[/delete]表示修订删除的内容，表现为删除线；[newline]
[i]i[/i]表示另一种语境或者心情，比如插入拉丁文，表现为斜体。

\code{end}

参考效果：

\bq{begin}

\abbr[abbreviation]{abbr}表示缩写或同义词，表现为虚下划线，鼠标移到上去后可以显示全称；\newline
\emphasis{emphasis}表示强调的内容，表现为变大的斜体；\newline
\strong{strong}表示重要的内容，表现为加粗；\newline
\cite{cite}表示引用，表现为不同（英文）字体下的斜体；\newline
\mark{mark}表示标记，或者高亮显示的内容，表现为添加颜色；\newline
\insert{insert}表示修订插入的内容，表现为下划线；\newline
\delete{delete}表示修订删除的内容，表现为删除线；\newline
\i{i}表示另一种语境或者心情，比如插入拉丁文，表现为斜体。

\bq{end}

\h4{\anchor{通知框}通知框}

通知框是\emphasis{区块级元素}，通知框内为行内元素，用于表示使人注意的信息。

Tex-style:

\code{begin}

\alert{注意信息}

\alert[info]{附加信息}

\alert[success]{成功信息}

\alert[error]{失败信息}

\code{end}

BBCode-style:

\code{begin}
[alert]注意信息[/alert]

[alert{info}]附加信息[/alert]

[alert{success}]成功信息[/alert]

[alert{error}]失败信息[/alert]

\code{end}

参考效果：

\bq{begin}

\alert{注意信息}

\alert[info]{附加信息}

\alert[success]{成功信息}

\alert[error]{失败信息}


\bq{end}


\h4{\anchor{引文与引用}引文与引用}

引文是\emphasis{区块级元素}，引文可以嵌套引文。引文通常用作大段字符的引用。引文内部的元素可能会改变原来的样式。\newline
引用通常表示人名，地名，书名等来源的信息。\newline
引文的标签是\@bq\@，\@bq+\@是带括号的样式；引用的标签是\@cite\@是\emphasis{行内元素}；\@cite+\@，则是是\emphasis{区块级元素}，通常用于引文后面。

TeX-style:

\code{begin}
Following is the Bene Gesserit's \cite{litany against fear}.

\bq+{begin}
I must not fear.\newline
Fear is the mind-killer.\newline
Fear is the little-death that brings total obliteration.\newline
I will face my fear.\newline
I will permit it to pass over me and through me.\newline
And when it has gone past I will turn the inner eye to see its path.\newline
Where the fear has gone there will be nothing.\newline
Only I will remain.

\bq+{end}
\cite+{Frank Herbert, Dune}

\code{end}

BBCode-style:

\code{begin}
Following is the Bene Gesserit's [cite]litany against fear[/cite].

[bq+]
I must not fear.[newline]
Fear is the mind-killer.[newline]
Fear is the little-death that brings total obliteration.[newline]
I will face my fear.[newline]
I will permit it to pass over me and through me.[newline]
And when it has gone past I will turn the inner eye to see its path.[newline]
Where the fear has gone there will be nothing.[newline]
Only I will remain.

[\bq+]
[cite+]Frank Herbert, Dune[/cite+]

\code{end}

参考效果：

\bq{begin}

Following is the Bene Gesserit's \cite{litany against fear}.

\bq+{begin}
I must not fear.\newline
Fear is the mind-killer.\newline
Fear is the little-death that brings total obliteration.\newline
I will face my fear.\newline
I will permit it to pass over me and through me.\newline
And when it has gone past I will turn the inner eye to see its path.\newline
Where the fear has gone there will be nothing.\newline
Only I will remain.

\bq+{end}
\cite+{Frank Herbert, Dune}

\bq{end}


\h4{\anchor{超链接和锚点}超链接和锚点}

超链接是\emphasis{行内元素}，通过点击超链接可以跳转到相应位置，标签是\@link\@，\@link+\@标记在新的页面打开链接。

锚点是\emphasis{行内元素}，用于指定页面内的超链接跳转的目标位置，标签是\@anchor\@。\strong{注意：}一个页面里面不能出现两个同名的锚点。\newline
要跳转到锚点，则使用\@toanchor\@标签。使用\@anchor\@ \@toanchor\@可以用于制作可以点击跳转的目录。

Tex-style:

\code{begin}
\anchor{hidden anchor} <-Hidden anchor here \newline
\link[Same page]{http://www.baidu.com} \newline
\link+[New page]{http://www.baidu.com} \newline
\link{http://www.baidu.com} \newline
\toanchor[Hidden anchor: same page]{hidden anchor}

\code{end}

BBCode-style:

\code{begin}
[anchor]hidden anchor[/anchor] <-Hidden anchor here [newline]
[link{Same page}]http://www.baidu.com[/link] [newline]
[link+{New page}]http://www.baidu.com[/link+] [newline]
[link]http://www.baidu.com[/link] [newline]
[toanchor{Hidden anchor: same page}]hidden anchor[/toanchor]

\code{end}

参考效果：

\bq{begin}
\anchor{hidden anchor} <-Hidden anchor here \newline
\link[Same page]{http://www.baidu.com} \newline
\link+[New page]{http://www.baidu.com} \newline
\link{http://www.baidu.com} \newline
\toanchor[Hidden anchor: same page]{hidden anchor}

\bq{end}


\h4{\anchor{表格}表格}

表格是\emphasis{区块级元素}，表格内（暂时，考虑到表格用的比较少）不能嵌套表格，单元格内只能为\emphasis{行内元素}。\newline
表格（\@table\@）的由行与列组成，按行书写，行（\@r\@）内元素可以为行列标题（\@h\@）或数据（\@d\@）。

表格标签包括\@table\@ \@r\@ \@h\@ \@d\@，\@table\@支持一个可选项表示标题。\@r\@表示表格的一行，只能用在\@table\@中；\@d\@和\@h\@分别表示数据单元格和行列标题单元格，只能用在\@r\@中。\newline
由于支持单元格占多个行、列的情况，书写比较大的表格时会比较复杂，详细语法见下表。

Tex-style:

\code{begin}
\table[\@table\@语法一览]{begin}
    \r{\h标签 \h 风格  \h变形 \h 说明}
    \r{\hr4 \@table\@   \dr2 TeX     \d \@\table{begin} \r{...}... \table{end}\@ \d 无表头}
    \r{                              \d \@\table[caption]{begin} \r{...}... \table{end}\@ \d 表头为caption}
    \r{                 \dr2 BBCode  \d \@[table] [r]...[/r]... [/table]\@ \d 无表头}
    \r{                              \d \@[table{caption}] [r]...[/r]... [/table]\@ \d 表头为caption}
    \r{\hr4 \@r\@       \dr2 TeX     \d \@\r{\h...\d...}\@ \d 行内为数据单元格（\@\d\@）或者行列标题单元格（\@\h\@）。}
    \r{                              \d \@\r{\hr#c#...\dr#c#...}\@ \d 行内为数据单元格（\@\d\@）或者行列标题单元格（\@\h\@），单元格占#行\@\dr#\@和（或）占#列\@\dc#\@。 }
    \r{                 \dr2 BBCode  \d \@[r][h]...[d]...[/r]\@ \d 行内为数据单元格（\@[d]\@）或者行列标题单元格（\@[h]\@）。}
    \r{                              \d \@[r][hr#c#]...[dr#c#]...[/r]\@ \d 行内为数据单元格（\@[d]\@）或者行列标题单元格（\@[h]\@），单元格占#行\@[dr#]\@和（或）占#列\@[dc#]\@。 }
    \r{                 \d BBCode    \d \@[r][d]...[d]...[/r]\@ \d 纯数据行，可以附加\@r#c#\@，规则同上。}
\table{end}
\code{end}

BBCode-style:

\code{begin}
[table{\@table\@语法一览}]
    [r][h]标签 [h] 风格  [h]变形 [h] 说明[/r]
    [r][hr4] \@table\@  [dr2] TeX    [d] \@\table{begin} \r{...}... \table{end}\@ [d] 无表头[/r]
    [r]                              [d] \@\table[caption]{begin} \r{...}... \table{end}\@ [d] 表头为caption[/r]
    [r]                 [dr2] BBCode [d] \@[table] [r]...[/r]... [/table]\@ [d] 无表头[/r]
    [r]                              [d] \@[table{caption}] [r]...[/r]... [/table]\@ [d] 表头为caption[/r]
    [r][hr4] \@r\@      [dr2] TeX    [d] \@\r{\h...\d...}\@ [d] 行内为数据单元格（\@[d]\@）或者行列标题单元格（\@[h]\@）。[/r]
    [r]                              [d] \@\r{\hr#c#...\dr#c#...}\@ [d] 行内为数据单元格（\@[d]\@）或者行列标题单元格（\@[h]\@），单元格占#行\@[d]r#\@和（或）占#列\@[d]c#\@。 [/r]
    [r]                 [dr2] BBCode [d] \@[r][h]...[d]...[/r]\@ [d] 行内为数据单元格（\@[d]\@）或者行列标题单元格（\@[h]\@）。[/r]
    [r]                              [d] \@[r][hr#c#]...[dr#c#]...[/r]\@ [d] 行内为数据单元格（\@[d]\@）或者行列标题单元格（\@[h]\@），单元格占#行\@[dr#]\@和（或）占#列\@[dc#]\@。 [/r]
    [r]                 [d] BBCode   [d] \@[r][d]...[d]...[/r]\@ [d] 纯数据行，可以附加\@r#c#\@，规则同上。[/r]
[/table]
\code{end}

参考效果：

\bq{begin}

\table[\@table\@语法一览]{begin}
    \r{\h标签 \h 风格  \h变形 \h 说明}
    \r{\hr4 \@table\@   \dr2 TeX     \d \@\table{begin} \r{...}... \table{end}\@ \d 无表头}
    \r{                              \d \@\table[caption]{begin} \r{...}... \table{end}\@ \d 表头为caption}
    \r{                 \dr2 BBCode  \d \@[table] [r]...[/r]... [/table]\@ \d 无表头}
    \r{                              \d \@[table{caption}] [r]...[/r]... [/table]\@ \d 表头为caption}
    \r{\hr4 \@r\@       \dr2 TeX     \d \@\r{\h...\d...}\@ \d 行内为数据单元格（\@\d\@）或者行列标题单元格（\@\h\@）。}
    \r{                              \d \@\r{\hr#c#...\dr#c#...}\@ \d 行内为数据单元格（\@\d\@）或者行列标题单元格（\@\h\@），单元格占#行\@\dr#\@和（或）占#列\@\dc#\@。 }
    \r{                 \dr2 BBCode  \d \@[r][h]...[d]...[/r]\@ \d 行内为数据单元格（\@[d]\@）或者行列标题单元格（\@[h]\@）。}
    \r{                              \d \@[r][hr#c#]...[dr#c#]...[/r]\@ \d 行内为数据单元格（\@[d]\@）或者行列标题单元格（\@[h]\@），单元格占#行\@[dr#]\@和（或）占#列\@[dc#]\@。 }
\table{end}

\bq{end}


\h4{\anchor{图片与图文混排}图片与图文混排}

图片是\emphasis{区块级元素}，它的标签是\@img\@，默认情况下，图片自动调整大小、居中显示。图片可以设置浮动属性，通常配合图文混排标签使用。

图文混排是\emphasis{区块级元素}，通过它可以把相关连的图片和文字放入一个同区域内，它的标签是\@fig\@。\newline
图文混排有两个作用。一是其中的文字可以设置对齐方式（默认为左对齐）；二是其中的图片可以正常地左右浮动。如果不使用图文混排标签，虽然图片也可以设置浮动属性，但由于没有限定图片（语义上）的作用范围，最终的效果往往表现为图片“浮动出”我们想要的区域。

\table[图片与图文混排语法一览]{begin}
    \r{\h 标签 \h 风格 \h 变形 \h 说明}
    \r{\hr6 \@img\@ \dr3 TeX    \d \@\img{path-to-img.jpg}\@ \d 普通的图片，默认居中显示。}
    \r{                         \d \@\img<{path-to-img.jpg}\@ \d 向左浮动的图片。}
    \r{                         \d \@\img>{path-to-img.jpg}\@ \d 向右浮动的图片。}
    \r{             \dr3 BBCode \d \@[img]path-to-img.jpg[/img]\@ \d 普通的图片，默认居中显示。}
    \r{                         \d \@[img<]path-to-img.jpg[/img<]\@ \d 向左浮动的图片。}
    \r{                         \d \@[img>]path-to-img.jpg[/img>]\@ \d 向右浮动的图片。}
    \r{\hr8 \@fig\@ \dr4 TeX    \d \@\fig{begin}...\fig{end}\@ \d 普通的图文混排，默认文字左对齐。}
    \r{                         \d \@\fig>{begin}...\fig>{end}\@ \d 文字右对齐的图文混排。}
    \r{                         \d \@\fig.{begin}...\fig.{end}\@ \d 文字居中的图文混排。}
    \r{                         \d \@\fig<{begin}...\fig<{end}\@ \d 文字强制左对齐的图文混排。}
    \r{             \dr4 BBCode \d \@[fig]...[/fig]\@ \d 普通的图文混排，默认文字左对齐。}
    \r{                         \d \@[fig>]...[/fig>]\@ \d 文字右对齐的图文混排。}
    \r{                         \d \@[fig.]...[/fig.]\@ \d 文字居中的图文混排。}
    \r{                         \d \@[fig<]...[/fig<]\@ \d 文字强制左对齐的图文混排。}
\table{end}

TeX-style:

\code{begin}

\fig>{begin}
\img>{img/HTML5_sticker.png}

近年来，各种浏览器纷纷登场，W3C规范备受重视，互联网进入了一个新时代。
为了向HTML5的理念靠近，98代码进行了一次重新设计。最主要的变化有两个：

\fig.{begin}
\list#{
    \* 语义级别标签
    \* 支持类似TeX的语法
}
\fig.{end}

这些改变的背后是排版思想的改变。

\fig>{end}
\code{end}

BBCode-style:

\code{begin}
[fig>]
[img>]img/HTML5_sticker.png[/img>]

近年来，各种浏览器纷纷登场，W3C规范备受重视，互联网进入了一个新时代。
为了向HTML5的理念靠近，98代码进行了一次重新设计。最主要的变化有两个：

[fig.]
[list#]
    [*] 语义级别标签
    [*] 支持类似TeX的语法
[/list#]
[/fig.]

这些改变的背后是排版思想的改变。

[/fig>]
\code{end}

参考效果：

\bq{begin}
\fig>{begin}
\img>{img/HTML5_sticker.png}

近年来，各种浏览器纷纷登场，W3C规范备受重视，互联网进入了一个新时代。
为了向HTML5的理念靠近，98代码进行了一次重新设计。最主要的变化有两个：

\fig.{begin}
\list#{
    \* 语义级别标签
    \* 支持类似TeX的语法
}
\fig.{end}

这些改变的背后是排版思想的改变。

\fig>{end}
\bq{end}

\h4{\anchor{数学公式}数学公式}

通过使用数学公式标签，可以使用MathJax渲染出漂亮的数学公式。

数学公式标签有\emphasis{行内级别}和\emphasis{区块级别}（即display模式）两种类型，分别为\@$\@与\@math\@。标签内支持的语法有LaTeX（AMSmath）与MathML。

TeX-style:

\code{begin}
行内级别：\$ \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right) \$

区块级别：

\math{begin}
    \begin{aligned}
    \dot{x} & = \sigma(y-x) \\
    \dot{y} & = \rho x - y - xz \\
    \dot{z} & = -\beta z + xy
    \end{aligned}
\math{end}
\code{end}

BBCode-style:
\code{begin}
行内级别：[$] \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right) [/$]

区块级别：

[math]
    \begin{aligned}
    \dot{x} & = \sigma(y-x) \\
    \dot{y} & = \rho x - y - xz \\
    \dot{z} & = -\beta z + xy
    \end{aligned}
[/math]
\code{end}

参考效果：

\bq{begin}
行内级别：\$ \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right) \$

区块级别：
\math{begin}
    \begin{aligned}
    \dot{x} & = \sigma(y-x) \\
    \dot{y} & = \rho x - y - xz \\
    \dot{z} & = -\beta z + xy
    \end{aligned}
\math{end}
\bq{end}


\h3{\anchor{原语级别元素}原语级别元素}

所谓原语级别元素，即与CSS样式直接对应的元素，与\emphasis{语义级别标签}不同，原语级别标签并不是标记内容是什么，而是标记内容应该如何展现。使用原语可以精确地指定展现的效果，但这些效果并不会随着主题变化（主题所设计的样式是语义级别标签的样式）。保留这些原语级别标签，一来是为各种内容的表现需求提供最后的实现手段，二来是为了一定程度与旧版代码兼容。原语级别标签的杀伤力比较大，使用它们需要谨慎。

\h4{\anchor{字体}字体}

与旧版不同，新版98代码不提供字体（font type）的原语。最主要的原因是，字体标签的效果无法保证。字体的显示要求用户电脑中已经安装有相应的字体，即便使用了原语级别标签指定了字体，也无法保证用户能最终看到。

对于需要特殊字体显示文字的，有两种途径完成：  
\list#{
    \* 如果仅仅是自己看到希望的字体，可以写自己的主题CSS文件，替换默认主题里面的样式；
    \* 如果需要所有人看到希望的字体，可以用图片的形式的文件（比如PDF）。
}

\h4{\anchor{字体大小}字体大小}

字体大小是行内元素，通过标签\@size\@指定，与旧版语法稍有不同，字体默认有7种大小，分别是：
\list*{
    \* \@xx-small\@
    \* \@x-small\@
    \* \@small\@
    \* \@medium\@
    \* \@large\@
    \* \@x-large\@
    \* \@xx-large\@
}

另外还有比默认大小大一点的\@larger\@和比默认字体小一点的\@smaller\@。具体大小由用户浏览器的字体设置决定，在不同的浏览器中表现不同。

TeX-style:

\code{begin}

\size[small]{small size} \newline
\size[medium]{medium size} \newline
\size[large]{large size}
\code{end}

BBCode-style:

\code{begin}

[size{small}]small size[/size] [newline]
[size{medium}]medium size[/size] [newline]
[size{large}]large size[/size]
\code{end}

参考效果：

\bq{begin}

\size[small]{small size} \newline
\size[medium]{medium size} \newline
\size[large]{large size}

\bq{end}

\h4{\anchor{字体颜色与背景颜色}字体颜色与背景颜色}

字体颜色和背景颜色是行内元素，分别通过标签\@color\@ \@bgcolor\@指定，语法请参考例子。选项部分仅仅允许16进制表示的颜色（范围0x000000到0xFFFFFF）。

TeX-style:

\code{begin}

\color[#DC143C]{the HTML Color Crimson} \newline
\bgcolor[#CD5C5C]{the HTML Color IndianRed}

\code{end}

BBCode-style:

\code{begin}

[color{#DC143C}]the HTML Color Crimson[/color] [newline]
[bgcolor{#CD5C5C}]the HTML Color IndianRed[/bgcolor]

\code{end}

参考效果：

\bq{begin}

\color[#DC143C]{the HTML Color Crimson} \newline
\bgcolor[#CD5C5C]{the HTML Color IndianRed}

\bq{end}

\h4{\anchor{字体特效}字体特效}

字体特效是行内元素，通过标签\@shadow\@指定，参数分别为x偏移，y偏移，阴影大小，颜色（参考\toanchor{字体颜色与背景颜色}）。

\alert[info]{字体特性是CSS3特性，如果无法显示，请考虑升级浏览器。}

TeX-style:

\code{begin}

\shadow[2,2,2,#DC143C]{showing shadow effect with the HTML Color Crimson } \newline
\shadow[0,0,6,#FFD700]{showing glowing effect with the HTML Color Gold }

\code{end}

BBCode-style:

\code{begin}

[shadow{2,2,2,#DC143C}]showing shadow effect with the HTML Color Crimson [/shadow] [newline]
[shadow{0,0,6,#FFD700}]showing glowing effect with the HTML Color Gold [/shadow]

\code{end}

参考效果：

\bq{begin}

\shadow[2,2,2,#DC143C]{showing shadow effect with the HTML Color Crimson } \newline
\shadow[0,0,6,#FFD700]{showing glowing effect with the HTML Color Gold }

\bq{end}
