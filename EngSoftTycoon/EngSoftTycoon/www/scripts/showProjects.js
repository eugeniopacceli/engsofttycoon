

function initializeProjectsList() {
    $("#listProjects").html("");
    for (var p of projetos) {
        $("#listProjects").append(p.html());
    }
    initializeList("#projectsPopUp", setActive);
}

initializeProjectsList();

var active = null;

function setActive(item) {
    active = $(item).attr("data-id");
}

$("#projectsPopUp #addProject").click(function () {
    var selected = null;
    if (active == null)
        return;
    for (p of projetos) {
        if (p.id == active)
            selected = p;
    }

    projetos = projetos.filter(function (p) {
        return p != selected;
    });

    initializeProjectsList();
    empresa.addProject(selected);
});
