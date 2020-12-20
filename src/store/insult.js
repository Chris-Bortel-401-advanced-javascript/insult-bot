const initialState = {
  insults:[
    'smells like a fart',
    'is a newt',
    'is bald?',
    'is a hamster?',
    'cannot cook a pork chop',
    'needs a life',
    'smells of elder berries',
    'cannot type',
    'cannot even code',
    'has hair',
    'cannot even'
  ],
  victim: {}
}

export default function reducer(state=initialState, action) {
  const {type, payload} = action;

  switch(type) {
    case 'INSULTTHEM':
      return {...state, 
        insultList: payload
      }
      default: 
      return state
    }
  }
  
  export const insultThem = (insult) => {
    return {
      type: 'INSULTTHEM',
      payload: insult
    }
  }

