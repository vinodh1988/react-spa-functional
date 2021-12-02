

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import QuoteBox from '../../ReactComponents/ReduxComponents/QuoteBox';
import { getQuoteFromAPI } from '../Actions/QuoteAction';


const mapStateToProps =(state)=>{
    return {
        quote: state.quoteData.quote,
        author: state.quoteData.author
    }
}

const mapActionToProps = (dispatch)=>{
    return bindActionCreators(
        {
            getNewQuote: ()=>{
               return getQuoteFromAPI()
            },
        },dispatch);
    
}

const QuoteBoxHOC= connect(mapStateToProps,mapActionToProps)(QuoteBox)

export default QuoteBoxHOC