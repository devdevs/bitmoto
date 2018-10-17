
// START - INITIATE SHEETS API
var key = "AIzaSyBtj9Bs0ue2TA6PIMbIh5lfFPnPhn-w058";
// END - INITIATE SHEETS API

var year = 0;   var trim = 1;   var leaseOffer = 2;    var DAS = 3;    var APR = 4;
var termLength = 5; var plusCash = 6; var buyFor = 7; var claimOfferText = 8;   var claimOfferLink  = 9;
var disclaimer = 10;

console.log(spreadsheet);


function trimOffer() {
// sample URL =
// https://sheets.googleapis.com/v4/spreadsheets/1ifxFfj99eGi017xJVKlh99XWLH4SDChl2oefqh2hbeg/values/Fusion!A3:K3?key=AIzaSyBtj9Bs0ue2TA6PIMbIh5lfFPnPhn-w058
    
if(document.getElementById('bit-2018-fusion-se') !== null)  {
    
    var bitmoSheet = "Fusion";
    var bitmoRow = "3";
    var bitmoRange = bitmoSheet+"!A"+bitmoRow+":K"+bitmoRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitmoRange+"?key="+key;
    
    console.log(URL);
    
    jQuery.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer').innerHTML = value[2];
            
            //document.getElementById('BitMoto-APR').innerHTML = value[4];
            //document.getElementById('BitMoto-termLength').innerHTML = value[5];
            
            //document.getElementById('BitMoto-buyFor').innerHTML = value[7];
            
            //document.getElementById('BitMoto-claimButton').innerHTML = value[8];
            //document.getElementById('BitMoto-claimButton').href = value[9];
            
        });
    });

}

    
}


trimOffer();
