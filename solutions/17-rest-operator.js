// BEGIN
export const getMax = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  const [first, ...rest] = arr;
  let max = first;
  for (const num of rest) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

// END