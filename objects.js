// objects

// calculate the average note for every student, sort the average and the show the name of the students by desc

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

function average(arr)
{
    let result = 0;
    for (i = 0; i < arr.length; i++)
    {
        result += arr[i];
    }
    return (result / arr.length);
}



const classroom = [
    {
        name: "said",
        age: 20,
        notes: ["12", "2", "14", "15"]
    },
    {
        name: "Mohamed",
        age: 20,
        notes: ["11", "14", "10", "10"]
    },
    {
        name: "Youness",
        age: 20,
        notes: ["2", "56", "10", "18"]
    }
]

// __If i want adding an avg column to each object__
/*
function addElement(ElementList, element)
{
    let newList = Object.assign(ElementList, element)
    return newList
}

for (const i in classroom)
{
    let avg = average(classroom[i].notes);
    let ElementList = classroom[i];
    let element = { avg: avg };

    result = addElement(ElementList, element);
}
*/

let studentsAvg = [];
for (const j in classroom)
{
    let avg = average(classroom[j].notes);
    studentsAvg[j] = avg;
}

result = insertionSort(studentsAvg, 0, studentsAvg.length - 1);

console.log(result)