export const initialState = {
    basket: [],
    user: null
};
export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET': 
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case 'REMOVE_FROM_BASKET':
             const index = state.basket.findIndex(basketItem => (
                 basketItem.keyID === action.keyID
             ));
             if(index >= 0) {
                state.basket.splice(index,1);
             } else {
                 console.warn(`Unable to remove item with ${action.keyID} id.`);
             }
             return {
                 ...state,
                 basket: state.basket
             }
        case 'SET_USER': 
             return {
                 ...state,
                 user: action.user
             }
        default: 
            return state;
    }
} 
export default reducer;