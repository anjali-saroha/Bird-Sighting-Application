const intialState = [ ]

const reducers = (state=intialState,action)=>{

    switch(action.type)
    {
        case "addBird":
            console.log("Add");
            let stateCopy= [...state,action.payload];
            return stateCopy;

        case "deleteBird":
            console.log("deletebird")
            let delBird = state.filter(bird => bird.id !== action.payload);
            return delBird;
        
        case "updateBird":
            console.log("update");
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
              console.log("adddate");
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