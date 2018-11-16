
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
          
            document.getElementById('BitMoto-Year-Fusion-Trim1').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Fusion-Trim1').innerHTML = value[1];
            
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
          
            document.getElementById('BitMoto-Year-Fusion-Trim2').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Fusion-Trim2').innerHTML = value[1];
            
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
          
            document.getElementById('BitMoto-Year-Fusion-Trim3').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Fusion-Trim3').innerHTML = value[1];
            
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
          
            document.getElementById('BitMoto-Year-Fusion-Trim4').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Fusion-Trim4').innerHTML = value[1];
            
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
          
            document.getElementById('BitMoto-Year-Fusion-Trim5').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Fusion-Trim5').innerHTML = value[1];
            
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
  if(document.getElementById('bit-edge-trim1') !== null)  {
    
    var bitmoSheet = "Edge";
    var bitmoRow = "2";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
          
            document.getElementById('BitMoto-Year-Edge-Trim1').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Edge-Trim1').innerHTML = value[1];
            
            document.getElementById('BitMoto-leaseOffer-Edge-Trim1').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Edge-Trim1').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Edge-Trim1').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Edge-Trim1').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Edge-Trim1').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Edge-Trim1').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Edge-Trim1').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Edge-Trim1').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Edge-Trim1').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Edge-Trim1').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Edge-Trim1').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Edge-Trim1').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Edge-Trim1').innerHTML = value[10];
          
            //document.getElementById('BitMoto-LeaseTerm-Edge-Trim1').innerHTML = value[12];
          
            //document.getElementById('BitMoto-offer3Text-Edge-Trim1').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-edge-trim1 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-edge-trim1 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-edge-trim1 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-edge-trim1 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-edge-trim1 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-edge-trim1').style.display = "none";
            }
            
        });
    });
  }
    
  if(document.getElementById('bit-edge-trim2') !== null)  {
    
    var bitmoSheet = "Edge";
    var bitmoRow = "3";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
          
            document.getElementById('BitMoto-Year-Edge-Trim2').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Edge-Trim2').innerHTML = value[1];
            
            document.getElementById('BitMoto-leaseOffer-Edge-Trim2').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Edge-Trim2').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Edge-Trim2').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Edge-Trim2').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Edge-Trim2').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Edge-Trim2').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Edge-Trim2').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Edge-Trim2').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Edge-Trim2').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Edge-Trim2').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Edge-Trim2').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Edge-Trim2').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Edge-Trim2').innerHTML = value[10];
          
            //document.getElementById('BitMoto-LeaseTerm-Edge-Trim2').innerHTML = value[12];
          
            //document.getElementById('BitMoto-offer3Text-Edge-Trim2').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-edge-trim2 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-edge-trim2 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-edge-trim2 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-edge-trim2 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-edge-trim2 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-edge-trim2').style.display = "none";
            }
            
        });
    });
      
  }
    
  if(document.getElementById('bit-edge-trim3') !== null)  {
    
    var bitmoSheet = "Edge";
    var bitmoRow = "4";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
          
            document.getElementById('BitMoto-Year-Edge-Trim3').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Edge-Trim3').innerHTML = value[1];
            
            document.getElementById('BitMoto-leaseOffer-Edge-Trim3').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Edge-Trim3').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Edge-Trim3').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Edge-Trim3').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Edge-Trim3').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Edge-Trim3').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Edge-Trim3').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Edge-Trim3').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Edge-Trim3').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Edge-Trim3').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Edge-Trim3').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Edge-Trim3').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Edge-Trim3').innerHTML = value[10];
          
            //document.getElementById('BitMoto-LeaseTerm-Edge-Trim3').innerHTML = value[12];
          
            //document.getElementById('BitMoto-offer3Text-Edge-Trim3').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-edge-trim3 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-edge-trim3 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-edge-trim3 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-edge-trim3 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-edge-trim3 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-edge-trim3').style.display = "none";
            }
            
        });
    });
      
  }
  
  
  if(document.getElementById('bit-edge-trim4') !== null)  {
    
    var bitmoSheet = "Edge";
    var bitmoRow = "5";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
          
            document.getElementById('BitMoto-Year-Edge-Trim4').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Edge-Trim4').innerHTML = value[1];
            
            document.getElementById('BitMoto-leaseOffer-Edge-Trim4').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Edge-Trim4').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Edge-Trim4').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Edge-Trim4').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Edge-Trim4').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Edge-Trim4').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Edge-Trim4').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Edge-Trim4').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Edge-Trim4').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Edge-Trim4').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Edge-Trim4').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Edge-Trim4').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Edge-Trim4').innerHTML = value[10];
          
            //document.getElementById('BitMoto-LeaseTerm-Edge-Trim4').innerHTML = value[12];
          
            //document.getElementById('BitMoto-offer3Text-Edge-Trim4').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-edge-trim4 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-edge-trim4 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-edge-trim4 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-edge-trim4 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-edge-trim4 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-edge-trim4').style.display = "none";
            }
            
        });
    });
      
  }
  
  
  if(document.getElementById('bit-edge-trim5') !== null)  {
    
    var bitmoSheet = "Edge";
    var bitmoRow = "6";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
          
            document.getElementById('BitMoto-Year-Edge-Trim5').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Edge-Trim5').innerHTML = value[1];
            
            document.getElementById('BitMoto-leaseOffer-Edge-Trim5').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Edge-Trim5').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Edge-Trim5').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Edge-Trim5').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Edge-Trim5').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Edge-Trim5').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Edge-Trim5').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Edge-Trim5').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Edge-Trim5').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Edge-Trim5').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Edge-Trim5').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Edge-Trim5').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Edge-Trim5').innerHTML = value[10];
          
            //document.getElementById('BitMoto-LeaseTerm-Edge-Trim5').innerHTML = value[12];
          
            //document.getElementById('BitMoto-offer3Text-Edge-Trim5').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-edge-trim5 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-edge-trim5 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-edge-trim5 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-edge-trim5 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-edge-trim5 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-edge-trim5').style.display = "none";
            }
            
        });
    });
      
  }
