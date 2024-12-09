function convertLength() {
    const input = parseFloat(document.getElementById("length-input").value);
    const units = document.getElementById("length-units").value;
    let result;
  
    if (isNaN(input)) {
      result = "Por favor, insira um valor válido.";
    } else {
      result = units === "km-to-m" ? `${input * 1000} metros` : `${input / 1000} quilômetros`;
    }
  
    document.getElementById("length-result").textContent = result;
  }
  
  function convertTemperature() {
    const input = parseFloat(document.getElementById("temp-input").value);
    const units = document.getElementById("temp-units").value;
    let result;
  
    if (isNaN(input)) {
      result = "Por favor, insira um valor válido.";
    } else {
      result = units === "c-to-f" 
        ? `${(input * 9/5) + 32} °F` 
        : `${((input - 32) * 5/9).toFixed(2)} °C`;
    }
  
    document.getElementById("temp-result").textContent = result;
  }
  
  function convertWeight() {
    const input = parseFloat(document.getElementById("weight-input").value);
    const units = document.getElementById("weight-units").value;
    let result;
  
    if (isNaN(input)) {
      result = "Por favor, insira um valor válido.";
    } else {
      result = units === "kg-to-lb" 
        ? `${(input * 2.20462).toFixed(2)} libras` 
        : `${(input / 2.20462).toFixed(2)} quilos`;
    }
  
    document.getElementById("weight-result").textContent = result;
  }
  