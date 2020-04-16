const express = require('express');
const app = express();

const PORT = 4000;

app.use(express.static(`${__dirname}/build`));

app.listen(PORT, () => console.log(`Static server is on ${PORT}`));

app.get('/*', (req, res) => res.sendFile(`${__dirname}/build/index.html`));