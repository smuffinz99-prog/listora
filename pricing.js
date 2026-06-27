/* Listora — Stripe Checkout
 * Replace STRIPE_MONTHLY_LINK and STRIPE_LIFETIME_LINK with your actual
 * Stripe Payment Link URLs after creating products in the Stripe dashboard.
 */
(function(){
  var LINKS = {
    monthly:  'https://buy.stripe.com/REPLACE_MONTHLY',
    lifetime: 'https://buy.stripe.com/REPLACE_LIFETIME',
  };

  window.LISTORA_CHECKOUT = function(plan){
    var url = LINKS[plan];
    if (!url || url.indexOf('REPLACE') !== -1){
      alert('Stripe not yet configured. To accept payments:\n1. Create products in your Stripe dashboard\n2. Replace the placeholder URLs in pricing.js');
      return;
    }
    window.location.href = url + '?prefilled_email=' + encodeURIComponent(window.LISTORA_EMAIL || '');
  };
})();
