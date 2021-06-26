//here i want to display the date in indian format and the name of month
//get the classes with class name "date"
var date_list=document.getElementsByClassName("date");
//create an array of names of month
var month=["Jan","Feb","Mar","April","June","July","Aug","Sep","Oct","Nov","Dec"];
var t;
var date;
//loop through date element and store the date in variable t
for(let i=0;i<date_list.length;i++){
    t=date_list[i].innerHTML;
    //create javascript date of the obtained string date
    date=new Date(t);
    //finally add the date in the desired format to the element
    date_list[i].innerHTML= ":"+date.getDate()+" "+month[date.getMonth()]+" "+date.getFullYear();
}
//i want to display an icon for the different categories that are selected
//so, i create an object with keys as category name and value as class name of the icon
var categories={
    "Work":"fas fa-briefcase",
    "Travel":"fas fa-route",
    "Home":"fas fa-house-user",
    "Study":"fas fa-book-reader",
    "Shop":"fas fa-shopping-cart",
    "Cooking":"fas fa-cookie-bite",
    "Music":"fas fa-music",
    "Play":"fas fa-running",
    "Exercise":"fas fa-burn",
    "Health":"fas fa-clinic-medical",
    "Private":"fas fa-user-lock"
};
var text;
//i get all the elemets with the same classname as the "cat" and store it in a variable
var category=document.getElementsByClassName("cat");
// get length of the array
var n=category.length;
var i=0
while(i<n){
    //get the category name which the innertext of the element and store it in a var
    text=category[i].innerText;
    //now change the classname of the element based on the category
    category[i].className=categories[text];
    //console.log(text,category[i]);
    i++;
}
