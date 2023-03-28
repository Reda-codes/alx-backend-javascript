export default function getListStudentIds(ls) {
  if (Array.isArray(ls)) {
    let res = [];
    res = ls.map((el) => el.id);
    return res;
  }
  return [];
}
