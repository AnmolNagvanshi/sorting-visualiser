export async function insertionSort() {
    let parentDiv = document.getElementById('parent');
    let bars = Array.from(parentDiv.childNodes);
    let barHeights = bars.map(bar => parseInt(bar.style.height.slice(0, -2)));
    console.log(barHeights);
    
    let time = 1;
    let MULTIPLIER = 2;

    for(let i = 1; i < bars.length; i++) {
        const selectedItemHeight = barHeights[i];
        
        let j;
        for(j = i - 1; j >= 0 && barHeights[j] > selectedItemHeight; j--) {            
            barHeights[j + 1] = barHeights[j];

            highlightBars(bars[i], bars[j], time * MULTIPLIER);
            time++;
            updateHeight(bars[j + 1], barHeights[j + 1], time * MULTIPLIER);
            time++;
            unhighlightBars(bars[i], bars[j], time * MULTIPLIER);
            time++;
        }

        barHeights[j + 1] = selectedItemHeight;        
        insertSelectedBarAtCorrectPosition(bars[j + 1], selectedItemHeight, time * MULTIPLIER);
        time++;
    }

    time++;
    printArray(barHeights, time * MULTIPLIER);
}

function printArray(barHeights, timeDelay) {
    setTimeout(() => {
        console.log("After sorting", barHeights);
    }, timeDelay);
}

function updateHeight(bar, barHeight, timeDelay) {
    setTimeout(() => {
        bar.style.height = barHeight + "vh";
        // unhighlightBars(bar1, bar2);
    }, timeDelay);
}

function insertSelectedBarAtCorrectPosition(bar, barHeight, timeDelay) {
    setTimeout(() => {
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

