function initializeEmployeeProjectsList() {
    $("#listProjects").html("");
    for (var p of empresa.projects) {
        $("#listProjects").append(p.html());
    }
    initializeList("#employeeProject", setActive);
}

initializeEmployeeProjectsList();

var active = null;

function setActive(item) {
    active = $(item).attr("data-id");
}

$("#employeeProject #setToUser").click(function () {
    var selected = null;
    if (active == null)
        return;
    for (p of empresa.projects) {
        if (p.id == active)
            selected = p;
    }

    var selEmployee = empresa.funcionarios.getById(activeEmployeeToProject);
    selEmployee.project = selected;
});
