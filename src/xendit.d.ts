
import { EWalletService } from './ewallet';
import { CustomerService } from './customer';

declare class Xendit {
  constructor(opts: XenditOptions);
   
  EWallet: typeof EWalletService;
  
  Customer: typeof CustomerService; 
}
export = Xendit;
