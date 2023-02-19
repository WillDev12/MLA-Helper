//WillDevv12 was here
//For more Google Script related content, see https://github.com/WillDev12

var ui = DocumentApp.getUi();
var doc = DocumentApp.getActiveDocument(),
    body = doc.getBody(),
    cup = body.getParagraphs();

function onOpen() 
{

  ui.createMenu('MLA Helper')

  .addItem('Launch GUI', 'launchGUI')

  .addSeparator()

  .addItem('Make MLA Header', 'newHeader')

  .addItem('New Quote', 'newQuote')

  .addSeparator()

  .addSubMenu(DocumentApp.getUi().createMenu('New Citing')
                .addItem('Create Citings Page', 'citingsPage')
                .addSeparator()
                .addItem('Book', 'newCitation'))

  .addSubMenu(DocumentApp.getUi().createMenu('Fonts')
                .addItem("Times New Romanator", "timesNew")
                .addItem("Italicator", "italixer"))

  .addToUi();

  ui.alert("MLA Helper v1.0.5 script by WillDevv12 \n\n Catch me on GitHub: https://github.com/WillDev12")

}

function newQuote()
{

 var output = UrlFetchApp.fetch("https://raw.githubusercontent.com/WillDev12/MLA-Helper/main/scr/html/quote.html");
 var form = HtmlService.createHtmlOutput(output.getContentText())
            .setWidth(800)
            .setHeight(360);
            
 ui.showModalDialog(form, '‎');
  
}

function newCitation()
{

 var output = UrlFetchApp.fetch("https://raw.githubusercontent.com/WillDev12/MLA-Helper/main/scr/html/citation.html");
 var form = HtmlService.createHtmlOutput(output.getContentText())
            .setWidth(800)
            .setHeight(700);
            
 ui.showModalDialog(form, 'New Citation');
  
}

function newHeader()
{

  body.insertParagraph(0, "Name\nTeacher's Name\nClass\nDate (Day# Month Year)\n\n");

  body.insertParagraph(1, "TITLE").setAlignment(DocumentApp.HorizontalAlignment.CENTER);

}

function returnedHeading(title, name, tname, came, day, month, year) {

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];


  body.insertParagraph(0, name+"\n"+tname+"\n"+came+"\n"+day+" "+monthNames[month]+" "+ year +"\n\n");
  body.insertParagraph(1, title).setAlignment(DocumentApp.HorizontalAlignment.CENTER);

}

function timesNew()
{

  const selection = DocumentApp.getActiveDocument().getSelection();
  
  if (selection != null) {
  const element = selection.getRangeElements()[0];
  element
    .getElement()
    .asText()
    .setFontFamily(
      element.getStartOffset(),
      element.getEndOffsetInclusive(),
      "Times New Roman")
    .setFontSize(
      element.getStartOffset(), 
      element.getEndOffsetInclusive(),
      12);

  } else {
    var e = "nullselected";
    FeedbackError(e);
  }

}

function italixer()
{

  const selection = DocumentApp.getActiveDocument().getSelection();
  
  if (selection != null) {
  const element = selection.getRangeElements()[0];
  element
    .getElement()
    .asText()
    .setItalic(true);

  } else {
    var e = "nullselected";
    FeedbackError(e);
  }

}

function citingsPage()
{

  var par = doc.getParagraphs();
  var num = 1;
  for (var i in par) {

    num++;

  }

  num = num - 1;

  body.insertPageBreak(num);

  body.insertParagraph(num + 1, "Works Cited").setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  body.insertParagraph(num + 2, "");

  par = doc.getParagraphs();
  var position = doc.newPosition(par[par.length-1], 0);
  doc.setCursor(position);

}

function SendQuote(quote, author, pagen) 
{ 
  
  var str = '"' + quote + '" (' + author + " " + pagen + ").";

  var cursor = DocumentApp.getActiveDocument().getCursor();
  var surroundingText = cursor.getSurroundingText();
  surroundingText.appendText(str);


}

function citeBook(cont, afn, amn, aln, asfx, title, pub, city, sn, snum, edition, year) 
{

  var product = ""
  var product2 = ""
  var indent1 = ""
  var italix = ""

  if (aln === "") {

  } else {

    product = aln + ", "

  }

  if (amn === "") {

  } else {

    product = product + amn + " "

  }

  if (afn === "") {

  } else {

    product = product + afn + ", "

  }

  if (asfx === "") {

  } else {

    product = product + asfx + ", "

  }

  if (cont === "role") {

  } else {

    product = product + cont + ". "

  }

  if (title === "") {

  } else {

    italix = title + ". "

  }

  if (edition === "") {

  } else {

    product2 = edition + " ed., "

  }

  if (city === "") {

  } else {

    product2 = product2 + city +", "

  }

  if (pub === "") {

  } else {

    indent1 = pub + ", "

  }

  if (year === "") {

  } else {

    indent1 = indent1 + year + ". "

  }

  if (sn === "") {

  } else {

    indent1 = indent1 + sn + ", "

  }

  if (snum === "") {

  } else {

    indent1 = indent1 + snum + "."

  }

  var output = "<p>"+product+"<i>"+italix+"</i>"+product2+"<br>&emsp;"+indent1;
  var form = HtmlService.createHtmlOutput(output)
            .setWidth(500)
            .setHeight(150);
  ui.showModalDialog(form, 'Output Citation');

}

function FeedbackError(e) 
{

  if (e === "null") {

    ui.alert("ERROR: One or more required inputs are missing.")

  } else if (e === "nullselected") {

    ui.alert("ERROR: You must select text before running this script.")

  } else {

    ui.alert(e);

  }

}

function launchGUI() {

  var s = UrlFetchApp.fetch("https://raw.githubusercontent.com/WillDev12/MLA-Helper/main/scr/html/sidebar.html");
  var service = HtmlService.createHtmlOutput(s.getContentText()).setTitle('MLA Helper');
  DocumentApp.getUi().showSidebar(service);

}
