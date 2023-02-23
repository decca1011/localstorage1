
function test(){
//retrivewing data
var uid=document.getElementById("username").value;
var pwd=document.getElementById('password').value
var eml=document.getElementById('email').value

alert(uid + pwd + eml);
// storing data

var user =localStorage.setItem('uid',uid);
var pass =localStorage.setItem('pwd',pwd);
var em   =localStorage.setItem('eml',eml);

// retreiving stored data and using it for calculation
var user =localStorage.getItem('uid',uid);
var pass =localStorage.getItem('pwd',pwd);
var em   =localStorage.getItem('eml',eml);

var a, b, c;
a='deepak'
b=12345;
c='deepa@gmail.com';

if(a==user && b==pass && c==eml)
{
    alert('login succesful')
}
else{
    alert('invalid detail')
}
}
