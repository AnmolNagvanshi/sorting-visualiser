export function quickSort() {
    const parentDiv = document.getElementById("parent");
    const bars = Array.from(parentDiv.childNodes);
    const barHeights = bars.map(bar => parseInt(bar.style.height.slice(0, -2)))
    
    sort(bars, barHeights, 0, bars.length - 1);
    console.log(barHeights);
}

function sort(bars, barHeights, low, high) {
    if(low >= high)
        return;
    const partitionIndex = partition(bars, barHeights, low, high);
    sort(bars, barHeights, low, partitionIndex - 1);
    sort(bars, barHeights, partitionIndex + 1, high);
}

function partition(bars, barHeights, low, high) {
    const pivot = barHeights[high];
    let pivotIdx = low;

    for(let idx = low; idx <= high - 1; idx++) {
        if(barHeights[idx] < pivot) {
            swap(barHeights, pivotIdx, idx);
            bars[pivotIdx].style.height = barHeights[pivotIdx] + "vh";
            bars[idx].style.height = barHeights[idx] + "vh";
            pivotIdx++;
        }
    }

    swap(barHeights, pivotIdx, high);
    bars[pivotIdx].style.height = barHeights[pivotIdx] + "vh";
    bars[high].style.height = barHeights[high] + "vh";
    return pivotIdx;
}

function swap(barHeights, idx1, idx2) {
    let temp = barHeights[idx1];
    barHeights[idx1] = barHeights[idx2];
    barHeights[idx2] = temp;
}