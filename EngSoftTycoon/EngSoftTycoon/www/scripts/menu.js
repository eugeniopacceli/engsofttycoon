class Menu {
  constructor(parent, id, titulo) {
    var main_div, dialog, content, cabecalho;

    var html_text = '<div class="modal fade" id=' + id + '/>';
    main_div = $(html_text).appendTo(parent);

    html_text = '<div class="modal-dialog" role="document" />';
    dialog = $(html_text).appendTo(main_div);

    html_text = '<div class="modal-content" />';
    content = $(html_text).appendTo(dialog);

    html_text = '<div class="modal-header" />';
    cabecalho = $(html_text).appendTo(content);

    html_text = '<h5 class="modal-title">'
      + titulo 
      + '</h5>'
      + '<button type="button" class="close" data-dismiss="modal">'
      +   '<span aria-hidden="true">&times;</span>'
      + '</button>';
    $(html_text).appendTo(cabecalho);

    html_text = '<div class="modal-body" />';
    this.corpo = $(html_text).appendTo(content);

    html_text = '<div class="modal-footer" />';
    this.rodape = $(html_text).appendTo(content);
  }

  adicionar_ao_corpo(conteudo) {
    $(conteudo).appendTo(this.corpo);
  }

  adicionar_ao_rodape(conteudo) {
    $(conteudo).appendTo(this.rodape);
  }
}
