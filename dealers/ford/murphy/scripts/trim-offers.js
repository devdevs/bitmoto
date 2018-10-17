

// START - INITIATE SHEETS API
var key = "AIzaSyBtj9Bs0ue2TA6PIMbIh5lfFPnPhn-w058";
var spreadsheet = spreadsheet;
// END - INITIATE SHEETS API

var mYear;
var model;
var trimName;
var trimRow;


var year = 0;   var trim = 1;   var leaseOffer = 2;    var DAS = 3;    var APR = 4;
var termLength = 5; var plusCash = 6; var buyFor = 7; var claimOfferText = 8;   var claimOfferLink  = 9;
var disclaimer = 10;


console.log(spreadsheet);

function trimOffer() {
// sample URL =
// https://sheets.googleapis.com/v4/spreadsheets/1ifxFfj99eGi017xJVKlh99XWLH4SDChl2oefqh2hbeg/values/Fusion!A3:K3?key=AIzaSyBtj9Bs0ue2TA6PIMbIh5lfFPnPhn-w058
    
if(document.getElementById('bit-2018-fusion-se') !== null)  {
    
    var bitSheet = "Fusion";
    var bitRow = "3";
    var bitRange = bitSheet+"!A"+bitRow+":K"+bitRow;
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+bitRange+"?key="+key;
    
    console.log(URL);
    
    $.getJSON(URL, function(data) {
        $.each(data.values, function(index,value) {
            
            document.getElementById('BitMoto-leaseOffer').innerHTML = value[2];
            document.getElementById('BitMoto-termLength').innerHTML = value[5];
            
            document.getElementById('BitMoto-APR').innerHTML = value[4];
            document.getElementById('BitMoto-termLength').innerHTML = value[55];
            
            document.getElementById('BitMoto-buyFor').innerHTML = value[7];
            
            document.getElementById('BitMoto-claimButton').innerHTML = value[8];
            document.getElementById('BitMoto-claimButton').href = value[9];
            
        });
    });

}

    
}


trimOffer();
