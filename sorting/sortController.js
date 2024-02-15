import { bubbleSort } from "./bubbleSort.js";
import { insertionSort } from "./insertionSort.js";
import { mergeSort } from "./mergeSort.js";
import { quickSort } from "./quickSort.js";
import { heapSort } from "./heapSort.js";


export function handleSort(event) {
    const sortFnName = event.target.id;
    console.log(sortFnName);

    const parentDiv = document.getElementById('parent');
    const bars = Array.from(parentDiv.childNodes);
    const barHeights = bars.map(bar => parseInt(bar.style.height.slice(0, -2)));

    if(sortFnName === 'bubble')
        bubbleSort(bars, barHeights);
    else if(sortFnName === 'insertion')
        insertionSort(bars, barHeights);
    else if(sortFnName === 'merge')
        mergeSort(bars, barHeights);
    else if(sortFnName === 'quick')
        quickSort(bars, barHeights);
    else if(sortFnName === 'heap')
        heapSort(bars, barHeights);
    else
        console.log('Error while handling sort');
}