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

export function getUserPlaylistSuccess(playlists) {
    return {
        type: types.GET_USER_PLAYLISTS_SUCCESS,
        playlists
    };
}

export function getUserCloudCastsSuccess(cloudcasts) {
    return {
        type: types.GET_USER_CLOUDCASTS_SUCCESS,
        cloudcasts
    };
}

export function getUserFeedSuccess(feed) {
    return {
        type: types.GET_USER_FEED_SUCCESS,
        feed
    };
}

export function getUserFollowersSuccess(followers) {
    return {
        type: types.GET_USER_FOLLOWERS_SUCCESS,
        followers
    };
}

export function getUserFollowingSuccess(following) {
    return {
        type: types.GET_USER_FOLLOWING_SUCCESS,
        following
    };
}

export function getUserFavoritesSuccess(favorites) {
    return {
        type: types.GET_USER_FAVORITES_SUCCESS,
        favorites
    };
}

export function getMixDetailSuccess(mixDetail) {
    return {
        type: types.GET_MIX_DETAIL_SUCCESS,
        mixDetail
    };
}

export function getMixListenerSuccess(listenerList) {
    return {
        type: types.GET_MIX_LISTENERS_SUCCESS,
        listenerList
    };
}

export function getMixSimilarSuccess(similarList) {
    return {
        type: types.GET_MIX_SIMILAR_SUCCESS,
        similarList
    };
}

export function getMixFavoriteSuccess(favoriteList) {
    return {
        type: types.GET_MIX_FAVORITE_SUCCESS,
        favoriteList
    };
}

export function getTagSearchSuccess(tagList) {
    return {
        type: types.GET_TAG_LIST_SUCCESS,
        tagList
    };
}


export function getTagDiscoverySuccess(tagDiscoverList) {
    return {
        type: types.GET_TAG_DISCOVER_LIST_SUCCESS,
        tagDiscoverList
    };
}

export function setLoadingStatus(status) {
    return {
        type: types.GET_LOADING_STATUS,
        status
    };
}