import React from 'react'
import { render } from 'react-dom'
import { Panel } from 'react-bootstrap'
import UsersList from './UsersList.jsx'
import MessageForm from './MessageForm.jsx'
import MessageList from './MessageList.jsx'
const connection_str = 'http://' + document.domain + ':' + 3000;
const io = require('socket.io-client');
const socket = io.connect(connection_str);

const ChatApp = React.createClass({
  getInitialState() {
    return {users: [{name:'Users Loading..'}], messages:['Chat Loading..'], text: ''};
  },
  componentDidMount() {
      socket.on('init', this._initialize);
      socket.on('newmessage', this._messageRecieve);
      socket.on('disconnect', this._userLeft);
  },
  _messageRecieve(data) {
      this.setState({messages: data.messages});
  },
  _initialize(data) {
      this.setState({
        users: data.connections, //sync users
        messages: data.messages //sync messages
      });
  },
  _userLeft(data) {
      this.setState({users: data.connections});
  },
  handleMessageSubmit(message) {
     var {messages} = this.state;
     messages.push(message);
     this.setState({messages});
     socket.emit('newmessage', message.text);
  },
  render(){
    return (
      <div className="container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="hidden-xs">iChat</h2>
              <h3 className="visible-xs">iChat</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Panel header="Users" bsStyle="success">
              <UsersList users={this.state.users}/>
            </Panel>
          </div>
          <div className="col-md-9">
            <Panel header="Chat" bsStyle="success">
              <MessageList messages={this.state.messages} />
              <MessageForm onMessageSubmit={this.handleMessageSubmit} user={this.state.user} />
            </Panel>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = ChatApp;
