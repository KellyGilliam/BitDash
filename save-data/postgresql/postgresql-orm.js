const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgresql-orm', 'student', 'ilovetesting', {
  host: 'localhost',
  dialect: 'postgres'
});

const Event = sequelize.define('event', {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id: {
    type: Sequelize.STRING
  },
  summary: {
    type: Sequelize.STRING
  },
  htmlLink: {
    type: Sequelize.STRING
  },
  sequence: {
    type: Sequelize.INTEGER
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  },
  start: {
    type: Sequelize.DATE
  },
  end: {
    type: Sequelize.DATE
  }
})



module.exports = function(data) {
  //place code here



  // what does the sync method do?
  Event.sync({ logging: console.log }).then(() => {

    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i ++) {
      let array = data[keys[i]];
      for (let j = 0; j < array.length; j++) {
        let event = array[j];

        let record = {
          'id': event.id,
          'summary': event.summary,
          'htmlLink': event.htmlLink,
          'sequence': event.sequence,
          'created': event.created,
          'updated': event.updated,
          'start': event.start.dateTime,
          'end': event.end.dateTime
        };
        Event.create(record);
      }
    }
    return;
  });
};
