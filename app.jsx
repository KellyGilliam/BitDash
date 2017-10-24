import React, { Component } from 'react'
import { render } from 'react-dom'
const scraperController = require('./scraper');
const bodyParser = require('body-parser');
import axios from 'axios';
// 'use strict';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      play: 'hello',
      bitcoin: 4840,
      ethereum: 300,
      data: []
    };
    this.update = this.update.bind(this)
  }

  componentWillMount() {
    //ajax request
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/sample');
    xhr.onload = () => {
        if (xhr.status === 200) {
          var scrapedData = xhr.responseText;
            let clg = JSON.parse(scrapedData);
            // console.log('TYPE', typeof clg);
            this.setState({data: clg});
            // console.log(this.state.data);
        }
        else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }   
    }
    xhr.send(); 
  }
  
  // createUser(userObject) {
  //   var xhr = new XMLHttpRequest();
  //   xhr.open("POST", 'http://localhost:3000/storeUser', false);
  //   xhr.onload = // something
  //   function() {xhr.send(userObject)},
  //   false
  // }

  update() {
    this.setState({
      bitcoin: 5000
    });
  }

  render() {
      let rows = [];
      for (let i = 0; i < 1; i++) {
        rows.push(<News data={this.state.data} update={this.update} key={i}></News>)
      }
      return (
      <div>
        <h1>Bitcoin News:</h1>
        <div className='row'>{rows}</div>
      </div>
      )
    }
}

//1 single news item:
class News extends Component {
    render () {

      let titles = [];

      let firstTitleInData = this.props.data;
      // let typeofFirstTitle = typeof firstTitleInData;

      // console.log(typeofFirstTitle);
      let i = 0;
      for (let prop in firstTitleInData) {
        i++;
        if(firstTitleInData[prop].title.length >= 1) {
          // console.log(firstTitleInData[prop].title, i);
        titles.push(<div className='newsItem' key={i}>{firstTitleInData[prop].title}</div>);
        }
      }

      return (
      <button className='news' onClick={this.props.update}>
        {titles}
      </button>
      )
    }
}

submitUserButton.addEventListener('click', function() {
  let userId = document.getElementById("idInput").value;
  let userName= document.getElementById("nameInput").value;
  let userBuyPoint = document.getElementById("buyPointInput").value;
  let userStopLoss = document.getElementById("stopLossInput").value;

  // let userPerson = {
  //   id: userId,
  //   name: userName,
  //   buyPoint: userBuyPoint,
  //   stopLoss: userStopLoss
  // }

  // {id: req.body.id,
  //     name: req.body.name,
  //     buyPoint: req.body.buyPoint,
  //     stopLoss: req.body.stopLoss}

  axios.post('http://localhost:3000/postUser', {
    id: userId,
    name: userName,
    buyPoint: userBuyPoint,
    stopLoss: userStopLoss
  })
  .then((res) => {
    //this.createUser;
    console.log('THIS IS THE AXIOS POST', res);
  })
  .catch(function(error){
    console.log(error);
  })

  // console.log(userId, userName, userBuyPoint, userStopLoss);
  // let userRecord ={
  //   'id': '0',
  //   'name': 'kelly',
  //   'buyPoint': userBuyPoint,
  //   'stopLoss': userStopLoss
  // };

  // console.log(userRecord);

  // // let newUserRecord = JSON.stringify(userRecord);
  // var xhr = new XMLHttpRequest();
  // xhr.open('POST', 'http://localhost:3000/postUser', true);
  // xhr.setRequestHeader('Content-type', 'application/json');
  // xhr.onload = function () {
  //   // do something to response
  // console.log(this.responseText);
// };
// xhr.send(userRecord);  //userRecord

}, false);

render(<App />, document.getElementById('content'));




          // this.setState({data: scrapedData});
          //   ,function(){
          //   let fuck = this.state.data;
          //   fuck = JSON.parse(fuck);
          //   console.log(fuck);
          //   let allFucks = [];
          //   for (let i = 0; i < fuck.length; i++) {
          //     console.log(fuck[i]);
          //     allFucks.push(<NewsItem bitcoin={fuck[i]} key={i}></NewsItem>)
          //   }
          //   console.log(allFucks);
          // });


  // createUser() {
  //   var xhr = new XMLHttpRequest();
  //   xhr.open("POST", url, false);
  //   xhr.onload = // something
  //   document.getElementById("your_button's_ID").addEventListener("click",
  //       function() {xhr.send(data)},
  //       false
  //   );
  // }



//for the length of the data, put in news array.
      // for (let i = 0; i < 3; i++) {
      //   pass props (from state) down to Box component:   //pass functions (update) down with just this. They don't have state:
      //   news.push(<Box bitcoin={this.state.bitcoin} update={this.update} key={i}></Box>)
      // }


  // componentDidMount() {
  //   axios.get(`http://localhost:3000/sample`)
  //     .then(res => {
  //       console.log(res);
  //       const posts = res.data.data.children.map(obj => obj.data);
  //       this.setState({ posts });
  //     });
  // }


  // class Row extends Component {
//     render () {
//       return (
//         <div className='row' onClick={this.props.update}>
//           {this.props.bitcoin}
//         </div>
//       )
//     }
// }


  // var xhr = new XMLHttpRequest();                   //sync: false better/necessary?
  //   xhr.open("POST", 'http://localhost:3000/postUser', true);
  //   xhr.onload = // something
  //   function() {xhr.send(userRecord)},
  //   false