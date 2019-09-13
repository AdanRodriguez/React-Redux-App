import { FETCHING_POKEMON_START, FETCHING_POKEMON_SUCCESS, FETCHING_POKEMON_FAILURE } from "../actions";

const initialState = {
    pokemon: [],
    isFetching: false,
    error: ""
}

function reducer (state = initialState, action){
    switch (action.type) {
        case FETCHING_POKEMON_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCHING_POKEMON_SUCCESS:
            return {
                ...state,
                pokemon: action.payload,
                isFetching: false
            };
        case FETCHING_POKEMON_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }    
            default:
            return state;
    }
};

export default reducer;
