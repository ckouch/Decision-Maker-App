// var money = document.getElementById("money").value;
// var hotorcold = document.getElementById("hotorcold").value;
// console.log(money + hotorcold);
var decision;
function createDecision(){
    var money = document.getElementById("money").value;
    var hotorcold = document.getElementById("hotorcold").value;
    if (money < 500) decision = "Stay home and get a job";
    else if (money >= 500 && money <= 1500){
        var num = Math.floor(Math.random() * 2);
        decision = "You should go to ";
        if (hotorcold == "hot"){
            var place = ["Atlanta", "Jacksonville"];
            decision += place[num];
        }
        else if (hotorcold == "cold"){
            var place = ["Minneapolis", "Maine"];
            decision += place[num];
        }
    }
    else{
        var num = Math.floor(Math.random() * 2);
        decision = "You should go to ";
        if (hotorcold == "hot"){
            var place = ["Miami", "Los Angeles"];
            decision += place[num];
        }
        else if (hotorcold == "cold"){
            var place = ["Boston", "Seattle"];
            decision += place[num];
        }
    }
    console.log(decision);
    document.getElementById("output").innerHTML = decision;
}




// console.log(createDecision(money, hotorcold));

