export function get(path, params) {
    params = params && Object
        .entries(params)
        .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
        .join('&');

    path = path.replace(/^\/+/g, '');

    return fetch(`/api/${path}` + (params ? '?' + params : '')).then(response => {
            let total = response.headers.get('x-total-count'),
                json = response.json();

            return new Promise((resolve, reject) => {
               json.then(data =>{
                   let resp = {
                       data
                   };
                   total && (resp.total = parseInt(total, 10));
                   resolve(resp);
               }, error => {
                   reject(error);
               })
            });
        });
}

export function post(path, body) {
    return http(path, 'POST', body);
}

export function patch(path, body) {
    return http(path, 'PATCH', body);
}

function http(path, method, body) {

    path = path.replace(/^\/+/g, '');

    return fetch(`/api/${path}`, {
        method,
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(body)
    }).then(response => response.json());
}