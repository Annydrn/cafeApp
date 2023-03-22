const port = 3002;
const app = require('./app');

app.listen(port, () => {
  console.log(`app runing on port ${port}...`);
});
