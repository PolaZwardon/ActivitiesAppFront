export function eventHeader() {
    let event = JSON.parse(localStorage.getItem('event'));

    if (event) {
        return { 'Authorization': 'Bearer ' + event};
    } else {
        return {};
    }
}