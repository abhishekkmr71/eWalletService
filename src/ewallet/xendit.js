// For actual usage, this should be require('xendit-node')
const Xendit = require('../xendit');
const dotenv = require('dotenv');

dotenv.config();

const x = new Xendit({
  secretKey: "xnd_development_NJ8l1L9cYKqVeuntGDI6EJkBs18pWXgVxjmkWz1bBUuJlmF8UnReElh7jDuoQkTq",
  xenditURL: "https://yourwebsite.com/callback",
});

module.exports = x;
