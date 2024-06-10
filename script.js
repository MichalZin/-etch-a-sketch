const canvas = document.querySelector(".canvas");
let time = 16

const boxArea = document.createElement("div")
boxArea.classList.add("container")

const repeatDiv = () => {
    for (let i=0; i<time; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("div2");
        boxArea.appendChild(newDiv);
    }
}
repeatDiv()


canvas.appendChild(boxArea)