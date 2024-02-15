import { handleSort } from "./sorting/sortController.js";

const MIN_COUNT = 10;

let MAX_COUNT = Math.floor((window.innerWidth - 40) / 12) - 10;

function generateBars() {
    const parentDiv = document.getElementById("parent");
    // while (parentDiv.firstChild) {
    //     parentDiv.removeChild(parentDiv.firstChild);
    // }
    parentDiv.innerHTML = '';

    console.log("MAX_COUNT", MAX_COUNT);

    const bars = [];

    for(let idx = 0; idx < MAX_COUNT; idx++) {
        let randomHeight = getRandomHeight(10, 80) + "vh"; 
        bars.push(createSingleBar(randomHeight, idx));
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

    window.addEventListener('resize', () => {
        console.log("window resize", window.innerWidth);
        // console.log("Before MAX_COUNT", MAX_COUNT);
        MAX_COUNT = Math.floor((window.innerWidth - 40) / 12) - 10; 
        // console.log("After MAX_COUNT", MAX_COUNT);

        let timeoutId = window.setTimeout(function() {}, 0);
        // console.log("max_timeout_id", timeoutId);
        while(timeoutId--) {
            window.clearTimeout(timeoutId);
        }

        sortButtons.forEach((button) => {
            // button.addEventListener('click', handleSort);
            button.disabled = false;
        });
        generateBars();
    });

};

main();
