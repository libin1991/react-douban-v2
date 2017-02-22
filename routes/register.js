/**
 * Created by QIXIN on 2017/2/22.
 */

var express = require('express');
var router = express.Router();

var User = require('../models/user');

// 用户注册
router.post('/', (req, res) => {

  let reqBody = req.body;
  let user = {
    username: reqBody.username,
    nickname: reqBody.nickname,
    password: reqBody.password
  };
  
  
  User.create(user, function () {
    console.log('A user create success...');
    
    
    res.send(JSON.stringify(user));
  });
  
});

module.exports = router;




