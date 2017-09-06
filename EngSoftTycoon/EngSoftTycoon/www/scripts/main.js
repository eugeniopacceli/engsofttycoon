﻿// Para uma introdução ao modelo em branco, consulte a seguinte documentação:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar códigos no carregamento de página em dispositivos/emuladores Android ou que simulam o Cordova: inicie o aplicativo, defina os pontos de interrupção 
// e execute "window.location.reload()" no Console do JavaScript.
(function () {
    "use strict";
    var playerName = "";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Nosso código aqui
        $("#saveButton").click(function () {
            playerName = $("#playerNameInput").val();
            console.log(playerName);
            $("#welcomeAlert").hide();
        });
    };

    function onPause() {
        // TODO: este aplicativo foi suspenso. Salve o estado do aplicativo aqui.
    };

    function onResume() {
        // TODO: este aplicativo foi reativado. Restaure o estado do aplicativo aqui.
    };
} )();