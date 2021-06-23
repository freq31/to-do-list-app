const d=new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var header=document.getElementsByTagName("header")[0];
header.innerHTML+=d.getDate()+"-"+(parseInt(d.getMonth())+1).toString()+"-"+d.getFullYear()+"  "+days[d.getDay()];