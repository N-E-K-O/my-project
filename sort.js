
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

function quickSort_asc(arr, left, right) {
    left = typeof left == "undefined" ?  0 : left
    right = typeof right == "undefined" ?  arr.length : right

    function partition(arr, left, right) {
        let pivot = left
        let index = pivot + 1
        for (let i = index; i < right; i++) {
            if (arr[i] < arr[pivot]) {
                swap(arr, i, index)
                index++
            }
        }
        swap(arr, pivot, index - 1)
        return index - 1
    }

    function swap(arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    if (left < right) {
        let partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, right)
    }

    return arr
}

function quickSort_desc(arr, left, right) {
    left = typeof left == "undefined" ?  0 : left
    right = typeof right == "undefined" ?  arr.length - 1 : right

    function partition(arr, left, right) {
        let pivot = right
        let index = pivot - 1
        for (let i = index; i >= left; i--) {
            if (arr[i] < arr[pivot]) {
                swap(arr, i, index)
                index--
            }
        }
        swap(arr, pivot, index + 1)
        return index + 1
    }

    function swap(arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    if (left <= right) {
        let partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, right)
    }

    return arr
}

module.exports = {
    bubbleSort,
    selectionSort,
    insertSort,
    quickSort_asc,
    quickSort_desc
}