
function _condition(a, b, sortType = "desc") {
    if (sortType == "asc") return a > b
    else return a < b
}

function bubbleSort(arr, sortType = "desc") {
    let end = arr.length - 1

    while(end) {
        for (let i = 0; i < end; i++) {
            if (_condition(arr[i], arr[i + 1], sortType)) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
        end--
    }
    return arr
}

function selectionSort(arr, sortType = "desc") {
    for (let i = 0; i < arr.length; i++) {
        let index = i
        for (let j = i + 1; j < arr.length; j++) {
            if (_condition(arr[index], arr[j], sortType)) index = j
        }
        let temp = arr[i]
        arr[i] = arr[index]
        arr[index] = temp
    }
    return arr
}

function insertSort(arr, sortType = "desc") {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        let temp = arr[i]
        while(j >= 0 && _condition(arr[j], temp, sortType)) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
    }
    return arr
}

module.exports = {
    bubbleSort,
    selectionSort,
    insertSort
}