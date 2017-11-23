buttonToOpenPopUp("#newEmployee", "showAddEmployee.html", "#addEmployee");
buttonToOpenPopUp("#employeeToProject", "employeeProject.html", "#employeeProject");

var activeEmployeeToProject = null;

var list = $("#employeesPopUp .list-group");

list.empty();
for(let c of empresa.funcionarios.membros){
	list.append(c.html);
}

initializeList("#employeesPopUp", function(item){
	activeEmployeeToProject = $(item).attr("data-id");
});
