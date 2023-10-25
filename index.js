procedure insertion_sort(arr):
    for i = 1 to n-1:
        key = arr[i]
        j = i - 1

        // Move elements of the sorted sequence that are greater than key
        // one position ahead of their current position
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j = j - 1

        // Insert the picked element (key) into the correct position in the sorted sequence
        arr[j + 1] = key
{}