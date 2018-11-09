
// START - INITIATE SHEETS API
var key = "AIzaSyBtj9Bs0ue2TA6PIMbIh5lfFPnPhn-w058";
// END - INITIATE SHEETS API

var year = 0;   var trim = 1;   var leaseOffer = 2;    var DAS = 3;    var APR = 4;
var termLength = 5; var plusCash = 6; var buyFor = 7; var claimOfferText = 8;   var claimOfferLink  = 9;
var disclaimer = 10;  var show = 11; var leaseTerm = 12;  var offer3Text = 13;

// TEMP CSS EDIT
//document.querySelector('.BitMoto-Offer span:nth-of-type(3)').style.display = "none";
//document.querySelector('#BitMoto-PaymentTerm').style.display = "none";
//document.querySelector('.BitMoto-Offer sup').style.display = "none";

function trimOffer() {
// sample URL =
// https://sheets.googleapis.com/v4/spreadsheets/1ifxFfj99eGi017xJVKlh99XWLH4SDChl2oefqh2hbeg/values/Fusion!A3:K3?key=AIzaSyBtj9Bs0ue2TA6PIMbIh5lfFPnPhn-w058

// START - Fusion Offers
  if(document.getElementById('bit-fusion-trim1') !== null)  {
    
    var bitmoSheet = "Fusion";
    var bitmoRow = "2";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-Fusion-Trim1').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Fusion-Trim1').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Fusion-Trim1').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Fusion-Trim1').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Fusion-Trim1').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Fusion-Trim1').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Fusion-Trim1').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Fusion-Trim1').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Fusion-Trim1').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Fusion-Trim1').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Fusion-Trim1').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Fusion-Trim1').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Fusion-Trim1').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Fusion-Trim1').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Fusion-Trim1').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-fusion-trim1 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-fusion-trim1 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-fusion-trim1 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-fusion-trim1 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-fusion-trim1 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === 'FALSE') {
                document.getElementById('bit-fusion-trim1').style.display = "none";
            }
            
        });
    });
  }
  
  if(document.getElementById('bit-fusion-trim2') !== null)  {
    
    var bitmoSheet = "Fusion";
    var bitmoRow = "3";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-Fusion-Trim2').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Fusion-Trim2').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Fusion-Trim2').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Fusion-Trim2').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Fusion-Trim2').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Fusion-Trim2').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Fusion-Trim2').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Fusion-Trim2').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Fusion-Trim2').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Fusion-Trim2').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Fusion-Trim2').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Fusion-Trim2').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Fusion-Trim2').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Fusion-Trim2').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Fusion-Trim2').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-fusion-trim2 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-fusion-trim2 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-fusion-trim2 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-fusion-trim2 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-fusion-trim2 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === 'FALSE') {
                document.getElementById('bit-fusion-trim2').style.display = "none";
            }
            
        });
    });
  }
    
  if(document.getElementById('bit-fusion-trim3') !== null)  {
    
    var bitmoSheet = "Fusion";
    var bitmoRow = "4";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-Fusion-Trim3').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Fusion-Trim3').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Fusion-Trim3').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Fusion-Trim3').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Fusion-Trim3').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Fusion-Trim3').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Fusion-Trim3').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Fusion-Trim3').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Fusion-Trim3').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Fusion-Trim3').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Fusion-Trim3').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Fusion-Trim3').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Fusion-Trim3').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Fusion-Trim3').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Fusion-Trim3').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-fusion-trim3 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-fusion-trim3 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-fusion-trim3 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-fusion-trim3 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-fusion-trim3 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === 'FALSE') {
                document.getElementById('bit-fusion-trim3').style.display = "none";
            }
            
        });
    });
      
  }
    
  if(document.getElementById('bit-fusion-trim4') !== null)  {
    
    var bitmoSheet = "Fusion";
    var bitmoRow = "5";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-Fusion-Trim4').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Fusion-Trim4').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Fusion-Trim4').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Fusion-Trim4').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Fusion-Trim4').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Fusion-Trim4').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Fusion-Trim4').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Fusion-Trim4').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Fusion-Trim4').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Fusion-Trim4').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Fusion-Trim4').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Fusion-Trim4').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Fusion-Trim4').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Fusion-Trim4').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Fusion-Trim4').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-fusion-trim4 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-fusion-trim4 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-fusion-trim4 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-fusion-trim4 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-fusion-trim4 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === 'FALSE') {
                document.getElementById('bit-fusion-trim4').style.display = "none";
            }
            
        });
    });
      
  }
  
