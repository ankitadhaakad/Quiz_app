const questions = [
  // ===================== HTML =====================
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperloop Text Machine Language"
    ],
    answer: "Hyper Text Markup Language",
    category: "HTML"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<css>", "<style>", "<script>", "<link>"],
    answer: "<style>",
    category: "HTML"
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: "<a>",
    category: "HTML"
  },
  {
    question: "How can you open a link in a new tab?",
    options: ['target="_blank"', 'target="_newtab"', 'new-tab="yes"', 'open="tab"'],
    answer: 'target="_blank"',
    category: "HTML"
  },
  {
    question: "What is the purpose of the <head> tag in HTML?",
    options: [
      "To define the main content",
      "To contain metadata",
      "To link styles",
      "To create a header section"
    ],
    answer: "To contain metadata",
    category: "HTML"
  },
  {
    question: "Which tag is used for inserting a horizontal line?",
    options: ["<hr>", "<line>", "<br>", "<separator>"],
    answer: "<hr>",
    category: "HTML"
  },
  {
    question: "What does the <title> tag do?",
    options: [
      "Adds a title to the body",
      "Sets the title of the webpage",
      "Adds heading",
      "Displays popup"
    ],
    answer: "Sets the title of the webpage",
    category: "HTML"
  },
  {
    question: "Which input type allows users to select a file?",
    options: ["text", "file", "image", "upload"],
    answer: "file",
    category: "HTML"
  },
  {
    question: "What is the correct tag for the largest heading?",
    options: ["<heading>", "<h1>", "<h6>", "<head>"],
    answer: "<h1>",
    category: "HTML"
  },
  {
    question: "What is the correct syntax to comment in HTML?",
    options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
    answer: "<!-- comment -->",
    category: "HTML"
  },
  {
    question: "Which tag is used to define a table row?",
    options: ["<tr>", "<td>", "<table>", "<th>"],
    answer: "<tr>",
    category: "HTML"
  },
  {
    question: "What does the <form> element do?",
    options: [
      "Displays a table",
      "Creates a structure",
      "Creates an input form",
      "Adds styling"
    ],
    answer: "Creates an input form",
    category: "HTML"
  },
  {
    question: "Which attribute is used to provide an alternate text for an image?",
    options: ["alt", "title", "src", "name"],
    answer: "alt",
    category: "HTML"
  },
  {
    question: "Which element represents a paragraph?",
    options: ["<p>", "<para>", "<text>", "<paragraph>"],
    answer: "<p>",
    category: "HTML"
  },
  {
    question: "What is semantic HTML?",
    options: [
      "Using <div> for all elements",
      "HTML with inline CSS",
      "Using tags with meaning",
      "Commented HTML code"
    ],
    answer: "Using tags with meaning",
    category: "HTML"
  },
  {
    question: "Which tag is used to embed an external webpage?",
    options: ["<frame>", "<iframe>", "<embed>", "<object>"],
    answer: "<iframe>",
    category: "HTML"
  },
  {
    question: "Which tag is used to group form elements?",
    options: ["<formgroup>", "<fieldset>", "<group>", "<section>"],
    answer: "<fieldset>",
    category: "HTML"
  },
  {
    question: "What does the <em> tag do?",
    options: ["Makes text italic", "Makes text bold", "Highlights text", "Strikes text"],
    answer: "Makes text italic",
    category: "HTML"
  },
  {
    question: "Which attribute specifies the character encoding in HTML?",
    options: ["charset", "encoding", "char", "set"],
    answer: "charset",
    category: "HTML"
  },
  {
    question: "What is the default method for submitting a form?",
    options: ["post", "get", "submit", "send"],
    answer: "get",
    category: "HTML"
  },
  {
    question: "What is the function of the <div> tag?",
    options: [
      "Creates a section",
      "Creates input field",
      "Creates heading",
      "Applies style"
    ],
    answer: "Creates a section",
    category: "HTML"
  },
  {
    question: "Which tag defines a list item?",
    options: ["<ul>", "<li>", "<ol>", "<list>"],
    answer: "<li>",
    category: "HTML"
  },
  {
    question: "Which tag is used to embed CSS in HTML?",
    options: ["<css>", "<style>", "<script>", "<link>"],
    answer: "<style>",
    category: "HTML"
  },
  {
    question: "Which tag is used to display a video?",
    options: ["<media>", "<movie>", "<video>", "<vid>"],
    answer: "<video>",
    category: "HTML"
  },
  {
    question: "What is the use of the <meta> tag?",
    options: [
      "Shows title",
      "Adds styles",
      "Stores metadata",
      "Inserts image"
    ],
    answer: "Stores metadata",
    category: "HTML"
  },{
    question: "Which CSS property is used to change the background color?",
    options: ["color", "bgcolor", "background", "background-color"],
    answer: "background-color",
    category: "CSS"
  },
  {
    question: "Which CSS property is used to center text?",
    options: ["align", "text-align", "text-center", "justify-content"],
    answer: "text-align",
    category: "CSS"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets"
    ],
    answer: "Cascading Style Sheets",
    category: "CSS"
  },
  {
    question: "Which property is used to make text bold?",
    options: ["font-weight", "font-style", "text-bold", "weight"],
    answer: "font-weight",
    category: "CSS"
  },
  {
    question: "How do you apply an external CSS file?",
    options: ["<style src='style.css'>", "<css href='style.css'>", "<link rel='stylesheet' href='style.css'>", "<script href='style.css'>"],
    answer: "<link rel='stylesheet' href='style.css'>",
    category: "CSS"
  },
  {
    question: "Which CSS property is used to change font?",
    options: ["font-type", "font-family", "text-font", "typeface"],
    answer: "font-family",
    category: "CSS"
  },
  {
    question: "Which value of position will make the element fixed on screen?",
    options: ["absolute", "relative", "fixed", "static"],
    answer: "fixed",
    category: "CSS"
  },
  {
    question: "What is the default position value of an element?",
    options: ["absolute", "relative", "static", "inherit"],
    answer: "static",
    category: "CSS"
  },
  {
    question: "How do you make a list without bullets?",
    options: ["list: none;", "bullet: none;", "list-style-type: none;", "ul-style: none;"],
    answer: "list-style-type: none;",
    category: "CSS"
  },
  {
    question: "How can you make a website responsive?",
    options: ["CSS Grid", "Using tables", "Media Queries", "Flexbox"],
    answer: "Media Queries",
    category: "CSS"
  },
  {
    question: "Which property is used for spacing inside elements?",
    options: ["margin", "padding", "spacing", "border"],
    answer: "padding",
    category: "CSS"
  },
  {
    question: "Which property is used to change the border color?",
    options: ["border-style", "border-color", "outline", "border-shade"],
    answer: "border-color",
    category: "CSS"
  },
  {
    question: "How do you apply a class in CSS?",
    options: [".class", "#class", "class", "@class"],
    answer: ".class",
    category: "CSS"
  },
  {
    question: "Which CSS unit is relative to the parent element?",
    options: ["px", "em", "vh", "%"],
    answer: "em",
    category: "CSS"
  },
  {
    question: "What is the Z-index used for?",
    options: ["Resize image", "Add shadow", "Layer order", "Text size"],
    answer: "Layer order",
    category: "CSS"
  },
  {
    question: "How to add shadow to a box?",
    options: ["box-shadow", "shadow-box", "text-shadow", "outer-shadow"],
    answer: "box-shadow",
    category: "CSS"
  },
  {
    question: "Which display value hides the element but keeps its space?",
    options: ["none", "hidden", "invisible", "visibility: hidden"],
    answer: "visibility: hidden",
    category: "CSS"
  },
  {
    question: "Which shorthand property sets all margin sides?",
    options: ["margin-all", "all-margin", "margin", "margin-set"],
    answer: "margin",
    category: "CSS"
  },
  {
    question: "Which property is used to make a rounded corner?",
    options: ["border-curve", "border-radius", "corner-round", "round-border"],
    answer: "border-radius",
    category: "CSS"
  },
  {
    question: "What does 'inherit' value do in CSS?",
    options: [
      "Uses default browser styles",
      "Inherits value from parent element",
      "Uses user-defined style",
      "Makes value null"
    ],
    answer: "Inherits value from parent element",
    category: "CSS"
  },
  {
    question: "What property changes text to uppercase?",
    options: ["text-transform", "font-style", "text-case", "transform"],
    answer: "text-transform",
    category: "CSS"
  },
  {
    question: "What is specificity in CSS?",
    options: [
      "How fast a rule is applied",
      "Priority of style rules",
      "CSS property type",
      "Selector limit"
    ],
    answer: "Priority of style rules",
    category: "CSS"
  },
  {
    question: "Which symbol is used for id selector?",
    options: [".", "*", "#", "$"],
    answer: "#",
    category: "CSS"
  },
  {
    question: "Which selector selects all elements?",
    options: [".", "#", "", "all"],
    answer: "*",
    category: "CSS"
  },
  {
    question: "What does the !important declaration do?",
    options: [
      "Removes rule",
      "Overrides all previous rules",
      "Applies animation",
      "Disables property"
    ],
    answer: "Overrides all previous rules",
    category: "CSS"
  },  // ===================== JavaScript =====================
  {
    question: "What will typeof NaN return?",
    options: ["NaN", "number", "undefined", "object"],
    answer: "number",
    category: "JavaScript"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Microsoft", "Google", "Oracle"],
    answer: "Netscape",
    category: "JavaScript"
  },
  {
    question: "Which keyword declares a block-scoped variable?",
    options: ["var", "let", "const", "static"],
    answer: "let",
    category: "JavaScript"
  },
  {
    question: "What is the output of Boolean(0)?",
    options: ["true", "false", "null", "undefined"],
    answer: "false",
    category: "JavaScript"
  },
  {
    question: "Which function is used to write on console?",
    options: ["write()", "echo()", "console.write()", "console.log()"],
    answer: "console.log()",
    category: "JavaScript"
  },
  {
    question: "What does === mean in JS?",
    options: [
      "Assignment operator",
      "Equals and same type",
      "Only value equals",
      "Comparison without type check"
    ],
    answer: "Equals and same type",
    category: "JavaScript"
  },
  {
    question: "How do you write a function in JavaScript?",
    options: [
      "function = myFunc()",
      "def myFunc()",
      "function myFunc()",
      "create function myFunc()"
    ],
    answer: "function myFunc()",
    category: "JavaScript"
  },
  {
    question: "How do you call a function named myFunc?",
    options: ["call myFunc", "myFunc()", "call.myFunc()", "run(myFunc)"],
    answer: "myFunc()",
    category: "JavaScript"
  },
  {
    question: "Which method adds an element to end of array?",
    options: ["push()", "pop()", "shift()", "concat()"],
    answer: "push()",
    category: "JavaScript"
  },
  {
    question: "Which method removes first array element?",
    options: ["pop()", "shift()", "splice()", "unshift()"],
    answer: "shift()",
    category: "JavaScript"
  },
  {
    question: "Which loop is best for iterating array?",
    options: ["for-in", "for-of", "while", "do-while"],
    answer: "for-of",
    category: "JavaScript"
  },
  {
    question: "How do you create an object?",
    options: [
      "let obj = []",
      "let obj = {}",
      "let obj = ()",
      "let obj = <>"
    ],
    answer: "let obj = {}",
    category: "JavaScript"
  },
  {
    question: "What is the result of null == undefined?",
    options: ["true", "false", "error", "NaN"],
    answer: "true",
    category: "JavaScript"
  },
  {
    question: "Which method converts array to string?",
    options: ["split()", "join()", "concat()", "slice()"],
    answer: "join()",
    category: "JavaScript"
  },
  {
    question: "Which method returns array length?",
    options: ["length()", "arr.size()", "arr.length", "size()"],
    answer: "arr.length",
    category: "JavaScript"
  },
  {
    question: "What does setTimeout do?",
    options: [
      "Pauses code forever",
      "Runs function after delay",
      "Loops function repeatedly",
      "Stops JS execution"
    ],
    answer: "Runs function after delay",
    category: "JavaScript"
  },
  {
    question: "How do you write an arrow function?",
    options: [
      "function => () {}",
      "() => {}",
      "function() => {}",
      "=> function() {}"
    ],
    answer: "() => {}",
    category: "JavaScript"
  },
  {
    question: "Which keyword handles exceptions?",
    options: ["throw", "catch", "try", "try-catch"],
    answer: "try-catch",
    category: "JavaScript"
  },
  {
    question: "How to convert string to integer?",
    options: ["parseInt()", "Number()", "both", "stringify()"],
    answer: "both",
    category: "JavaScript"
  },
  {
    question: "What is a closure in JS?",
    options: [
      "Function with return",
      "Inner function accessing outer variables",
      "Loop block",
      "Object method"
    ],
    answer: "Inner function accessing outer variables",
    category: "JavaScript"
  },
  {
    question: "What is this keyword in JS?",
    options: [
      "Current function",
      "Parent function",
      "Current object context",
      "None of the above"
    ],
    answer: "Current object context",
    category: "JavaScript"
  },
  {
    question: "What is event bubbling?",
    options: [
      "Multiple events on same element",
      "Event goes from parent to child",
      "Event propagates from child to parent",
      "Event blocked"
    ],
    answer: "Event propagates from child to parent",
    category: "JavaScript"
  },
  {
    question: "Which method is used to fetch API data?",
    options: ["fetch()", "get()", "axios()", "callAPI()"],
    answer: "fetch()",
    category: "JavaScript"
  },
  {
    question: "What is the result of 2 + '2'?",
    options: ["4", "22", "NaN", "undefined"],
    answer: "22",
    category: "JavaScript"
  },
  {
    question: "How do you prevent default browser action?",
    options: ["prevent()", "stopDefault()", "e.preventDefault()", "block()"],
    answer: "e.preventDefault()",
    category: "JavaScript"
  },
  // ===================== General =====================
  {
    question: "What does HTTP stand for?",
    options: [
      "Hyper Transfer Text Protocol",
      "Hyper Text Transfer Protocol",
      "High Text Transfer Protocol",
      "Hyperlink Transfer Text Protocol"
    ],
    answer: "Hyper Text Transfer Protocol",
    category: "General"
  },
  {
    question: "Which company created the Windows operating system?",
    options: ["Apple", "Google", "Microsoft", "IBM"],
    answer: "Microsoft",
    category: "General"
  },
  {
    question: "What is the brain of the computer?",
    options: ["RAM", "CPU", "Hard Disk", "Motherboard"],
    answer: "CPU",
    category: "General"
  },
  {
    question: "Which key is used to refresh a page in browser?",
    options: ["F2", "F5", "F11", "F1"],
    answer: "F5",
    category: "General"
  },
  {
    question: "Which one is not a programming language?",
    options: ["Python", "HTML", "Java", "C++"],
    answer: "HTML",
    category: "General"
  },
  {
    question: "What is the extension of JavaScript file?",
    options: [".js", ".java", ".jv", ".javascript"],
    answer: ".js",
    category: "General"
  },
  {
    question: "What is the shortcut to copy text?",
    options: ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"],
    answer: "Ctrl + C",
    category: "General"
  },
  {
    question: "Which device is used to take printouts?",
    options: ["Scanner", "Printer", "Monitor", "Keyboard"],
    answer: "Printer",
    category: "General"
  },
  {
    question: "What is the full form of IP?",
    options: ["Internet Program", "Internal Protocol", "Internet Protocol", "Internal Program"],
    answer: "Internet Protocol",
    category: "General"
  },
  {
    question: "Which unit is used to measure memory?",
    options: ["Kg", "Cm", "Bytes", "Watt"],
    answer: "Bytes",
    category: "General"
  },
  {
    question: "Which web browser is developed by Google?",
    options: ["Safari", "Firefox", "Chrome", "Edge"],
    answer: "Chrome",
    category: "General"
  },
  {
    question: "What is the function of RAM in a computer?",
    options: [
      "To store permanent files",
      "To process images",
      "To store temporary data",
      "To increase internet speed"
    ],
    answer: "To store temporary data",
    category: "General"
  },
  {
    question: "What is a URL?",
    options: [
      "User Reference Link",
      "Uniform Resource Locator",
      "Uniform Referencing Link",
      "Universal Resource Locator"
    ],
    answer: "Uniform Resource Locator",
    category: "General"
  },
  {
    question: "Which is the most used search engine?",
    options: ["Bing", "Yahoo", "Google", "DuckDuckGo"],
    answer: "Google",
    category: "General"
  },
  {
    question: "What does PDF stand for?",
    options: [
      "Personal Document Format",
      "Printed Data Format",
      "Portable Document Format",
      "Page Description File"
    ],
    answer: "Portable Document Format",
    category: "General"
  },
  {
    question: "Which of these is an input device?",
    options: ["Monitor", "Keyboard", "Speaker", "Printer"],
    answer: "Keyboard",
    category: "General"
  },
  {
    question: "What is the main language of Android development?",
    options: ["Python", "C", "Kotlin", "Swift"],
    answer: "Kotlin",
    category: "General"
  },
  {
    question: "Which symbol is used for ID selector in CSS?",
    options: ["#", ".", "$", "&"],
    answer: "#",
    category: "General"
  },
  {
    question: "What does JSON stand for?",
    options: [
      "JavaScript Object Notation",
      "Java Source Object Notation",
      "Java Syntax for Objects",
      "None of the above"
    ],
    answer: "JavaScript Object Notation",
    category: "General"
  },
  {
    question: "What is Git primarily used for?",
    options: [
      "Graphic Designing",
      "Version Control",
      "Deploying Websites",
      "Building UI"
    ],
    answer: "Version Control",
    category: "General"
  },
  {
    question: "Which tag is used for a hyperlink in HTML?",
    options: ["<link>", "<url>", "<a>", "<href>"],
    answer: "<a>",
    category: "General"
  },
  {
    question: "Which protocol is used for secure communication on web?",
    options: ["HTTP", "TCP", "HTTPS", "FTP"],
    answer: "HTTPS",
    category: "General"
  },
  {
    question: "Who founded Microsoft?",
    options: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Larry Page"],
    answer: "Bill Gates",
    category: "General"
  },
  {
    question: "What is React mainly used for?",
    options: [
      "Game Development",
      "Server Management",
      "Building User Interfaces",
      "File Storage"
    ],
    answer: "Building User Interfaces",
    category: "General"
  },
  {
    question: "Which CSS property makes corners rounded?",
    options: ["corner", "border-radius", "round", "padding"],
    answer: "border-radius",
    category: "General"
  }
]
