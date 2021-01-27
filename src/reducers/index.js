import {actions} from '../actions';

const reducer = (state, action) =>{
    switch (action.type) {
      case actions.SET_FAVORITE:
        const exist = state.myList.find(item => item.id === action.payload.id)
        if (exist) return {...state}
        else
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