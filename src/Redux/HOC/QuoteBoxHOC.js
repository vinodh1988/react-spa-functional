

import {connect} from 'react-redux';
import QuoteBox from '../../ReactComponents/ReduxComponents/QuoteBox';


const mapStateToProps =(state)=>{
    return {
        quote: state.quoteData.quote,
        author: state.quoteData.author
    }
}

const QuoteBoxHOC= connect(mapStateToProps,null)(QuoteBox)

export default QuoteBoxHOC