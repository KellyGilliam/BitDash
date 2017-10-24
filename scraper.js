'use strict';

const cheerio = require('cheerio');
const request = require('request');

const scrapeController = {
  getData: (req, res, next) => {
    request('https://www.coindesk.com/', (error, response, html) => {
      let $ = cheerio.load(html);
      let jsonArray = [];
      $('.fade').filter(function() {
        let jsonT = {title:''}
        let data = $(this);
        let text = data.text();
        jsonT.title = text;
        jsonArray.push(jsonT);
        // console.log(jsonArray)
      });
      res.send(jsonArray);
    });
  }
}
module.exports = scrapeController;






// 'use strict';

// const cheerio = require('cheerio');
// const request = require('request');

// const scrapeController = {
//   getData: (req, res, next) => {
//     request('http://www.latimes.com/sports/', (error, response, html) => {
//       let $ = cheerio.load(html);
//       let jsonArray = [];
//       $('.trb_outfit_group_list_item').filter(function() {
//         let jsonT = {title:''}
//         let data = $(this);
//         let text = data.children().first().next().children().first().next().children().first().text();
//         jsonT.title = text;
//         jsonArray.push(jsonT);
//         // console.log(jsonArray)
//       });
//       res.send(jsonArray);
//     });
//   }
// }
// module.exports = scrapeController;
