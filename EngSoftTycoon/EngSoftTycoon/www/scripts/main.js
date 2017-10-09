// Para uma introdução ao modelo em branco, consulte a seguinte documentação:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar códigos no carregamento de página em dispositivos/emuladores Android ou que simulam o Cordova: inicie o aplicativo, defina os pontos de interrupção 
// e execute "window.location.reload()" no Console do JavaScript.

var paused;
var candidatos = new ListaTrabalhadores;

(function () {
  "use strict";
  var playerName = "";

  document.addEventListener('deviceready', onDeviceReady.bind(this), false);

  init();

  function init() {
    $("#content").load("startMenu.html");
    paused = false;

    //candidatos = new Array();
    for (var i = 0; i < 3; ++i) {
      var d = new Desenvolvedor();
      candidatos.add(d);
      //candidatos.push(d);
    }

  }

  function onDeviceReady() {
    // Nosso código aqui
    init();
  };

  function onPause() {
    // TODO: este aplicativo foi suspenso. Salve o estado do aplicativo aqui.
  };

  function onResume() {
    // TODO: este aplicativo foi reativado. Restaure o estado do aplicativo aqui.
  };
})();

function start_game() {
  $("#content").load("mainPlayerScreen.html");
}

function contratar_funcionarios() {
  console.log("Contratando");
  var div_corpo = $("#popUp_func .modal-dialog .modal-body");
  candidatos.atualizar_html(div_corpo);
  //for (var i = 0; i < candidatos.length; ++i) {
  //  conteudo = '<div class="row" />';
  //  $(conteudo).appendTo(div_corpo);
  //}
}

function definir_novo_projeto() {
  console.log("Definindo novo projeto");
}

function parar_tempo() {
  if (!paused)
    $("#pausar_jogo_btn").addClass("ion-play").removeClass("ion-pause");
  else
    $("#pausar_jogo_btn").addClass("ion-pause").removeClass("ion-play");
  paused = !paused;
}

function fim_mes() {
}
