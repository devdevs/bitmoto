// START - DECLARE GLOBAL VARIABLES

if(document.domain == "www.strunkmarketing.com"){ var dealer = "3"; }
if(document.domain == "www.haldemanfordallentown.com"){ var dealer = "4"; }
if(document.domain == "www.dunphyford.com"){ var dealer = "4"; }


if(document.URL.indexOf("ford-focus") >= 0){ var model = "Focus"; }
if(document.URL.indexOf("ford-fusion") >= 0){ var model = "Fusion"; }
if(document.URL.indexOf("strunk") >= 0){ var model = "Escape"; }
if(document.URL.indexOf("ford-explorer") >= 0){ var model = "Explorer"; }
if(document.URL.indexOf("ford-f150") >= 0){ var model = "F150"; }
if(document.URL.indexOf("ford-edge") >= 0){ var model = "Edge"; }

var client = 0;	var MSRP = 1;	var TopBannerImageURL = 2;	var TopBannerLinkURL = 3;	var Lease = 4;	var DASDown = 5;	var DASDownText = 6;
var APR = 7;	var Term = 8;	var Savings = 9;	var Buy = 10;	var PercentOff = 11;	var PlusOfferValue = 12;	var PlusOfferText = 13;
var VideoURL = 14;	var Disclaimer = 15;	var PurchasePayment = 16;

// END - DECLARE GLOBAL VARIABLES


// START - INITIATE SHEETS API

var key = "AIzaSyACaxHms14sZ_kTkkmH8pJPRHqpBN5qa48";
var spreedsheet = "1txaR1PBvsV4yQmCS3LhevWJm6SuLAUFf4iC7_uxiq0g";

// END - INITIATE SHEETS API


// START - DEALER SPECIFIC VEHICLE PRICING

var range = ""+model+"!A"+dealer+":P"+dealer+"";
var url = "https://sheets.googleapis.com/v4/spreadsheets/"+spreedsheet+"/values/"+range+"?key="+key;

$.getJSON(url, function(data) {
    $.each(data.values, function(index,value) {
	if(document.querySelector('#BitMoto-Ford'+model+'Lease') !== null)  { document.getElementById('BitMoto-Ford'+model+'Lease').innerHTML = value[Lease]; }
	if(document.querySelector('#BitMoto-Ford'+model+'MSRP') !== null)  { document.getElementById('BitMoto-Ford'+model+'MSRP').innerHTML = value[MSRP]; }
	if(document.querySelector('#BitMoto-Ford'+model+'DAS') !== null)  { document.getElementById('BitMoto-Ford'+model+'DAS').innerHTML = value[DASDown]; }
	if(document.querySelector('#BitMoto-DASDownText') !== null)  { document.getElementById('BitMoto-DASDownText').innerHTML = value[DASDownText]; }
	if(document.querySelector('#BitMoto-Ford'+model+'APR') !== null)  { document.getElementById('BitMoto-Ford'+model+'APR').innerHTML = value[APR]; }
	if(document.querySelector('#BitMoto-Ford'+model+'Term') !== null)  { document.getElementById('BitMoto-Ford'+model+'Term').innerHTML = value[Term]; }
	if(document.getElementById('BitMoto-FordCurrentSaleSmallBanner') !== null)  { document.getElementById('BitMoto-FordCurrentSaleSmallBanner').src = value[TopBannerImageURL]; }
	if(document.getElementById('BitMoto-FordCurrentSaleURL') !== null)  { document.getElementById('BitMoto-FordCurrentSaleURL').href = value[TopBannerLinkURL]; }
	if(document.getElementById('BitMoto-Video') !== null) { document.getElementById('BitMoto-Video').src = value[PlusOfferText]; }
    });
});




// END - DEALER SPECIFIC VEHICLE PRICING


// START - DEALER SPECIFIC INFORMATION

var range = "A"+dealer+":P"+dealer+"";
var url = "https://sheets.googleapis.com/v4/spreadsheets/"+spreedsheet+"/values/"+range+"?key="+key;

$.getJSON(url, function(data) {
    $.each(data.values, function(index,value) {
	if(document.querySelector('#BitMoto-Phone') !== null)  { document.getElementById('BitMoto-Phone').innerHTML = value[1]; }
    });
});

// END - DEALER SPECIFIC INFORMATION


// START - MANUFACTURER LEVEL VEHICLE PRICING (will use manufacturer values if dealer-specific values are blank)

function OEMdefaults () {

var range = ""+model+"!A2:P2";
var url = "https://sheets.googleapis.com/v4/spreadsheets/"+spreedsheet+"/values/"+range+"?key="+key;

$.getJSON(url, function(data) {
    $.each(data.values, function(index,value) {
	if(document.querySelector('#BitMoto-Ford'+model+'Lease') !== null)  {
		if( document.getElementById('BitMoto-Ford'+model+'Lease').innerHTML == "") {
			document.getElementById('BitMoto-Ford'+model+'Lease').innerHTML = value[4];
		}
	}
	if(document.querySelector('#BitMoto-Ford'+model+'DAS') !== null)  {
		if( document.getElementById('BitMoto-Ford'+model+'DAS').innerHTML == "") {
			document.getElementById('BitMoto-Ford'+model+'DAS').innerHTML = value[5];
		}
	}
	if(document.querySelector('#BitMoto-Ford'+model+'MSRP') !== null)  {
		if( document.getElementById('BitMoto-Ford'+model+'MSRP').innerHTML == "") {
			document.getElementById('BitMoto-Ford'+model+'MSRP').innerHTML = value[1];
		}
	}
	if(document.querySelector('#BitMoto-DASDownText') !== null)  {
		if( document.getElementById('BitMoto-DASDownText').innerHTML == "") {
			document.getElementById('BitMoto-DASDownText').innerHTML = value[6];
		}
	}
	if(document.querySelector('#BitMoto-Ford'+model+'APR') !== null)  {
		if( document.getElementById('BitMoto-Ford'+model+'APR').innerHTML == "") {
			document.getElementById('BitMoto-Ford'+model+'APR').innerHTML = value[7];
		}
	}
    });
});

}

window.onload = OEMdefaults;

// END - MANUFACTURER LEVEL VEHICLE PRICING
