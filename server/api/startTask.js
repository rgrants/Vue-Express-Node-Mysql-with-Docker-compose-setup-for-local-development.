var pool = require('../common/db');


const startTask = (request, response) => {

    var myString = request.body.String;

    console.log(myString);
    if (myString === 'true') {
        executeMyTask();

    } else if (myString === 'false') {
        cancelMyTask();

    }
    response.send('Done');

};


function createTableIfNonExisting() {
    pool.query("CREATE TABLE IF NOT EXISTS test_table (`id` int(10) unsigned NOT NULL AUTO_INCREMENT,`date_time` datetime NOT NULL,PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=1296 DEFAULT CHARSET=utf8;") , (error, results) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Table crated");

        }

    }
}

function executeMyTask() {
    createTableIfNonExisting();

    schedule.scheduleJob("myTask", '*/1 * * * *', function () {
        pool.query("INSERT INTO test_table (date_time) VALUES (current_time())", (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log("JOB STARTED");

            }
        });
    });
}

function cancelMyTask() {
    schedule.cancelJob("myTask");
    console.log("Canceled Job myTask");

}
module.exports = startTask;
