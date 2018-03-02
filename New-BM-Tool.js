// START - DECLARE GLOBAL VARIABLES

var model; var dealer;

if(document.domain == "www.strunkmarketing.com"){ dealer = "3"; }
if(document.domain == "www.haldemanfordkutztown.com"){ dealer = "3"; }
if(document.domain == "www.haldemanfordallentown.com"){ dealer = "4"; }
if(document.domain == "www.haldemanfordhamilton.com"){ dealer = "5"; }
if(document.domain == "www.haldemandirect.com"){ dealer = "6"; }
if(document.domain == "www.dunphyford.com"){ dealer = "7"; }
if(document.domain == "www.millerford.com"){ dealer = "8"; }
if(document.domain == "www.gilboyford.com"){ dealer = "9"; }
if(document.domain == "www.sloanford.com"){ dealer = "10"; }
if(document.domain == "www.cocciaford.com"){ dealer = "11"; }
if(document.domain == "www.carman-ford.com"){ dealer = "12"; }

if(document.URL.indexOf("ford-focus") >= 0){ model = "Focus"; }
if(document.URL.indexOf("ford-fusion") >= 0){ model = "Fusion"; }
if(document.URL.indexOf("ford-escape") >= 0){ model = "Escape"; }
if(document.URL.indexOf("ford-explorer") >= 0){ model = "Explorer"; }
if(document.URL.indexOf("ford-f150") >= 0){ model = "F150"; }
if(document.URL.indexOf("ford-edge") >= 0){ model = "Edge"; }
if(document.URL.indexOf("ford-ecosport") >= 0){ model = "EcoSport"; }
if(document.URL.indexOf("bitmoto") >= 0){ model = "Escape"; }

var client = 0;	var MSRP = 1;	var TopBannerImageURL = 2;	var TopBannerLinkURL = 3;	var Lease = 4;	var PayType = 5;	var DASDown = 6;	var DASDownText = 7;
var APR = 8;	var Term = 9;	var Savings = 10;	var BuyFor = 11;	var PlusOfferValue = 12;	var PlusOfferText = 13;
var VideoURL = 14;	var Disclaimer = 15;	var PurchasePayment = 17;

// END - DECLARE GLOBAL VARIABLES


// START - INITIATE SHEETS API
var key = "AIzaSyCKiEA8juf2bF99YKYANOJMH9FHCbwlD30";
var spreadsheet = "1txaR1PBvsV4yQmCS3LhevWJm6SuLAUFf4iC7_uxiq0g";
// END - INITIATE SHEETS API


var regionalRange = model+"!A2:Q2";
var regionalURL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+regionalRange+"?key="+key;
var dealerRange = model+"!A"+dealer+":Q"+dealer;
var dealerURL = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+dealerRange+"?key="+key;


// START - DEALER SPECIFIC INFORMATION

function DealerInfo() {

var range = "General!A"+dealer+":P"+dealer+"";
var url = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheet+"/values/"+range+"?key="+key;

$.getJSON(url, function(data) {
    $.each(data.values, function(index,value) {
    
	if(document.querySelector('#BitMoto-Phone') !== null)  { document.getElementById('BitMoto-Phone').innerHTML = value[1]; }
	
    });
});

}

// END - DEALER SPECIFIC INFORMATION





// START - DEALER SPECIFIC VEHICLE PRICING

