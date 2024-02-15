const MS_DELAY_MULTIPLE = 3;

export function bubbleSort(bars, barHeights) {
    
    let timeModifier = 1;

    for(let i = 0; i < bars.length - 1; i++) {
        for(let j = 0; j < bars.length - i - 1; j++) {
            const bar1 = document.getElementById(j.toString());
            const bar2 = document.getElementById((j + 1).toString());
            setTimeout(() => {
                highlightSelectedBars(bar1, bar2);
            }, timeModifier * MS_DELAY_MULTIPLE);

            timeModifier++;

            setTimeout(() => {
                updateHeight(barHeights, j, bar1, bar2);
                unhighlightSelectedBars(bar1, bar2);
            }, (timeModifier) * MS_DELAY_MULTIPLE);
        }

        setTimeout(() => {
            highlightSortedBar(bars.length - i - 1);
        }, timeModifier * MS_DELAY_MULTIPLE);
    }

    setTimeout(() => {
        highlightSortedBar(0);
    }, timeModifier * MS_DELAY_MULTIPLE);
    console.log(barHeights);

    return timeModifier * MS_DELAY_MULTIPLE;
}

function updateHeight(barHeights, idx, bar1, bar2) {
    if (barHeights[idx] > barHeights[idx + 1]) {
        let temp = barHeights[idx];
        barHeights[idx] = barHeights[idx + 1];
        barHeights[idx + 1] = temp;
        bar1.style.height = barHeights[idx] + "vh";
        bar2.style.height = barHeights[idx + 1] + "vh";
    }
}

function highlightSelectedBars(bar1, bar2) {
    bar1.style.backgroundColor = "#53EA78";
    bar2.style.backgroundColor = "#53EA78";
}

function unhighlightSelectedBars(bar1, bar2) {
    bar1.style.backgroundColor = "blue";
    bar2.style.backgroundColor = "blue";
}

function highlightSortedBar(index) {
    const bar = document.getElementById(index.toString());
    bar.style.backgroundColor = "purple";
}
