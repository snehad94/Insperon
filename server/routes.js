var express = require('express');
var router = express.Router();

let apiKey = 'cdXSNxSr_NVnVf35DvgO-aXDw-CEt9nErXp6ptq_beSZb9a-y3mpTsyBj0a57FoSkoCD4-3QakTfWzWYa_SV1ux5e9gbROwTKEbZiO5P-yS16L5wInOSgpwtZ98yXHYx';
const yelp = require('yelp-fusion');

const client = yelp.client(apiKey);



router.get('/api/app/:data', (req, res, next) => {
    var query = req.params.data;
    console.log('boop',query);
    client.search({
      term:'Four Barrel Coffee',
      location: 'san francisco, ca'
    }).then(response => {
      res.send(response);
    }).catch(e => {
      console.log(e);
    });
});



module.exports = router;
