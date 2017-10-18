buttonToOpenPopUp("#newEmployee", "showAddEmployee.html", "#addEmployee");

initializeList("#employeesPopUp", function(){});

var list = $("#employeesPopUp .list-group");

for(c of empresa.funcionarios.membros){
	list.append(c.html);
}

function showItemDetails(item){
	active = $(item).attr("data-id");
	console.log(active);
}