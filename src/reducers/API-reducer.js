import * as types from '../actions/action-types';

const initialState = {
    hotList: {
        data: []
    },
    newList: {
        data: []
    },
    popularList: {
        data: [],
        paging: {
            next: ""
        }
    },
    discoverTagList: {
        data: []
    },
    searchResults: {
      data: []
    },
    searchParamString: "",
    pageCount: 10,
    offset: 0,
    userDetails: {
        pictures: {},
        cover_pictures: {}
    },
    playlists: {
            data: []
    },
    cloudcasts: {
            data: []
    },
    feed: {
            data: []
    },
    mixDetails: {
        pictures: {},
        user: {
            pictures: {}
        },
        tags: []
    },
    listeners: {
        data: []
    },
    suggestions: {
        data: []
    },
    favoriteList: {
        data: []
    },
    tagSearchList: {
        data: []
    },
    isLoading: true
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
        case types.GET_USER_DETAIL_SUCCESS:
            return Object.assign({}, state, { userDetails: action.userDetail });
        case types.GET_MIX_DETAIL_SUCCESS:
            return Object.assign({}, state, { mixDetails: action.mixDetail });
        case types.GET_MIX_LISTENERS_SUCCESS:
            return Object.assign({}, state, { listeners: action.listenerList });
        case types.GET_MIX_SIMILAR_SUCCESS:
            return Object.assign({}, state, { suggestions: action.similarList });
        case types.GET_MIX_FAVORITE_SUCCESS:
            return Object.assign({}, state, { favoriteList: action.favoriteList });
        case types.GET_TAG_LIST_SUCCESS:
            return Object.assign({}, state, { tagSearchList: action.tagList });
        case types.GET_USER_PLAYLISTS_SUCCESS:
            return Object.assign({}, state, { playlists: action.playlists });
        case types.GET_USER_CLOUDCASTS_SUCCESS:
            return Object.assign({}, state, { cloudcasts: action.cloudcasts });
        case types.GET_USER_FEED_SUCCESS:
            return Object.assign({}, state, { feed: action.feed });
        case types.GET_TAG_DISCOVER_LIST_SUCCESS:
            return Object.assign({}, state, { discoverTagList: action.tagDiscoverList });
        case types.GET_LOADING_STATUS:
            return Object.assign({}, state, { isLoading: action.status });
        default:

    }

    return state;

};

export default APIReducer;