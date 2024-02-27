// BMI weight (kg) / height2(m2)


var bmi = bmiCalculator(65, 1.8);


function bmiCalculator(weight, height) {

    var bmi = weight / (height * height);
    return bmi;
}

// raise number to power Math.pow()