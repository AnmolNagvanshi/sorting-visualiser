import { bubbleSort } from "./bubbleSort.js";
import { insertionSort } from "./insertionSort.js";
import { mergeSort } from "./mergeSort.js";
import { quickSort } from "./quickSort.js";
import { heapSort } from "./heapSort.js";


export function handleSort(event) {
    const sortFnName = event.target.id;
    console.log(sortFnName);

    const sortButtons = document.querySelectorAll('.sort-button');
    sortButtons.forEach((button) => {
        button.disabled = true;
    });

    const parentDiv = document.getElementById('parent');
    const bars = Array.from(parentDiv.childNodes);
    const barHeights = bars.map(bar => parseInt(bar.style.height.slice(0, -2)));
    
    console.log("length", barHeights.length);
    console.log("heights", barHeights);

    let timeDelay = 0;
    if(sortFnName === 'bubble')
        timeDelay = bubbleSort(bars, barHeights);
    else if(sortFnName === 'insertion')
        timeDelay = insertionSort(bars, barHeights);
    else if(sortFnName === 'merge')
        timeDelay = mergeSort(bars, barHeights);
    else if(sortFnName === 'quick')
        timeDelay = quickSort(bars, barHeights);
    else if(sortFnName === 'heap')
        timeDelay = heapSort(bars, barHeights);
    else
        console.log('Error while handling sort');

    console.log("timeDelay", timeDelay);

    let timeoutId = window.setTimeout(function() {}, 0);
    console.log("max_timeout_id sort", timeoutId);

    setTimeout(() => {
        sortButtons.forEach((button) => {
            button.disabled = false;
        });
    }, timeDelay + 500);
}