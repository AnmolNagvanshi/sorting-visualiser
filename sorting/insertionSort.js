export async function insertionSort() {
    let parentDiv = document.getElementById('parent');
    let bars = Array.from(parentDiv.childNodes);
    let barHeights = bars.map(bar => parseInt(bar.style.height.slice(0, -2)));
    let timeModifier = 1;

    for(let i = 1; i < bars.length; i++) {
        let selectedItemHeight = barHeights[i];
        const bar1 = document.getElementById(i.toString());
        let j = i - 1;


        while(j >= 0 && barHeights[j] > selectedItemHeight) {
            const bar2 = document.getElementById((j).toString());
            const bar3 = document.getElementById((j + 1).toString());
            // timeModifier++;

            // highlightBars(bar1, bar2);
            // barHeights[j + 1] = barHeights[j];
            // bar3.style.height = barHeights[j] + "vh";
            // unhighlightBars(bar1, bar2);
            
            await highlightWithDelay(bar1, bars[j], timeModifier);
            // timeModifier++;
            await shiftBars(barHeights, j, bars[j + 1], bar1, bars[j], timeModifier);
           
            // setTimeout(() => {
            //     highlightBars(bar1, bar2);
            // }, timeModifier * 10);

            // timeModifier++;

            j--;
        }

        // timeModifier++;

        // barHeights[j + 1] = selectedItemHeight;
        // const barAtInsertPosition = document.getElementById((j + 1).toString());
        // barAtInsertPosition.style.height = selectedItemHeight + "vh"; 
        
        await insertSelectedBarAtCorrectPosition(barHeights, j, selectedItemHeight, timeModifier);

    }

    // console.log(barHeights);

    // timeModifier++;
    // setTimeout(() => {
    //     console.log(barHeights);
    // }, timeModifier * 10);
}


function highlightWithDelay(bar1, bar2, timeModifier) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            highlightBars(bar1, bar2);
            resolve();
        }, timeModifier);
    });

    // setTimeout(() => {
    //     highlightBars(bar1, bar2);
    // }, timeModifier);
    
}

function shiftBars(barHeights, j, bar3, bar1, bar2, timeModifier) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            barHeights[j + 1] = barHeights[j];
            bar3.style.height = barHeights[j] + "vh";
            unhighlightBars(bar1, bar2);
            resolve();
        }, timeModifier);
    });

    // setTimeout(() => {
    //     barHeights[j + 1] = barHeights[j];
    //     bar3.style.height = barHeights[j] + "vh";
    //     unhighlightBars(bar1, bar2);
    // }, timeModifier);
}

function insertSelectedBarAtCorrectPosition(barHeights, j, selectedItemHeight, timeModifier) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            barHeights[j + 1] = selectedItemHeight;
            const barAtInsertPosition = document.getElementById((j + 1).toString());
            barAtInsertPosition.style.height = selectedItemHeight + "vh";
            resolve();
        }, timeModifier);
    });

    // setTimeout(() => {
    //     barHeights[j + 1] = selectedItemHeight;
    //     const barAtInsertPosition = document.getElementById((j + 1).toString());
    //     barAtInsertPosition.style.height = selectedItemHeight + "vh";
    // }, timeModifier);
}

function highlightBars(bar1, bar2) {
    bar1.style.backgroundColor = "#53EA78";
    bar2.style.backgroundColor = "#53EA78";
}

function unhighlightBars(bar1, bar2) {
    bar1.style.backgroundColor = "aqua";
    bar2.style.backgroundColor = "aqua";
}

