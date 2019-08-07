export default (state = null, data) => {
    switch (data.type) {
        case 'NEW_FILTER':
            return data.payload
        default:
            return state
    }
}