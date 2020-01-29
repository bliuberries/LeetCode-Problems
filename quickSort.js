const sort = (nums) => {
  debugger;
  let quickSort = (arr, l = 0, r = arr.length) => {
    if (l < r) {
      pivot = partition(arr, l, r);
      quickSort(arr, l, pivot);
      quickSort(arr, pivot + 1, r);
    }
  }
  let partition = (a, l, r) => {
    let temp, p = a[l];
    lW = l;
    for (let i = l + 1; i < r; i++) {
      if (a[i] < p) {
        temp = a[i];
        a[i] = a[lW];
        a[lW] = temp;
        lW++;
      }
    }
    return lW;
  }
  quickSort(nums);
  return nums;
}

let nums1 = [5, 3, 8, 2, 6, 9, 7, 10, 1];
let nums2 = [50, 23, 9, 18, 61, 32];
let nums3 = [15, 2, 3, 50, 44, 1, 37, 66, 25];
console.log(sort(nums2));