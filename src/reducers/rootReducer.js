const initState = {
    posts: [
      {id: '1', title:'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet'},
      {id: '2', title:'Charmander Laid an Egg', body:'Lorem ipsum, dolor sit amet'},
      {id: '3', title:'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet'}  
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer