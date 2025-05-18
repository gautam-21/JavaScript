// Generate random color

// option 1
/*let startColorChange;
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#'
    for( let i = 0; i<6; i++){
        color +=hex[Math.floor(Math.random()*16)]
    }
    return color
}

colorChange = function(){
        document.body.style.backgroundColor = randomColor();
    }

document.getElementById('start').addEventListener('click', function(){
    console.log('start');
    startColorChange = setInterval(colorChange,500)
    console.log('Interval ID:', startColorChange);
})

document.getElementById('stop').addEventListener('click', function(){
    console.log('stop');
    console.log('Interval ID:', startColorChange);
    clearInterval(startColorChange)
    startColorChange = null;
}) */


// Option 2

let intervalId = null;
const randomColor = function(){
    const hex  = '0123456789ABCDEF';
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

const colorChange = function(){
    document.body.style.backgroundColor = randomColor();
}

const startColorChange = function(){
    if(!intervalId){
        intervalId  = setInterval(colorChange, 500)
    }
}

const stopColorChange = function(){
    clearInterval(intervalId)
    intervalId = null;
}

document.getElementById('start').addEventListener('click',startColorChange )
document.getElementById('stop').addEventListener('click', stopColorChange)