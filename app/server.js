require('dotenv').config();

const express = require('express');
const router = require('./routes/api');
// const { logger } = require('./middleware/testMiddleware');
// const { authorize } = require('./middleware/authorize');
const expressFileupload = require('express-fileupload');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressFileupload());
// app.use([authorize, logger]);
app.use(router);
app.use('/v1/api', router);

app.all('*', (req, res) => {
    res.send('404');
})

app.listen(process.env.PORT, () => {
    console.log(`Your app is running on ${process.env.PORT}`);
});