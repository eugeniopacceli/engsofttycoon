console.log("show month");
console.log(empresa.balanco);

var capital_final = empresa.balanco.pop(),
	juros = empresa.balanco.pop(),
	salarios = empresa.balanco.pop(),
	capital_inicial = empresa.balanco.pop();

$("#capital_inicial").html(capital_inicial);
$("#juros").html(juros);
$("#salarios").html(salarios);
$("#capital_final").html(capital_final);

$("#projectsReport").empty();
if(empresa.oldProjects.length == 0){
	$("#projectsReport").append("nda.");
}

for(let pj of empresa.oldProjects){
	$("#projectsReport").append(pj.name + " rendeu R$" + pj.revenue + "<br/>");
}

empresa.balanco = [];
