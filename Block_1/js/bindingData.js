var body = d3.select("body");
//Example 1

body // Selects the body of the document
    .append("p") //apend a paragraph element to the element selected previously (body)
    .text("New paragraphs!"); //Insert text into the current selection.