const express = require('express')
const app = express()
const port = 3000

//routers
const indexRouter = require('./routes/index.js');
const rpsRouter = require('./routes/rps.js');
const rpslsRouter = require('./routes/rpsls.js');
const rockRouter = require('./routes/rock.js');
const paperRouter = require('./routes/paper.js');
const scissorsRouter = require('./routes/scissors.js');
const rockRPSLSRouter = require('./routes/rockRPSLS.js');
const paperRPSLSRouter = require('./routes/paperRPSLS.js');
const scissorsRPSLSRouter = require('./routes/scissorsRPSLS.js');
const lizardRPSLSRouter = require('./routes/lizardRPSLS.js');
const spockRPSLSRouter = require('./routes/spockRPSLS.js');
const resetRouter = require('./routes/reset.js');

//viewengine
app.set('viewengine','ejs');
app.use(express.urlencoded({extended: true}));

app.use('/', indexRouter);
app.use('/rps', rpsRouter);
app.use('/rpsls', rpslsRouter);
app.use('/rock', rockRouter);
app.use('/paper', paperRouter);
app.use('/scissors', scissorsRouter);
app.use('/rockRPSLS', rockRPSLSRouter);
app.use('/paperRPSLS', paperRPSLSRouter);
app.use('/scissorsRPSLS', scissorsRPSLSRouter);
app.use('/lizardRPSLS', lizardRPSLSRouter);
app.use('/spockRPSLS', spockRPSLSRouter);
app.use('/reset', resetRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})