import {actions} from '../actions';

const reducer = (state, action) =>{
    switch (action.type) {
      case actions.SET_FAVORITE:
        return{
            ...state,
            myList:[...state.myList, action.payload]
        }
    case actions.DELETE_FAVORITE:
        return{
            ...state,
            myList:state.myList.filter(items=>items.id !== action.payload)
        }
    
      default:
          return state;
    }
}

export default reducer;