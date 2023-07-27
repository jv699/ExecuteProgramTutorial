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

//implement uniq
function uniq(arr) {
  /* Build and return a new array here. */
  let newArray = [];
  arr.forEach(element => {
    if(newArray.includes(element)) {
    } else {
      newArray.push(element);
    }
  });

  return newArray;
}

//dynamic filling
function fillDynamically(value, length) {
  return new Array(length).fill(value);
}

//sqaure an array
function square(nums) {
  const newArray = nums.map(element => element * element);
  return newArray;
}

//add exclamaiton
function excite(strings) {
  const newArray = strings.map(element => element + '!');
  return newArray;
}

//some none quiz
function none(arr, callback) {
  return !arr.some(element => callback(element));
}

function hasNull(arr) {
  return arr.some(e => e === null);
}

//get first element
function takeFirst(arr, n) {
  return arr.slice(0, n);
}

//copy array
function copyArray(array) {
  return array.slice();
}

//flat example without flatmap
const users = [
  {name: 'Amir', emails: ['amir@example.com', 'amir2@example.com']},
  {name: 'Betty', emails: ['betty@example.com']}
];
users.map(user => user.emails).flat();

//flat example with flatmap
users.flatMap(user => user.emails);

//free lessons ran out :) (like $40 a month ugh)