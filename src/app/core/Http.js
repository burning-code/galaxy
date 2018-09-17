import {error, httpError, ERROR_JSON_PARSE} from "./ErrorPool";

export function get(path, params) {
    params = params && Object
        .entries(params)
        .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
        .join('&');

    path = path.replace(/^\/+/g, '');

    return fetch(
        `/api/${path}` + (params ? '?' + params : '')
    ).then(response => processResponse(response));
}

export function post(path, body) {
    return http(path, 'POST', body);
}

export function patch(path, body) {
    return http(path, 'PATCH', body);
}

function http(path, method, body, headers = {}) {

    path = path.replace(/^\/+/g, '');

    return fetch(`/api/${path}`, {
        method,
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            ...headers
        },
        body: JSON.stringify(body)
    }).then(response =>  processResponse(response));
}

function processResponse(response) {
    if(response.ok) {
        let total = response.headers.get('x-total-count'),
            json = response.json();
        return new Promise((resolve, reject) => {
            json.then(data =>{
                let resp = {
                    data
                };
                total && (resp.total = parseInt(total, 10));
                resolve(resp);
            }, () => reject(error(ERROR_JSON_PARSE)))
        });
    } else {
        return Promise.reject(httpError(response.status));
    }
}