//TENTAR SEPARAR JINDIVIDUAL() DE INSERÇÃO NAS BOLAS.

//Jogo Individual
function jindividual(max) {
  var principal = [];
  qnum = document.getElementById('qnum').value;

  for (j = 0; j < qnum; j++) {
    //Sorteia o número;
    var atual = Math.floor(Math.random() * max + 1);
    //compara o atual com os dados já existentes.
    //comparando um a um:
    for (i = 0; i < principal.length; i++) {
      //se for igual, sorteia novo e zera contagem
      //(No primeiro número i=principal, ou seja, acrescenta ao vetor diretamente.)
      if (atual === principal[i]) {
        atual = Math.floor(Math.random() * max + 1);
        i = -1;
      }
      //Se não for igual passa ao próximo (i++)
    }

    //Não encontrou correspondência, acrescenta o valor ao vetor...
    principal[i] = atual;
    //...e passa a próxima posição (j++)
  }

  //...colocando em ordem crescente
  principal = principal.sort(function (a, b) {
    return a - b;
  });

  //...colocando dentro das bolas
  //linha com um jogo completo
  var ext = document.createElement('DIV');
  ext.setAttribute(
    'style',
    'background-color:none; margin:10px; width:100%;float:left;'
  );
  for (i = 0; i < qnum; i++) {
    //...criando cada bola ...
    var x = document.createElement('DIV');
    //...e a caixa dentro das bolas para formatação;;;
    var p = document.createElement('DIV');
    //...e finalmente o texto.
    var t = document.createTextNode(principal[i]);

    //estilizando
    x.setAttribute(
      'style',
      'text-align:center;background-color: #cdcdcd;height:50px;width:50px;border-radius:100%;float:left;margin:10px;'
    );
    p.setAttribute(
      'style',
      'background-color: #cdcdcd;height:10px;width:10px;border-radius:00%;float:left;position:relative;top:12px;left:18px;vertical-align:+15px;'
    );
    //Montando o conjunto.
    ext.appendChild(x);
    x.appendChild(p);
    p.appendChild(t);
    document.getElementById('ext').appendChild(ext);
  }
}
/******************************************************************************/
function megaSena() {
  //Escolhendo a quantidade de jogos...
  document.getElementById('ext').innerHTML = '';
  qjog = document.getElementById('qjog').value;
  for (n = 1; n <= qjog; n++) {
    jindividual(60);
  }
}

/******************************************************************************/
//Reset
function resetar() {
  document.getElementById('ext').innerHTML = '';
  document.getElementById('qjog').value = '4';
  document.getElementById('qnum').value = '6';
}
