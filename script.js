
const buttonRaffle = document.querySelector("button");
const drawnNumber = document.querySelector(".numero-sorteado");
const inputMin = document.getElementById("input-min");
const inputMax = document.getElementById("input-max");


function generateNumber() {

    const minValue = inputMin.value.trim();
    const maxValue = inputMax.value.trim();

    // Verifica se os inputs estão vazios ou apenas contêm espaços
    if (!minValue || !maxValue) {
        alert("Verifique se há campos vazios!\n Digite números válidos!");
        return;
    }

    // Converte valores para números
    const min = Math.ceil(Number(minValue));
    const max = Math.floor(Number(maxValue));

     // Verifica se os valores realmente são números válidos
    if (isNaN(min) || isNaN(max)) {
        alert("Verifique se há campos vazios! \n Digite números válidos!");
        return;
    }

    // Verifica se o mínimo é maior que o máximo
    if (min > max) {
        alert("O mínimo deve ser menor que o máximo.");
        return;
    }

     // Executa o sorteio
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    drawnNumber.innerText = result;
}

inputMin.addEventListener("input", () => drawnNumber.innerText = "");
inputMax.addEventListener("input", () => drawnNumber.innerText = "");
buttonRaffle.addEventListener("click", generateNumber);




