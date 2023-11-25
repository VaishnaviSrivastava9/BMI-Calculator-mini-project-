function calculateBMI() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerHTML = 'Please enter valid height and weight.';
    } else {
        let bmi = weight / ((height / 100) ** 2);
        let resultMessage = 'Your BMI is ' + bmi.toFixed(2) ;

        if (bmi < 18.5) {
            resultMessage += ' (Underweight)';
        } else if (bmi >= 18.5 && bmi < 25) {
            resultMessage += ' (Normal weight)';
        } else if (bmi >= 25 && bmi < 30) {
            resultMessage += ' (Overweight)';
        } else {
            resultMessage += ' (Obese)';
        }

        document.getElementById('result').innerHTML = resultMessage;
    }
}