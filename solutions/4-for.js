// BEGIN
export default function addPrefix(name, prefix) {
  let result = [];
  for (let i = 0; i < name.length; i++) {
    let fname = prefix + ' ' + name[i];
    result.push(fname);
  }
  return result;
}
// END