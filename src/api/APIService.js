import store from '../Store';
import * as APIFunction from '../actions/API-data';

var server = "https://api.mixcloud.com/";

export function getHotList(offset, limit) {

    store.dispatch(APIFunction.setLoadingStatus(true));

    return fetch(server + "popular/hot/?limit=" + limit + "&offset=" + offset)
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

    store.dispatch(APIFunction.setLoadingStatus(true));

    return fetch(server + "new/?limit=" + limit + "&offset=" + offset)
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

    store.dispatch(APIFunction.setLoadingStatus(true));

    return fetch(server + "popular/?limit=" + limit + "&offset=" + offset)
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

    store.dispatch(APIFunction.setLoadingStatus(true));

    return fetch("https://api.mixcloud.com/discover/" + tag + "/popular/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("Tag Data", json);

            store.dispatch(APIFunction.getTagDiscoverySuccess(json));
            store.dispatch(APIFunction.getSearchParamSuccess(tag));
            store.dispatch(APIFunction.setLoadingStatus(false));

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
    return fetch(server + id)
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
    return fetch(server + id + "/playlists/")
        .then(response => response.json())
        .then(json => {
            console.log("User Playlist Data", json);
            store.dispatch(APIFunction.getUserPlaylistSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getUserCloudCasts(id, offset, limit) {
    return fetch(server + id + "/cloudcasts?limit=" + limit + "&offset=" + offset)
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
    return fetch(server + id + "/feed/?limit=" + limit + "&offset=" + offset)
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
    return fetch(server + id + "/followers/?limit=" + limit + "&offset=" + offset)
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
    return fetch(server + id + "/following/?limit=" + limit + "&offset=" + offset)
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
    console.log(server + id + "/favorites/?limit=" + limit + "&offset=" + offset);
    return fetch(server + id + "/favorites/?limit=" + limit + "&offset=" + offset)
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
    return fetch(server + id + "/listens/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("User Listen Data", json);
            store.dispatch(APIFunction.getUserListensSuccess(json));
            store.dispatch(APIFunction.setLoadingStatus(false));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getUserComments(id, offset, limit) {
    console.log(server + id + "/comments/?limit=" + limit + "&offset=" + offset);
    return fetch(server + id + "/comments/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("User Comment Data", json);
            store.dispatch(APIFunction.getUserCommentsSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getMixDetail(id) {
    return fetch(server + id)
        .then(response => response.json())
        .then(json => {
            console.log("Mix Data", json);
            store.dispatch(APIFunction.getMixDetailSuccess(json));
            store.dispatch(APIFunction.setLoadingStatus(false));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getMixListeners(id, offset, limit) {
    console.log(server + id + "/listeners/?limit=" + limit + "&offset=" + offset);
    return fetch(server + id + "/listeners/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("Mix Listeners Data", json);
            store.dispatch(APIFunction.getMixListenerSuccess(json));
            store.dispatch(APIFunction.setLoadingStatus(false));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getMixSimilar(id) {
    console.log(server + id + "/similar/");
    return fetch(server + id + "/similar/")
        .then(response => response.json())
        .then(json => {
            console.log("Mix Similar/Suggested Data", json);
            store.dispatch(APIFunction.getMixSimilarSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getMixFavorite(id, offset, limit) {

    console.log(server + id + "/favorites/?limit=" + limit + "&offset=" + offset);
    return fetch(server + id + "/favorites/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("Mix Favorites Data", json);
            store.dispatch(APIFunction.getMixFavoriteSuccess(json));
            store.dispatch(APIFunction.setLoadingStatus(false));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getMixComments(id, offset, limit) {
    console.log(server + id + "/comments/?limit=" + limit + "&offset=" + offset);
    return fetch(server + id + "/comments/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("Mix Comments Data", json);
            store.dispatch(APIFunction.getMixCommentsSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getTagSearch(tag, offset, limit) {

    store.dispatch(APIFunction.setLoadingStatus(true));

    return fetch("https://api.mixcloud.com/discover/" + tag + "/popular/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("TagSearch Data", json);
            store.dispatch(APIFunction.getTagSearchSuccess(json));
            store.dispatch(APIFunction.setLoadingStatus(false));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getMixListByCity(city, offset, limit) {

    store.dispatch(APIFunction.setLoadingStatus(true));

    console.log(server + "discover/city:" + city + "/popular/?limit=" + limit + "&offset=" + offset);
    return fetch(server + "discover/city:" + city + "/popular/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("Mix By City Data", json.data);
            store.dispatch(APIFunction.getMixByCitySuccess(json));
            store.dispatch(APIFunction.getSearchParamSuccess(city));
            store.dispatch(APIFunction.setLoadingStatus(false));
            return json;
        })
        .catch((err) => console.log(''));
}

export function goBack() {
    window.history.back();
}