// END - Edge Offers
  
// START - Focus Offers
  if(document.getElementById('bit-focus-trim1') !== null)  {
    
    var bitmoSheet = "Focus";
    var bitmoRow = "2";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
          
            document.getElementById('BitMoto-Year-Focus-Trim1').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Focus-Trim1').innerHTML = value[1];
            
            document.getElementById('BitMoto-leaseOffer-Focus-Trim1').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Focus-Trim1').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Focus-Trim1').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Focus-Trim1').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Focus-Trim1').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Focus-Trim1').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Focus-Trim1').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Focus-Trim1').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Focus-Trim1').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Focus-Trim1').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Focus-Trim1').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Focus-Trim1').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Focus-Trim1').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Focus-Trim1').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Focus-Trim1').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-focus-trim1 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-focus-trim1 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-focus-trim1 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-focus-trim1 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-focus-trim1 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-focus-trim1').style.display = "none";
            }
            
        });
    });
      
  }
  
  
  if(document.getElementById('bit-focus-trim2') !== null)  {
    
    var bitmoSheet = "Focus";
    var bitmoRow = "3";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
          
            document.getElementById('BitMoto-Year-Focus-Trim2').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Focus-Trim2').innerHTML = value[1];
            
            document.getElementById('BitMoto-leaseOffer-Focus-Trim2').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Focus-Trim2').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Focus-Trim2').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Focus-Trim2').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Focus-Trim2').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Focus-Trim2').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Focus-Trim2').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Focus-Trim2').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Focus-Trim2').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Focus-Trim2').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Focus-Trim2').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Focus-Trim2').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Focus-Trim2').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Focus-Trim2').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Focus-Trim2').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-focus-trim2 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-focus-trim2 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-focus-trim2 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-focus-trim2 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-focus-trim2 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-focus-trim2').style.display = "none";
            }
            
        });
    });
      
  }
  
  
  if(document.getElementById('bit-focus-trim3') !== null)  {
    
    var bitmoSheet = "Focus";
    var bitmoRow = "4";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
          
            document.getElementById('BitMoto-Year-Focus-Trim3').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Focus-Trim3').innerHTML = value[1];
            
            document.getElementById('BitMoto-leaseOffer-Focus-Trim3').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Focus-Trim3').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Focus-Trim3').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Focus-Trim3').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Focus-Trim3').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Focus-Trim3').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Focus-Trim3').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Focus-Trim3').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Focus-Trim3').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Focus-Trim3').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Focus-Trim3').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Focus-Trim3').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Focus-Trim3').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Focus-Trim3').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Focus-Trim3').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-focus-trim3 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-focus-trim3 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-focus-trim3 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-focus-trim3 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-focus-trim3 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-focus-trim3').style.display = "none";
            }
            
        });
    });
      
  }
  
  
  if(document.getElementById('bit-focus-trim4') !== null)  {
    
    var bitmoSheet = "Focus";
    var bitmoRow = "5";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
          
            document.getElementById('BitMoto-Year-Focus-Trim4').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Focus-Trim4').innerHTML = value[1];
            
            document.getElementById('BitMoto-leaseOffer-Focus-Trim4').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Focus-Trim4').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Focus-Trim4').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Focus-Trim4').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Focus-Trim4').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Focus-Trim4').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Focus-Trim4').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Focus-Trim4').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Focus-Trim4').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Focus-Trim4').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Focus-Trim4').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Focus-Trim4').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Focus-Trim4').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Focus-Trim4').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Focus-Trim4').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-focus-trim4 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-focus-trim4 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-focus-trim4 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-focus-trim4 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-focus-trim4 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-focus-trim4').style.display = "none";
            }
            
        });
    });
      
  }
  
  
  if(document.getElementById('bit-focus-trim5') !== null)  {
    
    var bitmoSheet = "Focus";
    var bitmoRow = "6";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
          
            document.getElementById('BitMoto-Year-Focus-Trim5').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Focus-Trim5').innerHTML = value[1];
            
            document.getElementById('BitMoto-leaseOffer-Focus-Trim5').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Focus-Trim5').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Focus-Trim5').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Focus-Trim5').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Focus-Trim5').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Focus-Trim5').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Focus-Trim5').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Focus-Trim5').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Focus-Trim5').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Focus-Trim5').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Focus-Trim5').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Focus-Trim5').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Focus-Trim5').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Focus-Trim5').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Focus-Trim5').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-focus-trim5 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-focus-trim5 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-focus-trim5 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-focus-trim5 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-focus-trim5 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-focus-trim5').style.display = "none";
            }
            
        });
    });
      
  }
  
