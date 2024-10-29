function reducer(state, action){
    switch (action.type) {
        case 'loading':
            return {
                ...state,
                isLoad: true,
            }

        case 'getStories':
            return {
                ...state, 
                isLoad: false,
                hits: action.payload.hits,
            }
            
        default:
            return state;
    }
}

export default reducer;