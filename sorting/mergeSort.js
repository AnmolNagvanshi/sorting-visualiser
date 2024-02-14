export function mergeSort() {
    let parentDiv = document.getElementById('parent');
    let bars = Array.from(parentDiv.childNodes);
    let barHeights = bars.map(bar => parseInt(bar.style.height.slice(0, -2)));
    let timeModifier = 1;

    // let sortedArray = barHeights.slice().sort((a, b) => a - b);
    console.log(barHeights);

    sort(bars, barHeights, 0, barHeights.length - 1);

    // console.log(barHeights);
    // console.log(arraysAreEqual(barHeights, sortedArray));

    // time += 1000;
    // setTimeout(() => {
    //     console.log(barHeights);
    // }, time);

}

var time = 1;

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
        highlightBars(bars[leftIdx + idx1], bars[midIdx + 1 + idx2], time * 10);
        time++;
        if(leftArray[idx1] <= rightArray[idx2]) {
            barHeights[barIdx] = leftArray[idx1];
            updateHeight(bars[barIdx], barHeights[barIdx], time * 10);
            unhighlightBars(bars[leftIdx + idx1], bars[midIdx + 1 + idx2], time * 10);
            idx1++;            
        } else {
            barHeights[barIdx] = rightArray[idx2];
            updateHeight(bars[barIdx], barHeights[barIdx], time * 10);
            unhighlightBars(bars[leftIdx + idx1], bars[midIdx + 1 + idx2], time * 10);
            idx2++;
        }
        barIdx++;
    }

    while(idx1 < leftArray.length) {
        time++;
        barHeights[barIdx] = leftArray[idx1];
        updateHeight(bars[barIdx], barHeights[barIdx], time * 10);
        idx1++;
        barIdx++;   
    }

    while(idx2 < rightArray.length) {
        time++;
        barHeights[barIdx] = rightArray[idx2];
        updateHeight(bars[barIdx], barHeights[barIdx], time * 10);
        idx2++;
        barIdx++;   
    }
}

function updateHeight(bar, barHeight, timeDelay) {
    console.log(timeDelay);
    setTimeout(() => {
        // console.log(timeDelay, bar, barHeight);
        bar.style.height = barHeight + "vh";
    }, timeDelay);
}

function highlightBars(bar1, bar2, timeDelay) {
    setTimeout(() => {
        bar1.style.backgroundColor = "#53EA78";
        bar2.style.backgroundColor = "#53EA78";
    }, timeDelay);
}

function unhighlightBars(bar1, bar2, timeDelay) {
    setTimeout(() => {
        bar1.style.backgroundColor = "blue";
        bar2.style.backgroundColor = "blue";
    }, timeDelay);
}

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}