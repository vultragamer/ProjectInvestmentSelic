function funcaoCalcular() {
    let capital = document.getElementById("numero").value;
    let tempo = document.getElementById("tempo").value;
    let aux = Math.pow(1+0.1375, tempo);
    let montante =  capital * aux;
    
    let valor = montante - capital;
    let valor_2 = valor.toFixed(2);
    let montante_2 =montante.toFixed(2);
    let valor2_id = document.getElementById("valor");
    let montante2_id = document.getElementById("montante");

    valor2_id.textContent = "O lucro seria:"+valor_2;
    montante2_id.textContent = "O montante seria:" + montante_2;

  }

  document.getElementById("calcular").addEventListener("click", function() {
    document.getElementById("valor").style.display = "inline-block";
    
  });

  document.getElementById("calcular").addEventListener("click", function() {
    document.getElementById("montante").style.display = "inline-block";
    
  });

  function funcaoCalcular2(){
    let capitalPoupanca = document.getElementById("numero2").value;
    let tempoPoupanca = document.getElementById("tempo2").value;
    let aux2 = Math.pow(1+0.0617, tempoPoupanca);
    let montantePoupanca =  capitalPoupanca * aux2;

    let lucro = montantePoupanca - capitalPoupanca;
    let lucroCasaDecimal = lucro.toFixed(2);
    let montanteCasaDecimal =montantePoupanca.toFixed(2);


    let valor3_id = document.getElementById("valorPoupanca");
    let montante3_id = document.getElementById("montantePoupanca");
    
    valor3_id.textContent = "O lucro seria:"+ lucroCasaDecimal;
    montante3_id.textContent = "O montante seria:" + montanteCasaDecimal;


  }


  
  document.getElementById("calcular2").addEventListener("click", function() {
    document.getElementById("valorPoupanca").style.display = "inline-block";
    
  });


    document.getElementById("calcular2").addEventListener("click", function() {
      document.getElementById("montantePoupanca").style.display = "inline-block";
      
    });
  