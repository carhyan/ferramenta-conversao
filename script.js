// Função para conversão de comprimento
function convertLength() {
    const input = parseFloat(document.getElementById("length-input").value);
    const units = document.getElementById("length-units").value;
    let result;
  
    if (isNaN(input)) {
      result = "Por favor, insira um valor válido.";
    } else {
      switch (units) {
        case "km-to-m":
          result = `${input * 1000} metros`;
          break;
        case "m-to-km":
          result = `${input / 1000} quilômetros`;
          break;
        case "m-to-cm":
          result = `${input * 100} centímetros`;
          break;
        case "cm-to-m":
          result = `${input / 100} metros`;
          break;
        case "cm-to-mm":
          result = `${input * 10} milímetros`;
          break;
        case "mm-to-cm":
          result = `${input / 10} centímetros`;
          break;
        default:
          result = "Opção inválida.";
      }
    }
  
    document.getElementById("length-result").textContent = result;
  }
  
  // Função para conversão de temperatura
  function convertTemperature() {
    const input = parseFloat(document.getElementById("temp-input").value);
    const units = document.getElementById("temp-units").value;
    let result;
  
    if (isNaN(input)) {
      result = "Por favor, insira um valor válido.";
    } else {
      switch (units) {
        case "c-to-f":
          result = `${(input * 9/5) + 32} °F`;
          break;
        case "f-to-c":
          result = `${((input - 32) * 5/9).toFixed(2)} °C`;
          break;
        case "c-to-k":
          result = `${(input + 273.15).toFixed(2)} K`;
          break;
        case "k-to-c":
          result = `${(input - 273.15).toFixed(2)} °C`;
          break;
        default:
          result = "Opção inválida.";
      }
    }
  
    document.getElementById("temp-result").textContent = result;
  }
  
  // Função para conversão de peso
  function convertWeight() {
    const input = parseFloat(document.getElementById("weight-input").value);
    const units = document.getElementById("weight-units").value;
    let result;
  
    if (isNaN(input)) {
      result = "Por favor, insira um valor válido.";
    } else {
      switch (units) {
        case "kg-to-g":
          result = `${input * 1000} gramas`;
          break;
        case "g-to-kg":
          result = `${input / 1000} quilos`;
          break;
        case "kg-to-t":
          result = `${input / 1000} toneladas`;
          break;
        case "t-to-kg":
          result = `${input * 1000} quilos`;
          break;
        default:
          result = "Opção inválida.";
      }
    }
  
    document.getElementById("weight-result").textContent = result;
  }
  