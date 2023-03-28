export default function getStudentsByLocation(ls, city) {
  const res = ls.filter((el) => el.location === city);
  return res;
}
