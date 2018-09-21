

//********************VARIABLES**************//

var title= "You can create and delete cards with javascript!";
document.getElementById("text").innerHTML = title;
var cont = 0;
var section1 = document.getElementById("section1");
var randomText = ["IT's your luky day!", 
                "Friday I'm in love!",
                "You are a looser...", 
                "Maybe next time",
                "You are the best thing",
                "Jesus, don't cry",
                "I'm in love whit a girl",
            "Rock me Baby",
        "Like a hurricane"];
//var newDivText = "I'm a new box number!!!";


//**************FUNCTIONS**************//


function createDiv(){
    var randNum = Math.floor((Math.random() * 8) + 1);
    var newDivText = randomText[randNum];
    console.log("create button clicked!!!!");
    cont = cont +1;
    console.log(cont);
    /*CREATE*/
    var createDiv = document.createElement("div");
    var createP = document.createElement("p");
    var createDivNum = document.createElement("div");
    var createDivNumP = document.createElement("p");
    /*SET*/
    createP.setAttribute("class","divText");
    createDivNum.setAttribute("class", "divNum");
    createDivNumP.setAttribute("class", "divNumP");
    createDiv.setAttribute("class", "newDiv"); 
    createDiv.setAttribute("id", "newId"+cont);
    document.querySelector("p").setAttribute("class", "ptext");
    createP.innerHTML = newDivText;
    createDivNumP.innerHTML = cont;
    createDiv.appendChild(createP);
    createDiv.appendChild(createDivNum);
    createDivNum.appendChild(createDivNumP);
    createDiv.appendChild(createDivNum);
    section1.appendChild(createDiv);
    
}
/*REMOVE*/
function removeDiv(){
    if(cont > 0){
        cont = cont-1;  
        console.log("remove button clicked!!!");
        console.log(cont);
        var  parentNav = document.getElementById("section1");
         var childElement = document.getElementById("newId"+(cont+1));
         console.log(childElement);
        parentNav.removeChild(childElement);
    }else{
    cont = 0;
    } 
}


