
var decision;
var num;
var pic="assets/";
//create variables

// generate a random number between 0 and 1
function generateRandom(number){
    number = Math.floor(Math.random()*2);
    return number;
}


// update the screen
function reset(){
    document.getElementById("money").value = "";
    document.getElementById("hotorcold").value = "";
}


function createDecision(){

    // create two variables - money and hotorcold to store
    //the value of money and whether the user likes hot or cold weather
    var money = document.getElementById("money").value;
    var hotorcold = document.getElementById("hotorcold").value;

    pic = "assets/";
    if (money < 1){r
        decision = "Please input a number";
    }
    else if (money < 500){ 
        decision = "Stay home and get a job";
        pic += "best-cry-ever-cry.gif";
    }
    else if (money >= 500 && money <= 1500){
        num = generateRandom(num); // call function
        decision = "You should go to ";
        if (hotorcold == "hot"){
            var place = ["Atlanta, Georgia", "Jacksonville, Florida"];
            var picture = ["atlanta.jpg", "jacksonville.jpg"];
            decision += place[num]; //add place to the statement
            pic += picture[num]; // add the picture link to show
        }
        else if (hotorcold == "cold"){
            var place = ["Minneapolis, Minnesota", "Maine"];
            var picture = ["mineapollis.jpg", "maine.jpg"];
            decision += place[num];
            pic += picture[num];
        }
    }
    else{
        num = generateRandom(num);
        decision = "You should go to ";
        if (hotorcold == "hot"){
            var place = ["Miami, Florida", "Los Angeles, California"];
            var picture = ["miami.jpg", "la.jpg"];
            decision += place[num];
            pic += picture[num];
        }
        else if (hotorcold == "cold"){
            var place = ["Boston, Massachusettes", "Seattle, Washington"];
            var picture = ["boston.jpg", "seattle.jpg"];
            decision += place[num];
            pic += picture[num];
        }
    }
    // show the suggestion on the page
    document.getElementById("output").innerHTML = decision;
    if (money > 0) document.getElementById("pic").src = pic;
    //this make sure that there is no picture printed out if
    //there are no money input


    reset(); // call the function
}




// console.log(createDecision(money, hotorcold));

