import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import MessageBox from '../../ReactComponents/ReduxComponents/MessageBox'
import { MessageAction } from '../Actions/MessageAction'

const mapStateToProps=(state)=>{
    return {
        message: state.messageData.message,
        runCount: state.currentRound.run
    }
}

const mapActionToProps=(dispatch)=>{
    return bindActionCreators({changeMessage:MessageAction},dispatch);
    
}

const MessageBoxHOC=connect(mapStateToProps,mapActionToProps)(MessageBox)

export default MessageBoxHOC