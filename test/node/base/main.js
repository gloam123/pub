var say = require('./hello')
var fs = require('fs')

say("XiaoMing");

fs.readFile('./data.txt', null, function(err, data) {
    if (err) {
        console.log("err:" + err)
    } else {
        console.log("succees:" +data)
    }
});

