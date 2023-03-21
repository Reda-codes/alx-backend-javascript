import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then((value) => process.stdout.write(value.body));
  createUser().then((value) => console.log(` ${value.firstName} ${value.lastName}`));
}