// END - Focus Offers
 
// START - Escape Offers
  if(document.getElementById('bit-escape-trim1') !== null)  {
    
    var bitmoSheet = "Escape";
    var bitmoRow = "2";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
          
            document.getElementById('BitMoto-Year-Escape-Trim1').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Escape-Trim1').innerHTML = value[1];
            
            document.getElementById('BitMoto-leaseOffer-Escape-Trim1').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Escape-Trim1').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Escape-Trim1').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Escape-Trim1').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Escape-Trim1').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Escape-Trim1').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Escape-Trim1').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Escape-Trim1').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Escape-Trim1').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Escape-Trim1').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Escape-Trim1').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Escape-Trim1').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Escape-Trim1').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Escape-Trim1').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Escape-Trim1').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-escape-trim1 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-escape-trim1 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-escape-trim1 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-escape-trim1 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-escape-trim1 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-escape-trim1').style.display = "none";
            }
            
        });
    });
  }
  
  if(document.getElementById('bit-escape-trim2') !== null)  {
    
    var bitmoSheet = "Escape";
    var bitmoRow = "3";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
          
            document.getElementById('BitMoto-Year-Escape-Trim2').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Escape-Trim2').innerHTML = value[1];
            
            document.getElementById('BitMoto-leaseOffer-Escape-Trim2').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Escape-Trim2').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Escape-Trim2').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Escape-Trim2').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Escape-Trim2').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Escape-Trim2').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Escape-Trim2').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Escape-Trim2').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Escape-Trim2').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Escape-Trim2').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Escape-Trim2').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Escape-Trim2').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Escape-Trim2').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Escape-Trim2').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Escape-Trim2').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-escape-trim2 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-escape-trim2 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-escape-trim2 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-escape-trim2 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-escape-trim2 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-escape-trim2').style.display = "none";
            }
            
        });
    });
  }
    
  if(document.getElementById('bit-escape-trim3') !== null)  {
    
    var bitmoSheet = "Escape";
    var bitmoRow = "4";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
          
            document.getElementById('BitMoto-Year-Escape-Trim3').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Escape-Trim3').innerHTML = value[1];
            
            document.getElementById('BitMoto-leaseOffer-Escape-Trim3').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Escape-Trim3').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Escape-Trim3').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Escape-Trim3').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Escape-Trim3').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Escape-Trim3').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Escape-Trim3').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Escape-Trim3').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Escape-Trim3').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Escape-Trim3').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Escape-Trim3').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Escape-Trim3').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Escape-Trim3').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Escape-Trim3').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Escape-Trim3').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-escape-trim3 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-escape-trim3 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-escape-trim3 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-escape-trim3 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-escape-trim3 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-escape-trim3').style.display = "none";
            }
            
        });
    });
  }
    
  if(document.getElementById('bit-escape-trim4') !== null)  {
    
    var bitmoSheet = "Escape";
    var bitmoRow = "5";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
          
            document.getElementById('BitMoto-Year-Escape-Trim4').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Escape-Trim4').innerHTML = value[1];
            
            document.getElementById('BitMoto-leaseOffer-Escape-Trim4').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Escape-Trim4').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Escape-Trim4').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Escape-Trim4').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Escape-Trim4').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Escape-Trim4').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Escape-Trim4').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Escape-Trim4').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Escape-Trim4').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Escape-Trim4').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Escape-Trim4').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Escape-Trim4').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Escape-Trim4').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Escape-Trim4').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Escape-Trim4').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-escape-trim4 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-escape-trim4 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-escape-trim4 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-escape-trim4 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-escape-trim4 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-escape-trim4').style.display = "none";
            }
            
        });
    });
  }
 
  if(document.getElementById('bit-escape-trim5') !== null)  {
    
    var bitmoSheet = "Escape";
    var bitmoRow = "6";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
          
            document.getElementById('BitMoto-Year-Escape-Trim5').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Escape-Trim5').innerHTML = value[1];
            
            document.getElementById('BitMoto-leaseOffer-Escape-Trim5').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Escape-Trim5').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Escape-Trim5').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Escape-Trim5').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Escape-Trim5').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Escape-Trim5').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Escape-Trim5').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Escape-Trim5').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Escape-Trim5').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Escape-Trim5').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Escape-Trim5').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Escape-Trim5').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Escape-Trim5').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Escape-Trim5').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Escape-Trim5').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-escape-trim5 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-escape-trim5 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-escape-trim5 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-escape-trim5 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-escape-trim5 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-escape-trim5').style.display = "none";
            }
            
        });
    });
      
  }
