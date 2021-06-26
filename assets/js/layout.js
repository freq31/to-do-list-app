//displaying current date and day using javascript
const d=new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//display it under the header tag
var header=document.getElementsByTagName("header")[0];
//since month is of range 0-11 i add +1 to it and then convert back to string
//days are also numeric so,i use the index to display elements from the array"days"
header.innerHTML+=d.getDate()+"-"+(parseInt(d.getMonth())+1).toString()+"-"+d.getFullYear()+"  "+days[d.getDay()];