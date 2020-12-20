const initialState = {
  peopleList: [
    { name: 'John', imageURL: '../../img/john.png' },
    { name: 'Chris', imageURL: '../../img/chris.png' },
    { name: 'Brendon', imageURL: '../../img/brendon.png'}
  ],
  victim: null
}

export default function reducer(state=initialState, action) {
  const {type, payload} = action;
  // console.log('payload',payload)

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
      console.log(victim)
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


