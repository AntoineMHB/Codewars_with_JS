/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
    // we can loop over the string and pose necessary conditions.
    // whenever we reach 'o', we push the actual value to the array
    // then we'll return that array
    let value = 0;
    let result: number[] = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i] === 'i') {
        value = value + 1;
      } else if (data[i] === 'd') {
        value = value - 1;
      } else if (data[i] === 's') {
        value = value*value;
      } else if (data[i] === 'o') {
        result.push(value);
      }
    }
    return result;
    
  }
  
  console.log(parse('iiisdosodddddiso'))