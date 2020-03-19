import {eventConstants, userConstants} from '../_constants';
import {eventService, userService} from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const eventActions = {
    add,
    getAll,
    delete: _delete
};

function add(event) {
    return dispatch => {
        dispatch(request(event));

        eventService.add(event)
            .then(
                event => {
                    dispatch(success());
                    history.push('/events');
                    dispatch(alertActions.success('event added successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(event) { return { type: eventConstants.REGISTER_REQUEST, event } }
    function success(event) { return { type: eventConstants.REGISTER_SUCCESS, event } }
    function failure(error) { return { type: eventConstants.REGISTER_FAILURE, error } }
}


function getAll() {
    return dispatch => {
        dispatch(request());

        eventService.getAll()
            .then(
                events => dispatch(success(events)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: eventConstants.GETALL_REQUEST } }
    function success(events) { return { type: eventConstants.GETALL_SUCCESS, events } }
    function failure(error) { return { type: eventConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        eventService.delete(id)
            .then(
                event => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: eventConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: eventConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: eventConstants.DELETE_FAILURE, id, error } }
}