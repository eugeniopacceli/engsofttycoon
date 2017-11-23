class Empresa {
	constructor(nome) {
		this.capital = 0.0;
		this.funcionarios = new ListaTrabalhadores();
		this.projects = [];
		this.activeProjects = [];
		this.nome = nome;
		this.parcelas = [];
		this.balanco = [];
		this.oldProjects = [];
	}

  subtrair_despesas() {
	  this.balanco.push(this.capital);
	  var salarios = 0;
	  for (var i = 0; i < this.funcionarios.len; ++i) {
		  var f = this.funcionarios.get(i);
		  salarios += f.salario;
		  this.capital -= f.salario;
	  }
	  this.balanco.push((-salarios));
	  var p = this.parcelas.pop();
	  if (p) {
		  this.capital -= p;
		  this.balanco.push((-p));
	  } else {
		  this.balanco.push(-0.0);
	  }
	  this.balanco.push(this.capital);
	  if(this.capital < 0){
		  adicionar_emprestimo(-this.capital, 0.4);
	  }
  }
  adicionar_emprestimo(val, juros) {
	  this.capital += val;
	  var p = val*(1 + juros/100.0)/12.0;
	  for (var i = 0; i < 12; ++i)
		  if (this.parcelas[i])
			  this.parcelas[i] += p
		  else
			  this.parcelas.push(p);
	  //console.log(this.parcelas);
	  //console.log(this.parcelas[12]);
  }

  addProject(p) {
      this.projects.push(p);
  }

  computeDay(){
	for(let p of this.projects) {
        var total = 0;
        var employeesInProject = this.funcionarios.getByProject(p);
        for(let e of employeesInProject){
            for(let s of e.skills){
                total += s.skill;
            }
        }
        p.progress += Math.ceil((total / p.difficulty));
        if(p.progress >= 100){
            for(let e of employeesInProject){
                e.project = null;
			}
			this.capital += p.revenue;
			this.balanco.push(p.revenue);
			this.oldProjects.push(p);
        }
    }
    this.projects = this.projects.filter(function (p) {
        return p.progress < 100;
    });
  }

  getHtmlForProjectsStatus() {
	  var htmlList = "";
      for(let p of this.projects) {
		  var funcsString = "";
		  for(let e of this.funcionarios.getByProject(p)){
			funcsString += " | " + e.pnome + " " + e.unome;
		  }
          htmlList += '<div class="projectProgress"><h2>' + p.name + '</h2><p>' + p.description + ' ' + funcsString + '</p>\
              <div class="progress">\
                 <div class="progress-bar" role="progressbar" aria-valuenow="' + p.progress + '"\
                  aria-valuemin="0" aria-valuemax="100" style="width:' + p.progress + '%">\
                  ' + p.progress + '%\
              </div>\
          </div></div>';
      }
      return htmlList;
  }
}
