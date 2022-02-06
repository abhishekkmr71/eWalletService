const express = require('express');
const x = require('./src/ewallet/xendit');
const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());

const { EWallet, Customer } = x;
const ew = new EWallet({});
const c = new Customer({});
 
// xenditURL =   'https://api.xendit.co';

// this.opts = { secretKey:'sd', xenditURL:xenditURL };

// this.EWallet = EWalletService._constructorWithInjectedXenditOpts(this.opts);
const books = [
{title: 'Harry Potter', id: 1}, 
{title: 'Twilight', id: 2},
{title: 'Lorien Legacies', id: 3}
]
 
 //READ Request Handlers
app.get('/', (req, res) => {
    res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');
    });
     
    app.get('/api/books', (req,res)=> {
    res.send(books);
    });
 
//CREATE Request Handler
app.post('/api/create', (req, res)=> {
 
    ew.createPayment({
        externalID: Date.now().toString(), 
        amount: 1,
        phone: '081234567890',
        ewalletType: EWallet.Type.OVO,
      })
        .then(r => {
          // eslint-disable-next-line no-console
          console.log('created payment detail:', r);
          res.send(r);
        }).catch(e => {
            console.error(e); // eslint-disable-line no-console
            process.exit(1);
          });
    });
 
 
 
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));