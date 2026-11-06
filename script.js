function calcular() {
  var nome = document.getElementById("nome").value;
  var peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
  var altura = parseFloat(document.getElementById("altura").value.replace(",", "."));

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    document.getElementById("resultado").innerHTML = "Preencha peso e altura corretamente.";
    return;
  }

  var imc = peso / (altura * altura);
  var classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc < 35) {
    classificacao = "Obesidade grau I";
  } else if (imc < 40) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III";
  }

  document.getElementById("resultado").innerHTML =
    nome + ", seu IMC é " + imc.toFixed(1) + "<br>" + classificacao;
}
