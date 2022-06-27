//node에서 파일목록 읽어내기

var testFolder = './data';
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist) {
    console.log(filelist);
})

/*
PS C:\Users\user\Desktop\web1_html_internet-master> node .\nodejs\readdir.js
[ 'CSS', 'HTML', 'JavaScript' ]
*/