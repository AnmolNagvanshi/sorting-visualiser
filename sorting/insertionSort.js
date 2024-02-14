import { updateHeight, highlightBars, unhighlightBars } from "./utility.js";

export function insertionSort() {
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
        updateHeight(bars[j + 1], selectedItemHeight, time * MULTIPLIER);
        time++;
    }

    time++;
    printArray(barHeights, time * MULTIPLIER);
}