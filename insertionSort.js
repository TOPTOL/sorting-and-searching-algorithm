// Function to perform Insertion Sort
function insertionSort(arr) {
    // Iterate through each element in the array
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be inserted
        let currentElement = arr[i];
        
        // Start at the previous index of i
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than currentElement to one position ahead
        // of their current position
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the currentElement at its correct position
        arr[j + 1] = currentElement;
    }
}

// Example usage
let arrayToSort = [12, 11, 13, 5, 6];
insertionSort(arrayToSort);
console.log("Sorted array:", arrayToSort);

// Export the function if needed for external use
// module.exports = insertionSort;
