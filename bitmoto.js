// Devs JS for Bitmoto Clients

// Outten | Carman | Coccia | Pacifico | Gilboy


// Outten Chevy Allentown
if(document.domain == "www.outtenchevyallentown.com"){

}



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



// Coccia Lincoln Wilkes-Barre
if(document.domain == "www.coccialincoln.com"){

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


// Gilboy Ford Whitehall
if(document.domain == "www.gilboyford.com"){

}




// START - Ford Vehicles

	if(document.querySelector('#BitMoto-FordEscapeLease') !== null)  { document.getElementById('BitMoto-FordEscapeLease').innerHTML = '165'; }
	if(document.querySelector('#BitMoto-FordEscapeDAS') !== null)  { document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '3740'; }
	if(document.querySelector('#BitMoto-FordEscapeMonths') !== null)  { document.getElementById('BitMoto-FordEscapeMonths').innerHTML = '60'; }
	if(document.querySelector('#BitMoto-FordEscapeMSRP') !== null)  { document.getElementById('BitMoto-FordEscapeMSRP').innerHTML = '23,850'; }
	if(document.querySelector('#BitMoto-FordEscapeRate') !== null)  { document.getElementById('BitMoto-FordEscapeRate').innerHTML = '0'; }
	if(document.querySelector('#BitMoto-FordEscapeCash') !== null)  { document.getElementById('BitMoto-FordEscapeCash').innerHTML = '1500'; }
	
	if(document.querySelector('#BitMoto-FordFusionLease') !== null)  { document.getElementById('BitMoto-FordFusionLease').innerHTML = '165'; }
	if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  { document.getElementById('BitMoto-FordFusionDAS').innerHTML = '3620'; }
	if(document.querySelector('#BitMoto-FordFusionRate') !== null)  { document.getElementById('BitMoto-FordFusionRate').innerHTML = '0'; }
	if(document.querySelector('#BitMoto-FordFusionMonths') !== null)  { document.getElementById('BitMoto-FordFusionMonths').innerHTML = '72'; }
	if(document.querySelector('#BitMoto-FordFusionMSRP') !== null)  { document.getElementById('BitMoto-FordFusionMSRP').innerHTML = '22,120'; }
	if(document.querySelector('#BitMoto-FordFusionCash') !== null)  { document.getElementById('BitMoto-FordFusionCash').innerHTML = '1,500'; }

if(document.URL.indexOf('ford-focus.htm') >= 0 && document.querySelector('.Line3') !== null ) {
	document.getElementsByClassName('Line3')[0].style.display = 'none';
}
	
	if(document.querySelector('#BitMoto-FordFocusLease') !== null)  { document.getElementById('BitMoto-FordFocusLease').innerHTML = '149'; }
	if(document.querySelector('#BitMoto-FordFocusDAS') !== null)  { document.getElementById('BitMoto-FordFocusDAS').innerHTML = '2599'; }
	if(document.querySelector('#BitMoto-FordFocusMonths') !== null)  { document.getElementById('BitMoto-FordFocusMonths').innerHTML = '60'; }
	if(document.querySelector('#BitMoto-FordFocusMSRP') !== null)  { document.getElementById('BitMoto-FordFocusMSRP').innerHTML = '16,775'; }
	if(document.querySelector('#BitMoto-FordFocusRate') !== null)  { document.getElementById('BitMoto-FordFocusRate').innerHTML = '0'; }
	if(document.querySelector('#BitMoto-FordFocusCash') !== null)  { document.getElementById('BitMoto-FordFocusCash').innerHTML = '1,000'; }
	
	if(document.querySelector('#BitMoto-FordF150Lease') !== null)  { document.getElementById('BitMoto-FordF150Lease').innerHTML = '259'; }
	if(document.querySelector('#BitMoto-FordF150DAS') !== null)  { document.getElementById('BitMoto-FordF150DAS').innerHTML = '3579'; }
	if(document.querySelector('#BitMoto-FordF150Months') !== null)  { document.getElementById('BitMoto-FordF150Months').innerHTML = '60'; }
	if(document.querySelector('#BitMoto-FordF150MSRP') !== null)  { document.getElementById('BitMoto-FordF150MSRP').innerHTML = '27,380'; }
	if(document.querySelector('#BitMoto-FordF150Rate') !== null)  { document.getElementById('BitMoto-FordF150Rate').innerHTML = '1.9'; }
	if(document.querySelector('#BitMoto-FordF150Cash') !== null)  { document.getElementById('BitMoto-FordF150Cash').innerHTML = '3,000'; }
	
	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '229'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '3499'; }
	if(document.querySelector('#BitMoto-FordExplorerMonths') !== null)  { document.getElementById('BitMoto-FordExplorerMonths').innerHTML = '60'; }
	if(document.querySelector('#BitMoto-FordExplorerMSRP') !== null)  { document.getElementById('BitMoto-FordExplorerMSRP').innerHTML = '31,660'; }
	if(document.querySelector('#BitMoto-FordExplorerRate') !== null)  { document.getElementById('BitMoto-FordExplorerRate').innerHTML = '0'; }
	if(document.querySelector('#BitMoto-FordExplorerCash') !== null)  { document.getElementById('BitMoto-FordExplorerCash').innerHTML = '1,000'; }
	
	if(document.querySelector('#BitMoto-FordEdgeLease') !== null)  { document.getElementById('BitMoto-FordEdgeLease').innerHTML = '269'; }
	if(document.querySelector('#BitMoto-FordEdgeDAS') !== null)  { document.getElementById('BitMoto-FordEdgeDAS').innerHTML = '3268'; }
	if(document.querySelector('#BitMoto-FordEdgeMonths') !== null)  { document.getElementById('BitMoto-FordEdgeMonths').innerHTML = '60'; }
	if(document.querySelector('#BitMoto-FordEdgeMSRP') !== null)  { document.getElementById('BitMoto-FordEdgeMSRP').innerHTML = '28,950'; }
	if(document.querySelector('#BitMoto-FordEdgeRate') !== null)  { document.getElementById('BitMoto-FordEdgeRate').innerHTML = '0'; }
	if(document.querySelector('#BitMoto-FordEdgeCash') !== null)  { document.getElementById('BitMoto-FordEdgeCash').innerHTML = '2,000'; }


