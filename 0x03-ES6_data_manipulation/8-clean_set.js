export default function cleanSet(set, startString) {
  let str = '';
  if (startString === '') {
    return str;
  }
  for (const item of set) {
    if (item.startsWith(startString)) {
      str += `${item.slice(startString.length)}-`;
    }
  }

  return str.slice(0, -1);
}
