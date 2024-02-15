import { updateHeightTwo, highlightBars, unhighlightBars, swap } from "./utility.js";

export function quickSort(bars, barHeights) {

    sort(bars, barHeights, 0, bars.length - 1);
    console.log(barHeights);

    return time * MULTIPLIER;
}

var time = 1;
const MULTIPLIER = 10;

function sort(bars, barHeights, leftIdx, rightIdx) {
    if(leftIdx >= rightIdx)
        return;
    const partitionIndex = partition(bars, barHeights, leftIdx, rightIdx);
    sort(bars, barHeights, leftIdx, partitionIndex - 1);
    sort(bars, barHeights, partitionIndex + 1, rightIdx);
}

function partition(bars, barHeights, leftIdx, rightIdx) {
    const pivot = barHeights[rightIdx];
    let pivotIdx = leftIdx;

    for(let idx = leftIdx; idx < rightIdx; idx++) {
        highlightBars(bars[pivotIdx], bars[idx], time * MULTIPLIER);
        time++;
        if(barHeights[idx] < pivot) {
            swap(barHeights, pivotIdx, idx);
            updateHeightTwo(bars[pivotIdx], barHeights[pivotIdx], bars[idx], barHeights[idx], time * MULTIPLIER);
            time++;
            unhighlightBars(bars[pivotIdx], bars[idx], time * MULTIPLIER);
            pivotIdx++;
        } else {
            unhighlightBars(bars[pivotIdx], bars[idx], time * MULTIPLIER);
        }
        time++;
    }

    swap(barHeights, pivotIdx, rightIdx);
    highlightBars(bars[pivotIdx], bars[rightIdx], time * MULTIPLIER);
    time++;
    updateHeightTwo(bars[pivotIdx], barHeights[pivotIdx], bars[rightIdx], barHeights[rightIdx], time * MULTIPLIER);
    time++;
    unhighlightBars(bars[pivotIdx], bars[rightIdx], time * MULTIPLIER);
    return pivotIdx;
}