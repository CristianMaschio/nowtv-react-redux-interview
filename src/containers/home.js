import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import List from 'react-virtualized/dist/commonjs/List'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import { loadMessages } from '../action-creators/messages'
import { loadMembers } from '../action-creators/members'
import Message from './components/message'

import 'react-virtualized/styles.css'
import './home.scss'

class Home extends React.PureComponent {
  state = {
    messages: { loading: true }
  }

  // ------------Life Cycle-------------
  componentDidMount() {
    this.props.loadMessages()
    this.props.loadMembers()
  }

  componentDidUpdate(oldProps) {
    if (!_.isEqual(oldProps.messages, this.props.messages)) {
      let messages = _.cloneDeep(this.props.messages)
      // Sort the messages by time
      messages.messages.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      )
      this.setState({ messages })
    }
  }

  // ------------Render Functions-------------
  renderMessage = ({ index, key, style }) => {
    const messageData = this.state.messages.messages[index]
    const messageUser = this.props.members.members[messageData.userId]

    return (
      <Message
        key={key}
        style={{ ...style, height: '70px' }}
        message={messageData}
        user={messageUser}
      />
    )
  }

  // ------------Render-------------
  render() {
    const { loading, messages } = this.state.messages

    return (
      <div className="home">
        <img
          className="logo"
          src={require('../logo.png')}
          alt="Now TV logo"></img>
        {loading || this.props.members.loading ? (
          <span className="loading">Loading...</span>
        ) : (
          <AutoSizer disableHeight>
            {({ width }) => (
              <List
                height={500}
                rowHeight={70}
                rowRenderer={this.renderMessage}
                width={width}
                rowCount={messages.length}
              />
            )}
          </AutoSizer>
        )}
      </div>
    )
  }
}

// ------------PropTypes-------------
Home.propTypes = {
  loadMessages: PropTypes.func,
  loadMembers: PropTypes.func,
  messages: PropTypes.shape({
    loading: PropTypes.bool,
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired
      })
    ),
    error: PropTypes.bool,
    errorMessage: PropTypes.string
  }),
  members: PropTypes.shape({
    loading: PropTypes.bool,
    members: PropTypes.shape(
      PropTypes.shape({
        avatar: PropTypes.string,
        email: PropTypes.string,
        firstName: PropTypes.string,
        id: PropTypes.string,
        ip: PropTypes.string,
        lastName: PropTypes.string
      })
    ),
    error: PropTypes.bool,
    errorMessage: PropTypes.string
  })
}

Home.defaultProps = {
  loadMessages: () => {},
  loadMembers: () => {},
  messages: { loading: false, messages: [], error: false, errorMessage: '' },
  members: { loading: false, members: {}, error: false, errorMessage: '' }
}

// -------------------------
const mapStateToProps = state => ({
  messages: state.messages,
  members: state.members
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadMessages, loadMembers }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
