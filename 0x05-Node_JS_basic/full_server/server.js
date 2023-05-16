import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});

module.exports = app;
export default app;
