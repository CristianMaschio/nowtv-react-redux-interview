import members from './members'
import { MEMBERS_LOADED } from '../action-creators/action-types'

describe('members reducer', () => {
  const membersPayload = [
    {
      id: 'ca7fe54f-c348-4d5f-a2ff-2462e82b9377',
      firstName: 'Sara',
      lastName: 'Shaw',
      email: 'sshaw1c@naver.com',
      avatar: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
      ip: '51.26.86.127'
    },
    {
      id: '1c7235f5-c640-41e6-944e-97e638d20c16',
      firstName: 'Sharon',
      lastName: 'Jacobs',
      email: 'sjacobs1d@over-blog.com',
      avatar: 'http://dummyimage.com/100x100.png/dddddd/000000',
      ip: '44.184.159.48'
    }
  ]

  const membersDataResult = {
    loading: false,
    members: {
      'ca7fe54f-c348-4d5f-a2ff-2462e82b9377': {
        id: 'ca7fe54f-c348-4d5f-a2ff-2462e82b9377',
        firstName: 'Sara',
        lastName: 'Shaw',
        email: 'sshaw1c@naver.com',
        avatar: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
        ip: '51.26.86.127'
      },
      '1c7235f5-c640-41e6-944e-97e638d20c16': {
        id: '1c7235f5-c640-41e6-944e-97e638d20c16',
        firstName: 'Sharon',
        lastName: 'Jacobs',
        email: 'sjacobs1d@over-blog.com',
        avatar: 'http://dummyimage.com/100x100.png/dddddd/000000',
        ip: '44.184.159.48'
      }
    },
    error: false,
    errorMessage: ''
  }

  it('should set members on members loaded', () => {
    expect(
      members(undefined, {
        type: MEMBERS_LOADED,
        payload: membersPayload
      })
    ).toEqual(membersDataResult)
  })
})
