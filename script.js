const canvas = document.querySelector(".canvas");


const boxArea = document.createElement("div")
boxArea.classList.add("container")

let areaNumber = document.querySelector('.input-zone');

areaNumber.addEventListener("submit", (e) => {
    e.preventDefault();

    let numberCount = document.getElementById('input').value;

    const repeatDiv = () => {
        boxArea.innerHTML = '';
        
        for (let i=0; i<numberCount; i++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("div2");
            boxArea.appendChild(newDiv);
        }
        if (!numberCount) {
            alert ('Insert value betweeen 16 and 100')
        } else {
        canvas.appendChild(boxArea)}
    }
    repeatDiv()
})  
let resetButton = document.getElementById('reset')

resetButton.addEventListener("click", () => {
    canvas.removeChild(canvas.firstChild);
    
})
    
