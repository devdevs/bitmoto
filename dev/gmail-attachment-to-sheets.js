// Download a csv file directly to Google sheet from gmail


function getCSV() {

 var myLabel = GmailApp.getUserLabelByName("Dealer Inventory Feeds/Haldeman");
 var threads = myLabel.getThreads(0,1);
 var msgs = GmailApp.getMessagesForThreads(threads);
 var attachments = msgs[0][0].getAttachments();

var file =  attachments[0];
var extracted = Utilities.unzip(file);
var string = extracted[0].getDataAsString();
var data = Utilities.parseCsv(string);

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheetByName("Raw");
sheet.clearContents();
var range = sheet.getRange(1,1, data.length,data[0].length);
range.setValues(data);

}



// Use this code for non-zipped files

/*
function importCSVFromGmail() {
  
  var threads = GmailApp.search("label:test");
  var message = threads[0].getMessages()[0];
  var attachment = message.getAttachments()[0];
  
  // Is the attachment a CSV file
  if (attachment.getContentType() === "text/csv") {
    
    // Dev - Make the first sheet active
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    SpreadsheetApp.setActiveSheet(ss.getSheets()[0]);
    
    var sheet = SpreadsheetApp.getActiveSheet();
    var csvData = Utilities.parseCsv(attachment.getDataAsString(), ",");
    
    // Clear the content of the sheet before importing new data
    sheet.clearContents();
    
    sheet.getRange(1, 1, csvData.length, csvData[0].length).setValues(csvData);
    
  }
  
}
*/
