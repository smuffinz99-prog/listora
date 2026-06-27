/* Listora — Stripe Checkout
 * Pro plan: $6/month
 * Replace REPLACE_MONTHLY with your Stripe Payment Link URL.
 * Create at: dashboard.stripe.com → Payment Links → + New
 */
(function(){
  var MONTHLY_LINK = 'https://buy.stripe.com/fZu6oG26NaXAerp9zbb3q02';

  window.LISTORA_CHECKOUT = function(plan){
    var url = MONTHLY_LINK;
    if (!url || url.indexOf('REPLACE') !== -1){
      alert('Stripe not yet configured.\n\n1. Go to dashboard.stripe.com\n2. Create a product: "Listora Pro" at $6/month\n3. Create a Payment Link\n4. Paste the URL into pricing.js replacing REPLACE_MONTHLY');
      return;
    }
    window.location.href = url + '?prefilled_email=' + encodeURIComponent(window.LISTORA_EMAIL || '');
  };
})();
