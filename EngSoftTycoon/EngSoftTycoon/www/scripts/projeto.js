var projectTypes = [ "CRUD", "Aplicativo Mobile", "Sistema web", "Site", "Aplicativo Desktop"];

var projectCount = 0;

class Project{
 
    constructor(nameStr, descriptionStr){
        this.name = nameStr;
        this.description = descriptionStr;
        this.workers = [];
        this.cost = 0;
        this.progress = 0;
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
        
    }

    static get projectCount(){ return projectCount; }

    generateName(){
        projectCount++;
        return projectTypes[irandom( O, projectTypes.length)] + projectCount;
    }
}

