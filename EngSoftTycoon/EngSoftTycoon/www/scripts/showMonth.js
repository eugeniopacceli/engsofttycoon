console.log("show month");
console.log(empresa.balanco);

var capital_final = empresa.balanco.pop(),
	juros = empresa.balanco.pop(),
	salarios = empresa.balanco.pop(),
	capital_inicial = empresa.balanco.pop();

$("#capital_inicial").html(capital_inicial.toFixed(2));
$("#juros").html(juros.toFixed(2));
$("#salarios").html(salarios.toFixed(2));
$("#capital_final").html(capital_final.toFixed(2));

empresa.balanco = [];
