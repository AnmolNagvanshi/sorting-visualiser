export function mergeSort() {
    let parentDiv = document.getElementById('parent');
    let bars = Array.from(parentDiv.childNodes);
    let barHeights = bars.map(bar => parseInt(bar.style.height.slice(0, -2)));
    let timeModifier = 1;

    console.log(barHeights);
    sort(bars, barHeights, 0, barHeights.length - 1);

    time += 1000;
    setTimeout(() => {
        console.log(barHeights);
    }, time);
}

var time = 0;

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

    while(idx1 < leftArray.length && idx2 < rightArray.length && barIdx < bars.length) {
        // highlightBars(bars, leftIdx + idx1, midIdx + 1 + idx2);
        time += 10;
        if(leftArray[idx1] <= rightArray[idx2]) {
            updateHeight(bars, barHeights, barIdx, leftArray, idx1);
            // unhighlightBars(bars, leftIdx + idx1, midIdx + 1 + idx2);
            idx1++;            
        } else {
            updateHeight(bars, barHeights, barIdx, rightArray, idx2);
            // unhighlightBars(bars, leftIdx + idx1, midIdx + 1 + idx2);
            idx2++;
        }
        barIdx++;
    }

    while(idx1 < leftArray.length && barIdx < bars.length) {
        time += 10;
        updateHeight(bars, barHeights, barIdx, leftArray, idx1);
        idx1++;
        barIdx++;   
    }

    while(idx2 < rightArray.length && barIdx < bars.length) {
        time += 10;
        updateHeight(bars, barHeights, barIdx, rightArray, idx2);
        idx2++;
        barIdx++;   
    }
}

function updateHeight(bars, barHeights, barIdx, array, idx) {
    console.log("time: ", time);
    // setTimeout(() => {
        console.log("barIdx: ", barIdx);
        barHeights[barIdx] = array[idx];
        bars[barIdx].style.height = barHeights[barIdx] + "vh";
    // }, time);
}

function highlightBars(bars, idx1, idx2, delay) {
    setTimeout(() => {
        bars[idx1].style.backgroundColor = "#53EA78";
        bars[idx2].style.backgroundColor = "#53EA78";
    }, time);
}

function unhighlightBars(bars, idx1, idx2, delay) {
    setTimeout(() => {
        bars[idx1].style.backgroundColor = "aqua";
        bars[idx2].style.backgroundColor = "aqua";
    }, time);
}