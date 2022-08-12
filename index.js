let tinto = 0;
let branco = 0;
let rose = 0;

let botao = document.getElementById("botao");
let campo_total = document.getElementById("total");
let campo_tinto = document.getElementById("tinto");
let p_tinto = document.getElementById("perc_tinto");
let campo_branco = document.getElementById("branco");
let p_branco = document.getElementById("perc_branco");
let campo_rose = document.getElementById("rose");
let p_rose = document.getElementById("perc_rose");

campo_total.innerHTML = 0;
campo_tinto.innerHTML = 0;
p_tinto.innerHTML = "0%";
campo_branco.innerHTML = 0;
p_branco.innerHTML = "0%";
campo_rose.innerHTML = 0;
p_rose.innerHTML = "0%";

botao.addEventListener("click", inicio);

function inicio() {
  let tipo = window.prompt(
    "Qual tipo de vinho você quer incluir? (T - tinto | B - branco | R - Rose | F - Finalizar)"
  );

  switch (tipo) {
    case "T":
      let quantidade_tinto = Number(
        window.prompt("Qual a quantidade de garrafas de vinho tinto?")
      );
      tinto = tinto + quantidade_tinto;
      window.alert("Quantidade inserida no estoque!");
      inicio();
      break;
    case "B":
      let quantidade_branco = Number(
        window.prompt("Qual a quantidade de garrafas de vinho branco?")
      );
      branco = branco + quantidade_branco;
      window.alert("Quantidade inserida no estoque!");
      inicio();
      break;
    case "R":
      let quantidade_rose = Number(
        window.prompt("Qual a quantidade de garrafas de vinho rose?")
      );
      rose = rose + quantidade_rose;
      window.alert("Quantidade inserida no estoque!");
      inicio();
      break;
    case "F":
      window.alert("Encerrando operações");
      break;
    default:
      window.alert("Opção não reconhecida! Voltando...");
      inicio();
      break;
  }

  let total = tinto + branco + rose;
  let perc_tinto = (tinto / total) * 100;
  let perc_branco = (branco / total) * 100;
  let perc_rose = (rose / total) * 100;

  campo_total.innerHTML = total;
  campo_tinto.innerHTML = tinto;
  p_tinto.innerHTML = perc_tinto.toFixed(2) + "%";
  campo_branco.innerHTML = branco;
  p_branco.innerHTML = perc_branco.toFixed(2) + "%";
  campo_rose.innerHTML = rose;
  p_rose.innerHTML = perc_rose.toFixed(2) + "%";
}
