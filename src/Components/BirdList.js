import React from 'react';
import BirdItem from "./BirdItem";

const birdList = (props) => {
     let birds = props.birdList;
     const trItem = birds.map((bird,index)=>(
          <BirdItem
             key={index}
             bird={bird}
             index={index}
             editBirdSubmit={props.editBirdSubmit}
             deleteBird={props.deleteBird}
             addBird={props.onAddBird}
             addDate={props.addDate}
          />
     ));
     return <tbody>{trItem}</tbody>

}

export default birdList;