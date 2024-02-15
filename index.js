import { handleSort } from "./sorting/sortController.js";

function generateBars() {
    const parentDiv = document.getElementById("parent");
    const bars = [];

    for(let i = 0; i < 100; i++) {
        let randomHeight = getRandomHeight(10, 80) + "vh"; 
        bars.push(createSingleBar(randomHeight, i));
    }

    bars.forEach((bar) => {
        parentDiv.appendChild(bar);
    });

    console.log("generating");
}

function createSingleBar(height, id) {
    const div = document.createElement("div");
    div.setAttribute("id", id.toString());
    div.classList.add('bar');
    
    div.style.height = height;
    return div;
}

function getRandomHeight(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function main() {
    generateBars();

    const sortButtons = document.querySelectorAll('.sort-button');
    sortButtons.forEach((button) => {
        button.addEventListener('click', handleSort);
    });

};

main();
