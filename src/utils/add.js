
export default function addDataToMyDatat(state=initialState,action) {
  switch (action.type) {  
    case 'ADD_DATA_TO_MY_DATA':  
      return {  
        ...state,  
        myData: [...state.myData, action.data]  
      };  
    default:  
      return state;  
  }  
}