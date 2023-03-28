export default function updateStudentGradeByCity(ls, city, newGrades) {
  const updatedList = ls.filter((el) => el.location === city);
  const res = updatedList.map((el) => {
    const grade = newGrades.find((element) => element.studentId === el.id);
    if (grade) {
      return {
        id: el.id,
        firstName: el.firstName,
        location: el.location,
        grade: grade.grade,
      };
    }
    return {
      id: el.id,
      firstName: el.firstName,
      location: el.location,
      grade: 'N/A',
    };
  });
  return res;
}
