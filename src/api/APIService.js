import store from '../Store';
import * as APIFunction from '../actions/API-data';

export function getHotList(offset, limit) {
    return fetch("https://api.mixcloud.com/popular/hot/?limit=" + limit + "&offset=" + offset)
        .then(response => response.json())
        .then(json => {
            console.log("Hot List", json.data);
            store.dispatch(APIFunction.getHotListSuccess(json));
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
            return json;
        })
        .catch((err) => console.log(''));
}

export function searchByTag(tag) {
    return fetch("https://api.mixcloud.com/discover/" + tag + "/?metadata=1")
        .then(response => response.json())
        .then(json => {
            console.log("Tag Data", json.metadata.connections);

            store.dispatch(
                APIFunction.getLatestByTagListSuccess(
                    grabExtraData(
                        json.metadata.connections.latest
                    )
                )
            );

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