// END - Escape Offers

// START - Explorer Offers
  if(document.getElementById('bit-explorer-trim1') !== null)  {
    
    var bitmoSheet = "Explorer";
    var bitmoRow = "2";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
          
            document.getElementById('BitMoto-Year-Explorer-Trim1').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Explorer-Trim1').innerHTML = value[1];
            
            document.getElementById('BitMoto-leaseOffer-Explorer-Trim1').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Explorer-Trim1').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Explorer-Trim1').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Explorer-Trim1').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Explorer-Trim1').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Explorer-Trim1').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Explorer-Trim1').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Explorer-Trim1').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Explorer-Trim1').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Explorer-Trim1').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Explorer-Trim1').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Explorer-Trim1').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Explorer-Trim1').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Explorer-Trim1').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Explorer-Trim1').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-explorer-trim1 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-explorer-trim1 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-explorer-trim1 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-explorer-trim1 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-explorer-trim1 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-explorer-trim1').style.display = "none";
            }
            
        });
    });
      
  }
  
  if(document.getElementById('bit-explorer-trim2') !== null)  {
    
    var bitmoSheet = "Explorer";
    var bitmoRow = "3";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
          
            document.getElementById('BitMoto-Year-Explorer-Trim2').innerHTML = value[0];
            document.getElementById('BitMoto-Trim-Explorer-Trim2').innerHTML = value[1];
            
            document.getElementById('BitMoto-leaseOffer-Explorer-Trim2').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-Explorer-Trim2').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-Explorer-Trim2').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-Explorer-Trim2').innerHTML = value[5];
            document.getElementById('BitMoto-plusCash-Explorer-Trim2').innerHTML = value[6];
            
            document.getElementById('BitMoto-buyFor-Explorer-Trim2').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton1-Explorer-Trim2').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-Explorer-Trim2').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-Explorer-Trim2').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-Explorer-Trim2').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-Explorer-Trim2').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-Explorer-Trim2').href = value[9];
          
            document.getElementById('BitMoto-disclaimer-Explorer-Trim2').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Explorer-Trim2').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Explorer-Trim2').innerHTML = value[13];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-explorer-trim2 #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[plusCash] === "" || value[plusCash] === undefined) {
                document.querySelector('#bit-explorer-trim2 #BitMoto-plusCash').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#bit-explorer-trim2 .BitMoto-Offer span:nth-of-type(3)').style.display = "none";
                document.querySelector('#bit-explorer-trim2 #BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#bit-explorer-trim2 .BitMoto-Offer>sup').style.display = "none";
            }
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-explorer-trim2').style.display = "none";
            }
            
        });
    });
      
  }
  