if(document.getElementById('bit-fusion-trim5') !== null)  {
    
    var bitmoSheet = "Fusion";
    var bitmoRow = "6";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-Fusion-Trim5').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Fusion-Trim5').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Fusion-Trim5').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Fusion-Trim5').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Fusion-Trim5').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Fusion-Trim5').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Fusion-Trim5').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Fusion-Trim5').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Fusion-Trim5').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Fusion-Trim5').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Fusion-Trim5').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Fusion-Trim5').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Fusion-Trim5').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Fusion-Trim5').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Fusion-Trim5').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-fusion-trim5 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-fusion-trim5 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-fusion-trim5 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-fusion-trim5 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-fusion-trim5 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-fusion-trim5').style.display = "none";
            }
            
        });
    });
      
  }
// END - Fusion Offers
  
// START - Edge Offers
  if(document.getElementById('bit-2018-edge-awdse') !== null)  {
    
    var bitmoSheet = "Edge";
    var bitmoRow = "2";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018EdgeAWDSE').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018EdgeAWDSE').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018EdgeAWDSE').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018EdgeAWDSE').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018EdgeAWDSE').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018EdgeAWDSE').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018EdgeAWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018EdgeAWDSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018EdgeAWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018EdgeAWDSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018EdgeAWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018EdgeAWDSE').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-edge-awdse #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-edge-awdse #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-edge-awdse .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-edge-awdse #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-edge-awdse .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
  }
    
  if(document.getElementById('bit-2018-edge-awdsel') !== null)  {
    
    var bitmoSheet = "Edge";
    var bitmoRow = "3";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018EdgeAWDSEL').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018EdgeAWDSEL').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018EdgeAWDSEL').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018EdgeAWDSEL').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018EdgeAWDSEL').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018EdgeAWDSEL').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018EdgeAWDSEL').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018EdgeAWDSEL').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018EdgeAWDSEL').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018EdgeAWDSEL').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018EdgeAWDSEL').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018EdgeAWDSEL').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-edge-awdsel #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-edge-awdsel #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-edge-awdsel .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-edge-awdsel #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-edge-awdsel .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
      
  }
    
  if(document.getElementById('bit-2018-edge-awdselwleather') !== null)  {
    
    var bitmoSheet = "Edge";
    var bitmoRow = "4";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018EdgeAWDSELwLeather').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018EdgeAWDSELwLeather').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018EdgeAWDSELwLeather').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018EdgeAWDSELwLeather').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018EdgeAWDSELwLeather').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018EdgeAWDSELwLeather').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018EdgeAWDSELwLeather').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018EdgeAWDSELwLeather').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018EdgeAWDSELwLeather').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018EdgeAWDSELwLeather').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018EdgeAWDSELwLeather').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018EdgeAWDSELwLeather').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-edge-awdselwleather #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-edge-awdselwleather #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-edge-awdselwleather .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-edge-awdselwleather #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-edge-awdselwleather .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
      
  }
// END - Edge Offers
  
// START - Focus Offers
  if(document.getElementById('bit-2018-focus-se') !== null)  {
    
    var bitmoSheet = "Focus";
    var bitmoRow = "3";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018FocusSE').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018FocusSE').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018FocusSE').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018FocusSE').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018FocusSE').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018FocusSE').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018FocusSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018FocusSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018FocusSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018FocusSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018FocusSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018FocusSE').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-focus-se #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-focus-se #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-focus-se .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-focus-se #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-focus-se .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
      
  }
  
// END - Focus Offers
 
