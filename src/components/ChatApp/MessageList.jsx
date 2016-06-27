import React from 'react'
import { render } from 'react-dom'
import $ from 'jquery'
var MessageList = React.createClass({
  render() {
      return (
          <div id="chat" className='messages'>
              {
                  this.props.messages.map((message, i) => {
                      return (
                          <p key={i}>{message.toString()}</p>
                      );
                  })
              }
          </div>
      );

  }
});

module.exports = MessageList;
