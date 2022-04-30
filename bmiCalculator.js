// Method-1

function bmiCalculator(weight,height){
    var bmi= weight/(height*height);

    if(bmi<18.5){
        return("Your BMI is " +bmi+ ". So, you are underweight.");
    }

    else if(bmi>18.5 && bmi<24.9){
        return("Your BMI is " +bmi+ ". So, you have a normal weight.");
    }

    else if(bmi>24.9){
        return("Your BMI is " +bmi+ ". So, you are overweight.");
    }

    return bmi;
}


// Method-2
