const pg = require('pg');
const uri = 'postgres://student:ilovetesting@localhost/postgresql-raw';



module.exports = function(data) {
  //place code here
  pg.connect(uri, (err, db) => {
    if (err) throw new Error(err);

    // make SQL queries
    let tableCreationString = 'CREATE TABLE IF NOT EXISTS events (_id SERIAL, id VARCHAR, summary VARCHAR, htmlLink VARCHAR, sequence INTEGER, createdAt DATE, updatedAt DATE, start DATE, "end" DATE);'
    console.log(tableCreationString);
    db.query(tableCreationString, (err, result) => {
      console.log(err);

      let keys = Object.keys(data);
      for (let i = 0; i < keys.length; i ++) {
        let array = data[keys[i]];
        for (let j = 0; j < array.length; j++) {
          let event = array[j];
          let text = 'INSERT INTO events(id, summary, htmlLink, sequence, createdAt, updatedAt, start, "end") VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
          let values = [];
          values.push(event.id);
          values.push(event.summary);
          values.push(event.htmlLink);
          values.push(event.sequence);
          values.push(event.created);
          values.push(event.updated);
          values.push(event.start.dateTime);
          values.push(event.end.dateTime);


          
          
          db.query(text, values, (err, result) => {
            if (err) console.log(err);
            console.log('Added', result);
          });
        }
      }
      // close database connection
    });

  });
};
