import {authHeader} from "../_helpers";
import config from "config";
import axios from 'axios';

export const usersEventsService = {
    getEventsByParticipantId,
    getParticipantsByEventId
};

function getParticipantsByEventId(EventId) {

    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/Event/getparticipants/${EventId}`, requestOptions).then(handleResponse);

}
function getEventsByParticipantId(participantId) {

/*    let state;
    state={
        eventList: {}
    };

 )
        .then(res => {
            let eventList = res.data;
            state={eventList};
        });*/
    return    axios.get(`http://localhost:4321/api/Event/geteventsbyparticipantsId/${participantId}`);
}





function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
