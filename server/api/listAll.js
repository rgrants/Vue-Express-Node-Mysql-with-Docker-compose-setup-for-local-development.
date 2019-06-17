var pool = require('../common/db');

const getListOfThemes = (request, response) => {
    // var count = request.body.count;
    // var page = request.body.page * count;
    var count = 10;
    var page = 0 * count;


    // At first a thought I could use database built in pagination but then i decided just to consume everything on vue part.
//  LIMIT ?, ?
    pool.query('SELECT * FROM test_database.test_table ORDER BY  date_time DESC ',[ page,count ], function (error, results) {
        if (error) {
            console.log(error);
            response.send('{"status":"' + 1 + '"}');
        } else {
                response.send(JSON.stringify(results));


        }
    });

};

module.exports = getListOfThemes;
