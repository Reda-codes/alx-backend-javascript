export default function hasValuesFromArray(set, array) {
  const arr = [...set];
  const res = [];
  for (let i = 0; i < array.length; i += 1) {
    if (arr.includes(array[i]) === true) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return !res.includes(false);
}
