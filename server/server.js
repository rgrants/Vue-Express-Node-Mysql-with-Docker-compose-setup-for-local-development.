let express = require('express');
bodyParser = require('body-parser');
cors = require('cors');
schedule = require('node-schedule');
pool = require('../server/common/db');

//Express - sessions

const app = express();
const port = 3000;

app.use(
    express.urlencoded({
        extended: true
    }));
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(cors());
app.use(require('./api/routing'));

app.post('/startTask', (request, response) => {
    var myString = request.body.String;

    console.log(myString);
    if (myString === 'true') {
        executeMyTask();

    }else if (myString === 'false'){
        cancelMyTask();

    }
    response.send('Done');
});


function executeMyTask() {
    schedule.scheduleJob("myTask",'*/1 * * * *', function () {
        pool.query("INSERT INTO test_database.test_table (date_time) VALUES (current_time())", (error, results) => {
            console.log("JOB STARTED");
        });
    });
}

function cancelMyTask() {
    schedule.cancelJob("myTask");
    console.log("Canceled Job myTask");

}

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', reason.stack || reason)
    // Recommended: send the information to sentry.io
    // or whatever crash reporting service you use
});


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});
