//WillDevv12 was here
//For more Google Script related content, see https://github.com/WillDev12

var ui = DocumentApp.getUi();
var doc = DocumentApp.getActiveDocument(),
    body = doc.getBody(),
    cup = body.getParagraphs();

function onOpen() 
{

  ui.createMenu('MLA Helper')

  .addItem('Make MLA Header', 'newHeader')

  .addItem('New Quote', 'newQuote')

  .addSeparator()

  .addSubMenu(DocumentApp.getUi().createMenu('New Citing')
                .addItem('Create Citings Page', 'citingsPage')
                .addSeparator()
                .addItem('Book', 'newCitation'))

  .addSeparator()

  .addItem("Times New Romanator", "timesNew")
  .addItem("Italicator", "italixer")

  .addToUi();

  ui.alert("MLA Helper script by WillDevv12 \n\n Catch me on GitHub: https://github.com/WillDev12")

}

function newQuote()
{

 var text = '<!DOCTYPE html><html><head><base target="_top"><link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"><script>function CreateQuote() {var quote = document.getElementById("quote").value;var author = document.getElementById("author").value;var pagen = document.getElementById("page").value;if (author === "") {var e = "null";google.script.run.FeedbackError(e);return;} else if (quote === "") {var e = "null";google.script.run.FeedbackError(e);return;}else if (pagen === "") {var e = "null";google.script.run.FeedbackError(e);return;}google.script.run.SendQuote(quote, author, pagen);google.script.host.close();}</script></head><body><div class="w3-card" style="margin: 20px"><div class="w3-container w3-blue"><h2>New quote</h2></div><div class="w3-container w3-light-gray"><br>Quote: (Do not include a final period) <br> <input type="text" id="quote" style="width:260px" required/><br>Authors last name: <br> <input type="text" id="author" style="width:260px" required/><br>Page #: <br> <input type="text" id="page" style="width:260px" required/><br><input type="button" value="Create" onclick="CreateQuote()" style="width:100px; margin-top: 20px; margin-bottom: 20px"/></div></div></body></html>'

 var form = HtmlService.createHtmlOutput(text)
            .setWidth(800)
            .setHeight(360);
            
 ui.showModalDialog(form, '‎');
  
}

function newCitation()
{

  var text = '<!DOCTYPE html><html><head><base target="_top"><link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"><script>function SendCitation() {var cont = document.getElementById("contribution1").value;var afn = document.getElementById("afn").value;var amn = document.getElementById("amn").value;var aln = document.getElementById("aln").value;var asfx = document.getElementById("asfx").value;var title = document.getElementById("title").value;var pub = document.getElementById("pub").value;var city = document.getElementById("city").value;var sn = document.getElementById("sn").value;var snum = document.getElementById("snum").value;var edition = document.getElementById("edition").value;var year = document.getElementById("year").value;google.script.run.CreateCitation(cont, afn, amn, aln, asfx, title, pub, city, sn, snum, edition, year);google.script.host.close();}</script></head><body><div class="w3-card"><div class="w3-container w3-blue"><h2>Author & Contributions</h2></div><div class="w3-container w3-light-gray" style="padding: 20px"><label for="contribution1">Choose a role:</label><select name="contribution1" id="contribution1"><option value="default">Role</option><option value="Author">Author</option><option value="Translator">Translator</option></select><br>Authors first name: <br> <input type="text" id="afn" style="width:260px" required/><br>Authors middle name: <br> <input type="text" id="amn" style="width:260px" required/><br>Authors last name: <br> <input type="text" id="aln" style="width:260px" required/><br>Suffix: <br> <input type="text" id="asfx" style="width:150px" required/><br><br></div><br><div class="w3-container w3-blue"><h2>Book Info</h2></div><div class="w3-container w3-light-gray" style="padding: 20px">Title: <br> <input type="text" id="title" style="width:260px" required/><br>Publisher: <br> <input type="text" id="pub" style="width:260px" required/><br>Year: <input type="text" id="year" style="width:150px" required/><br>Publication City: <br> <input type="text" id="city" style="width:260px" required/><br>Edition: <br> <input type="text" id="edition" style="width:260px" required/><br>Series name & number: <br> <input type="text" id="sn" style="width:100px" required/><input type="text" id="snum" style="width:100px" required/><br><input type="button" value="Create" onclick="SendCitation()" style="width:100px; margin-top: 20px"/></div></body></html>'

 var form = HtmlService.createHtmlOutput(text)
            .setWidth(800)
            .setHeight(700);
            
 ui.showModalDialog(form, 'New Citation');
  
}

function newHeader()
{

  body.insertParagraph(0, "Name\nTeacher's Name\nClass\nDate (Day# Month Year)\n\n");

  body.insertParagraph(1, "TITLE").setAlignment(DocumentApp.HorizontalAlignment.CENTER);

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

function CreateCitation(cont, afn, amn, aln, asfx, title, pub, city, sn, snum, edition, year) 
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

  if (cont === "default") {

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

  ///////////////////////////////////////////////////////////////////////

  var cursor = DocumentApp.getActiveDocument().getCursor();
  var surroundingText = cursor.getSurroundingText();
  surroundingText.appendText(product);
  var surroundingText = cursor.getSurroundingText();
  surroundingText.appendText(italix);
  var surroundingText = cursor.getSurroundingText();
  surroundingText.appendText(product2);
  surroundingText = cursor.getSurroundingText();
  surroundingText.appendText("\n     " + indent1);

  ///////////////////////////////////////////////////////////////////////

}

function FeedbackError(e) 
{

  if (e === "null") {

    ui.alert("ERROR: One or more of your input feilds are empty.")

  } else if (e === "nullselected") {

    ui.alert("ERROR: You must select text before running this script.")

  }

}

//Enjoy :)