// START - Escape Offers
  if(document.getElementById('bit-2018-escape-fwdse') !== null)  {
    
    var bitmoSheet = "Escape";
    var bitmoRow = "2";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018EscapeFWDSE').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018EscapeFWDSE').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018EscapeFWDSE').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018EscapeFWDSE').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018EscapeFWDSE').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018EscapeFWDSE').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018EscapeFWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018EscapeFWDSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018EscapeFWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018EscapeFWDSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018EscapeFWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018EscapeFWDSE').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-escape-fwdse #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-escape-fwdse #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-escape-fwdse .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-escape-fwdse #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-escape-fwdse .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
  }
  
  if(document.getElementById('bit-2018-escape-awdse') !== null)  {
    
    var bitmoSheet = "Escape";
    var bitmoRow = "3";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018EscapeAWDSE').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018EscapeAWDSE').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018EscapeAWDSE').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018EscapeAWDSE').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018EscapeAWDSE').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018EscapeAWDSE').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018EscapeAWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018EscapeAWDSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018EscapeAWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018EscapeAWDSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018EscapeAWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018EscapeAWDSE').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-escape-awdse #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-escape-awdse #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-escape-awdse .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-escape-awdse #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-escape-awdse .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
  }
    
  if(document.getElementById('bit-2018-escape-fwdsel') !== null)  {
    
    var bitmoSheet = "Escape";
    var bitmoRow = "4";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018EscapeFWDSEL').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018EscapeFWDSEL').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018EscapeFWDSEL').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018EscapeFWDSEL').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018EscapeFWDSEL').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018EscapeFWDSEL').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018EscapeFWDSEL').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018EscapeFWDSEL').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018EscapeFWDSEL').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018EscapeFWDSEL').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018EscapeFWDSEL').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018EscapeFWDSEL').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-escape-fwdsel #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-escape-fwdsel #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-escape-fwdsel .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-escape-fwdsel #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-escape-fwdsel .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
  }
    
  if(document.getElementById('bit-2018-escape-awdsel') !== null)  {
    
    var bitmoSheet = "Escape";
    var bitmoRow = "5";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018EscapeAWDSEL').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018EscapeAWDSEL').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018EscapeAWDSEL').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018EscapeAWDSEL').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018EscapeAWDSEL').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018EscapeAWDSEL').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018EscapeAWDSEL').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018EscapeAWDSEL').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018EscapeAWDSEL').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018EscapeAWDSEL').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018EscapeAWDSEL').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018EscapeAWDSEL').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-escape-awdsel #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-escape-awdsel #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-escape-awdsel .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-escape-awdsel #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-escape-awdsel .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
  }
 
  if(document.getElementById('bit-2018-escape-titanium4wd') !== null)  {
    
    var bitmoSheet = "Escape";
    var bitmoRow = "6";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018EscapeTitanium4WD').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018EscapeTitanium4WD').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018EscapeTitanium4WD').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018EscapeTitanium4WD').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018EscapeTitanium4WD').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018EscapeTitanium4WD').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018EscapeTitanium4WD').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018EscapeTitanium4WD').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018EscapeTitanium4WD').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018EscapeTitanium4WD').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018EscapeTitanium4WD').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018EscapeTitanium4WD').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-escape-titanium4wd #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-escape-titanium4wd #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-escape-titanium4wd .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-escape-titanium4wd #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-escape-titanium4wd .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
      
  }
// END - Escape Offers

// START - Explorer Offers
  if(document.getElementById('bit-2018-explorer-fwdxlt') !== null)  {
    
    var bitmoSheet = "Explorer";
    var bitmoRow = "2";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018ExplorerFWDXLT').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018ExplorerFWDXLT').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018ExplorerFWDXLT').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018ExplorerFWDXLT').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018ExplorerFWDXLT').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018ExplorerFWDXLT').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018ExplorerFWDXLT').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018ExplorerFWDXLT').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018ExplorerFWDXLT').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018ExplorerFWDXLT').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018ExplorerFWDXLT').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018ExplorerFWDXLT').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-explorer-fwdxlt #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-explorer-fwdxlt #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-explorer-fwdxlt .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-explorer-fwdxlt #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-explorer-fwdxlt .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
      
  }
  
  if(document.getElementById('bit-2018-explorer-awdxlt') !== null)  {
    
    var bitmoSheet = "Explorer";
    var bitmoRow = "3";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018ExplorerAWDXLT').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018ExplorerAWDXLT').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018ExplorerAWDXLT').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018ExplorerAWDXLT').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018ExplorerAWDXLT').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018ExplorerAWDXLT').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018ExplorerAWDXLT').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018ExplorerAWDXLT').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018ExplorerAWDXLT').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018ExplorerAWDXLT').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018ExplorerAWDXLT').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018ExplorerAWDXLT').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-explorer-awdxlt #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-explorer-awdxlt #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-explorer-awdxlt .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-explorer-awdxlt #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-explorer-awdxlt .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
      
  }
  
