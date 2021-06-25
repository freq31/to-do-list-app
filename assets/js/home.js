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
var text=[];
var t;
var category=document.getElementsByClassName("cat");
var n=category.length;
var i=0
while(i<n){
    text[i]=category[i].innerText;
    //console.log(categories[text[i]]);
    //t="<i class="+categories[text[i]]+"></i>";
    category[i].innerText="";
    i++;
}

i=0;
while(i<n){
    category[i].className=categories[text[i]];
    i++;
}

