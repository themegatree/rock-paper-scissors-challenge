const express = require('express')
const app = express()
const port = 3000

//routers
const indexRouter = require('./routes/index.js');
const rpsRouter = require('./routes/rps.js');
const resultRouter = require('./routes/result.js');


//viewengine
app.set('viewengine','ejs');
app.use(express.urlencoded({extended: true}));

app.use('/', indexRouter);
app.use('/rps', rpsRouter);
app.use('/result', resultRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})