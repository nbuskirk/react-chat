import React from 'react'
import { render } from 'react-dom'

const UsersList = React.createClass({

  render(){
    return (
        <div className="users">
          <ul>
            {
              this.props.users.map((user,i) => {
                var style = {
                  color: '#'+user.color
                }
                return (
                  <li style={style} key={i}><p>{user.name}</p></li>
                )
              })
            }
          </ul>
        </div>
    )
  }

})

module.exports = UsersList;
