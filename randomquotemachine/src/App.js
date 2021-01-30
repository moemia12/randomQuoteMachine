import Button from './components/Button';
import { random } from 'lodash';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    }
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
  }
  nextQuoteClickHandler(){
    
  }

// Extracting Random quotes Data from gist via GitHub
componentDidMount(){
  fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
  .then(data => data.json())
  .then(quotes => this.setState({quotes}, () =>{
    this.setState({selectedQuoteIndex: this.selectQuoteIndex()})
  }))
}

//Function that gets the random selected quote
get selectedQuote(){
  if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
    return;
  }

  return this.state.quotes[this.state.selectedQuoteIndex];
}

//Function to select the quote index
selectQuoteIndex(){
  if(!this.state.quotes.length){
    return;
  }
  return random(0, this.state.quotes.length -1)
}

  render(){
    console.log(this.state.selectedQuoteIndex);
    return (
      <div className="App" id="quote-box">
          {this.selectedQuote ? `"${this.selectedQuote.quote}" - ${this.selectedQuote.author}` : ''} {/*Uses the selectedQuote func to receive random quote & autho */}
          <Button buttonDisplayName="Next Quote" onClick={this.nextQuoteClickHandler()}/> 
      </div>
    );
  }
  
}

export default App;

 