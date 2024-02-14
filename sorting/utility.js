
export function updateHeight(bar, barHeight, timeDelay) {
    setTimeout(() => {
        bar.style.height = barHeight + "vh";
    }, timeDelay);
}

export function updateHeightTwo(bar1, barHeight1, bar2, barHeight2, timeDelay) {
    setTimeout(() => {
        bar1.style.height = barHeight1 + "vh";
        bar2.style.height = barHeight2 + "vh";
    }, timeDelay)
}

export function highlightBars(bar1, bar2, timeDelay) {
    setTimeout(() => {
        bar1.style.backgroundColor = "#53EA78";
        bar2.style.backgroundColor = "#53EA78";
    }, timeDelay);
}

export function unhighlightBars(bar1, bar2, timeDelay) {
    setTimeout(() => {
        bar1.style.backgroundColor = "blue";
        bar2.style.backgroundColor = "blue";
    }, timeDelay);
}

export function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export function printArray(arr, message, timeDelay) {
    setTimeout(() => {
        console.log(message, arr);
    }, timeDelay);
}

export function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }

    return true;
}