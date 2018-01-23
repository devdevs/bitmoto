// Devs JS for Bitmoto Clients

// Outten | Carman | Coccia | Pacifico | Gilboy | Sloan | Dunphy | Miller
// Haldeman | Premier




// Outten Kia Hamburg
if(document.domain == "www.outtenkia.com"){
  
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5PSBRB3');

document.getElementsByClassName('form-button').onclick = function() { ga(send, event, button, click) };

}



// Coccia Ford Wilkes-Barre
if(document.domain == "www.cocciaford.com"){
  
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5HPQ7JJ');
	
ga('create', 'UA-91134803-1', 'auto');

}



// Carman Fiat New Castle
if(document.domain == "www.fiatusaofnewcastle.com"){
  
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TBRFV48');

}


// Carman Lincoln New Castle
if(document.domain == "www.carmanlincoln.com"){

var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://storage.googleapis.com/bitmoto/bitmoto.css';
    link.media = 'all';
    head.appendChild(link);
}
  
}


// Premier Lincoln Brooklyn
if(document.domain == "www.premierlincolnbrooklyn.com"){

ga('create', 'UA-108569800-1', 'auto');

}




// START - Ford Vehicles

	if(document.querySelector('#BitMoto-FordEscapeLease') !== null)  { document.getElementById('BitMoto-FordEscapeLease').innerHTML = '199'; }
	if(document.querySelector('#BitMoto-FordEscapeDAS') !== null)  { document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '2599'; }
	if(document.querySelector('#BitMoto-FordEscapeMonths') !== null)  { document.getElementById('BitMoto-FordEscapeMonths').innerHTML = '60'; }
	if(document.querySelector('#BitMoto-FordEscapeMSRP') !== null)  { document.getElementById('BitMoto-FordEscapeMSRP').innerHTML = '23,850'; }
	if(document.querySelector('#BitMoto-FordEscapeRate') !== null)  { document.getElementById('BitMoto-FordEscapeRate').innerHTML = '0'; }
	if(document.querySelector('#BitMoto-FordEscapeCash') !== null)  { document.getElementById('BitMoto-FordEscapeCash').innerHTML = '1000'; }
	
	if(document.querySelector('#BitMoto-FordFusionLease') !== null)  { document.getElementById('BitMoto-FordFusionLease').innerHTML = '179'; }
	if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  { document.getElementById('BitMoto-FordFusionDAS').innerHTML = '3639'; }
	if(document.querySelector('#BitMoto-FordFusionRate') !== null)  { document.getElementById('BitMoto-FordFusionRate').innerHTML = '0'; }
	if(document.querySelector('#BitMoto-FordFusionMonths') !== null)  { document.getElementById('BitMoto-FordFusionMonths').innerHTML = '72'; }
	if(document.querySelector('#BitMoto-FordFusionMSRP') !== null)  { document.getElementById('BitMoto-FordFusionMSRP').innerHTML = '22,120'; }
	if(document.querySelector('#BitMoto-FordFusionCash') !== null)  { document.getElementById('BitMoto-FordFusionCash').innerHTML = '1000'; }
	
	if(document.querySelector('#BitMoto-FordFocusLease') !== null)  { document.getElementById('BitMoto-FordFocusLease').innerHTML = '150'; }
	if(document.querySelector('#BitMoto-FordFocusDAS') !== null)  { document.getElementById('BitMoto-FordFocusDAS').innerHTML = '2579'; }
	if(document.querySelector('#BitMoto-FordFocusMonths') !== null)  { document.getElementById('BitMoto-FordFocusMonths').innerHTML = '60'; }
	if(document.querySelector('#BitMoto-FordFocusMSRP') !== null)  { document.getElementById('BitMoto-FordFocusMSRP').innerHTML = '16,775'; }
	if(document.querySelector('#BitMoto-FordFocusRate') !== null)  { document.getElementById('BitMoto-FordFocusRate').innerHTML = '0'; }
	if(document.querySelector('#BitMoto-FordFocusCash') !== null)  { document.getElementById('BitMoto-FordFocusCash').innerHTML = ''; }
	
	if(document.querySelector('#BitMoto-FordF150Lease') !== null)  { document.getElementById('BitMoto-FordF150Lease').innerHTML = '249'; }
	if(document.querySelector('#BitMoto-FordF150DAS') !== null)  { document.getElementById('BitMoto-FordF150DAS').innerHTML = '3289'; }
	if(document.querySelector('#BitMoto-FordF150Months') !== null)  { document.getElementById('BitMoto-FordF150Months').innerHTML = '60'; }
	if(document.querySelector('#BitMoto-FordF150MSRP') !== null)  { document.getElementById('BitMoto-FordF150MSRP').innerHTML = '27,380'; }
	if(document.querySelector('#BitMoto-FordF150Rate') !== null)  { document.getElementById('BitMoto-FordF150Rate').innerHTML = '2.9'; }
	if(document.querySelector('#BitMoto-FordF150Cash') !== null)  { document.getElementById('BitMoto-FordF150Cash').innerHTML = '3250'; }
	
	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '279'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '4679'; }
	if(document.querySelector('#BitMoto-FordExplorerMonths') !== null)  { document.getElementById('BitMoto-FordExplorerMonths').innerHTML = '60'; }
	if(document.querySelector('#BitMoto-FordExplorerMSRP') !== null)  { document.getElementById('BitMoto-FordExplorerMSRP').innerHTML = '31,660'; }
	if(document.querySelector('#BitMoto-FordExplorerRate') !== null)  { document.getElementById('BitMoto-FordExplorerRate').innerHTML = '0'; }
	if(document.querySelector('#BitMoto-FordExplorerCash') !== null)  { document.getElementById('BitMoto-FordExplorerCash').innerHTML = '1000'; }
	
	if(document.querySelector('#BitMoto-FordEdgeLease') !== null)  { document.getElementById('BitMoto-FordEdgeLease').innerHTML = '249'; }
	if(document.querySelector('#BitMoto-FordEdgeDAS') !== null)  { document.getElementById('BitMoto-FordEdgeDAS').innerHTML = '3229'; }
	if(document.querySelector('#BitMoto-FordEdgeMonths') !== null)  { document.getElementById('BitMoto-FordEdgeMonths').innerHTML = '60'; }
	if(document.querySelector('#BitMoto-FordEdgeMSRP') !== null)  { document.getElementById('BitMoto-FordEdgeMSRP').innerHTML = '28,950'; }
	if(document.querySelector('#BitMoto-FordEdgeRate') !== null)  { document.getElementById('BitMoto-FordEdgeRate').innerHTML = '0'; }
	if(document.querySelector('#BitMoto-FordEdgeCash') !== null)  { document.getElementById('BitMoto-FordEdgeCash').innerHTML = '2000'; }


if(document.getElementById('BitMoto-FordDisclaimerDate') !== null)  {
document.getElementById('BitMoto-FordDisclaimerDate').innerHTML = '1/31/18';
}

if(document.getElementById('BitMoto-FordCurrentSaleSmallBanner') !== null)  {
//https://storage.googleapis.com/bitmoto/dealers/ford/ford/WellBeatAnyPrice.jpg
document.getElementById('BitMoto-FordCurrentSaleSmallBanner').src = 'https://storage.googleapis.com/bitmoto/dealers/ford/ford/WellBeatAnyPrice.jpg';
}

if(document.getElementById('BitMoto-FordCurrentSaleURL') !== null)  {
// Use # if no available sales page
document.getElementById('BitMoto-FordCurrentSaleURL').href = '#';
}

// END - Ford Vehicles



// -------- START ------------ INDIVIDUAL FORD DEALER VEHICLES ------------------


