const categories={
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

let category=document.getElementsByClassName("cat");

for(let i in category){
    //console.log(i,category[i]);
    let text=category[i].innerText;
    category[i].setAttribute("class", categories[text]);
    //console.log(i,text);
    //console.log(i,category[i]);
}
