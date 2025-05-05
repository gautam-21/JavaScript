const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt((document.querySelector('#height')).value);
    const weight = parseInt((document.querySelector('#weight')).value);
    const result = document.querySelector('#results')
    const weight_guide = document.querySelector('#weight-guide')
    console.log(height, weight);
    let bmi ;
    
    if(height < 0 || height === '' || isNaN(height)){
        result.innerHTML =`Enter valid height ${height}`;
    }
    else if(weight ===''|| weight < 0 || isNaN(weight))
    {
        result.innerHTML =`Enter the valid weight ${weight}`
    }
    else{
         bmi = (weight/((height/100)*(height/100))).toFixed(2)
        result.innerHTML =`BMI is ${bmi}`;

        if(bmi <=18.6){
            weight_guide.innerHTML = `Under Weight`
        }
        else if (bmi > 18.6 || bmi <=24.9)
            weight_guide.innerHTML = `Normal Range`
        else
        weight_guide.innerHTML = `Overweight`
    }
    console.log(bmi);
    

})