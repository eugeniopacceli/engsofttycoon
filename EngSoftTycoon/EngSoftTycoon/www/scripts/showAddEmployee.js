buttonToOpenPopUp("#newEmployee", "showAddEmployee.html", "#addEmployee");

// todas as variáveis do main tão aqui

var list = $("#addEmployee .list-group");
var active = null;

list.empty();

for(c of candidatos.membros){
	list.append(c.html);
}

function showItemDetails(item){
	active = $(item).attr("data-id");
	console.log(active);
}

initializeList("#addEmployee", showItemDetails);

$("#addEmployee #add").click(function(){
	if (active == null)
		return;
	var candidate;
	for (c of candidatos.membros) {
		if (c.id == active)
			candidate = c;
	}
	empresa.funcionarios.add(candidate);
	console.log(empresa.funcionarios);
});
