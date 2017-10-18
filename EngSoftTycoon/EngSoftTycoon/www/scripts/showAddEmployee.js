buttonToOpenPopUp("#newEmployee", "showAddEmployee.html", "#addEmployee");

// todas as variáveis do main tão aqui

var list = $("#addEmployee .list-group");
var active = null;

function fillList() {
    list = $("#addEmployee .list-group");
    list.empty();

    for(c of candidatos.membros){
          list.append(c.html);
    }
}

fillList();

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

        candidatos.membros = candidatos.membros.filter(function(c) {
          return c != candidate;
        });

	fillList();
	initializeList("#addEmployee", showItemDetails);

	empresa.funcionarios.add(candidate);

	console.log(empresa.funcionarios);
});
