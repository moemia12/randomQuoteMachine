import { random } from 'lodash';
import 'typeface-roboto';
import React, { Component } from 'react'
import QuoteMachine from './components/QuoteMachine'
import { Grid, withStyles } from '@material-ui/core'


const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center'
  }
}

// Global App class for the Random Quote Machine - Setting current states for "quotes" & "selectedQuoteIndex"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    }

    //Binding methods
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);

  }

  // Extracting Random quotes Data from gist via GitHub
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }

  //Function that gets the random selected quote
  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      {/*Checking to see if the quotes has a length OR whether the index exists */ }
      return undefined; {/*Return undefined if not*/ }
    }
    return this.state.quotes[this.state.selectedQuoteIndex]; {/*Else return the selected quote */ }
  }

  //Method to generate the quote index by returning an interger from state.quotes (Using Lodash for the Random func)
  generateNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return random(0, this.state.quotes.length)
  }

  // Method to assign the index quote to the Button component below
  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });

  }

  render() {
    return (
      <Grid className={this.props.classes.container} id="quote-box" justify='center' container>
        <Grid xs={11} lg={8} item>
          <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} />
        </Grid>

      </Grid>
    );
  }

}

export default withStyles(styles)(App);

