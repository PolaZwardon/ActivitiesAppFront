import config from 'config';
import { eventHeader } from '../_helpers';

export const eventService = {
    getAll,
    getById,
    update,
    add,
    delete: _delete
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: eventHeader()
    };

    return fetch(`${config.apiUrl}/api/Event`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: eventHeader()
    };

    return fetch(`${config.apiUrl}/api/Event/${id}`, requestOptions).then(handleResponse);
}

function add(event) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
    };

    return fetch(`${config.apiUrl}/api/Event/`, requestOptions).then(handleResponse);
}

function update(event) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...eventHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
    };

    return fetch(`${config.apiUrl}/api/Event/${event.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: eventHeader()
    };

    return fetch(`${config.apiUrl}/api/Event/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}