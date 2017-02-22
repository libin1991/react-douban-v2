/**
 * Created by QIXIN on 2017/2/22.
 */

var express = require('express');
var router = express.Router();

// login
router.post('/', (req, res) => {
  console.log('login...');
  console.log(req.body);
  let user = {
    username: req.body.username,
    password: req.body.password,
  };
  
  res.send(JSON.stringify(req.body));
});

module.exports = router;