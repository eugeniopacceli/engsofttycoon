class Desenvolvedor extends Empregado {

  constructor() {
    super('Desenvolvedor');
    // Atributos de aprendizado
    this.c = Math.random();
    this.java = Math.random();
    this.documentacao = Math.random();

    // Atributos pessoais
    this.aprendizado = Math.random();
    this.produtividade = Math.random();
    this.organizacao = Math.random();
    this.entrosamento = Math.random();

    var pretensao_salarial = Math.random();
    this.salario = (this.c + this.java)*1500
      + this.documentacao*500
      + this.aprendizado*1000;
      + this.organizacao*500
      + this.entrosamento*200;
    this.salario = 1500 + this.salario*(1.0 + pretensao_salarial/3.0);
    this.salario = Math.ceil(this.salario);
    this.salario = this.salario - (this.salario%50);

  }

  get atributos() {
    return [this.c, this.java, this.documentacao, this.aprendizado,
      this.produtividade, this.organizacao, this.entrosamento, this.salario];
  }
}
