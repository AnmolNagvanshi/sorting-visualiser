import { updateHeight, highlightBars, unhighlightBars } from "./utility.js";

export function mergeSort(bars, barHeights) {
    
    console.log(barHeights);
    sort(bars, barHeights, 0, barHeights.length - 1);

    return time * MULTIPLIER;
}

var time = 1;
const MULTIPLIER = 10;

function sort(bars, barHeights, leftIdx, rightIdx) {
    if(leftIdx >= rightIdx) {
        return;
    }
    const midIdx = leftIdx + parseInt((rightIdx - leftIdx) / 2);
    sort(bars, barHeights, leftIdx, midIdx);
    sort(bars, barHeights, midIdx + 1, rightIdx);
    merge(bars, barHeights, leftIdx, midIdx, rightIdx);
}

function merge(bars, barHeights, leftIdx, midIdx, rightIdx) {
    let leftArray = barHeights.slice(leftIdx, midIdx + 1);
    let rightArray = barHeights.slice(midIdx + 1, rightIdx + 1);
    let idx1 = 0, idx2 = 0, barIdx = leftIdx;

    while(idx1 < leftArray.length && idx2 < rightArray.length) {
        highlightBars(bars[leftIdx + idx1], bars[midIdx + 1 + idx2], time * MULTIPLIER);
        time++;
        if(leftArray[idx1] <= rightArray[idx2]) {
            barHeights[barIdx] = leftArray[idx1];
            updateHeight(bars[barIdx], barHeights[barIdx], time * MULTIPLIER);
            unhighlightBars(bars[leftIdx + idx1], bars[midIdx + 1 + idx2], time * MULTIPLIER);
            idx1++;            
        } else {
            barHeights[barIdx] = rightArray[idx2];
            updateHeight(bars[barIdx], barHeights[barIdx], time * MULTIPLIER);
            unhighlightBars(bars[leftIdx + idx1], bars[midIdx + 1 + idx2], time * MULTIPLIER);
            idx2++;
        }
        barIdx++;
    }

    while(idx1 < leftArray.length) {
        time++;
        barHeights[barIdx] = leftArray[idx1];
        updateHeight(bars[barIdx], barHeights[barIdx], time * MULTIPLIER);
        idx1++;
        barIdx++;   
    }

    while(idx2 < rightArray.length) {
        time++;
        barHeights[barIdx] = rightArray[idx2];
        updateHeight(bars[barIdx], barHeights[barIdx], time * MULTIPLIER);
        idx2++;
        barIdx++;   
    }
}
