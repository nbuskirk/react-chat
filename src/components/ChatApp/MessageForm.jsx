import React from 'react'
import { render } from 'react-dom'
import { Button, Input } from 'react-bootstrap'

var MessageForm = React.createClass({

  getInitialState() {
      return {text: ''};
  },

  handleSubmit(e) {
      e.preventDefault();
      var message = {
          user : this.props.user,
          text : this.state.text
      }
      this.props.onMessageSubmit(message);
      this.setState({ text: '' });
  },

  changeHandler(e) {
      this.setState({ text : e.target.value });
  },

  render() {
      return(
          <div className='message_form'>
              <form onSubmit={this.handleSubmit}>
                  <input onChange={this.changeHandler} className="form-control" value={this.state.text} />
                  <Button bsStyle="primary" onClick={this.handleSubmit} className="form-control">Send</Button>
                </form>
          </div>
      );
  }
});

module.exports = MessageForm;
