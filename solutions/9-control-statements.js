// BEGIN
export default function getTotalAmount(money, val) {
  let total = 0;
  for (const i of money) {
    const cur = i.slice(0, 3);
    if (cur === val) {
      const value = Number(i.slice(4));
      total += value;
    }
  }
  return total;
}

// END