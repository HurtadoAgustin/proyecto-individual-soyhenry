/*import {
  SOMETHING,
  
} from '../actions';*/

const initialState = {
  
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    /*case SOMETHING:
      return {
        ...state,
        
      }*/
    default:
      return { ...state }
  };
};

export default rootReducer;