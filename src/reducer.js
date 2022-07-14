export const initialState = {
    basket: [],
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
                 basketItem.id === action.id
             ));
             console.log(index);
             console.log(action);
             if(index >= 0) {
                state.basket.splice(index,1);
             } else {
                 console.warn(`Unable to remove item with ${action.id} id.`);
             }
             return {
                 ...state,
                 basket: state.basket
             }
        default: 
            return state;
    }
} 
export default reducer;