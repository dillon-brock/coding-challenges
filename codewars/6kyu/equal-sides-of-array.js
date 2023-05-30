function findEvenIndex(arr) {

  let index = -1;
  const initialValue = 0;
  for (let i = 0; i < arr.length; i++) {
    const leftSum = arr.slice(0, i).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
    const rightSum = arr.slice(i+1).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
    if (leftSum === rightSum) index = i;
  }
  return index;
}