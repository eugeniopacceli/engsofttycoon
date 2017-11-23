buttonToOpenPopUp("#devils_money", "showMeTheDevilsMoney.html", "#devilsMoneyMenu");
$("#capital_atual").html("R$ " + empresa.capital.toFixed(2));

for(let value in empresa.balanco){
    $("#capital_atual").append(value);
}