const form = document.querySelector("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Enter a valid input for height.`;
    }else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Enter a valid input for weight.`;
    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi < 18.6) {
            result.innerHTML = `BMI is : ${bmi} , you are under weight.`;
        }else if(bmi > 24.9) {
            result.innerHTML = `BMI is : ${bmi} , you are over weight.`;
        }else {
            result.innerHTML = `BMI is : ${bmi}, you are are in normal range.`;
        }
    }
});