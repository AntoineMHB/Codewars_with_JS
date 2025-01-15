function lastDigit(n, m) {  
    let power = m**n;
    let str = power.toString();
    let lastDigit = str[str.length - 1];
    return Number(lastDigit);
  }
  
  console.log(lastDigit(2, 10));