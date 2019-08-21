export default (state = false, data) => {

    switch (data.type) {
        case 'ADMIN_MODE_CHANGED':
            return data.payload
        default:
            return state;
    }

}