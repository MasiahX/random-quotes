const ADD = 'ADD';

const addQuote = (quote) => ({
      type: ADD,
      quote
  });



const quoteReducer = (state = 'Life is a beautiful maze', action) => {
    switch(action.type) {
      case ADD : return action.quote;
      default: return state;
    }
}

const mapStateToProps = (state) => {
    return {quotes: state}
}

const mapDispatchToProps = (dispatch) => {
   return {
     addData: quote => {
       dispatch(addQuote(quote))
     }
   }
}


module.exports = {quoteReducer, mapStateToProps, mapDispatchToProps};
