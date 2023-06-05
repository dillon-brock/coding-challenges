function replaceElements(arr: number[]): number[] {
  let maxRemaining = -Infinity;
  let maxIndex = -1;
  return arr.map((num: number, index: number, array: number[]) => { 
      if (index == array.length - 1) return -1;
      if (index < maxIndex) return maxRemaining;
      else {
          maxRemaining = -Infinity;
          for (let i = index + 1; i < array.length; i++) {
              if (array[i] > maxRemaining) {
                  maxRemaining = array[i];
                  maxIndex = i;
              };
          }
      }
      return maxRemaining;
  });
};


function replaceElementsv2(arr: number[]): number[] {
  let maxVal: number = arr[arr.length - 1];
  arr[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
      let temp = arr[i];
      arr[i] = maxVal;
      if (temp > maxVal) maxVal = temp;
  }

  return arr;
};