import store from '../Store';
import * as APIFunction from '../actions/API-data';

export function getHotList(offset, limit) {
    return fetch("https://api.mixcloud.com/popular/hot/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("Hot List", json.data);
            store.dispatch(APIFunction.getHotListSuccess(json));
            store.dispatch(APIFunction.setLoadingStatus(false));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getNewList(offset, limit) {
    return fetch("https://api.mixcloud.com/new/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("New List", json.data);
            store.dispatch(APIFunction.getNewListSuccess(json));
            store.dispatch(APIFunction.setLoadingStatus(false));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getPopularList(offset, limit) {
    return fetch("https://api.mixcloud.com/popular/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("Popular List", json.data);
            store.dispatch(APIFunction.getPopularListSuccess(json));
            store.dispatch(APIFunction.setLoadingStatus(false));
            return json;
        })
        .catch((err) => console.log(''));
}

export function searchByTag(tag, offset, limit) {
    return fetch("https://api.mixcloud.com/discover/" + tag + "/popular/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("Tag Data", json);

            store.dispatch(APIFunction.getTagDiscoverySuccess(json));
            store.dispatch(APIFunction.getSearchParamSuccess(tag));

            return json;
        })
        .catch((err) => console.log(''));
}

export function searchByParams(params, offset, limit) {
    return fetch("https://api.mixcloud.com/search/?" + params + "&limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("Search Data", json);
            store.dispatch(APIFunction.getSearchSuccess(json));
            store.dispatch(APIFunction.getSearchParamSuccess(params));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getUserDetail(id) {
    return fetch("https://api.mixcloud.com/" + id)
        .then(response => response.json())
        .then(json => {
            console.log("User Data", json);
            store.dispatch(APIFunction.getUserDetailSuccess(json));
            store.dispatch(APIFunction.setLoadingStatus(false));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getUserPlaylists(id) {
    return fetch("https://api.mixcloud.com/" + id + "/playlists/")
        .then(response => response.json())
        .then(json => {
            console.log("User Playlist Data", json);
            store.dispatch(APIFunction.getUserPlaylistSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getUserCloudCasts(id, offset, limit) {
    return fetch("https://api.mixcloud.com/" + id + "/cloudcasts?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("User Cloudcast Data", json);
            store.dispatch(APIFunction.getUserCloudCastsSuccess(json));
            store.dispatch(APIFunction.setLoadingStatus(false));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getUserFeed(id, offset, limit) {
    return fetch("https://api.mixcloud.com/" + id + "/feed/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("User Feed Data", json);
            store.dispatch(APIFunction.getUserFeedSuccess(json));
            store.dispatch(APIFunction.setLoadingStatus(false));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getUserFollowers(id, offset, limit) {
    return fetch("https://api.mixcloud.com/" + id + "/followers/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("User Follower Data", json);
            store.dispatch(APIFunction.getUserFollowersSuccess(json));
            store.dispatch(APIFunction.setLoadingStatus(false));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getUserFollowing(id, offset, limit) {
    return fetch("https://api.mixcloud.com/" + id + "/following/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("User Following Data", json);
            store.dispatch(APIFunction.getUserFollowingSuccess(json));
            store.dispatch(APIFunction.setLoadingStatus(false));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getUserFavorites(id, offset, limit) {
    return fetch("https://api.mixcloud.com/" + id + "/favorites/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("User Favorites Data", json);
            store.dispatch(APIFunction.getUserFavoritesSuccess(json));
            store.dispatch(APIFunction.setLoadingStatus(false));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getUserListensList(id, offset, limit) {
    return fetch("https://api.mixcloud.com/" + id + "/listens/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("User Listen Data", json);
            store.dispatch(APIFunction.getUserListensSuccess(json));
            store.dispatch(APIFunction.setLoadingStatus(false));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getMixDetail(id) {
    return fetch("https://api.mixcloud.com/" + id)
        .then(response => response.json())
        .then(json => {
            console.log("Mix Data", json);
            store.dispatch(APIFunction.getMixDetailSuccess(json));
            store.dispatch(APIFunction.setLoadingStatus(false));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getMixListeners(id) {
    console.log("https://api.mixcloud.com/" + id + "/listeners/");
    return fetch("https://api.mixcloud.com/" + id + "/listeners/?limit=50")
        .then(response => response.json())
        .then(json => {
            console.log("Mix Listeners Data", json);
            store.dispatch(APIFunction.getMixListenerSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getMixSimilar(id) {
    console.log("https://api.mixcloud.com/" + id + "/similar/");
    return fetch("https://api.mixcloud.com/" + id + "/similar/?limit=50")
        .then(response => response.json())
        .then(json => {
            console.log("Mix Similar/Suggested Data", json);
            store.dispatch(APIFunction.getMixSimilarSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getMixFavorite(id) {
    console.log("https://api.mixcloud.com/" + id + "/favorites/");
    return fetch("https://api.mixcloud.com/" + id + "/favorites/?limit=20")
        .then(response => response.json())
        .then(json => {
            console.log("Mix Favorites Data", json);
            store.dispatch(APIFunction.getMixFavoriteSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getMixComments(id) {
    console.log("https://api.mixcloud.com/" + id + "/comments/");
    return fetch("https://api.mixcloud.com/" + id + "/comments/?limit=20")
        .then(response => response.json())
        .then(json => {
            console.log("Mix Comments Data", json);
            store.dispatch(APIFunction.getMixCommentsSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getTagSearch(tag, offset, limit) {
    return fetch("https://api.mixcloud.com/discover/" + tag + "/popular/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("TagSearch Data", json);
            store.dispatch(APIFunction.getTagSearchSuccess(json));
            //store.dispatch(APIFunction.getSearchParamSuccess(params));
            return json;
        })
        .catch((err) => console.log(''));
}


export function grabExtraData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log("Extra Data", json.data);
            return json;
        })
        .catch((err) => console.log(''));
}

export function goBack() {
    window.history.back();
}
