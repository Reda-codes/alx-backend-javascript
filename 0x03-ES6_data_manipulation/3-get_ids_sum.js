export default function getStudentIdsSum(ls) {
  let res = [];
  res = ls.map((el) => el.id);
  return res.reduce((total, num) => total + num, 0);
}
