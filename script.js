//1
let a= document.getElementById("text")
a.innerHTML = "New text!";
console.log(a)
//2
let b= document.getElementsByTagName("h1")
b.innerHTML="Welcome";
console.log(b)
//3
let c=document.getElementsByClassName("box")
c.innerHTML="Class Box";
console.log(c)
//4
let d= document.getElementById("change")
d.innerHTML="Hello World"
console.log(d)
//5
const button = document.getElementById('replaceText');
  const div = document.getElementById('content');


  function changeContent() {
    div.innerHTML = 'Welcome to Elevation academy';
  }

  button.addEventListener('click', changeContent);

  //6
  document.getElementById("heading").style.color = "Red";

  //7
  function changeFlexDirection() {
    document.getElementById("main").style.flexDirection="column";
 }

 //9
 function clock(){
  let date = new Date();
  let hours=date.getHours();
  let minutes=date.getMinutes();
  let seconds=date.getSeconds();

  if(hours>12){
      hours=hours-12;
  }

console.log(hours,minutes,seconds);

let hrs=document.getElementById("hrs")
hrs.innerText=hours;
let mins=document.getElementById("mins")
mins.innerText=minutes;
let secs=document.getElementById("secs")
secs.innerText=seconds;
}
setInterval(()=>{
  clock()
},1000)
let date=new Date();
let hours=date.getHours();

if(hours>=12){
  let ampm=document.getElementById("ampm")
  ampm.innerText="PM";
}
else if(hours<12){
  let ampm=document.getElementById("ampm")
  ampm.innerText="AM"
}