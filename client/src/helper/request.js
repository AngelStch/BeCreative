const request = (method, url, data, token) => {
    const options = {
        method,
        headers: {},
    };

    if (['POST', 'PUT', 'DELETE'].includes(method)) {
        options.headers = {
            'Content-Type': 'application/json',
        };

        if (data) {
            options.body = JSON.stringify(data);
        }
    }

    if (token) {
        options.headers['X-Authorization'] = token;
    }

    return fetch(url, options).then(handleRespond);
};

async function handleRespond(res) {
    const contentType = res.headers.get('content-type');

    if (res.ok) {
        if (contentType && contentType.includes('application/json')) {
            try {
                const result = await res.json();
                return result;
            } catch (error) {
                console.error('Error parsing JSON response:', error);
                throw new Error('Failed to parse JSON response');
            }
        } else {
            return { message: 'Request successful', status: res.status };
        }
    } else {
        if (contentType && contentType.includes('application/json')) {
            try {
                const errorResult = await res.json();
                throw errorResult;
            } catch (error) {
                console.error('Error parsing JSON error response:', error);
                throw new Error('Failed to parse JSON error response');
            }
        } else {
            throw { status: res.status, message: res.statusText };
        }
    }
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');