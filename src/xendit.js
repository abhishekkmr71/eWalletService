 
const { EWalletService } = require('./ewallet'); 
const { CustomerService } = require('./customer'); 
// const Errors = require('./errors');

function Xendit(options) {
  let {
    secretKey, // customer's secret API key
    xenditURL, // should there be a need to override API base URL
  } = options;

  // default values of opts
  xenditURL = xenditURL || 'https://api.xendit.co';

  this.opts = { secretKey, xenditURL };
 
  this.EWallet = EWalletService._constructorWithInjectedXenditOpts(this.opts);
  
  this.Customer = CustomerService._constructorWithInjectedXenditOpts(this.opts);
  
}
 

module.exports = Xendit;
