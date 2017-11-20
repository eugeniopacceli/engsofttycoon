class Empresa {
  constructor(nome) {
    this.capital = 0.0;
    this.funcionarios = new ListaTrabalhadores();
    this.projects = [];
    this.activeProjects = [];
    this.nome = nome;
  }

  subtrair_despesas() {
    for (var i = 0; i < this.funcionarios.len; ++i) {
      var f = this.funcionarios.get(i);
      this.capital -= f.salario;
    }
  }
}
