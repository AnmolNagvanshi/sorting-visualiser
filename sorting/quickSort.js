import { updateHeightTwo, highlightBars, unhighlightBars } from "./utility.js";

export function quickSort() {
    const parentDiv = document.getElementById("parent");
    const bars = Array.from(parentDiv.childNodes);
    const barHeights = bars.map(bar => parseInt(bar.style.height.slice(0, -2)))
    
    sort(bars, barHeights, 0, bars.length - 1);
    console.log(barHeights);
}

var time = 1;

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
        highlightBars(bars[pivotIdx], bars[idx], time * 10);
        time++;
        if(barHeights[idx] < pivot) {
            swap(barHeights, pivotIdx, idx);
            updateHeightTwo(bars[pivotIdx], barHeights[pivotIdx], bars[idx], barHeights[idx], time * 10);
            time++;
            // bars[pivotIdx].style.height = barHeights[pivotIdx] + "vh";
            // bars[idx].style.height = barHeights[idx] + "vh";
            unhighlightBars(bars[pivotIdx], bars[idx], time * 10);
            pivotIdx++;
        } else {
            unhighlightBars(bars[pivotIdx], bars[idx], time * 10);
        }
        time++;
    }

    swap(barHeights, pivotIdx, rightIdx);
    highlightBars(bars[pivotIdx], bars[rightIdx], time * 10);
    time++;
    updateHeightTwo(bars[pivotIdx], barHeights[pivotIdx], bars[rightIdx], barHeights[rightIdx], time * 10);
    time++;
    unhighlightBars(bars[pivotIdx], bars[rightIdx], time * 10);
    return pivotIdx;
}