var money = document.getElementById("money").value;
var hotorcold = document.getElementById("hotorcold").value;
var decision = "You should go to";
function createDecision(money, hotorcold){
    if (money < 500) decision = "Stay home and get a job";
    else if (money >= 500 && money <= 1500){
        var num = Math.floor(Math.random() * 2);
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
        if (hotorcold == "hot"){
            var place = ["Miami", "Los Angeles"];
            decision += place[num];
        }
        else if (hotorcold == "cold"){
            var place = ["Boston", "Seattle"];
            decision += place[num];
        }
    }
    return decision;
}


document.getElementById("output").innerHTML = createDecision(money, hotorcold);

console.log(createDecision(money, hotorcold));

