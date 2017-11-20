// Para uma introdução ao modelo em branco, consulte a seguinte documentação:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar códigos no carregamento de página em dispositivos/emuladores Android ou que simulam o Cordova: inicie o aplicativo, defina os pontos de interrupção 
// e execute "window.location.reload()" no Console do JavaScript.

var NOME_EMPRESA = 'ENGSOFT',
    NUMERO_CANDIDATOS = 10,
    TICK_INTERVALO_MS = 500;

var paused;
var candidatos;
var projetos;
var empresa;
var start_date = new Date();
var dia = start_date.getDate(),
	mes = start_date.getMonth(),
	ano = start_date.getFullYear();
var nome_meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
var duracao_meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

(function () {
    "use strict";
    var playerName = "";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    init();

    function init() {
        $("#content").load("startMenu.html");
    }

    function onDeviceReady() {
        init();
    };

    function onPause() {
        // TODO: este aplicativo foi suspenso. Salve o estado do aplicativo aqui.
    };

    function onResume() {
        // TODO: este aplicativo foi reativado. Restaure o estado do aplicativo aqui.
    };
})();

// Para lista do popup #id, executar itemClick para cada item dela clicado
function initializeList(id, itemClick){
	$(id + " .list-group a").click(function() {
		$(id + " .list-group a").removeClass("active");
		$(this).addClass("active");
		itemClick(this);
	});
}

function loadAndShowPopUp(loadUrl, popUpName) {
    $("#gameContent").load(loadUrl, function () {
        $(popUpName).modal('show');
    });
}

function buttonToOpenPopUp(button, loadUrl, popUpName) {
    $(button).click(function () {
        stopTime();
        $(".modal-backdrop.fade.show").remove(); // Fixes multiple pop ups background stack bug
        loadAndShowPopUp(loadUrl, popUpName);
    });
}

function setupStartButtons() {
    buttonToOpenPopUp("#employeesBtn", "showEmployees.html", "#employeesPopUp");
    buttonToOpenPopUp("#projectsBtn", "showProjects.html", "#projectsPopUp");
    buttonToOpenPopUp("#statusBtn", "showStatus.html", "#statusPopUp");
}

function start_game() {
    $("#content").load("mainPlayerScreen.html", setupStartButtons);
    paused = true;
    candidatos = new ListaTrabalhadores(NUMERO_CANDIDATOS);
    projetos = Project.generateRandom(5);
    setInterval(tick, TICK_INTERVALO_MS);
    empresa = new Empresa(NOME_EMPRESA);
}

function contratar_funcionarios() {
    console.log("Contratando");
    var div_corpo = $("#popUp_func .modal-dialog .modal-body");
    candidatos.atualizar_html(div_corpo);
}

function definir_novo_projeto() {
    console.log("Definindo novo projeto");
}

function stopTime() {
    paused = true;
    $("#pausar_jogo_btn").addClass("ion-play").removeClass("ion-pause");
}

function parar_tempo() {
    if (!paused)
        $("#pausar_jogo_btn").addClass("ion-play").removeClass("ion-pause");
    else
        $("#pausar_jogo_btn").addClass("ion-pause").removeClass("ion-play");
    paused = !paused;
}

function fim_mes() {
    empresa.subtrair_despesas();
    candidatos = new ListaTrabalhadores(NUMERO_CANDIDATOS);
    projetos = Project.generateRandom(5);
    console.log("FIM DO MÊS");
}

var tick_count = 0;
function tick() {
    if (paused)
        return;
    tick_count = tick_count % 30 + 1;
	dia += 1;
	if (dia > duracao_meses[mes]) {
		dia = 1;
		mes += 1;

        loadAndShowPopUp("showMonth.html", "#monthPopUp");
        parar_tempo();
        fim_mes();

		if (mes >= 12) {
			ano += 1;
			mes = 0;
		}
	}
	$("#showTime").html(dia + " " + nome_meses[mes] + " " + ano);
}
