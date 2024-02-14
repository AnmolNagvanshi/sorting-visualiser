import { bubbleSort } from "./sorting/bubbleSort.js";
import { insertionSort } from "./sorting/insertionSort.js";
import { mergeSort } from "./sorting/mergeSort.js";
import { quickSort } from "./sorting/quickSort.js";
import { heapSort } from "./sorting/heapSort.js";

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

    // div.style.width = width;
    // div.style.backgroundColor = "blue";
    // div.style.margin = "1px";

    div.style.height = height;
    return div;
}

function getRandomHeight(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function main() {
    generateBars();
    
    const bubbleSortButton = document.getElementById('bubble-sort-button');
    bubbleSortButton.addEventListener('click', bubbleSort);

    const insertionSortButton = document.getElementById('insertion-sort-button');
    insertionSortButton.addEventListener('click', insertionSort);

    const mergeSortButton = document.getElementById('merge-sort-button');
    mergeSortButton.addEventListener('click', mergeSort);

    const quickSortButton = document.getElementById('quick-sort-button');
    quickSortButton.addEventListener('click', quickSort);

    const heapSortButton = document.getElementById('heap-sort-button');
    heapSortButton.addEventListener('click', heapSort);

};

main();
