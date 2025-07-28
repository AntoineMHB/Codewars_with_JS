export function createPhoneNumber(numbers: number[]): string {
    let firstNbrs = numbers.slice(0, 3).join("");
    let secondNbrs = numbers.slice(3, 6).join("");
    let thirdNbrs = numbers.slice(6, 10).join("");
    let newArray;
    for (let i = 0; i < numbers.length; i ++) {
      newArray = `(${firstNbrs}) ${secondNbrs}-${thirdNbrs}`;
    }
    return newArray.toString();
  }
  
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));