function DealerPricing() {

$.getJSON(dealerURL, function(data) {
    $.each(data.values, function(index,value) {
    
	if(document.getElementById('BitMoto-FordCurrentSaleSmallBanner') !== null)  {
		if (value[TopBannerImageURL] !== "" && value[TopBannerImageURL] !== undefined) { document.getElementById('BitMoto-FordCurrentSaleSmallBanner').src = value[TopBannerImageURL]; }
		else {
			$.getJSON(regionalURL, function(data) {
				$.each(data.values, function(index,value) {
					document.getElementById('BitMoto-FordCurrentSaleSmallBanner').src = value[TopBannerImageURL];
				});
			});
		}
	}
    
	if(document.querySelector('#BitMoto-Ford'+model+'Lease') !== null)  { 
		if (value[Lease] !== "" && value[Lease] !== undefined) { document.getElementById('BitMoto-Ford'+model+'Lease').innerHTML = value[Lease]; }
		else {
			$.getJSON(regionalURL, function(data) {
				$.each(data.values, function(index,value) {
					document.getElementById('BitMoto-Ford'+model+'Lease').innerHTML = value[Lease];
				});
			});
		}
	}
	
	if(document.querySelector('#BitMoto-Ford'+model+'DAS') !== null)  {
		if (value[DASDown] !== "" && value[DASDown] !== undefined) { document.getElementById('BitMoto-Ford'+model+'DAS').innerHTML = value[DASDown]; }
		else {
			$.getJSON(regionalURL, function(data) {
				$.each(data.values, function(index,value) {
					document.getElementById('BitMoto-Ford'+model+'DAS').innerHTML = value[DASDown];
				});
			});
		}
	}
	
	if(document.querySelector('#BitMoto-DASDownText') !== null)  {
		if (value[DASDownText] !== "" && value[DASDownText] !== undefined) { document.getElementById('BitMoto-DASDownText').innerHTML = value[DASDownText]; }
		else {
			$.getJSON(regionalURL, function(data) {
				$.each(data.values, function(index,value) {
					document.getElementById('BitMoto-DASDownText').innerHTML = value[DASDownText];
				});
			});
		}
	}
	
	if(document.querySelector('#BitMoto-Ford'+model+'APR') !== null)  {
		if (value[APR] !== "" && value[APR] !== undefined) { document.getElementById('BitMoto-Ford'+model+'APR').innerHTML = value[APR]; }
		else {
			$.getJSON(regionalURL, function(data) {
				$.each(data.values, function(index,value) {
					document.getElementById('BitMoto-Ford'+model+'APR').innerHTML = value[APR];
				});
			});
		}
	}
	
	if(document.querySelector('#BitMoto-Ford'+model+'Term') !== null)  {
		if (value[Term] !== "" && value[Term] !== undefined) { document.getElementById('BitMoto-Ford'+model+'Term').innerHTML = value[Term]; }
		else {
			$.getJSON(regionalURL, function(data) {
				$.each(data.values, function(index,value) {
					document.getElementById('BitMoto-Ford'+model+'Term').innerHTML = value[Term];
				});
			});
		}
	}
	
	if(document.querySelector('#BitMoto-Ford'+model+'MSRP') !== null)  {
		if (value[MSRP] !== "" && value[MSRP] !== undefined) { document.getElementById('BitMoto-Ford'+model+'MSRP').innerHTML = value[MSRP]; }
		else {
			$.getJSON(regionalURL, function(data) {
				$.each(data.values, function(index,value) {
					document.getElementById('BitMoto-Ford'+model+'MSRP').innerHTML = value[MSRP];
				});
			});
		}
	}
	
	if(document.querySelector('#BitMoto-Ford'+model+'BuyFor') !== null)  {
		if (value[BuyFor] !== "" && value[BuyFor] !== undefined) { document.getElementById('BitMoto-Ford'+model+'BuyFor').innerHTML = value[BuyFor]; }
		else {
			$.getJSON(regionalURL, function(data) {
				$.each(data.values, function(index,value) {
					document.getElementById('BitMoto-Ford'+model+'BuyFor').innerHTML = value[BuyFor];
				});
			});
		}
	}
	
	if(document.querySelector('#BitMoto-Ford'+model+'Cash') !== null)  {
		if (value[PlusOfferValue] !== "" && value[PlusOfferValue] !== undefined) { document.getElementById('BitMoto-Ford'+model+'Cash').innerHTML = value[PlusOfferValue]; }
		else {
			$.getJSON(regionalURL, function(data) {
				$.each(data.values, function(index,value) {
					document.getElementById('BitMoto-Ford'+model+'Cash').innerHTML = value[PlusOfferValue];
				});
			});
		}
	}
	
	if(document.getElementById('BitMoto-FordCurrentSaleURL') !== null)  {
		if (value[TopBannerLinkURL] !== "" && value[TopBannerLinkURL] !== undefined) { document.getElementById('BitMoto-FordCurrentSaleURL').href = value[TopBannerLinkURL]; }
		else {
			$.getJSON(regionalURL, function(data) {
				$.each(data.values, function(index,value) {
					document.getElementById('BitMoto-FordCurrentSaleURL').href = value[TopBannerLinkURL];
				});
			});
		}
	}
	
	if(document.getElementById('BitMoto-'+model+'Video') !== null) {
		if (value[VideoURL] !== "" && value[VideoURL] !== undefined) { document.getElementById('BitMoto-'+model+'Video').src = value[VideoURL]; }
		else {
			$.getJSON(regionalURL, function(data) {
				$.each(data.values, function(index,value) {
					document.getElementById('BitMoto-'+model+'Video').src = value[VideoURL];
				});
			});
		}
	}
	
	if(document.getElementById('BitMoto-Disclaimer') !== null)  {
		if (value[Disclaimer] !== "" && value[Disclaimer] !== undefined) { document.getElementById('BitMoto-Disclaimer').innerHTML = value[Disclaimer]; }
		else {
			$.getJSON(regionalURL, function(data) {
				$.each(data.values, function(index,value) {
					document.getElementById('BitMoto-Disclaimer').innerHTML = value[Disclaimer];
				});
			});
		}
	}
	
    });
});

}

// END - DEALER SPECIFIC VEHICLE PRICING


// DealerInfo();
DealerPricing();
