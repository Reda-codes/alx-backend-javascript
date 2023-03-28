export default function cleanSet(set, startString) {
  let str = '';
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      str += `${item.slice(startString.length)}-`;
    }
  }

  return str.slice(0, -1);
}
