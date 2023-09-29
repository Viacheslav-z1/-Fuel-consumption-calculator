let calculateBtn = document.querySelector('#calculate')
let resultNode = document.querySelector('#result')

function calculate() {
    let distance = document.querySelector('#distance').value;
    let fuel = document.querySelector('#amount').value;

    if(+distance> 0 && +fuel > 0){
        let result;
        result = (fuel /distance) * 100;
        result = result.toFixed(2);
        resultNode.innerHTML = `Fuel consumption : <br> ${result} L / 100km`;
    } else{
        alert('Enter the nums')
    }
   
}

calculateBtn.addEventListener('click', calculate)

