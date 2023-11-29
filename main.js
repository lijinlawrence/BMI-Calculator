const calculateBMI = () => {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const heightUnit = document.getElementById("heightUnit").value;
    const weightUnit = document.getElementById("weightUnit").value;
  
    let bmi;
  
    if (heightUnit === "meters") {
      bmi = weight / (height * height);
    } else if (heightUnit === "feet") {
      bmi = weight / ((height * 0.3048) ** 2);
    } else if (heightUnit === "centimeters") {
      bmi = weight / ((height * 0.01) ** 2);
    }
  
    if (weightUnit === "pounds") {
      bmi *= .454;
    } else if (weightUnit === "grams") {
      bmi /= 1000;
    }

    document.getElementById("bmi").innerText = bmi.toFixed(2);
  };
  
  document.getElementById("calculate").addEventListener("click", calculateBMI);



  