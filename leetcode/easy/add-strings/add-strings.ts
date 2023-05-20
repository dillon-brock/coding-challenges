function addStrings(num1: string, num2: string): string {
  let longer: string, shorter: string;
  if (num2.length > num1.length) {
      longer = num2;
      shorter = num1;
  }
  else {
      longer = num1;
      shorter = num2;
  }

  for (let i = 0; i < longer.length - shorter.length; i++) {
      shorter = '0' + shorter;
  }

  let result = '';
  let carryOver: 0 | 1 = 0;

  for (let i = longer.length - 1; i >= 0; i--) {
    let digitSum: number = Number(longer.charAt(i)) + Number(shorter.charAt(i));
    if (digitSum >= 10) {
      digitSum -= 10;
      carryOver = 1;
    }  
    result += (digitSum + carryOver).toString();
    carryOver = 0;
  }

  return result;
};