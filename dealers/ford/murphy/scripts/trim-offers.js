
// START - INITIATE SHEETS API
var key = "AIzaSyBtj9Bs0ue2TA6PIMbIh5lfFPnPhn-w058";
// END - INITIATE SHEETS API

var year = 0;   var trim = 1;   var leaseOffer = 2;    var DAS = 3;    var APR = 4;
var termLength = 5; var plusCash = 6; var buyFor = 7; var claimOfferText = 8;   var claimOfferLink  = 9;
var disclaimer = 10;



function trimOffer() {
// sample URL =
// https://sheets.googleapis.com/v4/spreadsheets/1ifxFfj99eGi017xJVKlh99XWLH4SDChl2oefqh2hbeg/values/Fusion!A3:K3?key=AIzaSyBtj9Bs0ue2TA6PIMbIh5lfFPnPhn-w058

// START - Fusion Offers
  if(document.getElementById('bit-2018-fusion-se') !== null)  {
    
    var bitmoSheet = "Fusion";
    var bitmoRow = "3";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2018FusionSE').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2018FusionSE').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2018FusionSE').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2018FusionSE').innerHTML = value[5];
            
            document.getElementById('BitMoto-buyFor-2018FusionSE').innerHTML = value[7];
            
            //document.getElementById('BitMoto-claimButton-2018FusionSE').innerHTML = value[8];
            //document.getElementById('BitMoto-claimButton-2018FusionSE').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2019-fusion-se #BitMoto-Offer3').style.display = "none";
            }
            
        });
    });
  }
    
  if(document.getElementById('bit-2019-fusion-fwdse') !== null)  {
    
    var bitmoSheet = "Fusion";
    var bitmoRow = "4";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2019FusionFWDSE').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2019FusionFWDSE').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2019FusionFWDSE').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2019FusionFWDSE').innerHTML = value[5];
            
            document.getElementById('BitMoto-buyFor-2019FusionFWDSE').innerHTML = value[7];
            
            //document.getElementById('BitMoto-claimButton-2019FusionFWDSE').innerHTML = value[8];
            //document.getElementById('BitMoto-claimButton-2019FusionFWDSE').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2019-fusion-fwdse #BitMoto-Offer3').style.display = "none";
            }
            
        });
    });
      
  }
    
  if(document.getElementById('bit-2019-fusion-hybridse') !== null)  {
    
    var bitmoSheet = "Fusion";
    var bitmoRow = "5";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer-2019FusionHybridSE').innerHTML = value[2];
            document.getElementById('BitMoto-DAS-2019FusionHybridSE').innerHTML = value[3];
            
            document.getElementById('BitMoto-APR-2019FusionHybridSE').innerHTML = value[4];
            document.getElementById('BitMoto-termLength-2019FusionHybridSE').innerHTML = value[5];
            
            document.getElementById('BitMoto-buyFor-2019FusionHybridSE').innerHTML = value[7];
            
            //document.getElementById('BitMoto-claimButton-2019FusionHybridSE').innerHTML = value[8];
            //document.getElementById('BitMoto-claimButton-2019FusionHybridSE').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2019-fusion-hybridse #BitMoto-Offer3').style.display = "none";
            }
            
        });
    });
      
  }
// END - Fusion Offers
 
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
            
            document.getElementById('BitMoto-buyFor-2018EscapeFWDSE').innerHTML = value[7];
            
            //document.getElementById('BitMoto-claimButton-2018EscapeFWDSE').innerHTML = value[8];
            //document.getElementById('BitMoto-claimButton-2018EscapeFWDSE').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-escape-fwdse #BitMoto-Offer3').style.display = "none";
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
            
            document.getElementById('BitMoto-buyFor-2018EscapeAWDSE').innerHTML = value[7];
            
            //document.getElementById('BitMoto-claimButton-2018EscapeAWDSE').innerHTML = value[8];
            //document.getElementById('BitMoto-claimButton-2018EscapeAWDSE').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-escape-awdse #BitMoto-Offer3').style.display = "none";
            }
            
        });
    });
      
  }
// END - Escape Offers

    
}


trimOffer();
