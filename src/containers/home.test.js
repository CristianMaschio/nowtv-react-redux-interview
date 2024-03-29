import React from 'react'
import { shallow } from 'enzyme'

import Home from './home'

describe('Test: <Home/>', () => {
  it('renders correctly', () => {
    const props = {
      messages: {},
      members: {},
      loadMessages: () => {}
    }
    const tree = shallow(<Home.WrappedComponent {...props} />)
    expect(tree).toMatchSnapshot()
  })
})