if(document.getElementById('bit-explorer-trim3') !== null)  {
    
    var bitmoSheet = "Explorer";
    var bitmoRow = "4";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-Year-Explorer-Trim3').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Explorer-Trim3').innerHTML = value[1];
          
            document.getElementById('BitMoto-leaseOffer-Explorer-Trim3').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Explorer-Trim3').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Explorer-Trim3').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Explorer-Trim3').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Explorer-Trim3').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Explorer-Trim3').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Explorer-Trim3').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Explorer-Trim3').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Explorer-Trim3').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Explorer-Trim3').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Explorer-Trim3').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Explorer-Trim3').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-explorer-trim3 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-explorer-trim3 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-explorer-trim3 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-explorer-trim3 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-explorer-trim3 .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
      
  }
  
  if(document.getElementById('bit-explorer-trim4') !== null)  {
    
    var bitmoSheet = "Explorer";
    var bitmoRow = "5";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-Year-Explorer-Trim4').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Explorer-Trim4').innerHTML = value[1];
          
            document.getElementById('BitMoto-leaseOffer-Explorer-Trim4').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Explorer-Trim4').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Explorer-Trim4').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Explorer-Trim4').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Explorer-Trim4').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Explorer-Trim4').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Explorer-Trim4').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Explorer-Trim4').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Explorer-Trim4').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Explorer-Trim4').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Explorer-Trim4').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Explorer-Trim4').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-explorer-trim4 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-explorer-trim4 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-explorer-trim4 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-explorer-trim4 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-explorer-trim4 .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
      
  }
  
if(document.getElementById('bit-explorer-trim5') !== null)  {
    
    var bitmoSheet = "Explorer";
    var bitmoRow = "6";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-Year-Explorer-Trim5').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Explorer-Trim5').innerHTML = value[1];
          
            document.getElementById('BitMoto-leaseOffer-Explorer-Trim5').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Explorer-Trim5').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Explorer-Trim5').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Explorer-Trim5').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Explorer-Trim5').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Explorer-Trim5').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Explorer-Trim5').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Explorer-Trim5').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Explorer-Trim5').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Explorer-Trim5').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Explorer-Trim5').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Explorer-Trim5').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-explorer-trim5 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-explorer-trim5 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-explorer-trim5 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-explorer-trim5 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-explorer-trim5 .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
      
  }

// END - Explorer Offers

// START - EcoSport Offers
  if(document.getElementById('bit-2018-ecosport-s') !== null)  {
    
    var bitmoSheet = "EcoSport";
    var bitmoRow = "2";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018EcoSportS').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018EcoSportS').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018EcoSportS').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018EcoSportS').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018EcoSportS').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018EcoSportS').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018EcoSportS').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018EcoSportS').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018EcoSportS').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018EcoSportS').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018EcoSportS').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018EcoSportS').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-ecosport-s #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-ecosport-s #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-ecosport-s .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-ecosport-s #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-ecosport-s .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
      
  }
  
  if(document.getElementById('bit-2018-ecosport-se') !== null)  {
    
    var bitmoSheet = "EcoSport";
    var bitmoRow = "3";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018EcoSportSE').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018EcoSportSE').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018EcoSportSE').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018EcoSportSE').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018EcoSportSE').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018EcoSportSE').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018EcoSportSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018EcoSportSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018EcoSportSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018EcoSportSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018EcoSportSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018EcoSportSE').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-ecosport-se #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-ecosport-se #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-ecosport-se .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-ecosport-se #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-ecosport-se .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
      
  }
// END - EcoSport Offers

