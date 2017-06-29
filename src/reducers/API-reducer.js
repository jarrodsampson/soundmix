import * as types from '../actions/action-types';

const initialState = {
    hotList: {
        data: []
    },
    newList: {
        data: []
    },
    popularList: {
        data: []
    },
    discoverList: {
        popular: {},
        latest: {
            data: [
                {
                    "name":"mark"
                }
            ]
        }
    },
    searchResults: {
      data: []
    },
    searchParamString: "",
    pageCount: 100,
    offset: 0
};


const APIReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.GET_HOTLIST_SUCCESS:
            return Object.assign({}, state, { hotList: action.hotList });
        case types.GET_NEWLIST_SUCCESS:
            return Object.assign({}, state, { newList: action.newList });
        case types.GET_POPULARLIST_SUCCESS:
            return Object.assign({}, state, { popularList: action.popularList });
        // TODO: COME BACK TO THIS IT IS NOT WORKING MAYBE NEED REDUX THUNK???
        case types.GET_TAG_LATEST_LIST_SUCCESS:
            return Object.assign({}, state, { discoverList: {latest: action.tagLatestList} });
        case types.GET_SEARCH_LIST_SUCCESS:
            return Object.assign({}, state, { searchResults: action.searchList });
        case types.GET_SEARCH_LIST_PARAMS_SUCCESS:
            return Object.assign({}, state, { searchParamString: action.searchString });
        default:

    }

    return state;

};

export default APIReducer;