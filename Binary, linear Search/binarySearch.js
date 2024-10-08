// here Iam implementing binary search

let array = [-1, 0, 3, 5, 9, 12];
let key = 9;
// find the index of the key if it exist else return -1;

const findKey = (arr, key) => {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (start <= end) {
        if (arr[mid] === key) {
            return mid;
        } else {
            if (arr[mid] < key) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
            mid = (start + end) / 2;
        }
    }

    return -1;
}
console.log(findKey(array, key));