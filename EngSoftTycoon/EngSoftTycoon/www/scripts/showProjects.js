
for(var p of projetos){
    $("#listProjects").append(p.html());
}

initializeList("#projectsPopUp", function(){});