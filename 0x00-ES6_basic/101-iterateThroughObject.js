export default function iterateThroughObject(reportWithIterator) {
  let res = '';
  for (const it of reportWithIterator) {
    switch (reportWithIterator.indexOf(it)) {
      case 0:
        res += `${it} |`;
        break;
      case reportWithIterator.length - 1:
        res += ` ${it}`;
        break;
      default:
        res += ` ${it} |`;
    }
  }
  return res;
}
