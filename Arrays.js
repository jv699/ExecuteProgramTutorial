// Empty test
function isEmpty(arr) {
  if (arr.length == 0){
    return true;
  } else
    return false
}

//adding elements
function setSecondElementToZero(nums) {
  nums[1] = 0;
  return undefined;
}

//accessing elements
function at(arr, i) {
  if (i >= 0 && i < arr.length)
    return arr[i];
  else
    return null;
}