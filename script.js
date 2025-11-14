function convertToRoman(num) {
  const obj = {
    0:['M',1000], 
    1:['D', 500], 
    2:['C', 100], 
    3:['L', 50], 
    4:['X', 10], 
    5:['V', 5], 
    6:['I', 1]
  };

  // create an array including subtractive pairs
  const symbols = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  let result = "";

  for (let i = 0; i < symbols.length; i++) {
    let roman = symbols[i][0];
    let value = symbols[i][1];

    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}
