//콘솔에서 입력하기

var args = process.argv;
console.log(args[2]);
console.log('A');
console.log('B');
if (args[2] === '1') {
    console.log('C1');
} else {
    console.log('C2');
}
console.log('D');


//터미널 실행 결과

/*
PS C:\Users\user\Desktop\web1_html_internet-master> node syntex/conditional4.js sangmin k0085
sangmin
A
B
C2
D


PS C:\Users\user\Desktop\web1_html_internet-master> node syntex/conditional4.js 1
1
A
B
C1
D


PS C:\Users\user\Desktop\web1_html_internet-master> node syntex/conditional4.js 2
2
A
B
C2
D
*/