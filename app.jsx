import React, { Component } from 'react'
import { render } from 'react-dom'
const scraperController = require('./scraper');
// import axios from 'axios';
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
    // this.getFucks = this.getFucks.bind(this)
  }

  componentWillMount() {
    //ajax request
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/sample');
    xhr.onload = () => {
        if (xhr.status === 200) {
          var scrapedData = xhr.responseText;
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

            let clg = JSON.parse(scrapedData);

            console.log('TYPE', typeof clg);

            this.setState({data: clg});
            console.log(this.state.data);
        }
        else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }   
    }
    xhr.send(); 
  }
  
  // getFucks() {
  //   console.log('hello');
  // }

  update() {
    this.setState({
      bitcoin: 5000
    });
  }

  render() {
      //for the length of the data, put in news array.
      // for (let i = 0; i < 3; i++) {
      //   pass props (from state) down to Box component:   //pass functions (update) down with just this. They don't have state:
      //   news.push(<Box bitcoin={this.state.bitcoin} update={this.update} key={i}></Box>)
      // }
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
        titles.push(<div className='newsItem' key={i}>{firstTitleInData[prop].title}</div>);
      }

      return (
      <button className='news' onClick={this.props.update}>
        {titles}
      </button>
      )
    }
}

// class Row extends Component {
//     render () {
//       return (
//         <div className='row' onClick={this.props.update}>
//           {this.props.bitcoin}
//         </div>
//       )
//     }
// }

render(<App />, document.getElementById('content'));




  // componentDidMount() {
  //   axios.get(`http://localhost:3000/sample`)
  //     .then(res => {
  //       console.log(res);
  //       const posts = res.data.data.children.map(obj => obj.data);
  //       this.setState({ posts });
  //     });
  // }
