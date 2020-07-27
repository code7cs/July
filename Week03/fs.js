var fs = require("fs");
// async
// fs.readFile("TestFile.txt", 'utf-8',function (err, data) {
//     if (err){
//         throw err;
//     }
//     console.log(data);
// })

// sync
var data = fs.readFileSync('TestFile.txt','utf-8');
console.log(data);
