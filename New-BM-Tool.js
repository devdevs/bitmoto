// START - DECLARE GLOBAL VARIABLES

if(document.domain == "www.strunkmarketing.com"){ var dealer = "3"; }
if(document.domain == "www.haldemanfordallentown.com"){ var dealer = "4"; }
if(document.domain == "www.dunphyford.com"){ var dealer = "7"; }

if(document.URL.indexOf("ford-focus") >= 0){ var model = "Focus"; }
if(document.URL.indexOf("ford-fusion") >= 0){ var model = "Fusion"; }
if(document.URL.indexOf("ford-escape") >= 0){ var model = "Escape"; }
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



// START - DEALER SPECIFIC INFORMATION

function DealerInfo() {

var range = "A"+dealer+":P"+dealer+"";
var url = "https://sheets.googleapis.com/v4/spreadsheets/"+spreedsheet+"/values/"+range+"?key="+key;

$.getJSON(url, function(data) {
    $.each(data.values, function(index,value) {
    
	if(document.querySelector('#BitMoto-Phone') !== null)  { document.getElementById('BitMoto-Phone').innerHTML = value[1]; }
	
    });
});

}

// END - DEALER SPECIFIC INFORMATION



// START - MANUFACTURER LEVEL VEHICLE PRICING (will use manufacturer values if dealer-specific values are blank)

function ManufacturerPricing() {

var range = model+"!A2:Q2";
var url = "https://sheets.googleapis.com/v4/spreadsheets/"+spreedsheet+"/values/"+range+"?key="+key;

$.getJSON(url, function(data) {
    $.each(data.values, function(index,value) {
   
	if(document.querySelector('#BitMoto-Ford'+model+'Lease') !== null)  {
		document.getElementById('BitMoto-Ford'+model+'Lease').innerHTML = value[Lease];
	}
	if(document.querySelector('#BitMoto-Ford'+model+'DAS') !== null)  {
		document.getElementById('BitMoto-Ford'+model+'DAS').innerHTML = value[DASDown];
	}
	if(document.querySelector('#BitMoto-Ford'+model+'MSRP') !== null)  {
		document.getElementById('BitMoto-Ford'+model+'MSRP').innerHTML = value[MSRP];
	}
	if(document.querySelector('#BitMoto-DASDownText') !== null)  {
		//if( document.getElementById('BitMoto-DASDownText').innerHTML == "") {
			document.getElementById('BitMoto-DASDownText').innerHTML = value[DASDownText];
		//}
	}
	if(document.querySelector('#BitMoto-Ford'+model+'APR') !== null)  {
		//if( document.getElementById('BitMoto-Ford'+model+'APR').innerHTML == "") {
			document.getElementById('BitMoto-Ford'+model+'APR').innerHTML = value[APR];
		//}
	}
	if(document.querySelector('#BitMoto-Ford'+model+'Months') !== null)  {
		if( document.getElementById('BitMoto-Ford'+model+'Months').innerHTML == "") {
			document.getElementById('BitMoto-Ford'+model+'Months').innerHTML = value[Term];
		}
	}
	if(document.querySelector('#BitMoto-'+model+'Video') !== null)  {
			document.getElementById('BitMoto-'+model+'Video').src = value[VideoURL];
	}
    });
});

}

// END - MANUFACTURER LEVEL VEHICLE PRICING






// START - DEALER SPECIFIC VEHICLE PRICING

function DealerPricing() {

var range = model+"!A"+dealer+":Q"+dealer;
var url = "https://sheets.googleapis.com/v4/spreadsheets/"+spreedsheet+"/values/"+range+"?key="+key;

$.getJSON(url, function(data) {
    $.each(data.values, function(index,value) {
    
	if(document.querySelector('#BitMoto-Ford'+model+'Lease') !== null)  { 
		if (value[Lease] !== "" && value[Lease] !== undefined) { document.getElementById('BitMoto-Ford'+model+'Lease').innerHTML = value[Lease]; }
	}
	
	if(document.querySelector('#BitMoto-Ford'+model+'MSRP') !== null)  {
		if (value[MSRP] !== "" && value[MSRP] !== undefined) { document.getElementById('BitMoto-Ford'+model+'MSRP').innerHTML = value[MSRP]; }
	}
	
	if(document.querySelector('#BitMoto-Ford'+model+'DAS') !== null)  {
		if (value[DASDown] !== "" && value[DASDown] !== undefined) { document.getElementById('BitMoto-Ford'+model+'DAS').innerHTML = value[DASDown]; }
	}
	
	if(document.querySelector('#BitMoto-DASDownText') !== null)  {
		if (value[DASDownText] !== "" && value[DASDownText] !== undefined) { document.getElementById('BitMoto-DASDownText').innerHTML = value[DASDownText]; }
	}
	
	if(document.querySelector('#BitMoto-Ford'+model+'APR') !== null)  {
		if (value[APR] !== "" && value[APR] !== undefined) { document.getElementById('BitMoto-Ford'+model+'APR').innerHTML = value[APR]; }
	}
	
	if(document.querySelector('#BitMoto-Ford'+model+'Months') !== null)  {
		if (value[Term] !== "" && value[Term] !== undefined) { document.getElementById('BitMoto-Ford'+model+'Months').innerHTML = value[Term]; }
	}
	
	if(document.getElementById('BitMoto-FordCurrentSaleSmallBanner') !== null)  {
		if (value[TopBannerImageURL] !== "" && value[TopBannerImageURL] !== undefined) { document.getElementById('BitMoto-FordCurrentSaleSmallBanner').src = value[TopBannerImageURL]; }
	}
	
	if(document.getElementById('BitMoto-FordCurrentSaleURL') !== null)  { document.getElementById('BitMoto-FordCurrentSaleURL').href = value[TopBannerLinkURL]; }
	//if(document.getElementById('BitMoto-'+model+'Video') !== null) { document.getElementById('BitMoto-'+Model+'Video').src = value[VideoURL]; }
    });
});

}

// END - DEALER SPECIFIC VEHICLE PRICING


ManufacturerPricing();
DealerInfo();
DealerPricing();
window.onload = DealerPricing();
setTimeout(DealerPricing,2000);
setTimeout(DealerPricing,6000);
