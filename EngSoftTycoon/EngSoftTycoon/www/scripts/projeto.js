var projectTypes = [ "CRUD", "Aplicativo Mobile", "Sistema web", "Site", "Aplicativo Desktop"];

var projectCount = 0;
var _projectsId = 0;

class Project{
 
    constructor() {
        this.id = _projectsId++;
        this.name = this.generateName();
        this.description = this.generateName();
        this.workers = [];
        this.difficulty = irandom(1000,100000);
        this.progress = 0;
        this.deadline = irandom(1,12);
        this.status = "notStarted";
    }

    get progressString(){ return "" + this.status + "%"; }

    addWorker(worker){
        this.workers.push(worker);
    }

    removeWorkerById(workerId){
        var indexToRemove = -1;
        for(index in this.workers){
            if(this.workers[index].id == workerId){
                indexToRemove = index;
                braek;
            }
        }
        if(indexToRemove != -1){
            this.workers.splice(indexToRemove,1);
        }
    }

    increaseProgress(amount){
        if(this.progress > 100){
            return;
        }
        this.progress += amount;
    }

    sumOfCompetencies(){
        for(var worker of this.workers){
            for(var skill of worker.skills){

            }
        }
    }

    static get projectCount(){ return projectCount; }

    generateName(){
        projectCount++;
        return projectTypes[irandom(0, projectTypes.length)] + " " + projectCount;
    }

    static generateRandom(number){
        var array = [];
        for(var i = 0; i < number; i++){
            array.push(new Project());
        }
        return array;
    }

    html(){
        return '<a href="#" class="list-group-item list-group-item-action flex-column align-items-start" data-id="' + this.id + '">\
                    <div class="d-flex w-100 justify-content-between">\
                        <h5 class="mb-1">' + this.name + '</h5>\
                        <small class="text-muted">' + this.description + '</small>\
                    </div>\
                    <p class="mb-1"> Pontos de função: ' + this.difficulty + '</p>\
                    <small>Prazo estimado: ' + this.deadline + ' meses</small>\
                </a>';
    }
}

