import React from 'react'
import { shallow } from 'enzyme'

import Message from './message'

describe('Test: <Message />', () => {
  it('renders correctly', () => {
    const props = {
      message: {
        id: '22a454b1-6659-400f-aa77-eaae34a77118',
        userId: '205c9b7a-345d-4aa2-9e4c-56f05f72bbe8',
        message:
          'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
        timestamp: '2016-04-14T16:53:55Z'
      },
      user: {
        id: '205c9b7a-345d-4aa2-9e4c-56f05f72bbe8',
        firstName: 'Jeremy',
        lastName: 'Gomez',
        email: 'jgomezh@cdc.gov',
        avatar: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
        ip: '153.52.102.218'
      }
    }
    const tree = shallow(<Message {...props} />)
    expect(tree).toMatchSnapshot()
  })
})
