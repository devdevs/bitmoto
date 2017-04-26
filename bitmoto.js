// Devs JS for Bitmoto Clients

// Outten | Carman | Coccia


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

	if(document.querySelector('#BitMoto-FordEscapeLease') !== null)  { document.getElementById('BitMoto-FordEscapeLease').innerHTML = '252'; }
	if(document.querySelector('#BitMoto-FordEscapeDAS') !== null)  { document.getElementById('BitMoto-FordEscapeDAS').innerHTML = '274'; }
	if(document.querySelector('#BitMoto-FordEscapeMonths') !== null)  { document.getElementById('BitMoto-FordEscapeMonths').innerHTML = '60'; }
	
	if(document.querySelector('#BitMoto-FordFusionLease') !== null)  { document.getElementById('BitMoto-FordFusionLease').innerHTML = '257'; }
	if(document.querySelector('#BitMoto-FordFusionDAS') !== null)  { document.getElementById('BitMoto-FordFusionDAS').innerHTML = '257'; }
	if(document.querySelector('#BitMoto-FordFusionRate') !== null)  { document.getElementById('BitMoto-FordFusionRate').innerHTML = '0'; }
	if(document.querySelector('#BitMoto-FordFusionMonths') !== null)  { document.getElementById('BitMoto-FordFusionMonths').innerHTML = '72'; }
	if(document.querySelector('#BitMoto-FordFusionMSRP') !== null)  { document.getElementById('BitMoto-FordFusionMSRP').innerHTML = '22,610'; }
	if(document.querySelector('#BitMoto-FordFusionCash') !== null)  { document.getElementById('BitMoto-FordFusionCash').innerHTML = '1,000'; }
	
	if(document.querySelector('#BitMoto-FordFocusLease') !== null)  { document.getElementById('BitMoto-FordFocusLease').innerHTML = '200'; }
	if(document.querySelector('#BitMoto-FordFocusDAS') !== null)  { document.getElementById('BitMoto-FordFocusDAS').innerHTML = '200'; }
	if(document.querySelector('#BitMoto-FordFocusMonths') !== null)  { document.getElementById('BitMoto-FordFocusMonths').innerHTML = '72'; }
	
	if(document.querySelector('#BitMoto-FordF150Lease') !== null)  { document.getElementById('BitMoto-FordF150Lease').innerHTML = '277'; }
	if(document.querySelector('#BitMoto-FordF150DAS') !== null)  { document.getElementById('BitMoto-FordF150DAS').innerHTML = '1,999'; }
	if(document.querySelector('#BitMoto-FordF150Months') !== null)  { document.getElementById('BitMoto-FordF150Months').innerHTML = '60'; }
	
	if(document.querySelector('#BitMoto-FordExplorerLease') !== null)  { document.getElementById('BitMoto-FordExplorerLease').innerHTML = '329'; }
	if(document.querySelector('#BitMoto-FordExplorerDAS') !== null)  { document.getElementById('BitMoto-FordExplorerDAS').innerHTML = '329'; }
	if(document.querySelector('#BitMoto-FordExplorerMonths') !== null)  { document.getElementById('BitMoto-FordExplorerMonths').innerHTML = '60'; }
	
	if(document.querySelector('#BitMoto-FordEdgeLease') !== null)  { document.getElementById('BitMoto-FordEdgeLease').innerHTML = '369'; }
	if(document.querySelector('#BitMoto-FordEdgeDAS') !== null)  { document.getElementById('BitMoto-FordEdgeDAS').innerHTML = '369'; }
	if(document.querySelector('#BitMoto-FordEdgeMonths') !== null)  { document.getElementById('BitMoto-FordEdgeMonths').innerHTML = '60'; }
	

// ------------- All Ford Vehicles ------------

if(document.getElementById('BitMoto-FordDisclaimerDate') !== null)  {
document.getElementById('BitMoto-FordDisclaimerDate').innerHTML = '5/17/17';
}

if(document.getElementById('BitMoto-FordCurrentSaleSmallBanner') !== null)  {
//https://storage.googleapis.com/bitmoto/dealers/ford/ford/WellBeatAnyPrice.jpg
document.getElementById('BitMoto-FordCurrentSaleSmallBanner').src = 'https://storage.googleapis.com/bitmoto/dealers/ford/ford/sales/2017/perfect-match-april-500.jpg';
}

if(document.getElementById('BitMoto-FordCurrentSaleURL') !== null)  {
// Use # if no available sales page
document.getElementById('BitMoto-FordCurrentSaleURL').href = '/perfect-match.htm';
}

// END - Ford Vehicles




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
