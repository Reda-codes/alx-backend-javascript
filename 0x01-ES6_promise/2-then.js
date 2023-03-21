export default function handleResponseFromAPI(promise) {
  promise.then(
    (value) => {
      console.log('Got a response from the API');
      return value;
    },
    (error) => {
      console.log('Got a response from the API');
      return error;
    },
  );
}
