class Empresa {
	constructor(nome) {
		this.capital = 0.0;
		this.funcionarios = new ListaTrabalhadores();
		this.projects = [];
		this.activeProjects = [];
		this.nome = nome;
		this.parcelas = [];
		this.balanco = []
	}

  subtrair_despesas() {
	  this.balanco.push(this.capital);
	  var salarios = 0;
	  for (var i = 0; i < this.funcionarios.len; ++i) {
		  var f = this.funcionarios.get(i);
		  salarios += f.salario;
		  this.capital -= f.salario;
	  }
	  this.balanco.push(-salarios);
	  var p = this.parcelas.pop();
	  if (p) {
		  this.capital -= p;
		  this.balanco.push(-p);
	  } else {
		  this.balanco.push(-0.0);
	  }
	  this.balanco.push(this.capital);
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
}
