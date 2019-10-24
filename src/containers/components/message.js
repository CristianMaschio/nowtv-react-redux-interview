import React from 'react'
import PropTypes from 'prop-types'

import './message.scss'

class Message extends React.PureComponent {
  state = {
    isHover: false
  }

  handleIsHover = isHover => {
    this.setState({ isHover })
  }

  render() {
    const { style, message, user } = this.props
    const { isHover } = this.state

    return (
      <div
        style={style}
        onMouseEnter={() => this.handleIsHover(true)}
        onMouseLeave={() => this.handleIsHover(false)}>
        <div className="message-container">
          <div className={`message-detail ${isHover ? 'is-hover' : ''}`}>
            <span>{user.email}</span>
          </div>
          <img className="avatar" src={user.avatar} alt="user avatar" />
          <div className="message-text">{message.message}</div>
          <div className="message-time">
            {new Date(message.timestamp).toLocaleString()}
          </div>
        </div>
      </div>
    )
  }
}

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
  }),
  user: PropTypes.shape({
    avatar: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string,
    id: PropTypes.string,
    ip: PropTypes.string,
    lastName: PropTypes.string
  }),
  style: PropTypes.object
}

export default Message
