// BEGIN
export default function countUniqChars(str) {
  let uniqueChars = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let alreadyExists = false;
    for (let j = 0; j < uniqueChars.length; j++) {
      if (uniqueChars[j] === char) {
        alreadyExists = true;
      }
    }
    if (alreadyExists === false) {
      uniqueChars.push(char);
    }
  }
  return uniqueChars.length;
}
// END