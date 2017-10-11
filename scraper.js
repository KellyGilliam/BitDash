'use strict';

const cheerio = require('cheerio');
const request = require('request');

const scrapeController = {
  getData: (req, res, next) => {
    request('http://www.latimes.com/sports/', (error, response, html) => {
      let $ = cheerio.load(html);
      let jsonArray = [];
      $('.trb_outfit_group_list_item').filter(function() {
        let json = {title:''}
        let data = $(this);
        let text = data.children().first().next().children().first().next().children().first().text();
        json.title = text;
        jsonArray.push(json);
      });
      res.send(jsonArray);
    });
  }
}
module.exports = scrapeController;
