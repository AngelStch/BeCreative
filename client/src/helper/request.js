const request = (method, url, data, token) => {
    const options = {
        method,
        headers: {},
    };

    if (['POST', 'PUT', 'DELETE'].includes(method)) {
        options.headers = {
            'Content-Type': 'application/json'
        }
        if (data) {
            options.body = JSON.stringify(data);
        }
    }

    if (token) {
        options.headers['X-Authorization'] = token;
    }

    return fetch(url, options).then(handleRespond);
}

async function handleRespond(res) {
    let result = await res.json();
    if (!res.ok) {
        throw result;
    }

    return result;
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');