const canvas = document.querySelector(".canvas");


const boxArea = document.createElement("div")
boxArea.classList.add("container")

let areaNumber = document.querySelector('.input-zone');

areaNumber.addEventListener("submit", (e) => {
    e.preventDefault();

    let numberCount = document.getElementById('input').value;

    const repeatDiv = () => {
        for (let i=0; i<numberCount; i++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("div2");
            boxArea.appendChild(newDiv);
        }
    }
    repeatDiv()
    
    
    canvas.appendChild(boxArea)
})
/*

const repeatDiv = () => {
    for (let i=0; i<time; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("div2");
        boxArea.appendChild(newDiv);
    }
}
repeatDiv()


canvas.appendChild(boxArea)
*/