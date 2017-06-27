// Devs JS for Bitmoto Clients

// Outten | Carman | Coccia | Pacifico


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

ga('create', 'UA-91075198-1', 'auto');

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




// START - Ford Vehicles

	if(document.querySelector('#BitMoto-FordEscapeLease') !== null)  { document.getElementById('BitMoto-FordEscapeLease').innerHTML = '179'; }
	if(document.querySelector('#BitMoto-FordEscapeDAS') !== null)  { document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '2679'; }
	if(document.querySelector('#BitMoto-FordEscapeMonths') !== null)  { document.getElementById('BitMoto-FordEscapeMonths').innerHTML = '60'; }
	if(document.querySelector('#BitMoto-FordEscapeMSRP') !== null)  { document.getElementById('BitMoto-FordEscapeMSRP').innerHTML = '23,750'; }
	
	if(document.querySelector('#BitMoto-FordFusionLease') !== null)  { document.getElementById('BitMoto-FordFusionLease').innerHTML = '175'; }
	if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  { document.getElementById('BitMoto-FordFusionDAS').innerHTML = '2699'; }
	if(document.querySelector('#BitMoto-FordFusionRate') !== null)  { document.getElementById('BitMoto-FordFusionRate').innerHTML = '0'; }
	if(document.querySelector('#BitMoto-FordFusionMonths') !== null)  { document.getElementById('BitMoto-FordFusionMonths').innerHTML = '72'; }
	if(document.querySelector('#BitMoto-FordFusionMSRP') !== null)  { document.getElementById('BitMoto-FordFusionMSRP').innerHTML = '22,610'; }
	if(document.querySelector('#BitMoto-FordFusionCash') !== null)  { document.getElementById('BitMoto-FordFusionCash').innerHTML = '2,000'; }
	
	if(document.querySelector('#BitMoto-FordFocusLease') !== null)  { document.getElementById('BitMoto-FordFocusLease').innerHTML = '139'; }
	if(document.querySelector('#BitMoto-FordFocusDAS') !== null)  { document.getElementById('BitMoto-FordFocusDAS').innerHTML = '2449'; }
	if(document.querySelector('#BitMoto-FordFocusMonths') !== null)  { document.getElementById('BitMoto-FordFocusMonths').innerHTML = '72'; }
	if(document.querySelector('#BitMoto-FordFocusMSRP') !== null)  { document.getElementById('BitMoto-FordFocusMSRP').innerHTML = '16,775'; }
	
	if(document.querySelector('#BitMoto-FordF150Lease') !== null)  { document.getElementById('BitMoto-FordF150Lease').innerHTML = '249'; }
	if(document.querySelector('#BitMoto-FordF150DAS') !== null)  { document.getElementById('BitMoto-FordF150DAS').innerHTML = '2959'; }
	if(document.querySelector('#BitMoto-FordF150Months') !== null)  { document.getElementById('BitMoto-FordF150Months').innerHTML = '60'; }
	if(document.querySelector('#BitMoto-FordF150MSRP') !== null)  { document.getElementById('BitMoto-FordF150MSRP').innerHTML = '27,110'; }
	
	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '229'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '3352'; }
	if(document.querySelector('#BitMoto-FordExplorerMonths') !== null)  { document.getElementById('BitMoto-FordExplorerMonths').innerHTML = '60'; }
	if(document.querySelector('#BitMoto-FordExplorerMSRP') !== null)  { document.getElementById('BitMoto-FordExplorerMSRP').innerHTML = '31,660'; }

	if(document.querySelector('#BitMoto-FordEdgeLease') !== null)  { document.getElementById('BitMoto-FordEdgeLease').innerHTML = '259'; }
	if(document.querySelector('#BitMoto-FordEdgeDAS') !== null)  { document.getElementById('BitMoto-FordEdgeDAS').innerHTML = '3149'; }
	if(document.querySelector('#BitMoto-FordEdgeMonths') !== null)  { document.getElementById('BitMoto-FordEdgeMonths').innerHTML = '60'; }
	if(document.querySelector('#BitMoto-FordEdgeMSRP') !== null)  { document.getElementById('BitMoto-FordEdgeMSRP').innerHTML = '22,950'; }


// ------------- All Ford Vehicles ------------

