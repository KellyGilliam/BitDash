import React, { Component } from 'react'
import { render } from 'react-dom'
// import axios from 'axios';

const scraperController = require('./scraper');
// 'use strict';

console.log(scraperController)

console.log('helloAgain');

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      play: ':o',
      move: 0,
      bitcoin: 4840,
      ethereum: 300,
      data: []
      // gameBoard: [['_'],['_'],['_']],
    };
    this.update = this.update.bind(this)
    this.getFucks = this.getFucks.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this);
  }


  // componentDidMount() {
  //   axios.get(`http://localhost:3000/sample`)
  //     .then(res => {
  //       console.log(res);
  //       const posts = res.data.data.children.map(obj => obj.data);
  //       this.setState({ posts });
  //     });
  // }

  componentDidMount() {
    //ajax request
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/sample');
    xhr.onload = () => {
        if (xhr.status === 200) {
          //on receipt, set state to update data
          // let scrapedData = xhr.ResponseText
          // console.log(xhr.responseText);
          var scrapedData = xhr.responseText;
          this.setState({data: scrapedData},function(){
            // console.log('DATA:', this.state.data);
            let fuck = this.state.data;
            console.log('FUCK', typeof fuck);
          });
        }
        else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }   
    }
    xhr.send(); 
  }
  
  getFucks() {
    console.log('hello');
  }

  update() {
    this.setState({
      bitcoin: 5000
    });
  }

    render() {
      let datad = this.state.data;
      console.log('DATA:', typeof datad);
      console.log('OBJECT', typeof datad);    
      
      let news = []; 

      for (let j = 0; j < 3; j++) {
        news.push(<NewsItem bitcoin={'hello'} update={this.update} key={j}></NewsItem>)
      }

      //for the length of the data, put in news array.
      // for (let i = 0; i < 3; i++) {
      //   pass props (from state) down to Box component:   //pass functions (update) down with just this. They don't have state:
      //   news.push(<Box bitcoin={this.state.bitcoin} update={this.update} key={i}></Box>)
      // }

      return (
      <div>
        <h1>Bitcoin News:</h1>
        <div className='row'>{news}</div>
      </div>
      )
    }
}

class Box extends Component {
    render () {
      return (
      <button className='box' onClick={this.props.update}>
        {this.props.bitcoin}
      </button>
      )
    }
}

class NewsItem extends Component {
    render () {
      return (
        <div className='newsItem' onClick={this.props.update}>
          {this.props.bitcoin}
        </div>
      )
    }
}

render(<App />, document.getElementById('content'));
