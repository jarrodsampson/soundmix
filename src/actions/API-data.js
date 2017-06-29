import * as types from './action-types';

export function getHotListSuccess(hotList) {
    return {
        type: types.GET_HOTLIST_SUCCESS,
        hotList
    };
}

export function getNewListSuccess(newList) {
    return {
        type: types.GET_NEWLIST_SUCCESS,
        newList
    };
}


export function getPopularListSuccess(popularList) {
    return {
        type: types.GET_POPULARLIST_SUCCESS,
        popularList
    };
}

export function getSearchSuccess(searchList) {
    return {
        type: types.GET_SEARCH_LIST_SUCCESS,
        searchList
    };
}

export function getSearchParamSuccess(searchString) {
    return {
        type: types.GET_SEARCH_LIST_PARAMS_SUCCESS,
        searchString
    };
}

export function getUserDetailSuccess(userDetail) {
    return {
        type: types.GET_USER_DETAIL_SUCCESS,
        userDetail
    };
}



export function getLatestByTagListSuccess(tagLatestList) {
    return {
        type: types.GET_TAG_LATEST_LIST_SUCCESS,
        tagLatestList
    };
}