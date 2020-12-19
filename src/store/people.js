const initialState = {
  peopleList: [
    { name: 'John', url: '../img/john.png' },
    { name: 'Chris', url: '../img/chris.png' },
    { name: 'Brendon', url: '../img/brendon.png'}
  ],
  victim: {}
}

export default function reducer(state=initialState, action) {
  const {type, payload} = action;
  console.log('payload',payload)

  switch(type) {
    case 'SELECTVICTIM':
      let newState = {...state, 
        victim: payload
      }
      return newState
    case 'SHOWPEOPLELIST':
      return {...state,
        peopleList: payload
      }
      default:
        return state
      }
    }
    
    export const selectVictim = (victim) => {
      return {
        type: 'SELECTVICTIM',
        payload: victim
      }
      
    }
    export const showPeopleList = (people) => {
      return {
        type: 'SHOWPEOPLELIST',
        payload: people
      }
      
    }


