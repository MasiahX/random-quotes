import React, { Component } from 'react';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentWillMount() {
      this._getQuotes();
  }

 onButtonClick(e) {
   e.preventDefault();

   setTimeout(() => {
       this._getQuotes();
   }, 500)

 }

 _getQuotes() {
   let url = "https://thesimpsonsquoteapi.glitch.me/quotes";
    fetch(url)
      .then((data) => data.json())
      .then((quotes) => {
           this.props.addData(quotes);
      })
 }


  render() {
    let {quotes} =  this.props;
    console.log(this.props.quotes, 'props isso')
    return (
      <div className="App">
        <div className="_quote">
           <h2>Random-Quote-A-NATOR</h2>
           <button type="submit" onClick={this.onButtonClick}> Generate new quote </button>
           <p> {quotes[0].quote} </p>
           <p> By: {quotes[0].character } </p>
        </div>
        <div className="img">
           <img src={quotes[0].image} />

           </div>

      </div>
    );
  }

}

export default App;