// START - F150 Offers
  if(document.getElementById('bit-2018-f150-4x4supercabstx') !== null)  {
    
    var bitmoSheet = "F-150";
    var bitmoRow = "2";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018F1504x4SuperCabSTX').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018F1504x4SuperCabSTX').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018F1504x4SuperCabSTX').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018F1504x4SuperCabSTX').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018F1504x4SuperCabSTX').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018F1504x4SuperCabSTX').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018F1504x4SuperCabSTX').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018F1504x4SuperCabSTX').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018F1504x4SuperCabSTX').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018F1504x4SuperCabSTX').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018F1504x4SuperCabSTX').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018F1504x4SuperCabSTX').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-f150-4x4supercabstx #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-f150-4x4supercabstx #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-f150-4x4supercabstx .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-f150-4x4supercabstx #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-f150-4x4supercabstx .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
      
  }
  
  if(document.getElementById('bit-2018-f150-4x4supercrewstx') !== null)  {
    
    var bitmoSheet = "F-150";
    var bitmoRow = "3";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018F1504x4SuperCrewSTX').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018F1504x4SuperCrewSTX').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018F1504x4SuperCrewSTX').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018F1504x4SuperCrewSTX').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018F1504x4SuperCrewSTX').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018F1504x4SuperCrewSTX').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018F1504x4SuperCrewSTX').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018F1504x4SuperCrewSTX').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018F1504x4SuperCrewSTX').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018F1504x4SuperCrewSTX').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018F1504x4SuperCrewSTX').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018F1504x4SuperCrewSTX').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-f150-4x4supercrewstx #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-f150-4x4supercrewstx #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-f150-4x4supercrewstx .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-f150-4x4supercrewstx #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-f150-4x4supercrewstx .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
      
  }
  
  if(document.getElementById('bit-2018-f150-4x4supercrewxltwnav') !== null)  {
    
    var bitmoSheet = "F-150";
    var bitmoRow = "4";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018F1504x4SuperCrewXLTwNav').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018F1504x4SuperCrewXLTwNav').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018F1504x4SuperCrewXLTwNav').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018F1504x4SuperCrewXLTwNav').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018F1504x4SuperCrewXLTwNav').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018F1504x4SuperCrewXLTwNav').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018F1504x4SuperCrewXLTwNav').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018F1504x4SuperCrewXLTwNav').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018F1504x4SuperCrewXLTwNav').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018F1504x4SuperCrewXLTwNav').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018F1504x4SuperCrewXLTwNav').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018F1504x4SuperCrewXLTwNav').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-f150-4x4supercrewxltwnav #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-f150-4x4supercrewxltwnav #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-f150-4x4supercrewxltwnav .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-f150-4x4supercrewxltwnav #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-f150-4x4supercrewxltwnav .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
      
  }
// END - F150 Offers

// START - Taurus Offers
  if(document.getElementById('bit-2018-taurus-sel') !== null)  {
    
    var bitmoSheet = "Taurus";
    var bitmoRow = "2";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018TaurusSEL').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018TaurusSEL').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018TaurusSEL').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018TaurusSEL').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018TaurusSEL').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018TaurusSEL').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018TaurusSEL').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018TaurusSEL').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018TaurusSEL').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018TaurusSEL').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018TaurusSEL').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018TaurusSEL').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-taurus-sel #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-taurus-sel #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-taurus-sel .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-taurus-sel #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-taurus-sel .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
      
  }
  
// END - Taurus Offers
  
// START - Mustang Offers
  if(document.getElementById('bit-2018-mustang-ecoboost') !== null)  {
    
    var bitmoSheet = "Mustang";
    var bitmoRow = "2";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018MustangEcoBoost').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018MustangEcoBoost').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018MustangEcoBoost').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018MustangEcoBoost').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018MustangEcoBoost').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018MustangEcoBoost').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018MustangEcoBoost').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018MustangEcoBoost').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018MustangEcoBoost').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018MustangEcoBoost').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018MustangEcoBoost').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018MustangEcoBoost').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-mustang-ecoboost #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-mustang-ecoboost #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-mustang-ecoboost .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-mustang-ecoboost #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-mustang-ecoboost .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
      
  }
  
// END - Mustang Offers
  
// START - Fiesta Offers
  if(document.getElementById('bit-2018-fiesta-se') !== null)  {
    
    var bitmoSheet = "Fiesta";
    var bitmoRow = "2";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018FiestaSE').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018FiestaSE').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018FiestaSE').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018FiestaSE').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-2018FiestaSE').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-2018FiestaSE').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-2018FiestaSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018FiestaSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018FiestaSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018FiestaSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018FiestaSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018FiestaSE').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-fiesta-se #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-2018-fiesta-se #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-2018-fiesta-se .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-2018-fiesta-se #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-2018-fiesta-se .BitMoto-Offer>sup').style.display = "none";
            }
            
        });
    });
      
  }
  
// END - Fiesta Offers
    
}


trimOffer();