if(document.getElementById('BitMoto-FordDisclaimerDate') !== null)  {
document.getElementById('BitMoto-FordDisclaimerDate').innerHTML = '7/5/17';
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

// START - Coccia Ford Wilkes-Barre
if(document.domain == "www.cocciaford.com"){
/*
	if(document.querySelector('#BitMoto-FordEscapeLease') !== null)  { document.getElementById('BitMoto-FordEscapeLease').innerHTML = '199'; }
	if(document.querySelector('#BitMoto-FordEscapeDAS') !== null)  { document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '199'; }
	
	if(document.querySelector('#BitMoto-FordFusionLease') !== null)  { document.getElementById('BitMoto-FordFusionLease').innerHTML = '239'; }
	if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  { document.getElementById('BitMoto-FordFusionDAS').innerHTML = '239'; }
	
	if(document.querySelector('#BitMoto-FordFocusLease') !== null)  { document.getElementById('BitMoto-FordFocusLease').innerHTML = '188'; }
	if(document.querySelector('#BitMoto-FordFocusDAS') !== null)  { document.getElementById('BitMoto-FordFocusDAS').innerHTML = '188'; }
	
	if(document.querySelector('#BitMoto-FordF150Lease') !== null)  { document.getElementById('BitMoto-FordF150Lease').innerHTML = '299'; }
	if(document.querySelector('#BitMoto-FordF150DAS') !== null)  { document.getElementById('BitMoto-FordF150DAS').innerHTML = '299'; }
*/
}
// END - Coccia Ford Wilkes-Barre


// START - Pacifico Ford Philadelphia
if(document.domain == "www.pacifico.com"){

	if(document.querySelector('#BitMoto-FordEscapeLease') !== null)  { document.getElementById('BitMoto-FordEscapeLease').innerHTML = '165'; }
	if(document.querySelector('#BitMoto-FordEscapeDAS') !== null)  { document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '2825'; }
	
	if(document.querySelector('#BitMoto-FordFusionLease') !== null)  { document.getElementById('BitMoto-FordFusionLease').innerHTML = '185'; }
	if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  { document.getElementById('BitMoto-FordFusionDAS').innerHTML = '2715'; }
	
	if(document.querySelector('#BitMoto-FordFocusLease') !== null)  { document.getElementById('BitMoto-FordFocusLease').innerHTML = '137'; }
	if(document.querySelector('#BitMoto-FordFocusDAS') !== null)  { document.getElementById('BitMoto-FordFocusDAS').innerHTML = '2250'; }
	
	if(document.querySelector('#BitMoto-FordF150Lease') !== null)  { document.getElementById('BitMoto-FordF150Lease').innerHTML = '267'; }
	if(document.querySelector('#BitMoto-FordF150DAS') !== null)  { document.getElementById('BitMoto-FordF150DAS').innerHTML = '1999'; }

	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '198'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '3660'; }

	if(document.querySelector('#BitMoto-FordEdgeLease') !== null)  { document.getElementById('BitMoto-FordEdgeLease').innerHTML = '253'; }
	if(document.querySelector('#BitMoto-FordEdgeDAS') !== null)  { document.getElementById('BitMoto-FordEdgeDAS').innerHTML = '3155'; }

	if(document.querySelector('#BitMoto-ExtraDisclaimer') !== null)  { document.getElementById('BitMoto-ExtraDisclaimer').innerHTML = '*Stock #: M06627. MSRP $38,915. Lease for $267/mo w/ $1,999 DAS. *Stock #: P25655. MSRP $32,600. Lease for $198/mo w/ $3,660 DAS. *Stock #: E60699. MSRP $35,500. Lease for $253/mo w/ $3,155 DAS. *Stock #: S14958. MSRP $26,145. Lease for $165/mo w/ $2,825 DAS. *Stock #: D362944. MSRP $26,610. Lease for $185/mo w/ $2,715 DAS. *Stock #: B240668. MSRP $20,145. Lease for $137/mo w/ $2,250 DAS. 36 month lease with 10,500 miles/year. Taxes & Fees Extra. Includes $500 Owner Loyalty Rebate. Security deposit waived. **Includes $500 Owner Loyalty Rebate. Must qualify through FMCC. Expires 6/30/2017. See dealer for details.'; }

}
// END - Pacifico Ford Philadelphia


// -------- END ------------ INDIVIDUAL FORD DEALER VEHICLES ------------------


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

// END Event Tracking for GA and FB
