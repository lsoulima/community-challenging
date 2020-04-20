function insertionSort(arr, startIndex, endIndex, gap = 1)
{
    var i, j, key;
    for (i = startIndex + gap; endIndex >= i; i += gap)
    {
        key = arr[i];
        // use for() is faster than while()
        for (j = i - 1; j >= startIndex; j -= gap)
        {
            // swap DOWN, eg: 5->4, 1-> 0 !
            if (arr[j] > key)
            {
                arr[j + 1] = arr[j];
                continue;
            }
            break;
        }
        // swap
        arr[j + 1] = key;
    }
    return arr;
}

let arr = [1, 25, 4, 7, 2, 6, 5];

// let arr = ['Hello', 'World', ' Its me'];

result = insertionSort(arr, 0, arr.length - 1);

console.log(result);