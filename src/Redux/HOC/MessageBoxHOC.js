import {connect} from 'react-redux'
import MessageBox from '../../ReactComponents/ReduxComponents/MessageBox'

const mapStateToProps=(state)=>{
    return {
        message: state.messageData.message
    }
}

const MessageBoxHOC=connect(mapStateToProps,null)(MessageBox)

export default MessageBoxHOC