
const express = require('express');
const app = express();
const path = require('path');

const routes = require('./Controller/routes');
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.send(`
<body style='margin: 0;'>
  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh;">
    <img src="https://i.ebayimg.com/images/i/111008455624-0-1/s-l1000.jpg" />
    <h1>This website is under investigation for conspiracy to commit fraud</h1>
  </div>
</body>
  `);
});

app.use(routes);
app.use(express.static(path.join(__dirname, '../../Web/Assets/dist')));


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})