export const weakMap = new WeakMap();
let number = 1;
export function queryAPI(obj) {
  weakMap.set(obj, number);
  number += 1;
  const queryCount = weakMap.get(obj);
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
