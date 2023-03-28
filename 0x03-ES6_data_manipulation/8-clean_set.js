export default function cleanSet(set, startString) {
  let str = '';
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return str;
  }
  for (const item of set) {
    if (item.startsWith(startString)) {
      str += `${item.slice(startString.length)}-`;
    }
  }

  return str.slice(0, -1);
}
