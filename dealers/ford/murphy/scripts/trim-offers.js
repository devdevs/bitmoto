
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
            
            document.getElementById('BitMoto-claimButton1-2018FusionSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018FusionSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018FusionSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018FusionSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018FusionSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018FusionSE').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2019-fusion-se #BitMoto-Offer3').style.display = "none";
            }
          
            if(value[DAS] === "" || value[DAS] === undefined) {
                document.querySelector('#BitMoto-Offer1 span:nth-of-type(3)').style.display = "none";
                document.querySelector('#BitMoto-PaymentTerm').style.display = "none";
                document.querySelector('#BitMoto-Offer1 sup').style.display = "none";
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
            
            document.getElementById('BitMoto-claimButton1-2019FusionFWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2019FusionFWDSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2019FusionFWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2019FusionFWDSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2019FusionFWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2019FusionFWDSE').href = value[9];
            
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
            
            document.getElementById('BitMoto-claimButton1-2019FusionHybridSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2019FusionHybridSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2019FusionHybridSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2019FusionHybridSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2019FusionHybridSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2019FusionHybridSE').href = value[9];
            
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
            
            document.getElementById('BitMoto-claimButton1-2018EscapeFWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018EscapeFWDSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018EscapeFWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018EscapeFWDSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018EscapeFWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018EscapeFWDSE').href = value[9];
            
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
            
            document.getElementById('BitMoto-claimButton1-2018EscapeAWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton1-2018EscapeAWDSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton2-2018EscapeAWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton2-2018EscapeAWDSE').href = value[9];
          
            document.getElementById('BitMoto-claimButton3-2018EscapeAWDSE').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton3-2018EscapeAWDSE').href = value[9];
            
            if(value[buyFor] === "" || value[buyFor] === undefined) {
                document.querySelector('#bit-2018-escape-awdse #BitMoto-Offer3').style.display = "none";
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
            
        });
    });
      
  }
// END - F150 Offers

    
}


trimOffer();
