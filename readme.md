<h1 align="center">MLA Helper v1.0.5</h1><br>
<p align="center">
  <img src="https://github.com/WillDev12/MLA-Helper/blob/main/img/Google_Docs_logo_(2014-2020).svg%20(1).png" width="150" height="200">
</p><br>
<p align="center">
  <a href="https://github.com/WillDev12">
    <img src="https://img.shields.io/github/followers/WillDev12?color=success&label=Follow%20my%20github&logo=github&style=for-the-badge">
  <a href="https://github.com/WillDev12/MLA-Helper/network/members">
    <img src="https://img.shields.io/github/forks/WillDev12/MLA-Helper?logo=git&style=for-the-badge">
  <a href="https://github.com/WillDev12/MLA-Helper/stargazers">
    <img src="https://img.shields.io/github/stars/WillDev12/MLA-Helper?logo=git&color=yellow&style=for-the-badge">
  <img src="https://img.shields.io/github/watchers/WillDev12/MLA-Helper?logo=git&style=for-the-badge">
</p>

# Installation
Here are the installation steps:

1. Copy the code by hovering over the right side and pressing the square
2. Open the Google Dock of your choice and under the top menu select Extensions\Apps Script
3. When the new tab opens, delete the premade text and paste the code.
4. Go back to the dock, click refresh, and enjoy!

Install code:
``` javascript
//WillDevv12 was here//
//For more Google Script related content, see https://github.com/WillDev12//
var ui = DocumentApp.getUi();var doc = DocumentApp.getActiveDocument(),body = doc.getBody(),cup = body.getParagraphs();function onOpen() {ui.createMenu('MLA Helper').addItem('Launch GUI', 'launchGUI').addSeparator().addItem('Make MLA Header', 'newHeader').addItem('New Quote', 'newQuote').addSeparator().addSubMenu(DocumentApp.getUi().createMenu('New Citing').addItem('Create Citings Page', 'citingsPage').addSeparator().addItem('Book', 'newCitation')).addSubMenu(DocumentApp.getUi().createMenu('Fonts').addItem("Times New Romanator", "timesNew").addItem("Italicator", "italixer")).addToUi();ui.alert("MLA Helper v1.0.5 script by WillDevv12 \n\n Catch me on GitHub: https://github.com/WillDev12");}function newQuote(){var output = UrlFetchApp.fetch("https://raw.githubusercontent.com/WillDev12/MLA-Helper/main/scr/html/quote.html");var form = HtmlService.createHtmlOutput(output.getContentText()).setWidth(800).setHeight(360);ui.showModalDialog(form, '‎');}function newCitation(){var output = UrlFetchApp.fetch("https://raw.githubusercontent.com/WillDev12/MLA-Helper/main/scr/html/citation.html");var form = HtmlService.createHtmlOutput(output.getContentText()).setWidth(800).setHeight(700);ui.showModalDialog(form, 'New Citation');}function newHeader(){body.insertParagraph(0, "Name\nTeacher's Name\nClass\nDate (Day# Month Year)\n\n");body.insertParagraph(1, "TITLE").setAlignment(DocumentApp.HorizontalAlignment.CENTER);}function returnedHeading(title, name, tname, came, day, month, year) {const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];body.insertParagraph(0, name+"\n"+tname+"\n"+came+"\n"+day+" "+monthNames[month]+" "+ year +"\n\n");body.insertParagraph(1, title).setAlignment(DocumentApp.HorizontalAlignment.CENTER);}function timesNew(){const selection = DocumentApp.getActiveDocument().getSelection();if (selection != null) {const element = selection.getRangeElements()[0];element.getElement().asText().setFontFamily(element.getStartOffset(),element.getEndOffsetInclusive(),"Times New Roman").setFontSize(element.getStartOffset(), element.getEndOffsetInclusive(),12);} else {var e = "nullselected";FeedbackError(e);}}function italixer(){const selection = DocumentApp.getActiveDocument().getSelection();if (selection != null) {const element = selection.getRangeElements()[0];element.getElement().asText().setItalic(true);} else {var e = "nullselected";FeedbackError(e);}}function citingsPage(){var par = doc.getParagraphs();var num = 1;for (var i in par) {num++;}num = num - 1;body.insertPageBreak(num);body.insertParagraph(num + 1, "Works Cited").setAlignment(DocumentApp.HorizontalAlignment.CENTER);body.insertParagraph(num + 2, "");par = doc.getParagraphs();var position = doc.newPosition(par[par.length-1], 0);doc.setCursor(position);}function SendQuote(quote, author, pagen) {var str = '"' + quote + '" (' + author + " " + pagen + ").";var cursor = DocumentApp.getActiveDocument().getCursor();var surroundingText = cursor.getSurroundingText();surroundingText.appendText(str);}function citeBook(cont, afn, amn, aln, asfx, title, pub, city, sn, snum, edition, year) {var product = "";var product2 = "";var indent1 = "";var italix = "";if (aln === "") {} else {product = aln + ", "}if (amn === "") {} else {product = product + amn + " "}if (afn === "") {} else {product = product + afn + ", "}if (asfx === "") {} else {product = product + asfx + ", "}if (cont === "role") {} else {product = product + cont + ". "}if (title === "") {} else {italix = title + ". "}if (edition === "") {} else {product2 = edition + " ed., "}if (city === "") {} else {product2 = product2 + city +", "}if (pub === "") {} else {indent1 = pub + ", "}if (year === "") {} else {indent1 = indent1 + year + ". "}if (sn === "") {} else {indent1 = indent1 + sn + ", "}if (snum === "") {} else {indent1 = indent1 + snum + "."}var output = "<p>"+product+"<i>"+italix+"</i>"+product2+"<br>&emsp;"+indent1;var form = HtmlService.createHtmlOutput(output).setWidth(500).setHeight(150);ui.showModalDialog(form, 'Output Citation');}function FeedbackError(e) {if (e === "null") {ui.alert("ERROR: One or more required inputs are missing.")} else if (e === "nullselected") {ui.alert("ERROR: You must select text before running this script.")} else {ui.alert(e);}}function launchGUI() {var s = UrlFetchApp.fetch("https://raw.githubusercontent.com/WillDev12/MLA-Helper/main/scr/html/sidebar.html");var service = HtmlService.createHtmlOutput(s.getContentText()).setTitle('MLA Helper');DocumentApp.getUi().showSidebar(service);}
```

