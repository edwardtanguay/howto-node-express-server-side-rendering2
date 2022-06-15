import express from 'express';
import { siteModel } from './models.js';
import { siteView } from './views.js';

const app = express();
const port = 3008;

app.get('/', (req, res) => {
    res.send(siteView(siteModel));
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