// ------------- All Ford Vehicles ------------

if(document.getElementById('BitMoto-FordDisclaimerDate') !== null)  {
document.getElementById('BitMoto-FordDisclaimerDate').innerHTML = '10/31/17';
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

// START - Gilboy Ford Whitehall
if(document.domain == "www.gilboyford.com"){

	if(document.querySelector('#BitMoto-FordEscapeLease') !== null)  { document.getElementById('BitMoto-FordEscapeLease').innerHTML = '137'; }
	if(document.querySelector('#BitMoto-FordEscapeDAS') !== null)  { document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '3712'; }
	
	if(document.querySelector('#BitMoto-FordFusionLease') !== null)  { document.getElementById('BitMoto-FordFusionLease').innerHTML = '151'; }
	if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  { document.getElementById('BitMoto-FordFusionDAS').innerHTML = '3606'; }
	
	if(document.querySelector('#BitMoto-FordFocusLease') !== null)  { document.getElementById('BitMoto-FordFocusLease').innerHTML = '135'; }
	if(document.querySelector('#BitMoto-FordFocusDAS') !== null)  { document.getElementById('BitMoto-FordFocusDAS').innerHTML = '2585'; }
	
	if(document.querySelector('#BitMoto-FordF150Lease') !== null)  { document.getElementById('BitMoto-FordF150Lease').innerHTML = '224'; }
	if(document.querySelector('#BitMoto-FordF150DAS') !== null)  { document.getElementById('BitMoto-FordF150DAS').innerHTML = '3544'; }
	
	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '215'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '3485'; }
	
	if(document.querySelector('#BitMoto-FordEdgeLease') !== null)  { document.getElementById('BitMoto-FordEdgeLease').innerHTML = '255'; }
	if(document.querySelector('#BitMoto-FordEdgeDAS') !== null)  { document.getElementById('BitMoto-FordEdgeDAS').innerHTML = '3254'; }	

	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  {
		if(document.URL.indexOf("ford-fusion.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '2017 Fusion SE w/ Tech Package.Stock #  HR401628. MSRP $24720. Lease for $151/mo w/ $3,606 DAS. 36 month lease with 10,500 miles/year. Includes $500 Military Appreciation Bonus Cash, $500 College Student Purchase Program, and $500 First Responder Bonus Cash. Taxes & fees extra. Security deposit waived. Expires 10/31/2017 See dealer for details.';
		}
		if(document.URL.indexOf("ford-focus.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '2017 MY Focus. MSRP $20,145. Stock # HL336029. Lease for $135/mo w/ $2,585 DAS. 36 month lease with 10,500 miles/year. Includes $500 Military Appreciation Bonus Cash, $500 College Student Purchase Program, and $500 First Responder Bonus Cash. Taxes & fees extra. Security deposit waived. Expires 10/31/2017. See dealer for details.';
		}
		if(document.URL.indexOf("ford-escape.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '2017 MY Escape FWD SE. Stock #HUB85363. MSRP $25,995. Lease for $137/mo w/ $3,712 DAS. 36 month lease with 10,500 miles/year. Includes $500 Military Appreciation Bonus Cash, $500 College Student Purchase Program, and $500 First Responder Bonus Cash. Taxes & fees extra. Security deposit waived.  Expires 10/31/2017 See dealer for details.';
		}
		if(document.URL.indexOf("ford-explorer.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '2017 MY Explorer FWD Base. MSRP $32605. Lease for $215/mo w/ $3,485 DAS. 36 month lease with 10,500 miles/year. Includes $500 Military Appreciation Bonus Cash, $500 College Student Purchase Program, and $500 First Responder Bonus Cash. **Not everyone will qualify for financing. Includes all available rebates. Must qualify through FMCC. Taxes & fees extra. Security deposit waived. Expires 10/31/2017 See dealer for details.';
		}
		if(document.URL.indexOf("ford-f150.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '2017 MY F150 SuperCab XL Sport. MSRP $39105.  Lease for $224/mo w/ $3,544 DAS. 36 month lease with 10,500 miles/year. Includes $500 Military Appreciation Bonus Cash, $500 College Student Purchase Program, $500 First Responder Bonus Cash, and $750 F150 RCL Renewal Cash. **Not everyone will qualify for financing. Includes all available rebates. Must qualify through FMCC. Taxes & fees extra. Security deposit waived. Expires 10/31/2017. See dealer for details.';
		}
		if(document.URL.indexOf("ford-edge.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '2017 MY Edge AWD SEL. Stock # HBC13922. MSRP $34180. Lease for $255/mo w/ $3,254 DAS. 36 month lease with 10,500 miles/year. Includes $500 Military Appreciation Bonus Cash, $500 College Student Purchase Program, and $500 First Responder Bonus Cash. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. Expires 10/31/2017. See dealer for details.';
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
*/
	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '299'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '4799'; }
/*
	if(document.querySelector('#BitMoto-FordEdgeLease') !== null)  { document.getElementById('BitMoto-FordEdgeLease').innerHTML = '239'; }
	if(document.querySelector('#BitMoto-FordEdgeDAS') !== null)  { document.getElementById('BitMoto-FordEdgeDAS').innerHTML = '2500'; }	
*/
	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  {
		if(document.URL.indexOf("ford-fusion.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17MY Fusion. FWD SE 200A. MSRP $25,710. Lease for $185/mo w/ $2,950 DAS. 36 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. Expires 10/2/2017 See dealer for details.';
		}
		if(document.URL.indexOf("ford-focus.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17MY Focus. 4DR SE 200A w/AUTO. MSRP $20,145. Lease for $145/mo w/ $2,699 DAS. 36 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. Expires 10/2/2017. See dealer for details.';
		}
		if(document.URL.indexOf("ford-escape.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17 MY Escape. FWD SE 200A. MSRP $26,145. Lease for $186/mo w/ $2,999 DAS. 36 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. Expires 10/2/2017. See dealer for details.';
		}
		if(document.URL.indexOf("ford-explorer.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17MY Explorer XLT 4WD 202A. MSRP $43,145. Lease for $299/mo w/ $4,799 DAS. 36 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. Expires 10/31/2017';
		}
		if(document.URL.indexOf("ford-f150.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17MY F150 4x4 SuperCab XL Sport. 101A +861 w/ 2.7L EcoBoost. MSRP $41,090. Lease for $260/mo w/ $3,660 DAS. 36 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. Expires 10/2/2017. See dealer for details.';
		}
		if(document.URL.indexOf("ford-edge.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17MY Edge. AWD SEL 200A. MSRP $34,680. Lease for $255/mo w/ $3,254 DAS. 36 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. Expires 10/2/2017. See dealer for details.';
		}
	}

}
// END - Coccia Ford Wilkes-Barre


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


// START - Carman Ford New Castle
if(document.domain == "www.carman-ford.com"){

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

	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  {
		if(document.URL.indexOf("ford-fusion.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17MY Fusion. FWD SE 200A. MSRP $25,710. Lease for $199/mo w/ $2,975 DAS. 36 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. Expires 10/2/2017 See dealer for details.';
		}
		if(document.URL.indexOf("ford-focus.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17MY Focus. 4DR SE 200A w/AUTO. MSRP $20,145. Lease for $145/mo w/ $2,699 DAS. 36 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. Expires 10/2/2017. See dealer for details.';
		}
		if(document.URL.indexOf("ford-escape.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17 MY Escape. FWD SE 200A. MSRP $26,145. Lease for $186/mo w/ $2,999 DAS. 36 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. Expires 10/2/2017. See dealer for details.';
		}
		if(document.URL.indexOf("ford-explorer.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17MY Explorer. FWD Base 100A. MSRP $32,605. Lease for $229/mo w/ $3,499 DAS. 36 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. Expires 10/2/2017 See dealer for details.';
		}
		if(document.URL.indexOf("ford-f150.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17MY F150 4x4 SuperCab XL Sport. 101A +861 w/ 2.7L EcoBoost. MSRP $41,090. Lease for $259/mo w/ $3,685 DAS. 36 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. Expires 10/2/2017. See dealer for details.';
		}
		if(document.URL.indexOf("ford-edge.htm") >= 0){
			document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '17MY Edge. AWD SEL 200A. MSRP $34,680. Lease for $269/mo w/ $3,268 DAS. 36 month lease with 10,500 miles/year. Taxes & fees extra. Security deposit waived. Must qualify through FMCC. Expires 10/2/2017. See dealer for details.';
		}
	}
	
}
// END - Carman Ford New Castle


// -------- END ------------ INDIVIDUAL FORD DEALER VEHICLES ------------------



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
