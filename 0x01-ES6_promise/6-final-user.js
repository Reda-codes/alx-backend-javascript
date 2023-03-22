import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(
      (results) => {
        const result = [];
        results.forEach((el) => {
          result.push({ status: el.status, value: el.value ? el.value : el.reason });
        });
        return result;
      },
    );
}