// START - Sloan Ford Exton
if(document.domain == "www.sloanford.com"){
/*
	if(document.querySelector('#BitMoto-FordEscapeLease') !== null)  { document.getElementById('BitMoto-FordEscapeLease').innerHTML = '165'; }
	if(document.querySelector('#BitMoto-FordEscapeDAS') !== null)  { document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '3740'; }
	
	if(document.querySelector('#BitMoto-FordFusionLease') !== null)  { document.getElementById('BitMoto-FordFusionLease').innerHTML = '165'; }
	if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  { document.getElementById('BitMoto-FordFusionDAS').innerHTML = '3620'; }
	
	if(document.querySelector('#BitMoto-FordFocusLease') !== null)  { document.getElementById('BitMoto-FordFocusLease').innerHTML = '135'; }
	if(document.querySelector('#BitMoto-FordFocusDAS') !== null)  { document.getElementById('BitMoto-FordFocusDAS').innerHTML = '2585'; }
	
	if(document.querySelector('#BitMoto-FordF150Lease') !== null)  { document.getElementById('BitMoto-FordF150Lease').innerHTML = '271'; }
	if(document.querySelector('#BitMoto-FordF150DAS') !== null)  { document.getElementById('BitMoto-FordF150DAS').innerHTML = '3351'; }
	
	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '209'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '3479'; }
	
	if(document.querySelector('#BitMoto-FordEdgeLease') !== null)  { document.getElementById('BitMoto-FordEdgeLease').innerHTML = '255'; }
	if(document.querySelector('#BitMoto-FordEdgeDAS') !== null)  { document.getElementById('BitMoto-FordEdgeDAS').innerHTML = '3254'; }	
*/
// Disclaimers
	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  {
		
		if(document.URL.indexOf("ford-fusion.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Fusion. FWD SE 200A. MSRP $25,710. Lease for $179/mo w/ $3,639 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived. Taxes, tags, and doc fee due at signing.**Total Savings includes all available rebates and average dealer discount.Photo for illustration purposes only. Expires 1/31/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-focus.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Focus. 4DR SE 200A w/AUTO. MSRP $20,145. Lease for $150/mo w/ $2,579 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived. Taxes, tags, and doc fee due at signing. **Total Savings includes all available rebates and average dealer discount. Photo for illustration purposes only. Expires 1/31/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-escape.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*18 MY Escape. FWD SE 200A. MSRP $26,600. Lease for $199/mo w/ $2,599 DAS. 36 month lease with 10,500 miles/year. Includes all available rebates and average dealer discount. Security deposit waived.Taxes, tags, and doc fee due at signing.**Total Savings includes all available rebates and average dealer discount + $750 Renewal/Conquest Bonus Cash.Photo for illustration purposes only. Expires 1/31/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-explorer.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Explorer. 4WD XLT 202A. MSRP $43,145. Lease for $279/mo w/ $4,679 DAS. 39 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount + $750 Renewal/Conquest Bonus Cash. Security deposit waived. Taxes, tags, and doc fee due at signing. Photo for illustration purposes only.Expires 1/31/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-f150.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*18MY F-150 4x4 SuperCab STX 101A + 861 + 61S w/2.7L EcoBoost. MSRP $43,205. Lease for $249/mo w/ $3,289 DAS. 36 month lease with 10,500 miles/year. Security deposit waived. Taxes, tags, and doc fee due at signing.Includes all available rebates and average dealer discount. $1,500 Red Carpet Lease Cash + $1,500 XL/XLT Open Bonus Cash + $300 2.7L EcoBoost Bonus Cash. Photo for illustration purposes only. Expires 1/31/2018 See dealer for details. **18MY F-150 4x4 SuperCab XLT. 302A + 53A w/2.7L EcoBoost. MSRP $49,530.*Total Savings includes all available rebates and average dealer discount. All offers include $750 Ford Credit Retail Customer Cash + $1,500 Open Bonus Cash (XL/XLT) + $1,250 XLT Cash + $300 2.7L Ecoboost Bonus Cash +$2,913 Average Dealer Discount + $2,500 Package Discount.Security deposit waived. Taxes, tags, and doc fee due at signing. Photo for illustration purposes only. Offer Ends 1/31/18.';
		}
		if(document.URL.indexOf("ford-edge.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Edge. AWD SEL 200A. MSRP $34,680. Lease for $249/mo w/ $3,229 DAS. 24 month lease with 10,500 miles/year. Includes all available rebates and average dealer discount + $750 Renewal/Conquest Bonus Cash. Security deposit waived.Taxes, tags, and doc fee due at signing. **Total Savings includes all available rebates and average dealer discount. Photo for illustration purposes only. Expires 1/31/2018. See dealer for details.';
		}
	}

}
// END - Sloan Ford Exton



// START - Gilboy Ford Whitehall
if(document.domain == "www.gilboyford.com"){

	if(document.querySelector('#BitMoto-FordEscapeLease') !== null)  { document.getElementById('BitMoto-FordEscapeLease').innerHTML = '205'; }
	if(document.querySelector('#BitMoto-FordEscapeDAS') !== null)  { document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '2555'; }
	if(document.querySelector('#BitMoto-FordEscapeBuyFor') !== null)  { document.getElementById('BitMoto-FordEscapeBuyFor').innerHTML = '24,275'; }
	
	if(document.querySelector('#BitMoto-FordFusionLease') !== null)  { document.getElementById('BitMoto-FordFusionLease').innerHTML = '165'; }
	if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  { document.getElementById('BitMoto-FordFusionDAS').innerHTML = '3625'; }
	if(document.querySelector('#BitMoto-FordFusionBuyFor') !== null)  { document.getElementById('BitMoto-FordFusionBuyFor').innerHTML = '20,449'; }
	
	if(document.querySelector('#BitMoto-FordFocusLease') !== null)  { document.getElementById('BitMoto-FordFocusLease').innerHTML = '145'; }
	if(document.querySelector('#BitMoto-FordFocusDAS') !== null)  { document.getElementById('BitMoto-FordFocusDAS').innerHTML = '2255'; }
	if(document.querySelector('#BitMoto-FordFocusBuyFor') !== null)  { document.getElementById('BitMoto-FordFocusBuyFor').innerHTML = '16,981'; }
	
	if(document.querySelector('#BitMoto-FordF150Lease') !== null)  { document.getElementById('BitMoto-FordF150Lease').innerHTML = '209'; }
	if(document.querySelector('#BitMoto-FordF150DAS') !== null)  { document.getElementById('BitMoto-FordF150DAS').innerHTML = '2899'; }
	if(document.querySelector('#BitMoto-FordF150BuyFor') !== null)  { document.getElementById('BitMoto-FordF150BuyFor').innerHTML = '36,530'; }
/*	if(document.querySelector('#BitMoto-FordF150Rate') !== null)  { document.getElementById('BitMoto-FordEscapeRate').innerHTML = '0'; }
	if(document.querySelector('#BitMoto-FordF150Months') !== null)  { document.getElementById('BitMoto-FordF150Months').innerHTML = '72'; }
	if(document.querySelector('#BitMoto-FordF150Cash') !== null)  { document.getElementById('BitMoto-FordF150Cash').innerHTML = '1750'; }
*/	
	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '258'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '4708'; }
	if(document.querySelector('#BitMoto-FordExplorerBuyFor') !== null)  { document.getElementById('BitMoto-FordExplorerBuyFor').innerHTML = '36,475'; }
	
	if(document.querySelector('#BitMoto-FordEdgeLease') !== null)  { document.getElementById('BitMoto-FordEdgeLease').innerHTML = '228'; }
	if(document.querySelector('#BitMoto-FordEdgeDAS') !== null)  { document.getElementById('BitMoto-FordEdgeDAS').innerHTML = '3208'; }
	if(document.querySelector('#BitMoto-FordEdgeBuyFor') !== null)  { document.getElementById('BitMoto-FordEdgeBuyFor').innerHTML = '27,731'; }

// Disclaimers
	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  {
		
		if(document.URL.indexOf("ford-fusion.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*2017 Fusion SE. Stock #HR363098. MSRP $24,720. Lease for $165/mo w/ $3,625 DAS. 36 month lease with 10,500 miles/year. Includes $500 Military Appreciation Bonus Cash. **Price includes all available rebates including $500 Military Appreciation Cash plus average dealer discount. ***Not everyone will qualify for financing. Includes all available rebates plus $500 Military Appreciation Cash. Must qualify through FMCC. Taxes & fees extra. Security deposit waived. Expires 1/31/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-focus.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*2018 MY Focus SE. MSRP $21,120. Stock # 18505. Lease for $145/mo w/ $2,255 DAS. 36 month lease with 10,500 miles/year. Includes $500 Military Appreciation Bonus Cash. **Price includes all available rebates including $500 Military Appreciation Cash plus average dealer discount. ***Not everyone will qualify for financing. Includes all available rebates plus $500 Military Appreciation Cash. Must qualify through FMCC. Taxes & fees extra. Security deposit waived. Expires 1/31/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-escape.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*2018 MY Escape AWD SE. Stock #189526. MSRP $27,950. Lease for $205/mo w/ $2,555 DAS. 36 month lease with 10,500 miles/year. Includes $500 Military Appreciation Bonus Cash. **Price includes all available rebates including $500 Military Appreciation Cash plus average dealer discount. ***Not everyone will qualify for financing. Includes all available rebates plus $500 Military Appreciation Cash. Must qualify through FMCC. Taxes & fees extra. Security deposit waived.  Expires 1/31/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-explorer.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*2017 MY Explorer FWD Base. Stock #175569. MSRP $41,265. Lease for $258/mo w/ $4,708 DAS. 24 month lease with 10,500 miles/year. Includes $500 Military Appreciation Bonus Cash and $750 Conquest/Lease Renewal Cash. **Price includes all available rebates including $500 Military Appreciation Cash and $1000 Competitive Conquest Bonus Cash plus average dealer discount. ***Not everyone will qualify for financing. Includes all available rebates plus $500 Military Appreciation Cash. Must qualify through FMCC. Taxes & fees extra. Security deposit waived. Expires 1/31/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-f150.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*2018 MY F150 SuperCab 4x4.  Stock #JFB48627. MSRP $42,985. Lease for $209/mo w/ $2,899 DAS. 24 month lease with 10,500 miles/year. Includes $500 Military Appreciation Bonus Cash  **Not everyone will qualify for financing. Includes all available rebates plus $500 Military Appreciation Cash. Must qualify through FMCC. Taxes & fees extra. Security deposit waived. Expires 1/31/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-edge.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*017 MY Edge AWD SEL. Stock # 178021. MSRP $34,180. Lease for $228/mo w/ $3,208 DAS. 24 month lease with 10,500 miles/year. Includes $500 Military Appreciation Bonus Cash and $750 Conquest/Lease Renewal Cash. **Price includes all available rebates including $500 Military Appreciation Cash and $1000 Competitive Conquest Bonus Cash plus average dealer discount. ***Not everyone will qualify for financing. Includes all available rebates plus $500 Military Appreciation Cash. Must qualify through FMCC. Taxes & fees extra. Security deposit waived. Expires 1/31/2018. See dealer for details.';
		}
	}

}
// END - Gilboy Ford Whitehall


// START - Coccia Ford Wilkes-Barre
if(document.domain == "www.cocciaford.com"){
/*
	if(document.querySelector('#BitMoto-FordEscapeLease') !== null)  { document.getElementById('BitMoto-FordEscapeLease').innerHTML = '199'; }
	if(document.querySelector('#BitMoto-FordEscapeDAS') !== null)  { document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '2500'; }
	
	if(document.querySelector('#BitMoto-FordFusionLease') !== null)  { document.getElementById('BitMoto-FordFusionLease').innerHTML = '169'; }
	if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  { document.getElementById('BitMoto-FordFusionDAS').innerHTML = '2500'; }
	
	if(document.querySelector('#BitMoto-FordFocusLease') !== null)  { document.getElementById('BitMoto-FordFocusLease').innerHTML = '109'; }
	if(document.querySelector('#BitMoto-FordFocusDAS') !== null)  { document.getElementById('BitMoto-FordFocusDAS').innerHTML = '2500'; }
	
	if(document.querySelector('#BitMoto-FordF150Lease') !== null)  { document.getElementById('BitMoto-FordF150Lease').innerHTML = '249'; }
	if(document.querySelector('#BitMoto-FordF150DAS') !== null)  { document.getElementById('BitMoto-FordF150DAS').innerHTML = '2500'; }
*/	if(document.querySelector('#BitMoto-FordF150Savings') !== null)  { document.getElementById('BitMoto-FordF150Savings').innerHTML = '9963'; }
/*
	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '299'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '4799'; }

	if(document.querySelector('#BitMoto-FordEdgeLease') !== null)  { document.getElementById('BitMoto-FordEdgeLease').innerHTML = '239'; }
	if(document.querySelector('#BitMoto-FordEdgeDAS') !== null)  { document.getElementById('BitMoto-FordEdgeDAS').innerHTML = '2500'; }	
*/
// Disclaimers
	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  {

		if(document.URL.indexOf("ford-fusion.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Fusion. FWD SE 200A. MSRP $25,710. Lease for $179/mo w/ $3,639 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived. Taxes, tags, and doc fee due at signing.**Total Savings includes all available rebates and average dealer discount.Photo for illustration purposes only. Expires 1/31/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-focus.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Focus. 4DR SE 200A w/AUTO. MSRP $20,145. Lease for $150/mo w/ $2,579 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived. Taxes, tags, and doc fee due at signing. **Total Savings includes all available rebates and average dealer discount. Photo for illustration purposes only. Expires 1/31/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-escape.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*18 MY Escape. FWD SE 200A. MSRP $26,600. Lease for $199/mo w/ $2,599 DAS. 36 month lease with 10,500 miles/year. Includes all available rebates and average dealer discount. Security deposit waived.Taxes, tags, and doc fee due at signing.**Total Savings includes all available rebates and average dealer discount + $750 Renewal/Conquest Bonus Cash.Photo for illustration purposes only. Expires 1/31/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-explorer.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Explorer. 4WD XLT 202A. MSRP $43,145. Lease for $279/mo w/ $4,679 DAS. 39 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount + $750 Renewal/Conquest Bonus Cash. Security deposit waived. Taxes, tags, and doc fee due at signing. Photo for illustration purposes only.Expires 1/31/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-f150.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*18MY F-150 4x4 SuperCab STX 101A + 861 + 61S w/2.7L EcoBoost. MSRP $43,205. Lease for $249/mo w/ $3,289 DAS. 36 month lease with 10,500 miles/year. Security deposit waived. Taxes, tags, and doc fee due at signing.Includes all available rebates and average dealer discount. $1,500 Red Carpet Lease Cash + $1,500 XL/XLT Open Bonus Cash + $300 2.7L EcoBoost Bonus Cash. Photo for illustration purposes only. Expires 1/31/2018 See dealer for details. <br><br>**18MY F-150 4x4 SuperCab XLT. 302A + 53A w/2.7L EcoBoost. MSRP $49,530.*Total Savings includes all available rebates and average dealer discount. All offers include $750 Ford Credit Retail Customer Cash + $1,500 Open Bonus Cash (XL/XLT) + $1,250 XLT Cash + $300 2.7L Ecoboost Bonus Cash +$2,913 Average Dealer Discount + $2,500 Package Discount.Security deposit waived. Taxes, tags, and doc fee due at signing. Photo for illustration purposes only. Offer Ends 1/31/18.';
		}
		if(document.URL.indexOf("ford-edge.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Edge. AWD SEL 200A. MSRP $34,680. Lease for $249/mo w/ $3,229 DAS. 24 month lease with 10,500 miles/year. Includes all available rebates and average dealer discount + $750 Renewal/Conquest Bonus Cash. Security deposit waived.Taxes, tags, and doc fee due at signing. **Total Savings includes all available rebates and average dealer discount. Photo for illustration purposes only. Expires 1/31/2018. See dealer for details.';
		}
	}

}
// END - Coccia Ford Wilkes-Barre


// START - Miller Ford Lumberton
if(document.domain == "www.millerford.com"){

ga('create', 'UA-78897207-1', 'auto');

	if(document.querySelector('#BitMoto-FordEscapeLease') !== null)  { document.getElementById('BitMoto-FordEscapeLease').innerHTML = '179'; }
	if(document.querySelector('#BitMoto-FordEscapeDAS') !== null)  { document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '2599'; }
	
	if(document.querySelector('#BitMoto-FordFusionLease') !== null)  { document.getElementById('BitMoto-FordFusionLease').innerHTML = '159'; }
	if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  { document.getElementById('BitMoto-FordFusionDAS').innerHTML = '2999'; }
	
	if(document.querySelector('#BitMoto-FordFocusLease') !== null)  { document.getElementById('BitMoto-FordFocusLease').innerHTML = '129'; }
	if(document.querySelector('#BitMoto-FordFocusDAS') !== null)  { document.getElementById('BitMoto-FordFocusDAS').innerHTML = '2750'; }
	
	if(document.querySelector('#BitMoto-FordF150Lease') !== null)  { document.getElementById('BitMoto-FordF150Lease').innerHTML = '239'; }
	if(document.querySelector('#BitMoto-FordF150DAS') !== null)  { document.getElementById('BitMoto-FordF150DAS').innerHTML = '2999'; }
	
	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '259'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '2999'; }
	
	if(document.querySelector('#BitMoto-FordEdgeLease') !== null)  { document.getElementById('BitMoto-FordEdgeLease').innerHTML = '239'; }
	if(document.querySelector('#BitMoto-FordEdgeDAS') !== null)  { document.getElementById('BitMoto-FordEdgeDAS').innerHTML = '2999'; }
	
	if(document.URL.indexOf("facebook-explorer.htm") >= 0) {
	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '309'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '2000'; }
	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  { document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*Stock #HGC98795. Lease for $309/mo with $2000 down payment required. 39 month lease with 10,500 miles/year. Taxes, tags, $289 doc fee, and first month payment due at signing. Security deposit waived. See dealer for details. Expires 6/30/2017';}
	}
	
	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  {
	
		if(document.URL.indexOf("ford-fusion.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = 'VIN: HR391257 MSRP $26,610. 4dr, 4cyl, auto, PW, PL, PB, PS, air. Total due at signing: $2,999 down plus first month’s payment, $645 acquisition fee, tax, tags, and $289 doc fee. 36 month closed end lease. 10,500 miles per year. 15¢ per mile over. LEV: $11,176. TOP: $5,724. $0 security deposit. Includes $3,750 RCL Customer Cash and $1000 RCL Renewal. Tax and tags additional.Offer expires 1/31/18.';
		}
		if(document.URL.indexOf("ford-focus.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = 'VIN: JL214167. MSRP $21,120. Total due at signing: $1,999 down plus first month’s payment, $645 acquisition fee, tax, tags, and $289 doc fee. 36 month closed end lease. 10,500 miles per year. 15¢ per mile over. LEV $9,715. TOP $4,364. $0 security deposit. Includes $3,500 RCL Customer Cash. Tax and tags additional. Offer expires 1/31/18.';
		}
		if(document.URL.indexOf("ford-escape.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = 'VIN: JUA27222. MSRP $24,845. SUV, 4cyl, auto, PW, PL, PB, PS, air. Total due at signing $2,599 down plus first month’s payment, $645 acquisition fee, tax, tags, and $289 doc fee. 36 month closed end lease. 10,500 miles per year. 15¢ per mile over. LEV: $11,677. TOP: $6,444. $0 security deposit. Includes $3000 RCL Customer Cash and $750 Competitive Conquest Cash. Tax and tags additional.Offer expires 1/31/18.';
		}
		if(document.URL.indexOf("ford-explorer.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = 'VIN: JGA17484 MSRP $35,015. Total due at signing: $2,999 down plus first month’s payment, $645 acquisition fee, tax, tags, and $289 doc fee. 36 month closed end lease. 10,500 miles per year. 15¢ per mile over. LEV: $18,908. TOP: $9,324. $0 security deposit. Includes $2,500 RCL Customer Cash and $750 Competitive Conquest Cash.Tax and tags additional. Offer expires 1/31/18.';
		}
		if(document.URL.indexOf("ford-f150.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = 'VIN: JFA26186 MSRP $39,885. Total due at signing: $2,999 down plus first month’s payment, $645 acquisition fee, tax, tags, and $289 doc fee. 36 month closed end lease. 10,500 miles per year. 15¢ per mile over. LEV: $23,133. TOP: $8,604. $0 security deposit. Includes $1500 RCL Customer Cash. $1500 Bonus Customer Cash. $750 F-150 RCL Renewal. Tax and tags additional. Offer expires 1/31/18.';
		}
		if(document.URL.indexOf("ford-edge.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = 'VIN: JBB02515 MSRP $35,215. Total due at signing: $2,999 down plus first month’s payment, $645 acquisition fee, tax, tags, and $289 doc fee. 36 month closed end lease. 10,500 miles per year. 15¢ per mile over. LEV: $15,107. TOP: $8,604. $0 security deposit. Includes $2,750 RCL Customer Cash and $750 Competitive Conquest Cash.Tax and tags additional. Offer expires 1/31/18.';
		}
	}

}
// END - Miller Ford Lumberton


/*
// START - Pacifico Ford Philadelphia
if(document.domain == "www.pacificoford.com"){

	if(document.querySelector('#BitMoto-FordEscapeLease') !== null)  { document.getElementById('BitMoto-FordEscapeLease').innerHTML = '167'; }
	if(document.querySelector('#BitMoto-FordEscapeDAS') !== null)  { document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '2999'; }
	
	if(document.querySelector('#BitMoto-FordFusionLease') !== null)  { document.getElementById('BitMoto-FordFusionLease').innerHTML = '149'; }
	if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  { document.getElementById('BitMoto-FordFusionDAS').innerHTML = '2950'; }
	
	if(document.querySelector('#BitMoto-FordFocusLease') !== null)  { document.getElementById('BitMoto-FordFocusLease').innerHTML = '139'; }
	if(document.querySelector('#BitMoto-FordFocusDAS') !== null)  { document.getElementById('BitMoto-FordFocusDAS').innerHTML = '2699'; }
	
	if(document.querySelector('#BitMoto-FordF150Lease') !== null)  { document.getElementById('BitMoto-FordF150Lease').innerHTML = '299'; }
	if(document.querySelector('#BitMoto-FordF150DAS') !== null)  { document.getElementById('BitMoto-FordF150DAS').innerHTML = '3475'; }

	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '234'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '3499'; }

	if(document.querySelector('#BitMoto-FordEdgeLease') !== null)  { document.getElementById('BitMoto-FordEdgeLease').innerHTML = '240'; }
	if(document.querySelector('#BitMoto-FordEdgeDAS') !== null)  { document.getElementById('BitMoto-FordEdgeDAS').innerHTML = '3254'; }

	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  {

		if(document.URL.indexOf("ford-fusion.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17MY Fusion. Stock # 5228. VIN: HR401639. Lease for $249/mo w/ $249 DAS. 39 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. **Not all will qualify for financing. Expires 10/31/2017 See dealer for details.';
		}
		if(document.URL.indexOf("ford-focus.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17MY Focus. Stock # 5324. VIN: HL322029. Lease for $190/mo w/ $190 DAS. 39 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. **Not all will qualify for financing. Expires 10/31/2017. See dealer for details.';
		}
		if(document.URL.indexOf("ford-escape.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17 MY Escape. Stock # 4703. VIN: HUC17702.  Lease for $253/mo w/ $253 DAS. 39 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. **Not all will qualify for financing. Expires 10/31/2017. See dealer for details.';
		}
		if(document.URL.indexOf("ford-explorer.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17MY Explorer. Stock #5340. VIN: HGD76059. Lease for $299/mo w/ $299 DAS. 39 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. **Not all will qualify for financing. Expires 10/31/2017 See dealer for details.';
		}
		if(document.URL.indexOf("ford-f150.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17MY F150 4x4 SuperCab Stock #5130. VIN: HFC55346.  Lease for $308/mo w/ $308 DAS. 39 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. **Not all will qualify for financing. Expires 10/31/2017. See dealer for details.';
		}
		if(document.URL.indexOf("ford-edge.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17MY Edge.Stock #5372. VIN: HBC51271. Lease for $293/mo w/ $293 DAS. 39 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. **Not all will qualify for financing. Expires 10/31/2017. See dealer for details.';
		}
	}
}
// END - Pacifico Ford Philadelphia
*/


// START - Carman Ford New Castle
if(document.domain == "www.carman-ford.com"){
/*
	if(document.querySelector('#BitMoto-FordFusionLease') !== null)  { document.getElementById('BitMoto-FordFusionLease').innerHTML = '249'; }
	if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  { document.getElementById('BitMoto-FordFusionDAS').innerHTML = '249'; }

	if(document.querySelector('#BitMoto-FordF150Lease') !== null)  { document.getElementById('BitMoto-FordF150Lease').innerHTML = '308'; }
	if(document.querySelector('#BitMoto-FordF150DAS') !== null)  { document.getElementById('BitMoto-FordF150DAS').innerHTML = '308'; }
	
	if(document.querySelector('#BitMoto-FordFocusLease') !== null)  { document.getElementById('BitMoto-FordFocusLease').innerHTML = '190'; }
	if(document.querySelector('#BitMoto-FordFocusDAS') !== null)  { document.getElementById('BitMoto-FordFocusDAS').innerHTML = '190'; }

	if(document.querySelector('#BitMoto-FordEdgeLease') !== null)  { document.getElementById('BitMoto-FordEdgeLease').innerHTML = '293'; }
	if(document.querySelector('#BitMoto-FordEdgeDAS') !== null)  { document.getElementById('BitMoto-FordEdgeDAS').innerHTML = '293'; }
	
	if(document.querySelector('#BitMoto-FordEscapeLease') !== null)  { document.getElementById('BitMoto-FordEscapeLease').innerHTML = '253'; }
	if(document.querySelector('#BitMoto-FordEscapeDAS') !== null)  { document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '253'; }
	
	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '299'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '299'; }
*/
	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  {
		
		if(document.URL.indexOf("ford-fusion.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Fusion. FWD SE 200A. MSRP $25,710. Lease for $179/mo w/ $3,639 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived. Taxes, tags, and doc fee due at signing.**Total Savings includes all available rebates and average dealer discount.Photo for illustration purposes only. Expires 1/31/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-focus.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Focus. 4DR SE 200A w/AUTO. MSRP $20,145. Lease for $150/mo w/ $2,579 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived. Taxes, tags, and doc fee due at signing. **Total Savings includes all available rebates and average dealer discount. Photo for illustration purposes only. Expires 1/31/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-escape.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*18 MY Escape. FWD SE 200A. MSRP $26,600. Lease for $199/mo w/ $2,599 DAS. 36 month lease with 10,500 miles/year. Includes all available rebates and average dealer discount. Security deposit waived.Taxes, tags, and doc fee due at signing.**Total Savings includes all available rebates and average dealer discount + $750 Renewal/Conquest Bonus Cash.Photo for illustration purposes only. Expires 1/31/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-explorer.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Explorer. 4WD XLT 202A. MSRP $43,145. Lease for $279/mo w/ $4,679 DAS. 39 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount + $750 Renewal/Conquest Bonus Cash. Security deposit waived. Taxes, tags, and doc fee due at signing. Photo for illustration purposes only.Expires 1/31/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-f150.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*18MY F-150 4x4 SuperCab STX 101A + 861 + 61S w/2.7L EcoBoost. MSRP $43,205. Lease for $249/mo w/ $3,289 DAS. 36 month lease with 10,500 miles/year. Security deposit waived. Taxes, tags, and doc fee due at signing.Includes all available rebates and average dealer discount. $1,500 Red Carpet Lease Cash + $1,500 XL/XLT Open Bonus Cash + $300 2.7L EcoBoost Bonus Cash. Photo for illustration purposes only. Expires 1/31/2018 See dealer for details.  **18MY F-150 4x4 SuperCab XLT. 302A + 53A w/2.7L EcoBoost. MSRP $49,530.*Total Savings includes all available rebates and average dealer discount. All offers include $750 Ford Credit Retail Customer Cash + $1,500 Open Bonus Cash (XL/XLT) + $1,250 XLT Cash + $300 2.7L Ecoboost Bonus Cash +$2,913 Average Dealer Discount + $2,500 Package Discount.Security deposit waived. Taxes, tags, and doc fee due at signing. Photo for illustration purposes only. Offer Ends 1/31/18.';
		}
		if(document.URL.indexOf("ford-edge.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Edge. AWD SEL 200A. MSRP $34,680. Lease for $249/mo w/ $3,229 DAS. 24 month lease with 10,500 miles/year. Includes all available rebates and average dealer discount + $750 Renewal/Conquest Bonus Cash. Security deposit waived.Taxes, tags, and doc fee due at signing. **Total Savings includes all available rebates and average dealer discount. Photo for illustration purposes only. Expires 1/31/2018. See dealer for details.';
		}
	}
	
}
// END - Carman Ford New Castle



// START - Dunphy Ford Philadelphia
if(document.domain == "www.dunphyford.com"){
/*
	if(document.querySelector('#BitMoto-FordEscapeLease') !== null)  { document.getElementById('BitMoto-FordEscapeLease').innerHTML = '165'; }
	if(document.querySelector('#BitMoto-FordEscapeDAS') !== null)  { document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '3740'; }

	if(document.querySelector('#BitMoto-FordFusionLease') !== null)  { document.getElementById('BitMoto-FordFusionLease').innerHTML = '165'; }
	if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  { document.getElementById('BitMoto-FordFusionDAS').innerHTML = '3620'; }

	if(document.querySelector('#BitMoto-FordFocusLease') !== null)  { document.getElementById('BitMoto-FordFocusLease').innerHTML = '139'; }
	if(document.querySelector('#BitMoto-FordFocusDAS') !== null)  { document.getElementById('BitMoto-FordFocusDAS').innerHTML = '2589'; }

	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '215'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '3485'; }

	if(document.querySelector('#BitMoto-FordF150Lease') !== null)  { document.getElementById('BitMoto-FordF150Lease').innerHTML = '249'; }
	if(document.querySelector('#BitMoto-FordF150DAS') !== null)  { document.getElementById('BitMoto-FordF150DAS').innerHTML = '3569'; }
	
	if(document.querySelector('#BitMoto-FordEdgeLease') !== null)  { document.getElementById('BitMoto-FordEdgeLease').innerHTML = '255'; }
	if(document.querySelector('#BitMoto-FordEdgeDAS') !== null)  { document.getElementById('BitMoto-FordEdgeDAS').innerHTML = '3254'; }
*/
	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  {
	
		if(document.URL.indexOf("ford-fusion.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Fusion. FWD SE 200A. MSRP $25,710. Lease for $144/mo w/ $3,620 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived. Taxes, tags, and documentation fee due at signing.**Total Savings includes all available rebates and average dealer discount. All offers include $2,000 Holiday Bonus Certificates that may or may not still be available. Expires 1/2/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-focus.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Focus. 4DR SE 200A w/AUTO. MSRP $20,145. Lease for $114/mo w/ $2,564 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived. Taxes, tags, and documentation fee due at signing. **Total Savings includes all available rebates and average dealer discount. Expires 1/2/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-escape.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17 MY Escape. FWD SE 200A. MSRP $26,145. Lease for $144/mo w/ $3,740 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived.Taxes, tags, and documentation fee due at signing.**Total Savings includes all available rebates and average dealer discount. All offers include $2,000 Holiday Bonus Certificates that may or may not still be available. Expires 1/2/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-explorer.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Explorer. FWD Base 100A. MSRP $32,605. Lease for $178/mo w/ $3,448 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived. Taxes, tags, and documentation fee due at signing. Expires 1/2/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-f150.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*18MY F-150 4x4 SuperCab STX. 101A + 861 + 61S w/2.7L EcoBoost. MSRP $42,210. Lease for $248/mo w/ $3,449 DAS. 36 month lease with 10,500 miles/year. Security deposit waived. Taxes, tags, and documentation fee due at signing. **Total Savings includes all available rebates and average dealer discount. All offers include $2,000 Holiday Bonus Certificates that may or may not still be available. Expires 1/2/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-edge.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Edge. AWD SEL 200A. MSRP $34,680. Lease for $225/mo w/ $3,33 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived.Taxes, tags, and documentation fee due at signing. **Total Savings includes all available rebates and average dealer discount. Expires 1/2/2018. See dealer for details.';
		}
	}

}
// END - Dunphy Ford Philadelphia



// START - Haldeman Ford East Windsor
if(document.domain == "www.haldemandirect.com"){

ga('create', 'UA-77847500-1', 'auto');

/*
	if(document.querySelector('#BitMoto-FordEscapeLease') !== null)  { document.getElementById('BitMoto-FordEscapeLease').innerHTML = '179'; }
	if(document.querySelector('#BitMoto-FordEscapeDAS') !== null)  { document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '2999'; }

	if(document.querySelector('#BitMoto-FordFusionLease') !== null)  { document.getElementById('BitMoto-FordFusionLease').innerHTML = '185'; }
	if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  { document.getElementById('BitMoto-FordFusionDAS').innerHTML = '2709'; }

	if(document.querySelector('#BitMoto-FordFocusLease') !== null)  { document.getElementById('BitMoto-FordFocusLease').innerHTML = '125'; }
	if(document.querySelector('#BitMoto-FordFocusDAS') !== null)  { document.getElementById('BitMoto-FordFocusDAS').innerHTML = '2649'; }

	if(document.querySelector('#BitMoto-FordF150Lease') !== null)  { document.getElementById('BitMoto-FordF150Lease').innerHTML = '199'; }
	if(document.querySelector('#BitMoto-FordF150DAS') !== null)  { document.getElementById('BitMoto-FordF150DAS').innerHTML = '3500'; }

	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '205'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '3395'; }
	
	if(document.querySelector('#BitMoto-FordEdgeLease') !== null)  { document.getElementById('BitMoto-FordEdgeLease').innerHTML = '249'; }
	if(document.querySelector('#BitMoto-FordEdgeDAS') !== null)  { document.getElementById('BitMoto-FordEdgeDAS').innerHTML = '3215'; }
*/
	//Disclaimers
	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  {
		
		if(document.URL.indexOf("ford-fusion.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Fusion. FWD SE 200A. MSRP $25,710. Lease for $179/mo w/ $3,639 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived. Taxes, tags, and $249 documentation fee due at signing.**Total Savings includes all available rebates and average dealer discount. Photo for illustration purposes only. Expires 1/31/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-focus.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Focus. 4DR SE 200A w/AUTO. MSRP $20,145. Lease for $150/mo w/ $2,579 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived. Taxes, tags, and $249 documentation fee due at signing. **Total Savings includes all available rebates and average dealer discount.Photo for illustration purposes only.  Expires 1/31/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-escape.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*18 MY Escape. FWD SE 200A. MSRP $26,600. Lease for $199/mo w/ $2,599 DAS. 36 month lease with 10,500 miles/year. Includes all available rebates and average dealer discount. Security deposit waived.Taxes, tags, and $249 documentation fee due at signing.**Total Savings includes all available rebates and average dealer discount + $750 Renewal/Conquest Bonus Cash. Photo for illustration purposes only. Expires 1/31/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-explorer.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Explorer. 4WD XLT 202A. MSRP $43,145. Lease for $279/mo w/ $4,679 DAS. 39 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount + $750 Renewal/Conquest Bonus Cash. Security deposit waived. Taxes, tags, and $249 documentation fee due at signing. Photo for illustration purposes only. Expires 1/31/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-f150.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*18MY F-150 4x4 SuperCab STX 101A + 861 + 61S w/2.7L EcoBoost. MSRP $43,205. Lease for $249/mo w/ $3,289 DAS. 36 month lease with 10,500 miles/year. Security deposit waived. Taxes, tags, and $249 documentation fee due at signing.Includes all available rebates and average dealer discount. $1,500 Red Carpet Lease Cash + $1,500 XL/XLT Open Bonus Cash + $300 2.7L EcoBoost Bonus Cash. Expires 1/31/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-edge.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Edge. AWD SEL 200A. MSRP $34,680. Lease for $249/mo w/ $3,229 DAS. 24 month lease with 10,500 miles/year. Includes all available rebates and average dealer discount + $750 Renewal/Conquest Bonus Cash. Security deposit waived.Taxes, tags, and $249 documentation fee due at signing. **Total Savings includes all available rebates and average dealer discount. Photo for illustration purposes only.Expires 1/31/2018. See dealer for details.';
		}
	}

}
// END - Haldeman Ford East Windsor



// START - Haldeman Ford Hamilton
if(document.domain == "www.haldemanfordhamilton.com"){

ga('create', 'UA-65112618-1', 'auto');

/*
	if(document.querySelector('#BitMoto-FordFusionLease') !== null)  { document.getElementById('BitMoto-FordFusionLease').innerHTML = '170'; }
	if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  { document.getElementById('BitMoto-FordFusionDAS').innerHTML = '2950'; }

	if(document.querySelector('#BitMoto-FordFocusLease') !== null)  { document.getElementById('BitMoto-FordFocusLease').innerHTML = '130'; }
	if(document.querySelector('#BitMoto-FordFocusDAS') !== null)  { document.getElementById('BitMoto-FordFocusDAS').innerHTML = '2699'; }

	if(document.querySelector('#BitMoto-FordF150Lease') !== null)  { document.getElementById('BitMoto-FordF150Lease').innerHTML = '245'; }
	if(document.querySelector('#BitMoto-FordF150DAS') !== null)  { document.getElementById('BitMoto-FordF150DAS').innerHTML = '3660'; }

	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '214'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '3499'; }

	if(document.querySelector('#BitMoto-FordEscapeLease') !== null)  { document.getElementById('BitMoto-FordEscapeLease').innerHTML = '171'; }
	if(document.querySelector('#BitMoto-FordEscapeDAS') !== null)  { document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '2999'; }
	
	if(document.querySelector('#BitMoto-FordEdgeLease') !== null)  { document.getElementById('BitMoto-FordEdgeLease').innerHTML = '240'; }
	if(document.querySelector('#BitMoto-FordEdgeDAS') !== null)  { document.getElementById('BitMoto-FordEdgeDAS').innerHTML = '3254'; }
*/
	//Disclaimers
	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  {
		
		if(document.URL.indexOf("ford-fusion.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Fusion. FWD SE 200A. MSRP $25,710. Lease for $179/mo w/ $3,639 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived. Taxes, tags, and $249 documentation fee due at signing.**Total Savings includes all available rebates and average dealer discount. Photo for illustration purposes only. Expires 1/31/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-focus.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Focus. 4DR SE 200A w/AUTO. MSRP $20,145. Lease for $150/mo w/ $2,579 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived. Taxes, tags, and $249 documentation fee due at signing. **Total Savings includes all available rebates and average dealer discount.Photo for illustration purposes only.  Expires 1/31/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-escape.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*18 MY Escape. FWD SE 200A. MSRP $26,600. Lease for $199/mo w/ $2,599 DAS. 36 month lease with 10,500 miles/year. Includes all available rebates and average dealer discount. Security deposit waived.Taxes, tags, and $249 documentation fee due at signing.**Total Savings includes all available rebates and average dealer discount + $750 Renewal/Conquest Bonus Cash. Photo for illustration purposes only. Expires 1/31/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-explorer.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Explorer. 4WD XLT 202A. MSRP $43,145. Lease for $279/mo w/ $4,679 DAS. 39 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount + $750 Renewal/Conquest Bonus Cash. Security deposit waived. Taxes, tags, and $249 documentation fee due at signing. Photo for illustration purposes only. Expires 1/31/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-f150.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*18MY F-150 4x4 SuperCab STX 101A + 861 + 61S w/2.7L EcoBoost. MSRP $43,205. Lease for $249/mo w/ $3,289 DAS. 36 month lease with 10,500 miles/year. Security deposit waived. Taxes, tags, and $249 documentation fee due at signing.Includes all available rebates and average dealer discount. $1,500 Red Carpet Lease Cash + $1,500 XL/XLT Open Bonus Cash + $300 2.7L EcoBoost Bonus Cash. Expires 1/31/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-edge.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Edge. AWD SEL 200A. MSRP $34,680. Lease for $249/mo w/ $3,229 DAS. 24 month lease with 10,500 miles/year. Includes all available rebates and average dealer discount + $750 Renewal/Conquest Bonus Cash. Security deposit waived.Taxes, tags, and $249 documentation fee due at signing. **Total Savings includes all available rebates and average dealer discount. Photo for illustration purposes only.Expires 1/31/2018. See dealer for details.';
		}
	}


}
// END - Haldeman Ford Hamilton



// START - Haldeman Ford Allentown
if(document.domain == "www.haldemanfordallentown.com"){
/*
	if(document.querySelector('#BitMoto-FordEscapeLease') !== null)  { document.getElementById('BitMoto-FordEscapeLease').innerHTML = '250'; }
	if(document.querySelector('#BitMoto-FordEscapeDAS') !== null)  { document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '0'; }

	if(document.querySelector('#BitMoto-FordFusionLease') !== null)  { document.getElementById('BitMoto-FordFusionLease').innerHTML = '189'; }
	if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  { document.getElementById('BitMoto-FordFusionDAS').innerHTML = '3035'; }

	if(document.querySelector('#BitMoto-FordFocusLease') !== null)  { document.getElementById('BitMoto-FordFocusLease').innerHTML = '139'; }
	if(document.querySelector('#BitMoto-FordFocusDAS') !== null)  { document.getElementById('BitMoto-FordFocusDAS').innerHTML = '2655'; }
	
	if(document.querySelector('#BitMoto-FordF150Lease') !== null)  { document.getElementById('BitMoto-FordF150Lease').innerHTML = '269'; }
	if(document.querySelector('#BitMoto-FordF150DAS') !== null)  { document.getElementById('BitMoto-FordF150DAS').innerHTML = '3096'; }

	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '285'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '2695'; }
*/
	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  {
	
		if(document.URL.indexOf("ford-fusion.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Fusion. FWD SE 200A. MSRP $25,710. Lease for $144/mo w/ $3,620 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived. Taxes, tags, and documentation fee due at signing.**Total Savings includes all available rebates and average dealer discount. All offers include $2,000 Holiday Bonus Certificates that may or may not still be available. Expires 1/2/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-focus.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Focus. 4DR SE 200A w/AUTO. MSRP $20,145. Lease for $114/mo w/ $2,564 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived. Taxes, tags, and documentation fee due at signing. **Total Savings includes all available rebates and average dealer discount. Expires 1/2/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-escape.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17 MY Escape. FWD SE 200A. MSRP $26,145. Lease for $144/mo w/ $3,740 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived.Taxes, tags, and documentation fee due at signing.**Total Savings includes all available rebates and average dealer discount. All offers include $2,000 Holiday Bonus Certificates that may or may not still be available. Expires 1/2/2018. See dealer for details.';
		}
		if(document.URL.indexOf("ford-explorer.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Explorer. FWD Base 100A. MSRP $32,605. Lease for $178/mo w/ $3,448 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived. Taxes, tags, and documentation fee due at signing. Expires 1/2/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-f150.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*18MY F-150 4x4 SuperCab STX. 101A + 861 + 61S w/2.7L EcoBoost. MSRP $42,210. Lease for $248/mo w/ $3,449 DAS. 36 month lease with 10,500 miles/year. Security deposit waived. Taxes, tags, and documentation fee due at signing. **Total Savings includes all available rebates and average dealer discount. All offers include $2,000 Holiday Bonus Certificates that may or may not still be available. Expires 1/2/2018 See dealer for details.';
		}
		if(document.URL.indexOf("ford-edge.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*17MY Edge. AWD SEL 200A. MSRP $34,680. Lease for $225/mo w/ $3,33 DAS. 36 month lease with 10,500 miles/year. **Includes all available rebates and average dealer discount. Security deposit waived.Taxes, tags, and documentation fee due at signing. **Total Savings includes all available rebates and average dealer discount. Expires 1/2/2018. See dealer for details.';
		}
	}

}
// END - Haldeman Ford Allentown



// START - Haldeman Ford Kutztown Vehicles

if(document.domain == "www.haldemanfordkutztown.com"){

if(document.URL.indexOf("ford-escape.htm") >= 0){ 
document.getElementById('BitMoto-FordEscapeLease').innerHTML = '179';
document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '2679';
document.getElementById('BitMoto-FordEscapeCash').innerHTML = '1,500';
document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '<sup>1</sup>2018 FWD SE 200A. MSRP $26,600. Lease for $199/mo w/ $2,599 DAS. 36 month lease with 10,500 miles/year. Taxes & fees extra.  Includes $750 Renewal or Conquest Rebate. Security deposit waived.  <sup>2</sup>2018 FWD SE 200A. Not everyone will qualify for financing. Includes Lease/Conquest Rebate. Must qualify through FMCC. <sup>3</sup>2017 FWD SE 200A. Includes all available rebates including Lease/Conquest Rebate plus average dealer discount. Expires 1/31/2017 See dealer for details.';
}

if(document.querySelector('#BitMoto-FordFusionLease') !== null)  {document.getElementById('BitMoto-FordFusionLease').innerHTML = '179';}
if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  {document.getElementById('BitMoto-FordFusionDAS').innerHTML = '2699';}
if(document.querySelector('#BitMoto-FordFusionCash') !== null)  {document.getElementById('BitMoto-FordFusionCash').innerHTML = '2,000';}
if(document.querySelector('#BitMoto-FordFusionSavings') !== null)  {document.getElementById('BitMoto-FordFusionSavings').innerHTML = '6,431';}
if(document.querySelector('#BitMoto-FordFusionYear') !== null)  {document.getElementById('BitMoto-FordFusionYear').innerHTML = '2017';}
if(document.URL.indexOf("ford-fusion.htm") >= 0){ 
document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '<sup>1</sup>FWD SE 200A. MSRP $25710. Lease for $179/mo w/ $3,639 DAS. 36 month lease with 10,500 miles/year. Taxes & fees extra.  Includes 2.0L/2.7L Engine Cash Rebate. Security deposit waived. <sup>2</sup>Not everyone will qualify for financing. Includes all available rebates including 2.0L/2.7L Engine Cash Rebate. Must qualify through FMCC. <sup>3</sup>FWD SE. Total savings includes all available rebates plus 2.0L/2.7L Engine Cash. Expires 1/31/2017 See dealer for details.';
}

if(document.URL.indexOf("ford-focus.htm") >= 0){ 
document.getElementById('BitMoto-FordFocusLease').innerHTML = '139';
document.getElementById('BitMoto-FordFocusDAS').innerHTML = '2449';
document.getElementById('BitMoto-FordFocusCash').innerHTML = '2,000';
document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '<sup>1</sup>2017 4DR SE 200A w/AUTO. MSRP $20,145. Lease for $121/mo w/ $2,585 DAS. 36 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. <sup>2</sup>2017 4DR SE 200A w/AUTO. Not everyone will qualify for financing. Must qualify through FMCC.  <sup>3</sup>2017 4DR SE 200A w/AUTO. Total savings includes all available rebates plus average dealer discount. Expires 1/31/2017. See dealer for details.';
}

if(document.URL.indexOf("ford-explorer.htm") >= 0){ 
document.getElementById('BitMoto-FordExplorerLease').innerHTML = '229';
document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '3352';
//document.getElementById('BitMoto-FordExplorerCash').innerHTML = '1,000';
document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '<sup>1</sup>4WD XLT 202A. MSRP $43,145. Lease for $279/mo w/ $4,679 DAS. 39 month lease with 10,500 miles/year. Taxes & fees extra.  Includes $750 Lease/Conquest Rebate. Security deposit waived. <sup>2</sup>4WD XLT 202A. Not everyone will qualify for financing. Includes Lease Renewal/Conquest Rebate. Must qualify through FMCC. <sup>3</sup>4WD XLT 202A. Total savings includes all available rebates including Lease Renewal/Conquest Rebate plus average dealer discount. Expires 1/31/2017 See dealer for details.';
}

if(document.querySelector('#BitMoto-FordF150Lease') !== null)  {document.getElementById('BitMoto-FordF150Lease').innerHTML = '249';}
if(document.querySelector('#BitMoto-FordF150DAS') !== null)  {document.getElementById('BitMoto-FordF150DAS').innerHTML = '2959';}
if(document.querySelector('#BitMoto-FordF150Savings') !== null)  {document.getElementById('BitMoto-FordF150Savings').innerHTML = '9963';}
if(document.URL.indexOf("ford-f150.htm") >= 0){ 
document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '<sup>1</sup>2018 F150 SuperCab STX. MSRP $43,205. Lease for $249/mo w/ $3,289 DAS. 36 month lease with 10,500 miles/year. Taxes & fees extra. Includes $500 Military Rebate. Security deposit waived. <sup>2</sup>2018 MY F150. Not everyone will qualify for financing. Includes all available rebates. Must qualify through FMCC. <sup>3</sup>2018 Supercrew XLT. Total savings includes all available rebates and average dealer discount. Expires 1/31/2017. See dealer for details.';
}

if(document.URL.indexOf("ford-edge.htm") >= 0){ 
document.getElementById('BitMoto-FordEdgeLease').innerHTML = '259';
document.getElementById('BitMoto-FordEdgeDAS').innerHTML = '3149';
document.getElementById('BitMoto-FordEdgeSavings').innerHTML = '4,024';
document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '<sup>1</sup>2017 AWD SEL 200A. MSRP $34680. Lease for $249/mo w/ $3,229 DAS. 24 month lease with 10,500 miles/year. Taxes & fees extra.  Includes $750 Lease Renewal/Conquest Rebate. Security deposit waived. Must qualify through FMCC. <sup>2</sup>2017 AWD SEL 200A. Not everyone will qualify for financing. Includes Lease Renewal/Conquest Rebate. Must qualify through FMCC. <sup>3</sup>2017 AWD SEL 200A. Total savings includes all available rebates plus Lease Renewal/Conquest Rebate and average dealer discount. Expires 1/31/2017. See dealer for details.';
}

}

// START - Haldeman Ford Kutztown
if(document.domain == "www.haldemanfordkutztown.com"){

if(document.URL.indexOf("4x4month.htm") >= 0){
	var url = "https://www.strunkmedia.com/bitmoto/haldeman-ford-kutztown/4x4-month/";
	if(typeof IE_fix != "undefined") // IE8 and lower fix to pass the http referer
	{
		document.write("redirecting..."); // Dont remove this line or appendChild() will fail cuz it is called before document.onload to make the redirect fast as possible. No one will see this text, is only a tech fix.
		var referLink = document.createElement("a");
		referLink.href = url;
		document.body.appendChild(referLink);
		referLink.click();
	}
	else { window.location.replace(url); } // All other browsers
	}
	
ga('create', 'UA-18505744-11', 'auto');


}
// End - Haldeman Ford Kutztown

// END - Haldeman Ford Kutztown Vehicles



// -------- END ------------ INDIVIDUAL FORD DEALER VEHICLES ------------------




// -------- START ---------- INDIVIDUAL SUBARU DEALER VEHICLES ----------------

// START - Miller Subaru Lumberton
if(document.domain == "www.millersubaru.com"){

	if(document.querySelector('#BitMoto-SubaruOutbackLease') !== null)  { document.getElementById('BitMoto-SubaruOutbackLease').innerHTML = '227'; }
	if(document.querySelector('#BitMoto-SubaruOutbackDAS') !== null)  { document.getElementById('BitMoto-SubaruOutbackDAS').innerHTML = '1,749'; }
	if(document.querySelector('#BitMoto-SubaruOutbackRate') !== null)  { document.getElementById('BitMoto-SubaruOutbackRate').innerHTML = '0'; }
	if(document.querySelector('#BitMoto-SubaruOutbackMonths') !== null)  { document.getElementById('BitMoto-SubaruOutbackMonths').innerHTML = '48'; }
	if(document.querySelector('#BitMoto-SubaruOutbackMSRP') !== null)  { document.getElementById('BitMoto-SubaruOutbackMSRP').innerHTML = '25,645'; }
	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  { document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*VIN: H3415302. Model Code: HDB-01. MSRP $27,266. PS, PB, auto, 4dr, 4cyl, air, splash guards, all weather floor mats, tonneau cover, mirror compass. Total due at signing: $1,150 cash or trade equity down. 36 month closed end lease. 10,000 miles per year. 15¢ per mile over. LEV $18,537, TOP $8,172. $0 security deposit. Tax, tags and $289 doc fee additional. Offer expires 6/30/17. Special financing available on select vehicles. For qualified buyers only. Special financing rates cannot be combined with any other incentive. See dealer for complete details.'; }
	
	if(document.querySelector('#BitMoto-SubaruImprezaLease') !== null)  { document.getElementById('BitMoto-SubaruImprezaLease').innerHTML = '179'; }
	if(document.querySelector('#BitMoto-SubaruImprezaDAS') !== null)  { document.getElementById('BitMoto-SubaruImprezaDAS').innerHTML = '1,899'; }
	if(document.querySelector('#BitMoto-SubaruImprezaRate') !== null)  { document.getElementById('BitMoto-SubaruImprezaRate').innerHTML = '0.9'; }
	if(document.querySelector('#BitMoto-SubaruImprezaMonths') !== null)  { document.getElementById('BitMoto-SubaruImprezaMonths').innerHTML = '39'; }
	if(document.querySelector('#BitMoto-SubaruImprezaMSRP') !== null)  { document.getElementById('BitMoto-SubaruImprezaMSRP').innerHTML = '18,395'; }
	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  { document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = 'MSRP $19,215 (incl. $820 freight charge). Net cap cost of $17,550 (incl. $595 acq. fee). Total monthly payments $6,444. Lease end purchase option is $11,529. Must take delivery from retailer stock by May 31, 2017. Other leases available on other models. Cannot be combined with any other incentives. Special lease rates extended to well-qualified buyers. Subject to credit approval, vehicle insurance approval & vehicle availability. Not all buyers may qualify. Payments may be higher in some states. Net cap cost & monthly payment excludes tax, license, title, registration, retailer fees, options, insurance & the like. Retailer participation may affect final cost. At lease end, lessee responsible for vehicle maintenance/repairs not covered by warranty, excessive wear/tear, 15 cents/mile over 12,000 miles/year and $300 disposition fee. Lessee pays personal property and ad valorem taxes (where applies) & insurance. Offer not available in Hawaii. See participating retailer for details.'; }
	
	if(document.querySelector('#BitMoto-SubaruForesterLease') !== null)  { document.getElementById('BitMoto-SubaruForesterLease').innerHTML = '227'; }
	if(document.querySelector('#BitMoto-SubaruForesterDAS') !== null)  { document.getElementById('BitMoto-SubaruForesterDAS').innerHTML = '1,729'; }
	if(document.querySelector('#BitMoto-SubaruForesterRate') !== null)  { document.getElementById('BitMoto-SubaruForesterRate').innerHTML = '0'; }
	if(document.querySelector('#BitMoto-SubaruForesterMonths') !== null)  { document.getElementById('BitMoto-SubaruForesterMonths').innerHTML = '48'; }
	if(document.querySelector('#BitMoto-SubaruForesterMSRP') !== null)  { document.getElementById('BitMoto-SubaruForesterMSRP').innerHTML = '22,595'; }
	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  { document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*VIN: HG574268. Model Code: HFA-01. MSRP $24,134. 4dr, 4cyl, 6 speed, PS, PB, ABS, air. Due at signing: $1,000 cash or trade equity down. 36 month closed end lease. 10,000 miles per year. 15¢ per mile over. LEV $15,687. TOP $8,172. $0 security deposit. Tax, tags and $289 doc fee additional. Offer expires 6/30/17. Special financing available on select vehicles. For qualified buyers only. Special financing rates cannot be combined with any other incentive. See dealer for complete details.'; }

	if(document.querySelector('#BitMoto-SubaruLegacyLease') !== null)  { document.getElementById('BitMoto-SubaruLegacyLease').innerHTML = '227'; }
	if(document.querySelector('#BitMoto-SubaruLegacyDAS') !== null)  { document.getElementById('BitMoto-SubaruLegacyDAS').innerHTML = ''; }
	if(document.querySelector('#BitMoto-SubaruLegacyRate') !== null)  { document.getElementById('BitMoto-SubaruLegacyRate').innerHTML = '0'; }
	if(document.querySelector('#BitMoto-SubaruLegacyMonths') !== null)  { document.getElementById('BitMoto-SubaruLegacyMonths').innerHTML = '48'; }
	if(document.querySelector('#BitMoto-SubaruLegacyMSRP') !== null)  { document.getElementById('BitMoto-SubaruLegacyMSRP').innerHTML = '21,995'; }
	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  { document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*VIN: H3042753. Model Code: HAB-02. MSRP $23,859. PS, PB, auto, 4dr, 4cyl, air. Total due at signing: $1,000 cash or trade equity down. 36 month closed end lease. 10,000 miles per year. 15¢ per mile over. LEV $14,534 TOP $8,172. $0 security deposit. Tax, tags and $289 doc fee additional. Offer expires 6/30/17. Special financing available on select vehicles. For qualified buyers only. Special financing rates cannot be combined with any other incentive. See dealer for complete details.'; }

}
// END - Miller Subaru Lumberton


// Chevrolet Vehicle Pages
// All Vehicles
if(document.getElementById('BitMoto-ChevroletDisclaimerDate') !== null)  {
document.getElementById('BitMoto-ChevroletDisclaimerDate').innerHTML = '3/31/2017';
}
if(document.getElementById('BitMoto-ChevySalesImage') !== null)  {
//https://storage.googleapis.com/bitmoto/dealers/chevrolet/outten-allentown/images/2017/cost-less.jpg
document.getElementById('BitMoto-ChevySalesImage').src = 'https://storage.googleapis.com/bitmoto/dealers/chevrolet/outten-allentown/images/2017/cost-less.jpg';
}
if(document.getElementById('BitMoto-ChevyCurrentSaleURL') !== null)  {
document.getElementById('BitMoto-ChevyCurrentSaleURL').href = '#';
}
// Cruze
if(document.getElementById('BitMoto-ChevroletCruzeSavings') !== null)  {
document.getElementById('BitMoto-ChevroletCruzeSavings').innerHTML = '$4,500';
}
if(document.getElementById('BitMoto-ChevroletCruzeLease') !== null)  {
document.getElementById('BitMoto-ChevroletCruzeLease').innerHTML = '89';
}
if(document.getElementById('BitMoto-ChevroletCruzeDAS') !== null)  {
document.getElementById('BitMoto-ChevroletCruzeDAS').innerHTML = '0';
}
if(document.getElementById('BitMoto-ChevroletCruzeMSRP') !== null)  {
document.getElementById('BitMoto-ChevroletCruzeMSRP').innerHTML = '16,975';
}



// ------------- All Subaru Vehicles ------------

if(document.getElementById('BitMoto-SubaruDisclaimerDate') !== null)  {
document.getElementById('BitMoto-SubaruDisclaimerDate').innerHTML = '6/30/17';
}

if(document.getElementById('BitMoto-SubaruCurrentSaleSmallBanner') !== null)  {
//https://storage.googleapis.com/bitmoto/dealers/all/images/general/top-banner-subaru.jpg
document.getElementById('BitMoto-SubaruCurrentSaleSmallBanner').src = 'https://storage.googleapis.com/bitmoto/dealers/all/images/general/top-banner-subaru.jpg';
}

if(document.getElementById('BitMoto-SubaruCurrentSaleURL') !== null)  {
// Use # if no available sales page
document.getElementById('BitMoto-SubaruCurrentSaleURL').href = '#';
}

// END - Subaru Vehicles




// All Websites

// This hides broken image icons if image url is broken
if(document.getElementById('bitmoto') !== null) {
document.addEventListener("DOMContentLoaded", function(event) {
   document.getElementById('bitmoto').querySelectorAll('img').forEach(function(img){
  	img.onerror = function(){this.style.visibility='hidden';};
   })
});
};



// START Event Tracking for GA and FB

if(document.querySelector('form.ddc-form-default > button.ui-button-submit') !== null)  {
var devEl = document.querySelector('form.ddc-form-default > button.ui-button-submit');
devEl.addEventListener("click", function() {ga('send', 'event', 'bitmoto-form', 'bitmoto-submit'); fbq('track', 'Lead'); } );
}

if(document.querySelector('div.inventory-detail-pricing > ul.has-eprice > span.ePrice') !== null)  {
var devEl = document.querySelector('div.inventory-detail-pricing > ul.has-eprice > span.ePrice');
devEl.addEventListener("click", function() {ga('send', 'event', 'bitmoto-form', 'bitmoto-submit'); fbq('track', 'ePrice'); } );
}

if(document.querySelector('div.ddc-span4 > div.inventory-detail-pricing') !== null)  {
var devEl = document.querySelector('div.ddc-span4 > div.inventory-detail-pricing');
devEl.addEventListener("click", function() {ga('send', 'event', 'bitmoto-form', 'bitmoto-submit'); fbq('track', 'Lead'); } );
}

if(document.querySelector('li.cstm-test-drive') !== null)  {
var devEl = document.querySelector('li.cstm-test-drive');
devEl.addEventListener("click", function() {ga('send', 'event', 'bitmoto-form', 'bitmoto-submit'); fbq('track', 'TestDrive'); } );
}

if(document.querySelector('li.cstm-credit-app') !== null)  {
var devEl = document.querySelector('li.cstm-credit-app');
devEl.addEventListener("click", function() {ga('send', 'event', 'bitmoto-form', 'bitmoto-submit'); fbq('track', 'CreditApp'); } );
}

// END Event Tracking for GA and FB

// START Event Tracking for GA and FB

// Directions Page Submission
if(document.querySelector('div.directions-form > form > fieldset > .ui-button-submit') !== null)  {
var devEl = document.querySelector('div.directions-form > form > fieldset > .ui-button-submit');
devEl.addEventListener("click", function() { ga('send', 'event', 'BitMoto Directions', 'Submit', 'BitMoto'); fbq('track', 'Directions'); } );
}

// VDP - Check Availability (1st click)
if(document.querySelector('div.inventory-detail-pricing > ul > li > span.ePrice > a') !== null)  {
var devEl = document.querySelector('div.inventory-detail-pricing > ul > li > span.ePrice > a');
devEl.addEventListener("click", function() { ga('send', 'event', 'BitMoto VDP Lead', 'Click', 'BitMoto'); fbq('track', 'Lead'); } );
}

// VDP - Schedule Test Drive
if(document.querySelector('div.links-list a[href*="schedule-form"]') !== null)  {
var devEl = document.querySelector('div.links-list a[href*="schedule-form"]');
devEl.addEventListener("click", function() { ga('send', 'event', 'BitMoto VDP Schedule Test Drive', 'Click', 'BitMoto'); fbq('track', 'Lead'); } );
}

// VDP - Request More Info
if(document.querySelector('div.links-list a[href*="lead-form"]') !== null)  {
var devEl = document.querySelector('div.links-list a[href*="lead-form"]');
devEl.addEventListener("click", function() { ga('send', 'event', 'BitMoto VDP Request More Info', 'Click', 'BitMoto'); fbq('track', 'Lead'); } );
}

// SRP - Lead Button
if(document.querySelector('div.pricing-area a[data-href*="eprice-form"]') !== null)  {
var devEl = document.querySelector('div.pricing-area a[data-href*="eprice-form"]');
devEl.addEventListener("click", function() { ga('send', 'event', 'BitMoto SRP Lead', 'Click', 'BitMoto'); fbq('track', 'Lead'); } );
}

// Contact Forms
if(document.querySelector('div.contact-form form button.ui-button-submit') !== null)  {
var devEl = document.querySelector('div.contact-form form button.ui-button-submit');
devEl.addEventListener("click", function() { ga('send', 'event', 'BitMoto Contact Form', 'Submit', 'BitMoto'); fbq('track', 'Lead'); } );
}

// Parts Leads
if(document.querySelector('div.parts-lead form button.ui-button-submit') !== null)  {
var devEl = document.querySelector('div.parts-lead form button.ui-button-submit');
devEl.addEventListener("click", function() { ga('send', 'event', 'BitMoto Parts Request', 'Submit', 'BitMoto'); fbq('track', 'Lead'); } );
}

// Manufacturer Coupons
if(document.querySelector('a.print-coupon') !== null)  {
var devEl = document.querySelector('a.print-coupon');
devEl.addEventListener("click", function() { ga('send', 'event', 'BitMoto Coupons', 'Click', 'BitMoto'); fbq('track', 'Coupon'); } );
}

// BitMoto Coupons
if(document.querySelector('a[href*="print"]') !== null)  {
var devEl = document.querySelector('a[href*="print"]');
devEl.addEventListener("click", function() { ga('send', 'event', 'BitMoto Coupons', 'Click', 'BitMoto'); fbq('track', 'Coupon'); } );
}


// Coccia Lincoln Facebook Black Label Page

// END Event Tracking for GA and FB



// START - Google Sheets API

// END - Google Sheets API
