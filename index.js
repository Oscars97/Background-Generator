var h3 = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var newStyle;
var body = document.querySelector("body");



    color1.addEventListener('input', setGradient);

    color2.addEventListener('input', setGradient);
    
    function setGradient() {
        newStyle = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
        h3.innerHTML = "Current style is: background-image: "+newStyle;
        body.style.backgroundImage = newStyle;
    }
    



