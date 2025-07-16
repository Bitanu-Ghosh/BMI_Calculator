 const form = document.querySelector(".sec form");
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    if (height <= 0 || weight <= 0) {
      result.innerHTML = `<b style="color:red;">PLEASE ENTER A VALID VALUE !!</b>`;
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      if (bmi < 19) {
        result.innerHTML = `<b>
          <span style="color: rgb(130,238,204);">YOUR BMI IS :</span> 
          <span style="color: aliceblue;">${bmi}</span> 
          <span style="color: red;">(UNDER WEIGHT)</span>
        </b>`;
      } 
      else if (bmi > 19 && bmi <= 24.9) {
        result.innerHTML = `<b>
          <span style="color: rgb(130,238,204);">YOUR BMI IS :</span> 
          <span style="color: aliceblue;">${bmi}</span> 
          <span style="color: rgb(7,194,50);">(NORMAL WEIGHT)</span>
        </b>`;
      } 
      else if (bmi >= 25 && bmi <= 29.9) {
        result.innerHTML = `<b>
          <span style="color:  rgb(130,238,204);">YOUR BMI IS :</span> 
          <span style="color: aliceblue;">${bmi}</span> 
          <span style="color: red;">(OVER WEIGHT)</span>
        </b>`;
      } 
      else if (bmi > 30) {
        result.innerHTML = `<b>
          <span style="color: rgb(130,238,204);">YOUR BMI IS :</span> 
          <span style="color:aliceblue;">${bmi}</span> 
          <span style="color: red;">(OBESITY)</span>
        </b>`;
      }
    }
  });

