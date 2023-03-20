export default function createReportObject(employeesList) {
  const report = {};

  for (const [key, value] of Object.entries(employeesList)) {
    report[key] = value;
  }
  return { allEmployees: report, getNumberOfDepartments(obj) { return Object.keys(obj).length; } };
}
