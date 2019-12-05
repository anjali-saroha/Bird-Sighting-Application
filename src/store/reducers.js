const intialState = [ ]

const reducers = (state=intialState,action)=>{

    switch(action.type)
    {
        case "addBird":
            let stateCopy= [...state,action.payload];
            return stateCopy;

        case "deleteBird":
            let delBird = state.filter(bird => bird.id !== action.payload);
            return delBird;
        
        case "updateBird":
            let editBird = state.map((bird) => {
            const {id,name,description,type,date} = action.payload;
            if(bird.id === id) {
            bird.name = name;
            bird.description=description;
            bird.type=type
            bird.date.push(date);
            }
               return bird;
            })
            return editBird

        case "addDate":
              let updatedDateBird = state.map((bird) => {
                  const {id,date} = action.payload;
                  if(bird.id === id){
                      bird.date.push(date);
                  }
                  return bird;
              })
              return updatedDateBird;

        default :
          return state;
    }
}

export default reducers;