var rodada = 1;
var matriz_jogo = Array(3);


matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);


matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

$(document).ready( function(){

  $('#btn_iniciar_jogo').click( function(){

    //validar apelidos
    if ( $('#entrada_apelido_jogador1').val() == '' ){
      alert('Apelido do Jogador 1 NÃO FOI PREENCHIDO!!!');
      return false;
    }

    if ( $('#entrada_apelido_jogador2').val() == '' ){
      alert('Apelido do Jogador 2 NÃO FOI PREENCHIDO!!!');
      return false;
    }

    //exibir apelidos
    $('#jogador1').html($('#entrada_apelido_jogador1').val());
    $('#jogador2').html($('#entrada_apelido_jogador2').val());

    //controlar visualização das div's
    $('#pagina_inicial').hide();
    $('#palco_jogo').show();

  });


  $('.jogada').click( function(){

    var id_click = this.id;

    $('#'+ id_click).off();

    jogada(id_click);

  });

  function jogada(id){

    var icone = '';
    var ponto = 0;

    if((rodada % 2) == 1){
      //alert('É a vez do Jogador 1!');
      ponto = -1;
      icone = 'url("imagens/marcacao_1.png")';

    }
    else{
      //alert('É a vez do Jogador 2!');
      ponto = 1;
      icone = 'url("imagens/marcacao_2.png")';
    }

    //inserindo icone
    $('#'+id).css('background-image', icone);


    var linha_coluna = id.split('-');

    matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

    verifica_combinacao();

    rodada++;
  }

  function verifica_combinacao(){

    //verifica na horizontal
    var pontos = 0;

    for (var i = 1; i <= 3 ; i++) {
      pontos = pontos + matriz_jogo['a'][i];
    }

    ganhador(pontos);

    pontos = 0;

    for (var i = 1; i <= 3 ; i++) {
      pontos = pontos + matriz_jogo['b'][i];
    }

    ganhador(pontos);

    pontos = 0;

    for (var i = 1; i <= 3 ; i++) {
      pontos = pontos + matriz_jogo['c'][i];
    }

    ganhador(pontos);

    //verifica na vertical
    pontos = 0;

    for(var l = 1; l <= 3; l++){

      pontos = 0;
      pontos = pontos + matriz_jogo['a'][l];
      pontos = pontos + matriz_jogo['b'][l];
      pontos = pontos + matriz_jogo['c'][l];

      ganhador(pontos);

    }

    //verifica na diagonal
    pontos = 0;
    pontos = pontos + matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
    ganhador(pontos);

    pontos = 0;
    pontos = pontos + matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
    ganhador(pontos);


  }

  function ganhador(pontos){

    if (pontos == -3){

      var jogada1 = $('#entrada_apelido_jogador1').val();
      alert( jogada1 + ' é o vencedor!!!');
      $('.jogada').off();

    }else if (pontos == 3) {

      var jogada2 = $('#entrada_apelido_jogador2').val();
      alert(jogada2 + ' é o vencedor!!!');
      $('.jogada').off();

    }

  }


});
