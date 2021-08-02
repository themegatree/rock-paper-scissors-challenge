const express = require('express')
const app = express()
const port = 3000

//routers
const indexRouter = require('./routes/index.js');
const rpsRouter = require('./routes/rps.js');
const rockRouter = require('./routes/rock.js');
const paperRouter = require('./routes/paper.js');
const scissorsRouter = require('./routes/scissors.js');
const resetRouter = require('./routes/reset.js');


//viewengine
app.set('viewengine','ejs');
app.use(express.urlencoded({extended: true}));

app.use('/', indexRouter);
app.use('/rps', rpsRouter);
app.use('/rock', rockRouter);
app.use('/paper', paperRouter);
app.use('/scissors', scissorsRouter);
app.use('/reset', resetRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})