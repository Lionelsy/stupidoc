package com.xingx.stupidoc;

import com.xingx.stupidoc.model.Document;
import com.xingx.stupidoc.model.Folder;
import com.xingx.stupidoc.model.User;
import com.xingx.stupidoc.repository.DocumentRepository;
import com.xingx.stupidoc.repository.FolderRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

@Component
public class Initializer implements CommandLineRunner {
    private final DocumentRepository documentRepository;
    private final FolderRepository folderRepository;

    public Initializer(DocumentRepository documentRepository, FolderRepository folderRepository) {
        this.documentRepository = documentRepository;
        this.folderRepository = folderRepository;
    }

    @Override
    public void run(String... args) {
        int docNum = 10;

        String text1 = "---\n" +
                "__Advertisement :)__\n" +
                "\n" +
                "- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image\n" +
                "  resize in browser.\n" +
                "- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly\n" +
                "  i18n with plurals support and easy syntax.\n" +
                "\n" +
                "You will like those projects!\n" +
                "\n" +
                "---\n" +
                "\n" +
                "# h1 Heading 8-)\n" +
                "## h2 Heading\n" +
                "### h3 Heading\n" +
                "#### h4 Heading\n" +
                "##### h5 Heading\n" +
                "###### h6 Heading\n" +
                "\n" +
                "\n" +
                "## Horizontal Rules\n" +
                "\n" +
                "___\n" +
                "\n" +
                "---\n" +
                "\n" +
                "***\n" +
                "\n" +
                "\n" +
                "## Typographic replacements\n" +
                "\n" +
                "Enable typographer option to see result.\n" +
                "\n" +
                "(c) (C) (r) (R) (tm) (TM) (p) (P) +-\n" +
                "\n" +
                "test.. test... test..... test?..... test!....\n" +
                "\n" +
                "!!!!!! ???? ,,  -- ---\n" +
                "\n" +
                "\"Smartypants, double quotes\" and 'single quotes'\n" +
                "\n" +
                "\n" +
                "## Emphasis\n" +
                "\n" +
                "**This is bold text**\n" +
                "\n" +
                "__This is bold text__\n" +
                "\n" +
                "*This is italic text*\n" +
                "\n" +
                "_This is italic text_\n" +
                "\n" +
                "~~Strikethrough~~\n" +
                "\n" +
                "\n" +
                "## Blockquotes\n" +
                "\n" +
                "\n" +
                "> Blockquotes can also be nested...\n" +
                ">> ...by using additional greater-than signs right next to each other...\n" +
                "> > > ...or with spaces between arrows.\n" +
                "\n" +
                "\n" +
                "## Lists\n" +
                "\n" +
                "Unordered\n" +
                "\n" +
                "+ Create a list by starting a line with `+`, `-`, or `*`\n" +
                "+ Sub-lists are made by indenting 2 spaces:\n" +
                "  - Marker character change forces new list start:\n" +
                "    * Ac tristique libero volutpat at\n" +
                "    + Facilisis in pretium nisl aliquet\n" +
                "    - Nulla volutpat aliquam velit\n" +
                "+ Very easy!\n" +
                "\n" +
                "Ordered\n" +
                "\n" +
                "1. Lorem ipsum dolor sit amet\n" +
                "2. Consectetur adipiscing elit\n" +
                "3. Integer molestie lorem at massa\n" +
                "\n" +
                "\n" +
                "1. You can use sequential numbers...\n" +
                "1. ...or keep all the numbers as `1.`\n" +
                "\n" +
                "Start numbering with offset:\n" +
                "\n" +
                "57. foo\n" +
                "1. bar\n" +
                "\n" +
                "\n" +
                "## Code\n" +
                "\n" +
                "Inline `code`\n" +
                "\n" +
                "Indented code\n" +
                "\n" +
                "    // Some comments\n" +
                "    line 1 of code\n" +
                "    line 2 of code\n" +
                "    line 3 of code\n" +
                "\n" +
                "\n" +
                "Block code \"fences\"\n" +
                "\n" +
                "```\n" +
                "Sample text here...\n" +
                "```\n" +
                "\n" +
                "Syntax highlighting\n" +
                "\n" +
                "``` js\n" +
                "var foo = function (bar) {\n" +
                "  return bar++;\n" +
                "};\n" +
                "\n" +
                "console.log(foo(5));\n" +
                "```\n" +
                "\n" +
                "## Tables\n" +
                "\n" +
                "| Option | Description |\n" +
                "| ------ | ----------- |\n" +
                "| data   | path to data files to supply the data that will be passed into templates. |\n" +
                "| engine | engine to be used for processing templates. Handlebars is the default. |\n" +
                "| ext    | extension to be used for dest files. |\n" +
                "\n" +
                "Right aligned columns\n" +
                "\n" +
                "| Option | Description |\n" +
                "| ------:| -----------:|\n" +
                "| data   | path to data files to supply the data that will be passed into templates. |\n" +
                "| engine | engine to be used for processing templates. Handlebars is the default. |\n" +
                "| ext    | extension to be used for dest files. |\n" +
                "\n" +
                "\n" +
                "## Links\n" +
                "\n" +
                "[link text](http://dev.nodeca.com)\n" +
                "\n" +
                "[link with title](http://nodeca.github.io/pica/demo/ \"title text!\")\n" +
                "\n" +
                "Autoconverted link https://github.com/nodeca/pica (enable linkify to see)\n" +
                "\n" +
                "\n" +
                "## Images\n" +
                "\n" +
                "![Minion](https://octodex.github.com/images/minion.png)\n" +
                "![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg \"The Stormtroopocat\")\n" +
                "\n" +
                "Like links, Images also have a footnote style syntax\n" +
                "\n" +
                "![Alt text][id]\n" +
                "\n" +
                "With a reference later in the document defining the URL location:\n" +
                "\n" +
                "[id]: https://octodex.github.com/images/dojocat.jpg  \"The Dojocat\"\n" +
                "\n" +
                "\n" +
                "## Plugins\n" +
                "\n" +
                "The killer feature of `markdown-it` is very effective support of\n" +
                "[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).\n" +
                "\n" +
                "\n" +
                "### [Emojies](https://github.com/markdown-it/markdown-it-emoji)\n" +
                "\n" +
                "> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:\n" +
                ">\n" +
                "> Shortcuts (emoticons): :-) :-( 8-) ;)\n" +
                "\n" +
                "see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.\n" +
                "\n" +
                "\n" +
                "### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)\n" +
                "\n" +
                "- 19^th^\n" +
                "- H~2~O\n" +
                "\n" +
                "\n" +
                "### [\\<ins>](https://github.com/markdown-it/markdown-it-ins)\n" +
                "\n" +
                "++Inserted text++\n" +
                "\n" +
                "\n" +
                "### [\\<mark>](https://github.com/markdown-it/markdown-it-mark)\n" +
                "\n" +
                "==Marked text==\n" +
                "\n" +
                "\n" +
                "### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)\n" +
                "\n" +
                "Footnote 1 link[^first].\n" +
                "\n" +
                "Footnote 2 link[^second].\n" +
                "\n" +
                "Inline footnote^[Text of inline footnote] definition.\n" +
                "\n" +
                "Duplicated footnote reference[^second].\n" +
                "\n" +
                "[^first]: Footnote **can have markup**\n" +
                "\n" +
                "    and multiple paragraphs.\n" +
                "\n" +
                "[^second]: Footnote text.\n" +
                "\n" +
                "\n" +
                "### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)\n" +
                "\n" +
                "Term 1\n" +
                "\n" +
                ":   Definition 1\n" +
                "with lazy continuation.\n" +
                "\n" +
                "Term 2 with *inline markup*\n" +
                "\n" +
                ":   Definition 2\n" +
                "\n" +
                "        { some code, part of Definition 2 }\n" +
                "\n" +
                "    Third paragraph of definition 2.\n" +
                "\n" +
                "_Compact style:_\n" +
                "\n" +
                "Term 1\n" +
                "  ~ Definition 1\n" +
                "\n" +
                "Term 2\n" +
                "  ~ Definition 2a\n" +
                "  ~ Definition 2b\n" +
                "\n" +
                "\n" +
                "### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)\n" +
                "\n" +
                "This is HTML abbreviation example.\n" +
                "\n" +
                "It converts \"HTML\", but keep intact partial entries like \"xxxHTMLyyy\" and so on.\n" +
                "\n" +
                "*[HTML]: Hyper Text Markup Language\n" +
                "\n" +
                "### [Custom containers](https://github.com/markdown-it/markdown-it-container)\n" +
                "\n" +
                "::: warning\n" +
                "*here be dragons*\n" +
                ":::\n";

        String text2 = "# Live demo\n" +
                "\n" +
                "Changes are automatically rendered as you type.\n" +
                "\n" +
                "## Table of Contents\n" +
                "\n" +
                "* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)\n" +
                "\n" +
                "* Allows you to escape or skip HTML (try toggling the checkboxes above)\n" +
                "* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n" +
                "\n" +
                "## HTML block below\n" +
                "\n" +
                "<blockquote>\n" +
                "  This blockquote will change based on the HTML settings above.\n" +
                "</blockquote>\n" +
                "\n" +
                "## How about some code?\n" +
                "```js\n" +
                "var React = require('react');\n" +
                "var Markdown = require('react-markdown');\n" +
                "\n" +
                "React.render(\n" +
                "  <Markdown source='# Your markdown here' />,\n" +
                "  document.getElementById('content')\n" +
                ");\n" +
                "```\n" +
                "\n" +
                "Pretty neat, eh?\n" +
                "\n" +
                "## Tables?\n" +
                "\n" +
                "| Feature   | Support |\n" +
                "| --------- | ------- |\n" +
                "| tables    | ✔ |\n" +
                "| alignment | ✔ |\n" +
                "| wewt      | ✔ |\n" +
                "\n" +
                "## More info?\n" +
                "\n" +
                "Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)\n" +
                "\n" +
                "---------------\n" +
                "\n" +
                "A component by [Espen Hovlandsdal](https://espen.codes/)";

        Document[] documents = new Document[docNum];
        for (int i = 0; i < docNum; i++) {
            Document tmp = new Document();
            tmp.setId(i);
            tmp.setCreateTime(System.currentTimeMillis() - 10000000000L * i);
            tmp.setDescription("This is short description " + i);
            tmp.setTitle("This is a demo title" + i);
            tmp.setType("markdown");
            documents[i] = tmp;
        }
        documents[1].setContent(text1);
        documents[2].setContent(text2);
        documents[3].setContent(text1);
        documents[4].setContent(text2);
        documents[5].setContent(text1);
        User u = new User(1, "aha", "123456");
        Set<User> set = new HashSet<>();
        set.add(u);
        documents[2].setUsers(set);
        for (Document document : documents) documentRepository.save(document);

        Set<Document> set1 = new HashSet<>();
        Set<Document> set3 = new HashSet<>();
        for (int i = 1; i <= 4; i++) set1.add(documents[i]);
        for (int i = 5; i <= 8; i++) set3.add(documents[i]);
        Folder subFolder1 = new Folder(1, "subFolder1", set3, new HashSet<>());
        Set<Folder> set2 = new HashSet<>();
        set2.add(subFolder1);
        Folder folder = new Folder(1, "tmpFolder", set1, set2);
        folderRepository.save(folder);
        folderRepository.findAll().forEach(System.out::println);
//        List<Document> list = new ArrayList<>();
//        for (int i = 0; i < 5; i++) list.add(documents[i]);
//        folder.setDocumentList(list);
//        folderRepository.save(folder);
//        folderRepository.findAll().forEach(System.out::println);
    }
}
