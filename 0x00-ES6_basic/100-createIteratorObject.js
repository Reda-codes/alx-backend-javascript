export default function createIteratorObject(report) {
  let res = [];
  for (const value of Object.values(report.allEmployees)) {
    res = [...res, ...value];
  }
  return res;
}
