const input = [{ a: 1 }, { b: 2 }, { c: 3 }];

const output = input.reduce((result, currentObj) => {
  const key = Object.keys(currentObj)[0];
  const value = currentObj[key];
  result[key] = value;
  return result;
}, {});

console.log(output);

