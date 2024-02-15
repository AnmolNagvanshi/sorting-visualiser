import { updateHeight, highlightBars, unhighlightBars, swap, printArray } from "./utility.js";

var time = 1;
const MULTIPLE = 2;

export function heapSort(bars, barHeights) {
    
    console.log("HeapSort", barHeights);

    for(let idx = barHeights.length / 2 - 1; idx >= 0; idx--) {
        maxHeapify(bars, barHeights, idx, barHeights.length);
    }

    for(let idx = barHeights.length - 1; idx > 0; idx--) {
        // Move current root to end of the array
        swap(barHeights, 0, idx);

        highlightBars(bars[0], bars[idx], time * MULTIPLE);
        time++;

        updateHeight(bars[0], barHeights[0], time * MULTIPLE);
        time++
        updateHeight(bars[idx], barHeights[idx], time * MULTIPLE);
        time++;

        unhighlightBars(bars[0], bars[idx], time * MULTIPLE);
        time++;

        // heapify the reduced heap
        maxHeapify(bars, barHeights, 0, idx);
    }

    time++;
    printArray(barHeights, "After Sorting", time * MULTIPLE);
    
    return time * MULTIPLE;
}


function maxHeapify(bars, barHeights, rootIdx, size) {
    let largestIdx = rootIdx;
    let leftIdx = rootIdx * 2 + 1;
    let rightIdx = rootIdx * 2 + 2;

    
    if(leftIdx < size) {
        highlightBars(bars[leftIdx], bars[largestIdx], time * MULTIPLE);
        time++;
        if(barHeights[leftIdx] > barHeights[largestIdx]) {
            largestIdx = leftIdx;
        }
        unhighlightBars(bars[leftIdx], bars[largestIdx], time * MULTIPLE);
        time++;
    }

    if(rightIdx < size) {
        highlightBars(bars[rightIdx], bars[largestIdx], time * MULTIPLE);
        time++;
        if(barHeights[rightIdx] > barHeights[largestIdx]) {
            largestIdx = rightIdx;
        }
        unhighlightBars(bars[rightIdx], bars[largestIdx], time * MULTIPLE);
        time++;
    }

    if(largestIdx !== rootIdx) {
        swap(barHeights, rootIdx, largestIdx);

        highlightBars(bars[rootIdx], bars[largestIdx], time * MULTIPLE);
        time++;

        updateHeight(bars[rootIdx], barHeights[rootIdx], time * MULTIPLE);
        time++
        updateHeight(bars[largestIdx], barHeights[largestIdx], time * MULTIPLE);
        time++;

        unhighlightBars(bars[rootIdx], bars[largestIdx], time * MULTIPLE);
        time++;

        maxHeapify(bars, barHeights, largestIdx, size);
    }
}