if(document.getElementById('bit-explorer-trim3') !== null)  {
    
    var bitmoSheet = "Explorer";
    var bitmoRow = "4";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
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
          
            document.getElementById('BitMoto-disclaimer-Explorer-Trim3').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Explorer-Trim3').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Explorer-Trim3').innerHTML = value[13];
            
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
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-explorer-trim3').style.display = "none";
            }
            
        });
    });
      
  }
  
  if(document.getElementById('bit-explorer-trim4') !== null)  {
    
    var bitmoSheet = "Explorer";
    var bitmoRow = "5";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
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
          
            document.getElementById('BitMoto-disclaimer-Explorer-Trim4').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Explorer-Trim4').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Explorer-Trim4').innerHTML = value[13];
            
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
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-explorer-trim4').style.display = "none";
            }
            
        });
    });
      
  }
  
if(document.getElementById('bit-explorer-trim5') !== null)  {
    
    var bitmoSheet = "Explorer";
    var bitmoRow = "6";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":N"+bitmoRow;
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
          
            document.getElementById('BitMoto-disclaimer-Explorer-Trim5').innerHTML = value[10];
          
            document.getElementById('BitMoto-LeaseTerm-Explorer-Trim5').innerHTML = value[12];
          
            document.getElementById('BitMoto-offer3Text-Explorer-Trim5').innerHTML = value[13];
            
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
          
            if(value[show] === "FALSE") {
                document.getElementById('bit-explorer-trim5').style.display = "none";
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
