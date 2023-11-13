// functionality
let Cels = document.querySelector('[data-cels]')
let Fars = document.querySelector('[data-far]')

function CelsToFars(){
    let Res = (parseFloat(Cels.value) * 9/5) + 32;
    Fars.value = parseFloat(Res.toFixed(2))
}
function FarsToCels(){
    let Res = (parseFloat(Fars.value) -32) * 5/9;
    Cels.value = parseFloat(Res.toFixed(2))
}
Cels.addEventListener("input", CelsToFars);
Fars.addEventListener("input", FarsToCels);