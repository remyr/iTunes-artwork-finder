import constants from '../constants/index'

function rootReducer(state, action) {
    switch (action.type) {

        case constants.SEARCH_TO_STATE:
            return Object.assign({}, state, {
                results: action.data,
                isLoading: false,
                display: true,
            });

        case constants.IS_LOADING:
            return Object.assign({}, state, {
                isLoading: true,
                display: false,
            });

        case constants.RESET_DATA:
            return Object.assign({}, state, {
                results: [],
                display: false,
                isLoading: false,
            });

        default:
            return state
    }
}

export default rootReducer