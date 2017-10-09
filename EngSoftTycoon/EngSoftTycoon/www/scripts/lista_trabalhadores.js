class ListaTrabalhadores {
  constructor(n) {
    this.membros = new Array();
    for (var i = 0; i < n; ++i) {
      var d = new Desenvolvedor();
      this.membros.push(d);
    }
  }

  add(empregado) {
    this.membros.push(empregado);
  }

  get len() {
    return this.membros.length;
  }

  get(i) {
    if (i >= this.membros.length)
      return false;
    return this.membros[i];
  }

  atualizar_html(elemento) {
    elemento.html('');
    for (var i = 0; i < this.membros.length; ++i) {
      var funcionario = this.membros[i];
      var div_linha, div_nome, div_botao, div_salario;

      div_linha = $('<div class="row" />').appendTo(elemento);

      div_botao = $('<div class="col-md-1" />').appendTo(div_linha);
      $('<i class="ion-thumbsup" ></i>').appendTo(div_botao)

      div_nome = $('<div class="col-md-4" />').appendTo(div_linha);
      $('<p>' + funcionario.nome + '</p>').appendTo(div_nome);

      div_salario = $('<div class="col-md-3" />').appendTo(div_linha);
      $('<p> R$' + funcionario.salario + ',00</p>').appendTo(div_salario);
    }
  }
}