You could also go [here](https://direct-link.net/378237/mla-helper) to copy a prebuilt template for Google Docs (ad link):

```
https://direct-link.net/378237/mla-helper
```

# What it does

Here is a breif list of things that MLA Helper can do:


 * Fonts and Formatting
   * Change selected text to Times New Roman
   * Change a sentence to Italic
 * Quotes
   * Open a dialog that automatically quotes text on input
 * Citing
   * Create a works cited page in the click of a button
 * Heading
   * Create MLA header in the click of a button
 * Library
   * Hosts interactive Google Script library

- - -
   
# Changelog

```
v1.0.5 update:
  -Added Sidebar
  -Re-organized UI
  -Updated Source
  -Template update
  -Fixed citing format
  -Fixed minor MLA errors
```

- - -

# Library & Brief tutorial

MLA Helper now hosts a Google Script library where you can use our functions in your personal code!

Library ID:
``` javascript
1g-0LjSh1pEMcYM4aT9tBLyONhwIOd8iLlg901Va3yYjhAY9JagfNnY_B
```

<h2>How to install:</h2>

  1. Copy the provided id
  2. Open the GS file of your choice.
  3. Under "Library," press the plus button, paste, and add.
  
  - - -
  
Using is simple, but following the instructions will make it easier.

Here is how to define a quote: [Remember to define with var before sending to doc]
``` javascript
function newQuote() {

  var quote = MLAHelper.createQuote("quote", "author", "pg#");
  var citation = MLAHelper.createCitation("authorFirstName", "authorMiddleName", "authorLastName", "authorSuffix", "contribution", "title", "publisher", "city", "seriesName", "seriesNumber", "edition", "year");
  Logger.log(quote);
  Logger.log(citation);
  
}
```
The output should be similar to this:
``` javascript
Execution log
-:--:-- AM/PM	Notice	Execution started
-:--:-- AM/PM	Info	"quote" (author pg#).
-:--:-- AM/PM	Info	authorLastName, authorMiddleName authorFirstName, authorSuffix, contribution. title. edition ed., city, 
                        publisher, year. seriesName, seriesNumber.
-:--:--	Notice	Execution completed
```
- - -
You can also generate base foundations for an MLA essay:
``` javascript
function setNew() {
  
    MLAHelper.createHeader("name", "teacherName", "className", "day", "month", "year", "title");
  
}
```

- - -

# Why MLA Helper is useful

It saves time[^1]

It is easy to use[^2]

It it easy to install[^3]

[^1]: MLA helper was made to save time.  The easy to use GUI makes writing a whole lot easier when it comes to things such as quoting, citing, and a few others which makes the process a whole lot simpler.

[^2]: When creating MLA helper, I decided to make the most foolproof GUI possible so that anyone would be able to use it problem free.  Because of this, it is very organised and gets the job done for those who are not tech handy.

[^3]: Installing the program is easy and can be done in no time.  Please see [Installation](https://github.com/WillDev12/MLA-Helper/blob/main/readme.md#installation) for firther details or click [here](https://direct-link.net/378237/mla-helper) for a pre-made template (ad link) 
